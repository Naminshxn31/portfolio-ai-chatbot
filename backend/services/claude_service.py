import os
import random

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

# ===== ข้อมูลโชกุน =====
PROFILE = {
    "name": "อภิรัฐพล พิมปา (Apirattapon Pimpa)",
    "nickname": "โชกุน",
    "age": "24 ปี",
    "birthday": "31 มกราคม 2545",
}

EDUCATION = [
    "B.Sc. Statistics — มหาวิทยาลัยเชียงใหม่ GPA 3.54 (2020-2024)",
    "Chiangmai Tzuchi School — สายวิทย์-คณิต GPA 3.23 (2017-2019)",
]

EXPERIENCE = [
    "Software Developer (Data Scientist) ที่ GoingJesse (มี.ค. 2026 - พ.ค. 2026)",
    "Data Processing ที่ IPSOS Thailand (ส.ค. 2024 - ม.ค. 2026, 1 ปี 6 เดือน)",
    "ปัจจุบัน: กำลังมองหาโอกาสใหม่ด้าน Data Science / AI Engineer (Open to Work)",
]

SKILLS = {
    "ai_llm": ["Gemini API", "Claude API", "RAG", "ChromaDB", "HuggingFace Transformers", "Prompt Engineering"],
    "ml": ["Scikit-learn", "XGBoost", "LightGBM", "ARIMA", "Prophet", "SHAP", "MLflow", "PyThaiNLP"],
    "programming": ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "R"],
    "tools": ["FastAPI", "Streamlit", "Docker", "Git", "Jupyter Notebook", "Power BI", "Excel", "SPSS"],
}

PROJECTS = [
    "Thai Job Market AI Agent — CV analyzer + job matcher จาก JobsDB (Gemini + RAG + ChromaDB) [github.com/Naminshxn31/thai-job-agent]",
    "Procurement ML Pipeline — spend classification, anomaly detection, forecasting, supplier risk + MLflow + SHAP [github.com/Naminshxn31/procurement-ml-pipeline]",
    "Contract Clause Analyzer — วิเคราะห์สัญญา PDF ไทย/อังกฤษ ด้วย mDeBERTa + Gemini + RAG [github.com/Naminshxn31/contract-analyzer]",
    "GLM: Binary Logistic Regression Analysis to Medical data (Research)",
    "GLM: Number of Bicycles crossing Manhattan Bridges, NYC (Research)",
    "Statistical Research: Chitosan concentrations affecting tissue changes in cantaloupe (Research)",
    "Time Series: Forecasting Export rubber Quantity of Thailand on COVID-19 (Research)",
    "Machine Learning: Topic Modeling and Sentiment analysis (Research)",
]

SYSTEM_PROMPT = f"""You are an AI assistant on the portfolio website of Apirattapon Pimpa (nickname: Shogun / โชกุน).
Reply in the same language the user writes in (Thai → Thai, English → English).
Be friendly, concise, max 3-4 sentences.

About Apirattapon:
- Full name: {PROFILE['name']}, nickname: {PROFILE['nickname']}, age: {PROFILE['age']}
- Education: {'; '.join(EDUCATION)}
- Experience: {'; '.join(EXPERIENCE)}
- AI & LLM skills: {', '.join(SKILLS['ai_llm'])}
- ML & Stats skills: {', '.join(SKILLS['ml'])}
- Programming: {', '.join(SKILLS['programming'])}
- Top projects: {'; '.join(PROJECTS[:3])}
- LinkedIn: linkedin.com/in/apirattapon-pimpa-913632317
- GitHub: github.com/Naminshxn31
- Email: apirattaponnn@gmail.com

If asked about something unrelated, give a brief answer and redirect to the portfolio."""


# ===== MOCK RESPONSES (ไม่ต้องใช้ API key) =====
def _match_keywords(message):
    msg = message.lower()

    if any(w in msg for w in ["ชื่อ", "ใคร", "แนะนำ", "เกี่ยวกับ", "about", "who"]):
        return f"สวัสดีครับ! ผมชื่อ {PROFILE['nickname']} — {PROFILE['name']} อายุ {PROFILE['age']} จบสถิติจาก มช. GPA 3.54 ตอนนี้กำลังมองหาโอกาสใหม่ด้าน Data Science / AI Engineer ครับ"

    if any(w in msg for w in ["เรียน", "จบ", "การศึกษา", "มหาวิทยาลัย", "gpa", "education"]):
        return f"โชกุนจบ {EDUCATION[0]} และจบมัธยมจาก {EDUCATION[1]} ครับ"

    if any(w in msg for w in ["ทำงาน", "งาน", "ประสบการณ์", "experience", "work", "company"]):
        return f"{EXPERIENCE[0]}\n{EXPERIENCE[1]}\n\n{EXPERIENCE[2]}"

    if any(w in msg for w in ["skill", "เก่ง", "ทำอะไรได้", "ความสามารถ", "เครื่องมือ", "tool", "tech"]):
        ai = ", ".join(SKILLS["ai_llm"])
        ml = ", ".join(SKILLS["ml"])
        prog = ", ".join(SKILLS["programming"])
        return f"AI & LLM: {ai}\n\nML & Statistics: {ml}\n\nProgramming: {prog} ครับ"

    if any(w in msg for w in ["project", "โปรเจกต์", "โปรเจค", "ผลงาน"]):
        items = "\n".join(f"  {i+1}. {p}" for i, p in enumerate(PROJECTS))
        return f"โชกุนมี 8 projects:\n{items}"

    if any(w in msg for w in ["python", "nlp", "ml", "machine learning", "ai", "llm", "rag", "gemini"]):
        ai = ", ".join(SKILLS["ai_llm"])
        ml = ", ".join(SKILLS["ml"])
        return f"โชกุนถนัด AI & LLM: {ai}\n\nML: {ml} ครับ"

    if any(w in msg for w in ["ติดต่อ", "contact", "email", "เบอร์"]):
        return "ติดต่อโชกุนได้ที่ apirattaponnn@gmail.com หรือโทร 096-369-8747 ครับ"

    if any(w in msg for w in ["สวัสดี", "หวัดดี", "hi", "hello", "hey"]):
        greetings = [
            "สวัสดีครับ! 👋 มีอะไรอยากรู้เกี่ยวกับโชกุนไหมครับ?",
            "หวัดดีครับ! ถามเรื่อง skills, projects หรือประสบการณ์ของโชกุนได้เลย",
            "สวัสดีครับ! ผม AI ประจำ Portfolio ของโชกุน ถามอะไรก็ได้ครับ 😊",
        ]
        return random.choice(greetings)

    return "ขอบคุณที่สนใจครับ! ลองถามเกี่ยวกับ skills, projects, ประสบการณ์ หรือการศึกษาของโชกุนดูนะครับ 😊"


# ===== GEMINI API =====
def _chat_gemini(message):
    from google import genai

    client = genai.Client(api_key=GEMINI_API_KEY)
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=f"{SYSTEM_PROMPT}\n\nUser: {message}",
    )
    return response.text


# ===== MAIN FUNCTION =====
def chat(message: str) -> str:
    if GEMINI_API_KEY:
        try:
            return _chat_gemini(message)
        except Exception as e:
            err = str(e)
            if any(code in err for code in ["429", "503", "RESOURCE_EXHAUSTED", "UNAVAILABLE"]):
                return _match_keywords(message) + "\n\n_(ขออภัย AI กำลังยุ่งครับ ตอบจาก mock แทน 😅)_"
            raise
    return _match_keywords(message)
