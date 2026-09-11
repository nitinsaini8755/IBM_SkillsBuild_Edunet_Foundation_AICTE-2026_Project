from pydantic import BaseModel
from typing import List, Optional, Dict
from datetime import datetime

class UserBase(BaseModel):
    email: str
    name: str

class CandidateProfileCreate(BaseModel):
    target_role: str
    experience_level: str
    skills: str
    education: str
    resume_text: Optional[str] = None

class InterviewSetup(BaseModel):
    profile_id: int
    interview_type: str
    difficulty: str
    number_of_questions: int = 5

class InterviewAnswer(BaseModel):
    session_id: int
    question_id: int
    answer_text: str

class EvaluationResponse(BaseModel):
    technical_accuracy: float
    relevance: float
    clarity: float
    completeness: float
    communication: float
    overall_score: float
    feedback: str
    suggested_answer: str
