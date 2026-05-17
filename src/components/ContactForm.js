// ContactForm.jsx
import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    email: '',
    invoiceId: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        {/* Left Side - Contact Info */}
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p className="contact-description">
            We're here to help! Expect a response within 48-72 hours.
            Please provide detailed information about your inquiry.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <span className="icon">✉️</span>
              <span>support@company.com</span>
            </div>
            <div className="contact-detail">
              <span className="icon">💬</span>
              <span>24/7 Support Available</span>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter ticket title"
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label>Invoice ID (optional)</label>
              <input
                type="text"
                name="invoiceId"
                value={formData.invoiceId}
                onChange={handleChange}
                placeholder="Enter invoice ID"
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Leave a detailed message..."
                rows={5}
                required
              />
            </div>

            <button type="submit">Create Ticket</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;