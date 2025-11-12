from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import requests
from dotenv import load_dotenv
import sys
import cohere
import json

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Get Cohere API key from environment variable or use default
COHERE_API_KEY = os.getenv('COHERE_API_KEY') or 'vzdFCPOwGEN5YjqS23zRWZEH55Lvf23gY3Rg8myh'

# Initialize Cohere client
co = None
try:
    if COHERE_API_KEY:
        co = cohere.Client(api_key=COHERE_API_KEY)
        print("✅ Cohere client initialized successfully")
        print("   API key configured. Use /test-api endpoint to verify it works.")
except Exception as e:
    print(f"⚠️  Warning: Could not initialize Cohere client: {e}")
    print(f"   Error type: {type(e).__name__}")
    print("   The server will start but chat may not work properly.")
    co = None

# Check if API key is set
if not COHERE_API_KEY:
    print("⚠️  WARNING: COHERE_API_KEY not found in environment variables!")
    print("   Please create a .env file with: COHERE_API_KEY=your_key_here")
    print("   The server will start but chat functionality will be limited.\n")

def try_rest_api_fallback(user_message, system_prompt):
    """Fallback to REST API if SDK fails"""
    try:
        url = "https://api.cohere.ai/v1/chat"
        headers = {
            "Authorization": f"Bearer {COHERE_API_KEY}",
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
        
        models_to_try = ['command-nightly', 'command-r-08-2024', 'command-r7b-12-2024', 'command-a-03-2025']
        
        for model_name in models_to_try:
            try:
                payload = {
                    "message": user_message,
                    "model": model_name,
                    "preamble": system_prompt,
                    "temperature": 0.7,
                    "max_tokens": 1000,
                    "chat_history": []
                }
                
                response = requests.post(url, headers=headers, json=payload, timeout=30)
                
                if response.status_code == 200:
                    result = response.json()
                    ai_response = result.get('text', '')
                    if ai_response:
                        print(f"✅ REST API success with model: {model_name}")
                        return jsonify({'response': ai_response}), 200
                elif response.status_code == 401:
                    return jsonify({
                        'error': 'Unauthorized',
                        'response': 'Invalid API key. Please check your Cohere API key.'
                    }), 401
                else:
                    print(f"❌ REST API model {model_name} failed: {response.status_code}")
                    error_data = response.json() if response.text else {}
                    print(f"   Error: {error_data}")
                    continue
            except Exception as e:
                print(f"❌ REST API model {model_name} error: {str(e)}")
                continue
        
        return jsonify({
            'error': 'All API methods failed',
            'response': 'Unable to connect to AI service. Please check your API key and try again.'
        }), 500
        
    except Exception as e:
        print(f"REST API fallback error: {str(e)}")
        return jsonify({
            'error': str(e),
            'response': 'An error occurred while trying to connect to the AI service.'
        }), 500

@app.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({'status': 'ok', 'message': 'Backend server is running'}), 200

@app.route('/test-api', methods=['GET'])
def test_api():
    """Test API key endpoint"""
    if not COHERE_API_KEY:
        return jsonify({
            'status': 'error',
            'message': 'API key not configured'
        }), 500
    
    if not co:
        return jsonify({
            'status': 'error',
            'message': 'Cohere client not initialized'
        }), 500
    
    try:
        # Test with a simple message
        response = co.chat(message="Hello", model="command-nightly", max_tokens=10)
        return jsonify({
            'status': 'success',
            'message': 'API key is working!',
            'test_response': response.text[:50]
        }), 200
    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': f'API test failed: {str(e)}'
        }), 500

@app.route('/chat', methods=['POST'])
def chat():
    """Handle chat messages and interact with Cohere AI"""
    data = request.get_json()
    user_message = data.get('message', '') if data else ''
    
    if not user_message:
        return jsonify({'error': 'Message is required'}), 400
    
    if not COHERE_API_KEY or not co:
        return jsonify({
            'error': 'Cohere API key not configured. Please set COHERE_API_KEY in your .env file.'
        }), 500
    
    # Prepare the system prompt for college helpdesk assistant
    system_prompt = """You are an AI College HelpDesk assistant for Integral University, Lucknow. Your role is to help students and prospective students with questions about:
- Integral University admissions and application processes (IUET, JEE, NEET, CUET)
- Financial aid, scholarships, and tuition fees
- Campus life, housing, hostels, and student services
- Academic programs, courses, and eligibility requirements (B.Tech, MBA, BCA, MCA, B.Pharma, etc.)
- Placement records, companies, and internship opportunities
- Campus facilities (library, gym, canteen, medical facilities, etc.)
- Student resources and support services

Be friendly, helpful, and provide accurate information about Integral University. If you don't know something specific, admit it and suggest they contact the admissions office at +91-9335177775 or email admissions@iul.ac.in. Keep responses concise but informative."""
    
    try:
        # Try different models in order of preference (updated for 2025)
        models_to_try = ['command-nightly', 'command-r-08-2024', 'command-r7b-12-2024', 'command-a-03-2025', 'command-a-reasoning-08-2025']
        ai_response = None
        last_error = None
        
        for model_name in models_to_try:
            try:
                print(f"Trying model: {model_name}")
                response = co.chat(
                    message=user_message,
                    model=model_name,
                    preamble=system_prompt,
                    temperature=0.7,
                    max_tokens=1000,
                    chat_history=[]
                )
                ai_response = response.text
                print(f"✅ Success with model: {model_name}")
                break
            except cohere.CohereError as e:
                last_error = e
                error_str = str(e)
                print(f"❌ Model {model_name} failed: {error_str}")
                # If it's an authentication error, don't try other models
                if 'unauthorized' in error_str.lower() or 'authentication' in error_str.lower() or 'api key' in error_str.lower():
                    raise e
                continue
            except Exception as e:
                last_error = e
                print(f"❌ Model {model_name} error: {str(e)}")
                continue
        
        if ai_response:
            return jsonify({'response': ai_response}), 200
        else:
            # If SDK failed, try REST API as fallback
            print("⚠️  SDK failed, trying REST API fallback...")
            return try_rest_api_fallback(user_message, system_prompt)
        
    except cohere.CohereError as e:
        error_msg = str(e)
        error_type = type(e).__name__
        print(f"Cohere API Error ({error_type}): {error_msg}")
        
        # Provide user-friendly error messages
        if 'unauthorized' in error_msg.lower() or 'authentication' in error_msg.lower() or 'api key' in error_msg.lower():
            user_msg = "Invalid API key. Please check your Cohere API key."
        elif 'rate limit' in error_msg.lower() or 'quota' in error_msg.lower():
            user_msg = "API rate limit exceeded. Please try again later."
        elif 'model' in error_msg.lower() and 'not found' in error_msg.lower():
            user_msg = "The selected AI model is not available. Please contact support."
        else:
            user_msg = f"API error: {error_msg}"
        
        return jsonify({
            'error': error_msg,
            'response': f'Sorry, I encountered an error: {user_msg}'
        }), 500
    except Exception as e:
        error_msg = str(e)
        error_type = type(e).__name__
        print(f"Unexpected error ({error_type}): {error_msg}")
        import traceback
        traceback.print_exc()
        return jsonify({
            'error': error_msg,
            'response': f'An unexpected error occurred: {error_msg}. Please check the server logs for details.'
        }), 500

if __name__ == '__main__':
    print("=" * 50)
    print("🚀 Starting AI College HelpDesk Backend Server...")
    print("=" * 50)
    
    if COHERE_API_KEY:
        print("✅ Cohere API key found")
    else:
        print("❌ Cohere API key NOT found")
        print("   Create a .env file with: COHERE_API_KEY=your_key_here")
    
    print("\n📡 Server running on: http://127.0.0.1:5000")
    print("💡 Press CTRL+C to stop the server\n")
    print("=" * 50)
    
    try:
        app.run(debug=True, host='127.0.0.1', port=5000)
    except OSError as e:
        if "Address already in use" in str(e) or "address is already in use" in str(e):
            print("\n❌ ERROR: Port 5000 is already in use!")
            print("   Another process is using port 5000.")
            print("   Solutions:")
            print("   1. Stop the other process using port 5000")
            print("   2. Or change the port in app.py (line 102)")
            sys.exit(1)
        else:
            raise

