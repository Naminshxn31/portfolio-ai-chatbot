// ===== PROJECT DATA =====
// เพิ่ม project ใหม่ที่นี่ได้เลย!
const projects = [
  {
    id: 1,
    title: "Thai Job Market AI Agent",
    description: "AI-powered CV analyzer & job matcher สำหรับตลาดงาน IT/Data ในไทย อัพโหลด PDF แล้ว AI จะวิเคราะห์ skills, จับคู่งานจาก JobsDB พร้อม match score 0-100% และ skill gap detection",
    tags: ["Gemini API", "RAG", "ChromaDB", "FastAPI", "Streamlit", "Docker"],
    type: "Personal Project",
    github: "https://github.com/Naminshxn31/thai-job-agent",
    icon: "🤖"
  },
  {
    id: 2,
    title: "Procurement ML Pipeline",
    description: "Production-grade ML pipeline สำหรับ procurement analytics ครอบคลุม spend classification, anomaly detection, time series forecasting และ supplier risk scoring พร้อม MLflow tracking และ SHAP explainability",
    tags: ["XGBoost", "ARIMA", "Scikit-learn", "MLflow", "SHAP", "FastAPI"],
    type: "Personal Project",
    github: "https://github.com/Naminshxn31/procurement-ml-pipeline",
    icon: "📦"
  },
  {
    id: 3,
    title: "Contract Clause Analyzer",
    description: "ระบบ AI วิเคราะห์สัญญา PDF ทั้งภาษาไทยและอังกฤษ ด้วย zero-shot NLP classifier, LLM risk scoring และ RAG-based Q&A ให้ผู้ใช้ถามคำถามเกี่ยวกับสัญญาได้โดยตรง",
    tags: ["Gemini API", "mDeBERTa", "ChromaDB", "RAG", "FastAPI", "Streamlit"],
    type: "Personal Project",
    github: "https://github.com/Naminshxn31/contract-analyzer",
    icon: "📄"
  },
  {
    id: 4,
    title: "Binary Logistic Regression on Medical Data",
    description: "Applying Binary Logistic Regression Analysis to Medical data เพื่อพยากรณ์ผลลัพธ์ทางการแพทย์",
    tags: ["GLM", "Logistic Regression", "R", "Statistics"],
    type: "Research",
    github: null,
    icon: "🏥"
  },
  {
    id: 5,
    title: "Bicycles on Manhattan Bridges",
    description: "วิเคราะห์จำนวนจักรยานที่ข้ามสะพาน Manhattan Bridges, New York City ด้วย Generalized Linear Models",
    tags: ["GLM", "Poisson Regression", "R", "Statistics"],
    type: "Research",
    github: null,
    icon: "🚲"
  },
  {
    id: 6,
    title: "Chitosan Effect on Cantaloupe",
    description: "ศึกษาเปรียบเทียบความเข้มข้น Chitosan ที่ส่งผลต่อการเปลี่ยนแปลงเนื้อเยื่อของแคนตาลูปแปรรูปขั้นต่ำ",
    tags: ["Statistical Research", "Hypothesis Testing", "R", "Experiment Design"],
    type: "Research",
    github: null,
    icon: "🍈"
  },
  {
    id: 7,
    title: "Export Rubber Forecasting",
    description: "พยากรณ์ปริมาณส่งออกยางพาราของไทยในช่วง COVID-19 ด้วย ARIMA model",
    tags: ["Time Series", "ARIMA", "R", "Forecasting"],
    type: "Research",
    github: null,
    icon: "📈"
  },
  {
    id: 8,
    title: "Topic Modeling & Sentiment Analysis",
    description: "วิเคราะห์หัวข้อและ sentiment จากข้อความด้วย NLP techniques และ ML models",
    tags: ["NLP", "Machine Learning", "Python", "PyThaiNLP"],
    type: "Research",
    github: null,
    icon: "🧠"
  }
];

function renderProjects() {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  container.innerHTML = projects.map(p => `
    <div class="project-card fade-in-up">
      <div class="project-card-header">
        <span class="project-icon">${p.icon}</span>
        <span class="project-type type-${p.type === 'Research' ? 'research' : 'personal'}">${p.type}</span>
      </div>
      <h3 class="project-title">${p.title}</h3>
      <p class="project-desc">${p.description}</p>
      <div class="project-tags">
        ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
      ${p.github ? `
      <div class="project-links">
        <a href="${p.github}" target="_blank" rel="noopener" class="btn-outline">⌥ GitHub</a>
      </div>` : ''}
    </div>
  `).join('');
}
