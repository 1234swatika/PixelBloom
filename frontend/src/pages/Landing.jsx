import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  const [visibleLetters, setVisibleLetters] = useState(0);
  const navigate = useNavigate();
  const word = "noodle";

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLetters(prev => {
        if (prev < word.length) {
          return prev + 1;
        }
        return prev;
      });
    }, 300); // Each letter appears after 300ms

    return () => clearInterval(timer);
  }, []);

  const resetAnimation = () => {
    setVisibleLetters(0);
  };

  const goToAuth = () => {
    navigate('/auth');
  };

  return (
    <div className="landing-container">
      <div className="auth-button-container">
        <button className="auth-button" onClick={goToAuth}>
          Login / Sign Up
        </button>
      </div>
      
      <div className="noodle-text" onClick={resetAnimation}>
        {word.split('').map((letter, index) => (
          <span
            key={index}
            className={`letter ${index < visibleLetters ? 'visible' : ''}`}
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            {letter}
          </span>
        ))}
      </div>
      <div className="subtitle">
        Click the text to replay animation
      </div>
    </div>
  );
};

export default Landing;