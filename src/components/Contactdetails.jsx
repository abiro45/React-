import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import check from '../assets/check.png';
import './Contactdetails.css'

const Contactdetails = () => {
  const location = useLocation(); 
  const navigate = useNavigate(); 

  
  const { formData } = location.state || {};

  const handleNavigate = () => {
    navigate('/dash'); 
  };

  return (
    <div className="submission-container">
      <div className="confirmation-box">
      <img src={check} alt="Thank You" className="thank-you-image" />
        <h1>Thank You!</h1>
        {formData ? (
          <>
            <p>Your complaint has been submitted successfully.</p>
          </>
        ) : (
          <p>Your message has been submitted successfully.</p>
        )}
        
        <button onClick={handleNavigate} className="home-button">Go to Home</button>
      </div>
    </div>
  );
};

export default Contactdetails;
