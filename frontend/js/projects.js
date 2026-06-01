// ===== PROJECT DATA =====
// เพิ่ม project ใหม่ที่นี่ได้เลย!
const projects = [
  {
    id: 1,
    title: "Thai PDF Q&A Bot",
    description: "RAG-based chatbot ที่ตอบคำถามจากเอกสาร PDF ภาษาไทย ใช้ LangChain + ChromaDB",
    tags: ["LangChain", "RAG", "ChromaDB", "Streamlit"],
    status: "In Progress",
    statusColor: "yellow",
    github: "#",
    demo: "#",
    icon: "📄"
  },
  {
    id: 2,
    title: "Thai Sentiment Analysis",
    description: "วิเคราะห์ sentiment ข้อความภาษาไทยด้วย NLP + PyThaiNLP + HuggingFace Transformers",
    tags: ["PyThaiNLP", "HuggingFace", "Python", "NLP"],
    status: "Completed",
    statusColor: "green",
    github: "#",
    demo: "#",
    icon: "🧠"
  },
  {
    id: 3,
    title: "Data Analysis Agent",
    description: "AI Agent ที่รับ CSV แล้ววิเคราะห์และสรุป insight ให้อัตโนมัติ ใช้ Claude API + Function Calling",
    tags: ["Claude API", "Pandas", "Agent", "FastAPI"],
    status: "In Progress",
    statusColor: "yellow",
    github: "#",
    demo: "#",
    icon: "📊"
  },
  {
    id: 4,
    title: "Export Rubber Forecasting",
    description: "Time Series Analysis พยากรณ์ปริมาณส่งออกยางพาราของไทยในช่วง COVID-19",
    tags: ["R", "Time Series", "ARIMA", "Statistics"],
    status: "Completed",
    statusColor: "green",
    github: "#",
    demo: null,
    icon: "📈"
  }
];

function renderProjects() {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  container.innerHTML = projects.map(p => `
    <div class="project-card fade-in-up">
      <div class="project-card-header">
        <span class="project-icon">${p.icon}</span>
        <span class="project-status status-${p.statusColor}">${p.status}</span>
      </div>
      <h3 class="project-title">${p.title}</h3>
      <p class="project-desc">${p.description}</p>
      <div class="project-tags">
        ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
      <div class="project-links">
        <a href="${p.github}" class="btn-outline">⌥ GitHub</a>
        ${p.demo ? `<a href="${p.demo}" class="btn-filled">▶ Demo</a>` : ''}
      </div>
    </div>
  `).join('');
}
