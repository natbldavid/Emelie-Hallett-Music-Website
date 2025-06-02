import React, { useState } from 'react';
import './contactusscreen.css';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

const ContactUsScreen = () => {
  const [formData, setFormData] = useState({
    Name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFormValid = () => {
    const { Name, email, message } = formData;
    return Name.trim() && email.trim() && message.trim();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) return;
    setIsSubmitting(true);

    try {
      const response = await fetch('https://emelie-hallett-music-backend.onrender.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Thank you! Your message has been sent.');
        setFormData({
          Name: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('An error occurred. Please try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="contact-container">
      {/* Left Side */}
      <div className="contact-info">
        <h1 className="contact-title text-orange-500">Contact Us</h1>
        <p className="contact-message">
          Feel free to use the form or drop us an email. An old-fashioned phone call is good, too.
        </p>
        <div className="contact-details">
          <div className="contact-detail">
            <FiPhone className="contact-icon" />
            <span>0121doone</span>
          </div>
          <div className="contact-detail">
            <FiMail className="contact-icon" />
            <span>maintenanceman@gmail.com</span>
          </div>
          <div className="contact-detail">
            <FiMapPin className="contact-icon" />
            <span>123 Maintenance Ave, Kings Building, UK</span>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="name-fields">
          <input
            type="text"
            name="Name"
            placeholder="Your Name"
            value={formData.Name}
            onChange={handleChange}
            className="contact-input"
            required
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="contact-input"
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone (optional)"
          value={formData.phone}
          onChange={handleChange}
          className="contact-input"
        />

        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="contact-textarea"
          required
        />

        <button
          type="submit"
          className={`contact-button ${!isFormValid() || isSubmitting ? 'disabled' : ''}`}
          disabled={!isFormValid() || isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default ContactUsScreen;
