# Architecture

## Agentic AI Workflow
The core loop follows an Agentic pattern:
`OBSERVE -> RETRIEVE -> REASON -> ASK -> EVALUATE -> ADAPT -> IMPROVE`

1. **Candidate Profile Agent**: Analyzes the resume using IBM Granite, extracting target job role, experience, and skills.
2. **Knowledge Retrieval Agent (RAG)**: Connects to ChromaDB. Embeds the target role and category to retrieve matching interview context (e.g., specific algorithms for a software developer).
3. **Interview Agent**: Uses IBM Granite with the RAG context to generate a tailored interview question.
4. **Evaluation Agent**: Analyzes candidate answers against the generated question and RAG context, scoring on 5 metrics out of 10.
5. **Follow-Up / Adapt Agent**: Adjusts the difficulty of the next question based on the previous `overall_score`.
6. **Feedback/Report Agent**: Generates a 7-day personalized preparation roadmap.

## RAG Pipeline
- **Documents**: Markdown files in `/knowledge_base`.
- **Processing**: LangChain `RecursiveCharacterTextSplitter`.
- **Embedding**: `sentence-transformers/all-MiniLM-L6-v2`.
- **Vector Storage**: ChromaDB local instance.
- **Retrieval**: Top-k similarity search to provide context to the LLM.
