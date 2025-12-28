import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { AwarenessPage } from './components/AwarenessPage';
import { RegisterPage } from './components/RegisterPage';
import { LoginPage } from './components/LoginPage';
import { RiskAssessmentPage } from './components/RiskAssessmentPage';
import { AboutPage } from './components/AboutPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  // Check for existing session
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (userData: { name: string; email: string }) => {
    setUser(userData);
    setIsLoggedIn(true);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('user');
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation isLoggedIn={isLoggedIn} onLogout={handleLogout} user={user} />
        <Routes>
          <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} />} />
          <Route path="/awareness" element={<AwarenessPage />} />
          <Route path="/register" element={<RegisterPage onRegister={handleLogin} />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route 
            path="/risk-assessment" 
            element={
              isLoggedIn ? (
                <RiskAssessmentPage user={user} />
              ) : (
                <Navigate to="/login" state={{ from: '/risk-assessment' }} />
              )
            } 
          />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
