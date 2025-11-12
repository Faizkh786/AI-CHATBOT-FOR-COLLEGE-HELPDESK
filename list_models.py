"""
List available Cohere models
"""
import cohere
import requests
import json

API_KEY = 'vzdFCPOwGEN5YjqS23zRWZEH55Lvf23gY3Rg8myh'

print("=" * 50)
print("Checking Available Cohere Models")
print("=" * 50)

# Try to get models from API
try:
    url = "https://api.cohere.ai/v1/models"
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Accept": "application/json"
    }
    
    response = requests.get(url, headers=headers, timeout=10)
    
    if response.status_code == 200:
        models_data = response.json()
        print("Available models:")
        if 'models' in models_data:
            for model in models_data['models']:
                print(f"  - {model.get('name', 'Unknown')}")
        else:
            print(json.dumps(models_data, indent=2))
    else:
        print(f"Error: {response.status_code}")
        print(response.text)
except Exception as e:
    print(f"Error getting models: {e}")

print()
print("Trying common model names...")

# Try common model variations
common_models = [
    'command',
    'command-light', 
    'command-nightly',
    'command-r',
    'command-r-plus',
    'command-r7',
    'command-r7-plus',
    'command-r8',
    'command-r8-plus',
    'command-light-nightly',
    'base',
    'base-light'
]

co = cohere.Client(api_key=API_KEY)

for model in common_models:
    try:
        response = co.chat(
            message="test",
            model=model,
            max_tokens=5
        )
        print(f"[OK] {model} - WORKS!")
        break
    except Exception as e:
        error_str = str(e)
        if 'not found' not in error_str and 'removed' not in error_str:
            print(f"[?] {model} - {error_str[:80]}")




