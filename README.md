# Portfolio AI Chatbot

Personal portfolio website for **Apirattapon Pimpa (โชกุน)** — AI Engineer & Data Analyst, featuring an AI-powered chatbot that can answer questions about my skills, projects, and experience.

## Features

- Dark-themed responsive portfolio website
- Interactive sidebar navigation
- Dynamic project cards rendered from JavaScript
- Smooth animations and hover effects
- AI chatbot powered by Claude API
- FastAPI backend with CORS support

## Tech Stack

**Frontend:** HTML5, CSS3 (CSS Variables), Vanilla JavaScript  
**Backend:** Python, FastAPI, Uvicorn  
**AI:** Anthropic Claude API  
**Fonts:** Space Mono, DM Sans (Google Fonts)

## Project Structure

```
portfolio-ai-chatbot/
├── frontend/
│   ├── index.html
│   ├── assets/
│   │   ├── profile.jpg
│   │   └── favicon.ico
│   ├── css/
│   │   ├── main.css
│   │   ├── sidebar.css
│   │   ├── cards.css
│   │   ├── animations.css
│   │   └── chatbot.css
│   ├── js/
│   │   ├── main.js
│   │   ├── projects.js
│   │   └── chatbot-ui.js
│   └── sections/
│       ├── about.html
│       ├── skills.html
│       ├── experience.html
│       └── projects.html
├── backend/
│   ├── app.py
│   ├── services/
│   │   └── claude_service.py
│   ├── requirements.txt
│   └── .env.example
├── README.md
├── .gitignore
└── LICENSE
```

## Architecture

```
Browser (frontend/)
    │
    │  POST /chat  { message: "..." }
    ▼
FastAPI (backend/app.py)
    │
    │  claude_service.chat()
    ▼
Anthropic Claude API
    │
    │  response
    ▼
FastAPI → JSON { reply: "..." } → Browser
```

## How to Run Locally

### Frontend

Open `frontend/index.html` in your browser, or use a local server:

```bash
cd frontend
python -m http.server 5500
```

### Backend

```bash
cd backend
pip install -r requirements.txt
cp .env.example .env
# Edit .env and add your ANTHROPIC_API_KEY
uvicorn app:app --reload
```

The API will be available at `http://127.0.0.1:8000`

## API Endpoints

| Method | Endpoint  | Description                    |
|--------|-----------|--------------------------------|
| GET    | `/`       | API status message             |
| GET    | `/health` | Health check                   |
| POST   | `/chat`   | Send message, get AI response  |

### POST /chat

**Request:**
```json
{ "message": "โชกุนทำโปรเจกต์อะไรบ้าง?" }
```

**Response:**
```json
{ "reply": "โชกุนทำ 4 โปรเจกต์หลัก ได้แก่..." }
```

## Screenshots

> Coming soon

## Future Improvements

- Add conversation history (multi-turn chat)
- Deploy frontend to Vercel / GitHub Pages
- Deploy backend to Railway / Render
- Add typing indicator animation
- Add profile image and favicon
- Add more projects as portfolio grows
