import pytest
from backend.agents import analyze_resume_agent, generate_question_agent, evaluate_answer_agent

def test_analyze_resume_agent_demo():
    # In Demo Mode, the agent should return a mocked response
    resume_text = "I am a fresher software developer with skills in Python and React."
    result = analyze_resume_agent(resume_text)
    
    assert "target_role" in result
    assert "experience_level" in result
    assert "skills" in result

def test_generate_question_agent_demo():
    profile = {"target_role": "Software Developer", "experience_level": "Fresher"}
    result = generate_question_agent(profile, [], "Medium", "Technical")
    
    assert "question" in result
    assert "category" in result
    assert "difficulty" in result

def test_evaluate_answer_agent_demo():
    profile = {"target_role": "Software Developer"}
    question = "Explain threading."
    answer = "Threading is running multiple things."
    result = evaluate_answer_agent(question, answer, profile)
    
    assert "overall_score" in result
    assert "feedback" in result
