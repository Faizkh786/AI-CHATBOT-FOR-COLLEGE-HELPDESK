#!/bin/bash

echo "========================================"
echo "AI College HelpDesk - Starting Server"
echo "========================================"
echo ""

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "ERROR: Python 3 is not installed"
    echo "Please install Python 3 from https://www.python.org/"
    exit 1
fi

# Check if .env file exists
if [ ! -f .env ]; then
    echo "WARNING: .env file not found!"
    echo ""
    echo "Please create a .env file with your Cohere API key:"
    echo "COHERE_API_KEY=your_api_key_here"
    echo ""
    echo "Get your API key from: https://dashboard.cohere.com/api-keys"
    echo ""
    read -p "Press Enter to continue anyway..."
fi

# Check if virtual environment exists, create if not
if [ ! -d "venv" ]; then
    echo "Creating virtual environment..."
    python3 -m venv venv
fi

# Activate virtual environment
echo "Activating virtual environment..."
source venv/bin/activate

# Install/upgrade dependencies
echo "Checking dependencies..."
pip install -q -r requirements.txt

echo ""
echo "Starting Flask server..."
echo "Press CTRL+C to stop the server"
echo ""
python app.py

