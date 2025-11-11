# AI College HelpDesk

A modern, animated chatbot interface for college assistance with FAQ management and Cohere AI integration.

## Features

- 🤖 **AI-Powered Chatbot**: Real-time responses using Cohere AI
- ❓ **FAQ Management**: Add, edit, and delete frequently asked questions
- 🎨 **Beautiful Animations**: Smooth, modern UI with CSS animations
- 💾 **Local Storage**: FAQs are saved in browser localStorage
- 🎯 **Quick Topics**: One-click buttons for common questions
- 📱 **Responsive Design**: Works on desktop and mobile devices

## Setup Instructions

### 1. Install Python Dependencies

```bash
pip install -r requirements.txt
```

### 2. Get Cohere API Key

1. Visit [Cohere Dashboard](https://dashboard.cohere.com/api-keys)
2. Sign up or log in
3. Create a new API key
4. Copy your API key

### 3. Configure API Key

1. Copy `.env.example` to `.env`:
   ```bash
   copy .env.example .env
   ```
   (On Linux/Mac: `cp .env.example .env`)

2. Open `.env` and replace `your_cohere_api_key_here` with your actual API key:
   ```
   COHERE_API_KEY=your_actual_api_key_here
   ```

### 4. Start the Backend Server

```bash
python app.py
```

The server will start on `http://127.0.0.1:5000`

### 5. Open the Frontend

Open `index.html` in your web browser, or use a local server:

```bash
# Using Python's built-in server
python -m http.server 5500
```

Then navigate to `http://127.0.0.1:5500`

## Usage

### Chatting with AI

1. Type your question in the input field
2. Click "SEND" or press Enter
3. The AI will respond using Cohere's API

### Managing FAQs

1. Click the "Add FAQ" button
2. Enter a question and answer
3. Click "Save FAQ"
4. FAQs are automatically checked before sending to AI
5. Edit or delete FAQs using the action buttons

### Quick Topics

Click any of the topic buttons (Admission, Financial Aid, etc.) to quickly ask about that topic.

## File Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # CSS styles with animations
├── script.js           # JavaScript for chat and FAQ management
├── app.py             # Flask backend server
├── requirements.txt   # Python dependencies
├── .env.example       # Example environment file
└── README.md          # This file
```

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Python Flask
- **AI**: Cohere API
- **Storage**: Browser localStorage (for FAQs)

## Notes

- The backend server must be running for AI chat to work
- FAQs are stored locally in your browser
- The chatbot checks FAQs first before querying the AI
- Make sure your Cohere API key has sufficient credits

## Troubleshooting

- **"Backend server is not running"**: Make sure `python app.py` is running
- **API errors**: Verify your Cohere API key is correct in `.env`
- **CORS errors**: The Flask app has CORS enabled, but make sure the backend is running on port 5000

