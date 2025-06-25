import React, { useState } from 'react';
import './contactusscreen.css';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaInstagram, FaTiktok } from 'react-icons/fa6';

const ContactUsScreen = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

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
    if (!executeRecaptcha) {
      alert('Recaptcha not ready');
      return;
    }

    setIsSubmitting(true);

    try {
      const token = await executeRecaptcha('contact_form'); // label can be anything

      const response = await fetch('https://emelie-hallett-music-backend.onrender.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, captcha: token }), // 👈 Include captcha
      });

      if (response.ok) {
        alert('Thank you! Your message has been sent.');
        setFormData({ Name: '', email: '', phone: '', message: '' });
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
        <h1 className="contact-title text-pink-500">Contact Me</h1>
        <p className="contact-message">
          Feel free to use the form or drop me an email. An old-fashioned phone call is good, too. Or reach out via my social media linked below.
        </p>
        <div className="contact-details">
          <div className="contact-detail">
            <FiPhone className="text-pink-500 text-xl" />
            <span>07799634410</span>
          </div>
          <div className="contact-detail">
            <FiMail className="text-pink-500 text-xl" />
            <span>emelie.hallett@yahoo.com</span>
          </div>
          <div className="contact-detail">
            <FiMapPin className="text-pink-500 text-xl" />
            <span>Hampshire, Surrey, London, Sussex, Berkshire</span>
          </div>
              <div className="flex gap-6">
                <a
                  href="https://www.instagram.com/emeliehallett/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-pink-400 hover:text-pink-300 transition-colors"
                >
                  <FaInstagram size={28} />
                </a>
                <a
                  href="https://www.tiktok.com/@emeliehallettmusic"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="text-pink-400 hover:text-pink-300 transition-colors"
                >
                  <FaTiktok size={28} />
                </a>
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
