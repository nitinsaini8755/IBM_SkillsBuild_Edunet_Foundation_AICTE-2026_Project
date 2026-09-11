import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LiveInterviewPage() {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [evaluation, setEvaluation] = useState<any>(null);

  const mockQuestion = "Explain the difference between INNER JOIN and LEFT JOIN in SQL.";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEvaluation({
        overall: 8.5,
        technical: 8,
        relevance: 9,
        clarity: 8,
        completeness: 8,
        feedback: "Good explanation, but you could have provided a quick example to make it perfectly clear."
      });
    }, 2000);
  };

  const handleNext = () => {
    // Navigate to next question or complete
    setAnswer('');
    setEvaluation(null);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr 1fr', gap: '2rem', minHeight: '80vh' }}>
      
      {/* Left Column: Context */}
      <div className="card" style={{ height: 'fit-content' }}>
        <h4 style={{ marginBottom: '1rem', color: 'var(--blue-70)' }}>Context</h4>
        <div style={{ fontSize: '0.875rem' }}>
          <p><strong>Role:</strong> Software Developer</p>
          <p><strong>Experience:</strong> Fresher</p>
          <hr style={{ margin: '1rem 0', borderColor: 'var(--gray-20)' }} />
          <p style={{ color: 'var(--text-secondary)' }}><em>Retrieved Context (RAG):</em></p>
          <p>Assessing foundational database concepts.</p>
        </div>
      </div>

      {/* Center Column: Interview Interface */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <span style={{ fontWeight: '600' }}>Question 2 / 5</span>
          <span style={{ color: 'var(--text-secondary)' }}>Category: Technical | Difficulty: Medium</span>
        </div>

        <div className="card" style={{ marginBottom: '2rem', borderLeft: '4px solid var(--blue-60)' }}>
          <p style={{ fontSize: '1.25rem', fontWeight: '500' }}>{mockQuestion}</p>
        </div>

        {!evaluation ? (
          <form onSubmit={handleSubmit}>
            <textarea 
              className="textarea" 
              rows={8} 
              placeholder="Type your answer here..."
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              required
            ></textarea>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Evaluating...' : 'Submit Answer'}
              </button>
              <button type="button" className="btn btn-secondary">
                Skip
              </button>
            </div>
          </form>
        ) : (
          <div className="card" style={{ backgroundColor: 'var(--gray-10)' }}>
            <h3 style={{ color: 'var(--blue-80)' }}>Evaluation: {evaluation.overall} / 10</h3>
            <div style={{ display: 'flex', gap: '1rem', margin: '1rem 0', fontSize: '0.875rem' }}>
              <span>Tech: {evaluation.technical}/10</span>
              <span>Relevance: {evaluation.relevance}/10</span>
              <span>Clarity: {evaluation.clarity}/10</span>
              <span>Completeness: {evaluation.completeness}/10</span>
            </div>
            <p style={{ marginBottom: '1.5rem' }}><strong>Feedback:</strong> {evaluation.feedback}</p>
            <p style={{ fontSize: '0.875rem', color: 'var(--blue-60)', marginBottom: '1.5rem' }}>
              <em>Next question difficulty adjusted based on this score.</em>
            </p>
            <button onClick={handleNext} className="btn btn-primary">
              Next Question
            </button>
          </div>
        )}
      </div>

      {/* Right Column: Progress */}
      <div className="card" style={{ height: 'fit-content' }}>
        <h4>Progress</h4>
        <div style={{ marginTop: '1rem', fontSize: '0.875rem' }}>
          <div style={{ marginBottom: '0.5rem', color: 'green' }}>✓ Q1 (Technical)</div>
          <div style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>→ Q2 (Technical)</div>
          <div style={{ marginBottom: '0.5rem', color: 'var(--gray-30)' }}>○ Q3 (Behavioral)</div>
          <div style={{ marginBottom: '0.5rem', color: 'var(--gray-30)' }}>○ Q4 (Technical)</div>
          <div style={{ marginBottom: '0.5rem', color: 'var(--gray-30)' }}>○ Q5 (HR)</div>
        </div>
        <button className="btn btn-secondary" style={{ marginTop: '2rem', width: '100%' }} onClick={() => navigate('/dashboard')}>
          End Interview
        </button>
      </div>
    </div>
  );
}
