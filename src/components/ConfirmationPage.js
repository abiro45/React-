import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ConfirmationPage.css';

const ConfirmationPage = ({ onComplaintSubmit }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData } = location.state || {};

  if (!formData) {
    return <p>No form data available. Please fill out the complaint form first.</p>;
  }

  const handleGoBack = () => {
    if (onComplaintSubmit) {
      onComplaintSubmit(); // Call the prop function if it exists
    }
    navigate('/dash');
  };

  return (
    <div className="confirmation-page">
      <h1>Confirmation Page</h1>

      <h2>User Information</h2>
      <table>
        <tbody>
          <tr>
            <td><strong>Name:</strong></td>
            <td>{formData.name}</td>
          </tr>
          <tr>
            <td><strong>Roll No:</strong></td>
            <td>{formData.rollNo}</td>
          </tr>
          <tr>
            <td><strong>Department:</strong></td>
            <td>{formData.department}</td>
          </tr>
          <tr>
            <td><strong>Year:</strong></td>
            <td>{formData.year}</td>
          </tr>
          <tr>
            <td><strong>Tutor Name:</strong></td>
            <td>{formData.tutorName}</td>
          </tr>
          <tr>
            <td><strong>HOD Name:</strong></td>
            <td>{formData.hodName}</td>
          </tr>
          <tr>
            <td><strong>Mobile Number:</strong></td>
            <td>{formData.mobileNumber}</td>
          </tr>
          <tr>
            <td><strong>Email:</strong></td>
            <td>{formData.email}</td>
          </tr>
        </tbody>
      </table>

      <h2>Complaint Information</h2>
      <table>
        <tbody>
          <tr>
            <td><strong>Complaint Date:</strong></td>
            <td>{formData.date}</td>
          </tr>
          <tr>
            <td><strong>Reason:</strong></td>
            <td>{formData.reason}</td>
          </tr>
          <tr>
            <td><strong>Action Required:</strong></td>
            <td>{formData.actionRequired}</td>
          </tr>
          <tr>
            <td><strong>GPS Location:</strong></td>
            <td>{formData.gpsLocation}</td>
          </tr>
        </tbody>
      </table>

      <h2>Images</h2>
      {formData.images.length > 0 ? (
        formData.images.map((image, index) => (
          <div key={index}>
            <a href={URL.createObjectURL(image)} target="_blank" rel="noopener noreferrer">
              <img src={URL.createObjectURL(image)} alt={image.name || `Image ${index}`} style={{ maxWidth: '100px', maxHeight: '100px' }} />
            </a>
          </div>
        ))
      ) : (
        <p>No images uploaded.</p>
      )}

      <div className='confirmation-button'>
        <button onClick={handleGoBack}>Go To Dashboard</button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
