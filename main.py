from fastapi import FastAPI, Depends, HTTPException, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from database import engine, Base, get_db
import models, schemas
from agents import analyze_resume_agent, generate_question_agent, evaluate_answer_agent

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="AI Interview Trainer Agent API",
    description="API for the RAG-powered Interview Trainer Agent",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/health")
def health_check():
    return {"status": "ok", "message": "Backend is running successfully."}

@app.post("/api/profile", response_model=schemas.CandidateProfileCreate)
def create_profile(profile: schemas.CandidateProfileCreate, db: Session = Depends(get_db)):
    db_profile = models.CandidateProfile(**profile.dict())
    db.add(db_profile)
    db.commit()
    db.refresh(db_profile)
    return db_profile

@app.post("/api/resume/analyze")
async def analyze_resume(file: UploadFile = File(...)):
    content = await file.read()
    # Mock text extraction for demo purposes
    text = content.decode('utf-8', errors='ignore')[:1000] 
    analysis = analyze_resume_agent(text)
    return analysis

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
