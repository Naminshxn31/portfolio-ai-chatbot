from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
import os

load_dotenv()

from services.claude_service import chat

app = FastAPI(title="Portfolio AI Chatbot")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


class ChatRequest(BaseModel):
    message: str


@app.get("/")
def root():
    mode = "Gemini API" if os.getenv("GEMINI_API_KEY") else "Mock (ไม่ต้องใช้ API key)"
    return {"message": "Portfolio AI Chatbot API is running", "mode": mode}


@app.post("/chat")
def chat_endpoint(req: ChatRequest):
    if not req.message.strip():
        raise HTTPException(status_code=400, detail="Message cannot be empty")
    try:
        reply = chat(req.message)
        return {"reply": reply}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"AI service error: {str(e)}")


@app.get("/health")
def health():
    has_key = bool(os.getenv("GEMINI_API_KEY"))
    return {"status": "ok", "mode": "gemini" if has_key else "mock"}
