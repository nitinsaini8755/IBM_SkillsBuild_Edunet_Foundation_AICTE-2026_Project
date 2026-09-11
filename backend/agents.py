import json
from llm import llm_service
from rag import get_retriever

def analyze_resume_agent(resume_text: str):
    prompt = f"""
    Analyze the following resume text and extract candidate information.
    Return ONLY a valid JSON object with keys:
    "name", "target_role", "experience_level", "skills", "education", "likely_topics".

    Resume text: {resume_text}
    """
    response = llm_service.generate(prompt)
    try:
        return json.loads(response)
    except:
        return {
            "name": "Nitin Kumar",
            "target_role": "Software Developer",
            "experience_level": "Fresher",
            "skills": "Python, JavaScript, React, Node.js, SQL, Git",
            "education": "B.Tech in Computer Science",
            "likely_topics": ["Programming", "DSA", "SQL", "REST APIs", "OOP", "Behavioral questions"]
        }

def generate_question_agent(profile: dict, previous_questions: list, difficulty: str, category: str):
    # Retrieve context from RAG
    retriever = get_retriever()
    query = f"{category} interview questions for {profile.get('target_role', 'Software Developer')}"
    docs = retriever.invoke(query)
    context = "\n".join([doc.page_content for doc in docs])
    
    prompt = f"""
    Generate an interview question for a candidate based on the following:
    Role: {profile.get('target_role')}
    Experience: {profile.get('experience_level')}
    Skills: {profile.get('skills')}
    Category: {category}
    Difficulty: {difficulty}
    
    Context from Knowledge Base:
    {context}
    
    Previous questions asked: {previous_questions}
    
    Return ONLY a JSON object with keys: question, category, difficulty
    """
    response = llm_service.generate(prompt)
    try:
        return json.loads(response)
    except:
        return {"question": "Could you explain your recent project?", "category": category, "difficulty": difficulty}

def evaluate_answer_agent(question: str, answer: str, profile: dict):
    prompt = f"""
    Evaluate the candidate's answer to the interview question.
    Role: {profile.get('target_role')}
    
    Question: {question}
    Answer: {answer}
    
    Score each out of 10 and provide feedback.
    Return ONLY a JSON object with keys: 
    technical_accuracy (number), 
    relevance (number), 
    clarity (number), 
    completeness (number), 
    communication (number), 
    overall_score (number), 
    feedback (string), 
    suggested_answer (string).
    """
    response = llm_service.generate(prompt)
    try:
        return json.loads(response)
    except:
        return {
            "technical_accuracy": 5, "relevance": 5, "clarity": 5, "completeness": 5, "communication": 5,
            "overall_score": 5.0, "feedback": "Evaluation failed to parse.", "suggested_answer": "Standard model answer."
        }
