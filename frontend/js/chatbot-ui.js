// ===== CHATBOT UI =====
const chatToggle = document.getElementById('chatToggle');
const chatPanel = document.getElementById('chatbotPanel');
const chatClose = document.getElementById('chatClose');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');
const chatMessages = document.getElementById('chatMessages');

function openChat() { chatPanel.classList.add('open'); chatInput?.focus(); }
function closeChat() { chatPanel.classList.remove('open'); }

chatToggle?.addEventListener('click', openChat);
chatClose?.addEventListener('click', closeChat);

function addMessage(text, role) {
  const div = document.createElement('div');
  div.className = `chat-msg ${role}`;
  const p = document.createElement('p');
  p.textContent = text;
  div.appendChild(p);
  chatMessages.appendChild(div);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return div;
}

let isSending = false;

async function sendMessage() {
  const text = chatInput.value.trim();
  if (!text || isSending) return;

  isSending = true;
  chatInput.value = '';
  chatSend.disabled = true;

  addMessage(text, 'user');
  const botMsg = addMessage('...', 'bot');
  botMsg.querySelector('p').classList.add('typing');

  try {
    // Priority: BACKEND_URL (deploy) → /api/chat (Docker) → localhost (local dev)
    const BACKEND_URL = 'https://portfolio-ai-chatbot-production.up.railway.app';
    const apiUrl = BACKEND_URL !== 'REPLACE_WITH_RAILWAY_URL'
      ? `${BACKEND_URL}/chat`
      : (window.location.port === '80' || window.location.port === '')
        ? '/api/chat'
        : 'http://localhost:8000/chat';

    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: text })
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.detail || `Error ${res.status}`);
    }

    const data = await res.json();
    botMsg.querySelector('p').textContent = data.reply;
  } catch (e) {
    botMsg.querySelector('p').textContent =
      e.message === 'Failed to fetch'
        ? 'Backend ยังไม่ได้เปิด — รัน uvicorn app:app --reload ใน backend/'
        : `Error: ${e.message}`;
  } finally {
    botMsg.querySelector('p').classList.remove('typing');
    isSending = false;
    chatSend.disabled = false;
  }
}

chatSend?.addEventListener('click', sendMessage);
chatInput?.addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});
