# Judge Q&A

**Q: Is this just a static chatbot?**
**A:** No. The Interview Trainer uses candidate context, RAG retrieval, IBM Granite reasoning, adaptive questioning, and answer evaluation to decide what to ask and how to coach the candidate next. It has logically separated agents representing different stages of an interview process (Profile Analysis, Retrieval, Question Generation, Evaluation, Feedback).

**Q: Where is IBM Granite used?**
**A:** IBM Granite is used via `langchain-ibm` in `backend/llm.py` as the primary LLM engine. It powers the reasoning in the agents, such as evaluating answers, extracting resume details, and generating dynamic context-aware questions.

**Q: Where is RAG used?**
**A:** The RAG pipeline is implemented in `backend/rag.py`. It uses a local ChromaDB instance to embed and store role expectations and HR guidelines (from `/knowledge_base`). When an interview question is generated, the RAG pipeline retrieves relevant technical and behavioral context for the candidate's target role to ensure the question is grounded in real-world expectations.
