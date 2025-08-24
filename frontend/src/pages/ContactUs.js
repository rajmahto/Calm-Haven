import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import "../styles/ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const navigate = useNavigate();
  const [success, setSuccess] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );
      if (response.data.success) {
        setSuccess("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      setSuccess("Failed to send message. Try again later.");
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <div className="button-group">
            <button type="submit" className="send-button">
              Send Message
            </button>
            <button
              type="button"
              className="back-btn"
              onClick={() => navigate("/")}
            >
              <FaArrowLeft /> Back
            </button>
          </div>
        </form>
        {success && <p className="message-status">{success}</p>}
      </div>
    </div>
  );
};

export default ContactUs;
