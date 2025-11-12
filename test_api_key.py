"""
Test script to verify Cohere API key is working
"""
import cohere
import sys
import os

# Set UTF-8 encoding for Windows console
if sys.platform == 'win32':
    os.system('chcp 65001 >nul 2>&1')

# Your API key
API_KEY = 'vzdFCPOwGEN5YjqS23zRWZEH55Lvf23gY3Rg8myh'

print("=" * 50)
print("Testing Cohere API Key")
print("=" * 50)
print(f"API Key: {API_KEY[:20]}...{API_KEY[-10:]}")
print()

try:
    # Initialize Cohere client
    print("1. Initializing Cohere client...")
    co = cohere.Client(api_key=API_KEY)
    print("   [OK] Client initialized successfully")
    print()
    
    # Test with different models (updated for 2025)
    models_to_test = ['command-nightly', 'command-r-08-2024', 'command-r7b-12-2024', 'command-a-03-2025', 'command-a-reasoning-08-2025']
    success = False
    
    for model in models_to_test:
        try:
            print(f"2. Testing model: {model}")
            response = co.chat(
                message="Hello, say 'API test successful' if you can read this.",
                model=model,
                max_tokens=50,
                temperature=0.7
            )
            print(f"   [SUCCESS] {model} - Working!")
            print(f"   Response: {response.text[:100]}")
            print()
            success = True
            break  # If one works, we're good
        except cohere.CohereError as e:
            error_msg = str(e)
            print(f"   [FAILED] {model} - {error_msg}")
            if 'unauthorized' in error_msg.lower() or 'api key' in error_msg.lower() or '401' in error_msg:
                print("   [WARNING] This looks like an API key authentication error")
                print("   [WARNING] The API key might be invalid or expired")
                print()
                continue
            elif '402' in error_msg or 'payment' in error_msg.lower() or 'quota' in error_msg.lower():
                print("   [WARNING] Payment or quota issue detected")
                print()
                continue
            continue
        except Exception as e:
            print(f"   [ERROR] {model} - {str(e)}")
            continue
    
    if success:
        print("=" * 50)
        print("[SUCCESS] API KEY IS WORKING!")
        print("=" * 50)
        sys.exit(0)
    else:
        print("=" * 50)
        print("[FAILED] All models failed to respond")
        print("=" * 50)
        sys.exit(1)
    
except Exception as e:
    print("=" * 50)
    print("[FAILED] API KEY TEST FAILED")
    print("=" * 50)
    print(f"Error: {str(e)}")
    print(f"Error type: {type(e).__name__}")
    print()
    print("Possible issues:")
    print("1. API key is invalid or expired")
    print("2. API key doesn't have the right permissions")
    print("3. Network connection issues")
    print("4. Cohere service is down")
    print("5. Account quota exceeded or payment required")
    sys.exit(1)

