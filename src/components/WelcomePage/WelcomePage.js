import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.css';

function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="welcome-page">
      <h1>Welcome to MovieHub</h1>
      <p>Your gateway to endless entertainment.</p>
      <button className="get-started" onClick={() => navigate('/categories')}>Get Started</button>
    </div>
  );
}

export default WelcomePage;
