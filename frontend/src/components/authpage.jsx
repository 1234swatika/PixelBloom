import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    className: '',
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const { className, email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    const url = isLogin
      ? 'http://localhost:5000/api/auth/login'
      : 'http://localhost:5000/api/auth/signup';

    const payload = isLogin 
      ? { email, password } 
      : { className, email, password };

    try {
      const response = await axios.post(url, payload);
      
      if (isLogin) {
        setMessage('Login successful!');
        // Save JWT to localStorage if needed
        localStorage.setItem('token', response.data.token);
        // Save user data if available
        if (response.data.user) {
          localStorage.setItem('user', JSON.stringify(response.data.user));
        }
        // Redirect to landing page
        setTimeout(() => {
          navigate('/landing');
        }, 1000);
      } else {
        setMessage('Signup successful!');
        // Redirect to login after successful signup
        setTimeout(() => {
          setIsLogin(true);
          setMessage('Account created! Please login.');
        }, 1000);
      }
    } catch (err) {
      setMessage(err.response?.data?.message || 'An error occurred.');
    }
  };

  return (
    <div className="auth-container">
      <div className="floating-icons">
        {/* Floating icons will be added via CSS animations */}
      </div>
      
      <div className="auth-box">
        <h1 className="title">PIXELBLOOM</h1>
        <h2 className="subtitle">{isLogin ? "Login" : "Sign Up"}</h2>
        
        <form className="auth-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <input 
              type="text" 
              name="className"
              placeholder="Class Name" 
              value={className}
              onChange={onChange}
              required 
            />
          )}
          
          <input 
            type="email" 
            name="email"
            placeholder="Email" 
            value={email}
            onChange={onChange}
            required 
          />
          
          <input 
            type="password" 
            name="password"
            placeholder="Password" 
            value={password}
            onChange={onChange}
            required 
          />
          
          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
        </form>

        {message && (
          <p className={`message ${message.includes('successful') ? 'success' : 'error'}`}>
            {message}
          </p>
        )}
        
        <p className="toggle-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span onClick={() => setIsLogin(!isLogin)}>Click here</span>
        </p>
      </div>
    </div>
  );
}