// ===== PROJECT DATA =====
const projects = [
  {
    id: 1,
    title: "Thai Job Market AI Agent",
    description: "AI-powered CV analyzer & job matcher for Thailand IT/Data market. Upload PDF → AI extracts skills, matches real jobs from JobsDB with 0–100% match score, and detects skill gaps.",
    tags: ["Gemini API", "RAG", "ChromaDB", "FastAPI", "Streamlit", "Docker"],
    type: "Personal Project",
    github: "https://github.com/Naminshxn31/thai-job-agent",
    demo: null,
    icon: "🤖"
  },
  {
    id: 2,
    title: "Procurement ML Pipeline",
    description: "Production-grade ML pipeline for procurement analytics: spend classification, anomaly detection, time series forecasting, and supplier risk scoring with MLflow tracking and SHAP explainability.",
    tags: ["XGBoost", "ARIMA", "Scikit-learn", "MLflow", "SHAP", "FastAPI"],
    type: "Personal Project",
    github: "https://github.com/Naminshxn31/procurement-ml-pipeline",
    demo: null,
    icon: "📦"
  },
  {
    id: 3,
    title: "Contract Clause Analyzer",
    description: "AI system that analyzes PDF contracts (Thai & English) using zero-shot NLP classification, LLM risk scoring, and RAG-based Q&A — ask natural language questions about any contract.",
    tags: ["Gemini API", "mDeBERTa", "ChromaDB", "RAG", "FastAPI", "Streamlit"],
    type: "Personal Project",
    github: "https://github.com/Naminshxn31/contract-analyzer",
    demo: null,
    icon: "📄"
  },
  {
    id: 4,
    title: "Binary Logistic Regression on Medical Data",
    description: "Applied GLM Binary Logistic Regression to medical data for outcome prediction. Covers model selection, interpretation, and diagnostic tests.",
    tags: ["GLM", "Logistic Regression", "R", "Statistics"],
    type: "Academic",
    github: null,
    demo: null,
    icon: "🏥"
  },
  {
    id: 5,
    title: "Bicycles on Manhattan Bridges",
    description: "Analyzed bicycle crossing counts on Manhattan Bridges, NYC using Generalized Linear Models (Poisson regression) with count data modeling techniques.",
    tags: ["GLM", "Poisson Regression", "R", "Statistics"],
    type: "Academic",
    github: null,
    demo: null,
    icon: "🚲"
  },
  {
    id: 6,
    title: "Chitosan Effect on Cantaloupe",
    description: "Statistical research comparing Chitosan concentrations and their effect on tissue changes in minimally processed cantaloupe using experimental design.",
    tags: ["Experiment Design", "Hypothesis Testing", "R", "Statistics"],
    type: "Academic",
    github: null,
    demo: null,
    icon: "🍈"
  },
  {
    id: 7,
    title: "Export Rubber Forecasting",
    description: "Time Series forecasting of Thailand's natural rubber export volume during COVID-19 using ARIMA with seasonal decomposition and trend analysis.",
    tags: ["Time Series", "ARIMA", "R", "Forecasting"],
    type: "Academic",
    github: null,
    demo: null,
    icon: "📈"
  },
  {
    id: 8,
    title: "Topic Modeling & Sentiment Analysis",
    description: "Applied ML techniques for topic modeling and sentiment analysis on Thai text using NLP libraries and transformer-based models.",
    tags: ["NLP", "Machine Learning", "Python", "PyThaiNLP"],
    type: "Academic",
    github: null,
    demo: null,
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
        <span class="project-type type-${p.type === 'Personal Project' ? 'personal' : 'research'}">${p.type}</span>
      </div>
      <h3 class="project-title">${p.title}</h3>
      <p class="project-desc">${p.description}</p>
      <div class="project-tags">
        ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
      ${p.github || p.demo ? `
      <div class="project-links">
        ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener" class="btn-outline">⌥ GitHub</a>` : ''}
        ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener" class="btn-filled">▶ Demo</a>` : ''}
      </div>` : ''}
    </div>
  `).join('');
}
