import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleLogin = () => {
    if (!validateEmail(email)) {
      setError('Invalid email address');
      return;
    }
    if (email === 'admin@gmail.com' && password === '123') {
      sessionStorage.setItem('adminAuthenticated', 'true');
      navigate('/admin');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="mainContainer">
      <div className="title">Login</div>
      <div className="inputContainer">
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className="inputBox"
        />
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <br />
      <div className="inputContainer">
        <input
          type="password"
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className="inputBox"
        />
      </div>
      <br />
      <div className="inputContainer">
        <input className="inputButton" type="button" onClick={handleLogin} value="Log in" />
      </div>
      <div className="extraLinks">
        
        <a href="/forgot" className="link">Forgot password?</a>
      </div>
    </div>
  );
};

export default AdminLogin;
