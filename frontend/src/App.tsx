import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProfilePage from './pages/ProfilePage';
import InterviewSetupPage from './pages/InterviewSetupPage';
import LiveInterviewPage from './pages/LiveInterviewPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <Router>
      <div className="container">
        <header className="header">
          <Link to="/" className="header-logo">
            AI Interview Trainer Agent
          </Link>
          <nav className="nav-links">
            <Link to="/profile">Profile</Link>
            <Link to="/setup">Setup Interview</Link>
            <Link to="/dashboard">Dashboard</Link>
          </nav>
        </header>

        <main style={{ padding: '2rem 0' }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/setup" element={<InterviewSetupPage />} />
            <Route path="/interview" element={<LiveInterviewPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
