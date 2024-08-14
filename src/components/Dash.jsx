import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dash.css'; 
import background from '../assets/background.png';
import Header from './Header';
import Section from './Section';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

const Dash = ({ complaintCount, solvedCount, pendingCount }) => {
  const navigate = useNavigate();

  return (
    <div className="dash-container">
      <nav className="navbar">
        <ul className="nav-links">
          <li onClick={() => navigate('/')}>
            <a href="/">Home</a>
          </li>
          <li className="dropdown">
            <Link to="#" className="dropbtn">Complaints</Link>
            <div className="dropdown-content">
              <Link to="/Complaint">New Complaint</Link>
              <Link to="/escalation-period">Escalation Period</Link>
            </div>
          </li>
          <li onClick={() => navigate('/Chart')}>
            <a href="/Chart">DashBoard</a>
          </li>
          <li onClick={() => navigate('/contact')}>
            <a href="/contact">Contact</a>
          </li>
          <li onClick={() => navigate('/about')}>
            <a href="/about">About us</a>
          </li>
          <li onClick={() => navigate('/adminlogin')}>
            <a href="/adminlogin">Admin</a>
          </li>
        </ul>
        <img src={background} alt="Nav Background" className="nav-image" />
      </nav>
      <main className="municipal-main-content">
        <section className="municipal-stats">
          <div className="municipal-stat">
            <h2>{complaintCount}</h2>
            <h3>Total Complaints</h3>
          </div>
          <div className="municipal-stat">
            <h2>{solvedCount}</h2>
            <h3>Solved Complaints</h3>
          </div>
          <div className="municipal-stat">
            <h2>{pendingCount}</h2>
            <h3>Pending Complaints</h3>
          </div>
        </section>
      </main>
      <div className="Main">
        <Header />
        <Section
          title="What is Online Complaint Management System?"
          description="Online Complaint Management System is an online portal that helps manage online customer complaints. It provides a comprehensive platform to resolve these complaints with ease. Its features include an online complaint box where customers can drop in their complaints so that the service provider can access, analyze and respond to the customer issues."
          image={image1}
        />
        <Section
          title="What are the Uses of an Online Complaint Management System"
          description="The objective of the online complaint management system is to get away with the hassle faced in dealing with the issues that are faced in online businesses. The software is an excellent solution to resolve issues in a more managed and streamlined manner. It saves time as well as money in resolving problems efficiently. This helps build customer loyalty by efficiently handling their complaints and achieving a sustainable client database."
          image={image2}
          reverse
        />
        <Section
          title="Advantages of Our Online Complaint Management System"
          description="The web complaint management software allows the user to record the complaint and load it to the complaint’s database. It offers a strategic method for lodging and tracking customer concerns and issues. You can access the complaint’s history and check the status update. It has the details of how a complaint is being progressed and what actions are being taken. After a complaint is recorded by a user, an Administrator reviews it and then it is progressed."
          image={image3}
        />
      </div>
    </div>
  );
};

export default Dash;
