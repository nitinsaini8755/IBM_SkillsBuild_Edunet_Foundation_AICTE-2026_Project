from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime, Text
from sqlalchemy.orm import relationship
from datetime import datetime
from database import Base

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    name = Column(String)
    
    profiles = relationship("CandidateProfile", back_populates="user")
    sessions = relationship("InterviewSession", back_populates="user")

class CandidateProfile(Base):
    __tablename__ = "candidate_profiles"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    target_role = Column(String)
    experience_level = Column(String)
    skills = Column(String) # Stored as comma separated or JSON string
    education = Column(String)
    resume_text = Column(Text, nullable=True)
    
    user = relationship("User", back_populates="profiles")
    sessions = relationship("InterviewSession", back_populates="profile")

class InterviewSession(Base):
    __tablename__ = "interview_sessions"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    profile_id = Column(Integer, ForeignKey("candidate_profiles.id"))
    start_time = Column(DateTime, default=datetime.utcnow)
    end_time = Column(DateTime, nullable=True)
    interview_type = Column(String) # Technical, HR, Mixed
    difficulty = Column(String)
    status = Column(String, default="ongoing") # ongoing, completed
    overall_score = Column(Float, nullable=True)
    
    user = relationship("User", back_populates="sessions")
    profile = relationship("CandidateProfile", back_populates="sessions")
    questions = relationship("InterviewQuestion", back_populates="session")
    report = relationship("InterviewReport", back_populates="session", uselist=False)

class InterviewQuestion(Base):
    __tablename__ = "interview_questions"
    
    id = Column(Integer, primary_key=True, index=True)
    session_id = Column(Integer, ForeignKey("interview_sessions.id"))
    question_text = Column(Text)
    category = Column(String) # Technical, Behavioral, etc.
    difficulty = Column(String)
    order_index = Column(Integer)
    candidate_answer = Column(Text, nullable=True)
    
    session = relationship("InterviewSession", back_populates="questions")
    evaluation = relationship("AnswerEvaluation", back_populates="question", uselist=False)

class AnswerEvaluation(Base):
    __tablename__ = "answer_evaluations"
    
    id = Column(Integer, primary_key=True, index=True)
    question_id = Column(Integer, ForeignKey("interview_questions.id"))
    technical_accuracy = Column(Float)
    relevance = Column(Float)
    clarity = Column(Float)
    completeness = Column(Float)
    communication = Column(Float)
    overall_score = Column(Float)
    feedback = Column(Text)
    suggested_answer = Column(Text)
    
    question = relationship("InterviewQuestion", back_populates="evaluation")

class InterviewReport(Base):
    __tablename__ = "interview_reports"
    
    id = Column(Integer, primary_key=True, index=True)
    session_id = Column(Integer, ForeignKey("interview_sessions.id"))
    overall_score = Column(Float)
    technical_score = Column(Float)
    communication_score = Column(Float)
    strengths = Column(Text)
    weaknesses = Column(Text)
    preparation_roadmap = Column(Text) # JSON string or structured text
    
    session = relationship("InterviewSession", back_populates="report")
