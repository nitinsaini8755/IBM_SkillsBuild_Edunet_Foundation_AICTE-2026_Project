import { useNavigate } from 'react-router-dom';

export default function InterviewSetupPage() {
  const navigate = useNavigate();

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/interview');
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2>Interview Setup</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        Configure your mock interview session.
      </p>

      <div className="card">
        <form onSubmit={handleStart}>
          <div>
            <label>Interview Type</label>
            <select className="input">
              <option>Mixed (Technical + HR)</option>
              <option>Technical Only</option>
              <option>HR & Behavioral Only</option>
              <option>Situational</option>
            </select>
          </div>
          <div>
            <label>Difficulty</label>
            <select className="input">
              <option>Adaptive (Recommended)</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>
          <div>
            <label>Number of Questions</label>
            <select className="input">
              <option>5</option>
              <option>10</option>
              <option>15</option>
            </select>
          </div>
          <div style={{ padding: '1rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '4px', marginBottom: '1.5rem' }}>
            <strong>Estimated Duration:</strong> 15-20 minutes
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            Start Live Mock Interview
          </button>
        </form>
      </div>
    </div>
  );
}
