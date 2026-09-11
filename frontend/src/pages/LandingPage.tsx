import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', padding: '4rem 0' }}>
      <h1 style={{ fontSize: '3rem', color: 'var(--blue-80)', marginBottom: '1rem' }}>
        Prepare Smarter. Practice Better. Interview With Confidence.
      </h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>
        An Agentic AI-powered interview coach that understands your profile, retrieves role-specific knowledge, conducts adaptive mock interviews, and tells you exactly how to improve.
      </p>
      
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '4rem' }}>
        <Link to="/setup" className="btn btn-primary">
          Start Interview
        </Link>
        <Link to="/profile" className="btn btn-secondary">
          Analyze Resume
        </Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', textAlign: 'left' }}>
        <div className="card">
          <h3>Resume-Aware Interviewing</h3>
          <p>Questions tailored directly to the skills and experience found on your resume.</p>
        </div>
        <div className="card">
          <h3>RAG-Powered Preparation</h3>
          <p>Utilizes real-world industry knowledge and behavioral guidelines to prepare you.</p>
        </div>
        <div className="card">
          <h3>Adaptive Questioning</h3>
          <p>The difficulty adapts dynamically based on your performance.</p>
        </div>
        <div className="card">
          <h3>AI Answer Evaluation</h3>
          <p>Get immediate scoring and actionable feedback for every answer.</p>
        </div>
      </div>

      <div style={{ marginTop: '4rem', fontSize: '0.875rem', color: 'var(--gray-80)' }}>
        <strong>Powered by IBM Granite</strong>
      </div>
    </div>
  );
}
