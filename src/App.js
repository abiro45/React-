// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ComplaintsProvider } from './components/ComplaintContext';
import { MessagesProvider } from './components/MessagesContext';
import Home from './components/home';
import Login from './components/login';
import Sign from './components/sign';
import Dash from './components/Dash';
import ComplaintForm from './components/ComplaintForm';
import Contact from './components/Contact';
import ForgotPassword from './components/Forgot';
import EscalationPeriod from './components/EscalationPeriod';
import ChartComponent from './components/ChartComponent';
import ConfirmationPage from './components/ConfirmationPage';
import Aboutus from './components/Aboutus';
import AdminDashboard from './components/AdminDashboard';
import AdminLogin from './components/AdminLogin';
import Contactdetails from './components/Contactdetails';
import ViewComplaint from './components/ViewComplaint';
import './App.css';

function App() {
  return (
    <ComplaintsProvider>
      <MessagesProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/dash" element={<Dash />} />
        <Route path="/complaint" element={<ComplaintForm />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/Forgot" element={<ForgotPassword />} />
        <Route path="/escalation-period" element={<EscalationPeriod />} />
        <Route path="/chart" element={<ChartComponent />} />
        <Route path="/confirmation" element={<ConfirmationPage/>}/>
        <Route path="/about" element={<Aboutus/>}/>
        <Route path="/admin" element={<AdminDashboard/>}/>
        <Route path="/adminlogin" element={<AdminLogin/>}/>
        <Route path="/contactdetails" element={<Contactdetails/>}/>
        <Route path="/viewcomplaint" element={<ViewComplaint/>}/>
      </Routes>
    </Router>
    </MessagesProvider>
    </ComplaintsProvider>
    
  );
}

export default App;
