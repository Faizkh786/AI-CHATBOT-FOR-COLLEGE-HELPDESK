@echo off
echo ========================================
echo AI College HelpDesk - Starting Server
echo ========================================
echo.

REM Check if Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Python is not installed or not in PATH
    echo Please install Python from https://www.python.org/
    pause
    exit /b 1
)

REM Check if .env file exists
if not exist .env (
    echo WARNING: .env file not found!
    echo.
    echo Please create a .env file with your Cohere API key:
    echo COHERE_API_KEY=your_api_key_here
    echo.
    echo Get your API key from: https://dashboard.cohere.com/api-keys
    echo.
    pause
)

REM Check if requirements are installed
echo Checking dependencies...
pip show flask >nul 2>&1
if errorlevel 1 (
    echo Installing required packages...
    pip install -r requirements.txt
    if errorlevel 1 (
        echo ERROR: Failed to install dependencies
        pause
        exit /b 1
    )
)

echo.
echo Starting Flask server...
echo Press CTRL+C to stop the server
echo.
python app.py

pause

