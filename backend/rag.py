import os
from pathlib import Path
from langchain_community.document_loaders import DirectoryLoader, TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import HuggingFaceEmbeddings

KNOWLEDGE_BASE_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), "knowledge_base")
PERSIST_DIRECTORY = os.path.join(os.path.dirname(__file__), "chroma_db")

def get_embeddings_model():
    # Using a lightweight local embedding model for development
    # In production with full IBM Granite, we might use IBM's embedding model if available
    return HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")

def initialize_knowledge_base():
    """Loads documents from the knowledge_base directory and stores them in ChromaDB."""
    if not os.path.exists(KNOWLEDGE_BASE_DIR):
        print(f"Directory {KNOWLEDGE_BASE_DIR} does not exist. Skipping RAG init.")
        return

    print("Loading documents...")
    loader = DirectoryLoader(KNOWLEDGE_BASE_DIR, glob="**/*.md", loader_cls=TextLoader)
    documents = loader.load()

    if not documents:
        print("No documents found in knowledge base.")
        return

    print(f"Loaded {len(documents)} documents.")
    
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
    splits = text_splitter.split_documents(documents)
    
    print(f"Split into {len(splits)} chunks. Creating vector store...")
    
    embedding_model = get_embeddings_model()
    
    # Create or update the Chroma vector store
    vectorstore = Chroma.from_documents(
        documents=splits, 
        embedding=embedding_model, 
        persist_directory=PERSIST_DIRECTORY
    )
    vectorstore.persist()
    print("Vector store initialized successfully.")

def get_retriever():
    """Returns a retriever interface for the vector store."""
    embedding_model = get_embeddings_model()
    vectorstore = Chroma(persist_directory=PERSIST_DIRECTORY, embedding_function=embedding_model)
    return vectorstore.as_retriever(search_kwargs={"k": 3})

if __name__ == "__main__":
    initialize_knowledge_base()
