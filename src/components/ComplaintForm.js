import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ComplaintsContext } from './ComplaintContext';
import './ComplaintForm.css';
import check from '../assets/check.png';

const ComplaintForm = () => {
  const { incrementComplaints } = useContext(ComplaintsContext);
  console.log('incrementComplaints:', incrementComplaints); 
  const [formData, setFormData] = useState({
    name: '',
    rollNo: '',
    department: '',
    year: '',
    tutorName: '',
    hodName: '',
    mobileNumber: '',
    email: '',
    date: '',
    reason: '',
    actionRequired: '',
    gpsLocation: '',
    images: [],
    termsAgreed: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, termsAgreed: e.target.checked });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, images: files });
  };

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setFormData({ ...formData, gpsLocation: `${latitude}, ${longitude}` });
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.termsAgreed) {
      alert('Please agree to the Terms and Conditions before submitting.');
      return;
    }

    const preparedFormData = { ...formData };
    

    const imageFiles = formData.images.map((file) => file.name); 
    preparedFormData.images = imageFiles;

    try {
        const response = await fetch('http://localhost:8080/api/complaints/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(preparedFormData),
        });

        if (response.ok) {
            const result = await response.json();
            console.log('Complaint submitted:', result);
            setIsSubmitted(true);
            navigate('/confirmation', { state: { formData } });
        } else {
            console.error('Failed to submit complaint');
        }
    } catch (error) {
        console.error('Error:', error);
    }
  };

  if (isSubmitted) {
    return (
      <div className="submission-container">
        <h1>Thank You!</h1>
        <p>Your complaint has been submitted successfully.</p>
        <img src={check} alt="Thank You" className="thank-you-image" />
      </div>
    );
  }

  return (
    <div className="complaint-container">
      <div className="complaint-form-section">
        <form onSubmit={handleSubmit}>
          <div className="complaint-form-group">
            <h1>User Information</h1>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="complaint-form-group">
            <label htmlFor="rollNo">Roll No:</label>
            <input
              type="text"
              id="rollNo"
              name="rollNo"
              value={formData.rollNo}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="complaint-form-group">
            <label htmlFor="department">Department:</label>
            <input
              type="text"
              id="department"
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="complaint-form-group">
            <label htmlFor="year">Year:</label>
            
              <select 
                type="number"
                id="year"
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>Select Year</option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="4th Year">4th Year</option>
              </select>
            
          </div>

          <div className="complaint-form-group">
            <label htmlFor="tutorName">Tutor Name:</label>
            <input
              type="text"
              id="tutorName"
              name="tutorName"
              value={formData.tutorName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="complaint-form-group">
            <label htmlFor="hodName">HOD Name:</label>
            <input
              type="text"
              id="hodName"
              name="hodName"
              value={formData.hodName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="complaint-form-group">
            <label htmlFor="mobileNumber">Mobile Number:</label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="complaint-form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="complaint-form-group">
            <h1>Complaint Information</h1>
            <label htmlFor="date">Complaint Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="complaint-form-group">
            <label htmlFor="reason">Reason:</label>
            
              <select
              name="reason"
              value={formData.reason}
              onChange={handleInputChange}
              required
              className="form-control"
            >
              <option value="" disabled>Select a reason</option>
              <option value="Ragging">Ragging</option>
              <option value="Harassment">Harassment</option>
              <option value="Drug Abuse">Drug Abuse</option>
              <option value="Cultural Activities">Cultural Activities</option>
              <option value="Scholarship Availability">Scholarship Availability</option>
              <option value="Fee Payment Issues">Fee Payment Issues</option>
              <option value="Security Concerns">Security Concerns</option>
              <option value="Sports Facilities">Sports Facilities</option>
              <option value="Lab Equipment">Lab Equipment</option>
              <option value="Exam Scheduling">Exam Scheduling</option>
              <option value="Transport Facilities">Transport Facilities</option>
              <option value="Counseling Services">Counseling Services</option>
              <option value="Administrative Support">Administrative Support</option>
              <option value="Classroom Facilities">Classroom Facilities</option>
              <option value="Canteen Food Quality">Canteen Food Quality</option>
              <option value="Hostel Maintenance">Hostel Maintenance</option>
              <option value="Internet Connectivity">Internet Connectivity</option>
              <option value="Library Access Issues">Library Access Issues</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="complaint-form-group">
            <label htmlFor="actionRequired">What action needs to be taken to resolve this issue?</label>
            <textarea
              id="actionRequired"
              name="actionRequired"
              value={formData.actionRequired}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          <div className="complaint-form-group">
            <label htmlFor="gpsLocation">GPS Location:</label>
            <input
              type="text"
              id="gpsLocation"
              name="gpsLocation"
              value={formData.gpsLocation}
              readOnly
            />
            <button type="button" onClick={handleGetLocation}>
              Get Current Location
            </button>
          </div>

          <div className="complaint-form-group">
            <label htmlFor="images">Images:</label>
            <input
              type="file"
              id="images"
              multiple
              onChange={handleImageChange}
            />
          </div>

          <div className="complaint-form-group">
            <label>
              <input
                type="checkbox"
                checked={formData.termsAgreed}
                onChange={handleCheckboxChange}
                required
              />
              All the data I submitted is truthful, and I am responsible for that.
            </label>
          </div>

          <div className="complaint-form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ComplaintForm;
