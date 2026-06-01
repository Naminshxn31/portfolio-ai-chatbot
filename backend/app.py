from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv

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
    return {"message": "Portfolio AI Chatbot API is running"}


@app.post("/chat")
def chat_endpoint(req: ChatRequest):
    reply = chat(req.message)
    return {"reply": reply}


@app.get("/health")
def health():
    return {"status": "ok"}
