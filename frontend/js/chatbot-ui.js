// ===== CHATBOT UI =====
const chatToggle = document.getElementById('chatToggle');
const chatPanel = document.getElementById('chatbotPanel');
const chatClose = document.getElementById('chatClose');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');
const chatMessages = document.getElementById('chatMessages');

function openChat() { chatPanel.classList.add('open'); }
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
}

async function sendMessage() {
  const text = chatInput.value.trim();
  if (!text) return;
  chatInput.value = '';
  addMessage(text, 'user');
  addMessage('กำลังคิด...', 'bot');

  try {
    const res = await fetch('http://localhost:8000/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: text })
    });
    const data = await res.json();
    chatMessages.lastChild.querySelector('p').textContent = data.reply;
  } catch {
    chatMessages.lastChild.querySelector('p').textContent =
      'Backend ยังไม่ได้เปิดครับ (Step 6-7)';
  }
}

chatSend?.addEventListener('click', sendMessage);
chatInput?.addEventListener('keypress', e => {
  if (e.key === 'Enter') sendMessage();
});
