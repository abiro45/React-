import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ViewComplaint.css';

const ViewComplaint = () => {
  const [complaints, setComplaints] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/complaints');
        const data = await response.json();
        setComplaints(data);
      } catch (error) {
        console.error('Error fetching complaints:', error);
      }
    };

    fetchComplaints();
  }, []);

  const groupedComplaints = complaints.reduce((acc, complaint) => {
    (acc[complaint.reason] = acc[complaint.reason] || []).push(complaint);
    return acc;
  }, {});

  const handleComplaintClick = (complaintId) => {
    navigate(`/${complaintId}`);
  };

  const goToHome = () => {
    navigate('/admin');
  };

  return (
    <div className="admin-dashboard-container">
      <h1>View Complaints</h1>
      <button className="go-home-button" onClick={goToHome}>
        Go to Home
      </button>
      {Object.keys(groupedComplaints).map(reason => (
        <div key={reason} className="complaint-box">
          <h2>{reason}</h2>
          {groupedComplaints[reason].map(complaint => (
            <div 
              key={complaint.id} 
              className="complaint-item"
              onClick={() => handleComplaintClick(complaint.id)}
            >
              <p><strong>Name:</strong> {complaint.name}</p>
              <p><strong>Roll No:</strong> {complaint.rollNo}</p>
              <p><strong>Department:</strong> {complaint.department}</p>
              <p><strong>Year:</strong> {complaint.year}</p>
              <p><strong>Tutor Name:</strong> {complaint.tutorName}</p>
              <p><strong>HOD Name:</strong> {complaint.hodName}</p>
              <p><strong>Mobile Number:</strong> {complaint.mobileNumber}</p>
              <p><strong>Email:</strong> {complaint.email}</p>
              <p><strong>Date:</strong> {complaint.date}</p>
              <p><strong>Reason:</strong> {complaint.reason}</p>
              <p><strong>Action Required:</strong> {complaint.actionRequired}</p>
              <p><strong>GPS Location:</strong> {complaint.gpsLocation}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ViewComplaint;
