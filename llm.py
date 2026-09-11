import os
from dotenv import load_dotenv

load_dotenv()

DEMO_MODE = os.getenv("DEMO_MODE", "True").lower() in ("true", "1", "t")

class LLMService:
    def __init__(self):
        self.is_demo = DEMO_MODE
        if not self.is_demo:
            try:
                from langchain_ibm import WatsonxLLM
                self.llm = WatsonxLLM(
                    model_id=os.getenv("WATSONX_MODEL_ID", "ibm/granite-13b-chat-v2"),
                    url=os.getenv("WATSONX_URL"),
                    project_id=os.getenv("WATSONX_PROJECT_ID"),
                    apikey=os.getenv("WATSONX_API_KEY"),
                    params={
                        "decoding_method": "sample",
                        "max_new_tokens": 512,
                        "temperature": 0.7,
                    }
                )
            except Exception as e:
                print(f"Failed to initialize WatsonxLLM: {e}")
                print("Falling back to DEMO_MODE.")
                self.is_demo = True

    def generate(self, prompt: str) -> str:
        if self.is_demo:
            return self._demo_response(prompt)
        
        try:
            return self.llm.invoke(prompt)
        except Exception as e:
            print(f"LLM Error: {e}")
            return "An error occurred while communicating with IBM Granite."

    def _demo_response(self, prompt: str) -> str:
        prompt_lower = prompt.lower()
        if "generate" in prompt_lower and "question" in prompt_lower:
            return '{"question": "Explain the difference between a process and a thread.", "category": "Technical", "difficulty": "Medium"}'
        elif "evaluate" in prompt_lower:
            return '{"technical_accuracy": 8, "relevance": 9, "clarity": 7, "completeness": 8, "communication": 8, "overall_score": 8.0, "feedback": "Good fundamental understanding, but could elaborate more on memory space.", "suggested_answer": "A process is an executing program with its own memory space, while a thread is a lightweight unit of execution within a process that shares memory with other threads."}'
        elif "roadmap" in prompt_lower:
            return '{"roadmap": "Day 1: Review OS concepts. Day 2: DSA arrays. Day 3: System Design basics."}'
        elif "analyze" in prompt_lower or "resume" in prompt_lower:
            return '{"name": "Nitin Kumar", "target_role": "Software Developer", "experience_level": "Fresher", "skills": "Python, JavaScript, React, Node.js, SQL, Git", "education": "B.Tech in Computer Science", "likely_topics": ["Programming", "DSA", "SQL", "REST APIs", "OOP", "Behavioral questions"]}'
        
        return "This is a demo response. IBM Granite is not configured."

llm_service = LLMService()
