# AI Interview Trainer Agent

**Subtitle:** Your Personal AI-Powered Interview Coach

An Agentic AI-powered interview coach that understands your profile, retrieves role-specific knowledge using RAG, conducts adaptive mock interviews, and provides actionable feedback using IBM Granite.

## Features
- **Resume-Aware Interviewing**: Analyzes your resume to extract skills and target roles.
- **RAG-Powered Preparation**: Uses Retrieval-Augmented Generation to fetch context from a knowledge base.
- **Adaptive Questioning**: Automatically adjusts question difficulty based on your performance.
- **IBM Granite Integration**: Utilizes IBM Watsonx AI for generating questions and evaluating answers.
- **Performance Dashboard**: Visualizes your interview performance metrics.
- **Personalized Roadmap**: Generates a 7-day preparation plan based on your weak areas.

## Tech Stack
- **Frontend**: React, Vite, Vanilla CSS
- **Backend**: Python, FastAPI
- **Database**: SQLite (SQLAlchemy)
- **Vector DB**: ChromaDB
- **AI Models**: IBM Granite (via `langchain-ibm`), HuggingFace (embeddings)

## Getting Started

### 1. Prerequisites
- Node.js v18+
- Python 3.11+
- IBM Watsonx API Key and Project ID

### 2. Environment Setup
Create a `.env` file in the `backend/` directory (see `backend/.env.example`).
```env
DEMO_MODE=True # Set to False if you have IBM Watsonx keys
WATSONX_API_KEY=your_key
WATSONX_PROJECT_ID=your_project_id
WATSONX_URL=https://us-south.ml.cloud.ibm.com
WATSONX_MODEL_ID=ibm/granite-13b-chat-v2
```

### 3. Running Backend
```bash
cd backend
python -m venv venv
# Activate venv (Windows: .\venv\Scripts\activate, Mac: source venv/bin/activate)
pip install -r requirements.txt
python rag.py # Initialize RAG Vector DB
uvicorn main:app --reload
```

### 4. Running Frontend
```bash
cd frontend
npm install
npm run dev
```

## Architecture
See [ARCHITECTURE.md](ARCHITECTURE.md) for details on the Agentic AI workflow and RAG pipeline.

## Demo Mode
If IBM Granite credentials are not available, the application runs in `DEMO_MODE` which simulates the AI responses for demonstration purposes. Ensure `DEMO_MODE=True` in your `.env`.
