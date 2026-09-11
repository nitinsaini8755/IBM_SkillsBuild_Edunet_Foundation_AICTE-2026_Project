export default function DashboardPage() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2>Performance Dashboard</h2>
        <span style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--blue-70)' }}>
          Overall Score: 79 / 100
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
        <div className="card" style={{ textAlign: 'center', padding: '1rem' }}>
          <h4 style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Technical</h4>
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>82</span>
        </div>
        <div className="card" style={{ textAlign: 'center', padding: '1rem' }}>
          <h4 style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Communication</h4>
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>76</span>
        </div>
        <div className="card" style={{ textAlign: 'center', padding: '1rem' }}>
          <h4 style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Problem Solving</h4>
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>71</span>
        </div>
        <div className="card" style={{ textAlign: 'center', padding: '1rem' }}>
          <h4 style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>HR / Behavioral</h4>
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>85</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
        <div className="card">
          <h3 style={{ color: 'green', marginBottom: '1rem' }}>Top Strengths</h3>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
            <li>Clear explanation of HR scenarios</li>
            <li>Strong fundamental knowledge of React</li>
            <li>Good communication skills</li>
          </ul>
        </div>
        <div className="card">
          <h3 style={{ color: 'var(--blue-70)', marginBottom: '1rem' }}>Areas for Improvement</h3>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
            <li>SQL Joins and complex queries</li>
            <li>System Design basics</li>
            <li>More concrete examples needed in technical answers</li>
          </ul>
        </div>
      </div>

      <div className="card" style={{ marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1.5rem' }}>Your 7-Day Preparation Roadmap</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ padding: '1rem', borderLeft: '4px solid var(--blue-60)', backgroundColor: 'var(--bg-secondary)' }}>
            <strong>Day 1: SQL Fundamentals</strong> - Focus on INNER, LEFT, and RIGHT joins.
          </div>
          <div style={{ padding: '1rem', borderLeft: '4px solid var(--gray-30)' }}>
            <strong>Day 2: System Design</strong> - Review client-server architecture basics.
          </div>
          <div style={{ padding: '1rem', borderLeft: '4px solid var(--gray-30)' }}>
            <strong>Day 3: Behavioral Practice</strong> - Use the STAR method for past projects.
          </div>
          <div style={{ padding: '1rem', borderLeft: '4px solid var(--gray-30)' }}>
            <strong>Day 4: Technical Deep Dive</strong> - Advanced React hooks.
          </div>
          <div style={{ padding: '1rem', borderLeft: '4px solid var(--gray-30)' }}>
            <strong>Day 5: Mock Interview</strong> - Technical Only.
          </div>
          <div style={{ padding: '1rem', borderLeft: '4px solid var(--gray-30)' }}>
            <strong>Day 6: Resume Polish</strong> - Update project descriptions.
          </div>
          <div style={{ padding: '1rem', borderLeft: '4px solid var(--gray-30)' }}>
            <strong>Day 7: Full Mock Interview</strong> - Mixed format.
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
        <p>Coach's Note: "You demonstrate strong fundamentals but should spend additional time on SQL joins and structured project explanations."</p>
      </div>
    </div>
  );
}
