import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';
import axios from 'axios';  // Import axios

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      
      const response = await axios.post('http://localhost:8080/api/contact/contact', {
        firstName: formData.first_name,
        lastName: formData.last_name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      });

      console.log('Form Data Submitted:', response.data);

      
      navigate('/contactdetails', { state: { formData } });

    } catch (error) {
      console.error('Error submitting form:', error);
      
    }
  };

  return (
    <div className="contact-form-container-unique">
      <h1>Contact Us</h1>
      <p>We will get back to you as soon as possible!</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group-unique">
          <label>Name</label>
          <div className="name-inputs-unique">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group-unique">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-unique">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group-unique">
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
