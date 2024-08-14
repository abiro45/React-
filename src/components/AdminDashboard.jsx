import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="admin-dashboard">
      <div className={`sidebar`}>
        <h2>Actions</h2>
        <ul>
          <li><button onClick={() => navigate('/viewcomplaint')}>View Complaints</button></li>
          <li><button onClick={() => navigate('/manage-users')}>Manage Users</button></li>
          <li><button onClick={() => navigate('/settings')}>Settings</button></li>
        </ul>
      </div>
      <div className="content">
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <h1>Admin Dashboard</h1>
        <div className="admin-profile-box">
          <h2>Profile</h2>
          <p><strong>Name:</strong> Abishek</p>
          <p><strong>Role:</strong> Admin of Complaint Management</p>
        </div>
        <div className="admin-stats-box">
          <h2>Total Complaints</h2>
          
        </div>
        <div className="admin-stats-box">
          <h2>Total Messages</h2>
          
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
