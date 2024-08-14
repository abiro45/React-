import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Forgot.css';

const Forgot = () => {
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
   
      navigate('/password-reset-success');
  };

  return (
    <div className='forgot-password-container'>
      <h1>Reset Password</h1>
      <div className='forgot-password-form'>
        
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <button type="submit">Send OTP</button>
        </form>
      </div>
    </div>
  );
};

export default Forgot;
