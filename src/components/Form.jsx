import React, { useState } from 'react';
import Button from './Button';
import './Form.css';

/**
 * Reusable Contact Form Component (Assignment 2 Requirement)
 * Demonstrates:
 * - Controlled React state (useState for form fields and validation errors)
 * - Event handling: onChange, onSubmit, onClick
 * - Client-side validation for name, email regex, message
 * - Instant feedback and form reset upon successful submission
 * 
 * Props:
 * @param {string} title - Form heading
 * @param {string} subtitle - Form subtitle
 * @param {function} onSubmitSuccess - Optional callback on valid submission
 */
const Form = ({
  title = 'Send Me a Message',
  subtitle = "Have a project or inquiry? Fill out the form below and I'll respond within 24 hours.",
  onSubmitSuccess
}) => {
  // 1. React State: Form Input Values (Controlled components)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // 2. React State: Validation Errors
  const [errors, setErrors] = useState({});

  // 3. React State: Submission Status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  // Email validation regex helper
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // React Event: onChange for controlled inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    // Clear individual error as the user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null
      }));
    }
  };

  // Form Validation Logic
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!isValidEmail(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address (e.g. name@domain.com).';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // React Event: onSubmit form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent native browser reload

    if (!validateForm()) {
      setStatusMessage({
        type: 'error',
        text: 'Please correct the highlighted errors above.'
      });
      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);

    // Simulate asynchronous submission handling
    setTimeout(() => {
      setIsSubmitting(false);
      setStatusMessage({
        type: 'success',
        text: `Thank you, ${formData.name}! Your message has been sent successfully. I'll get back to you soon.`
      });

      // Clear the form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setErrors({});

      if (onSubmitSuccess) {
        onSubmitSuccess();
      }
    }, 900);
  };

  // React Event: onClick to reset/clear form
  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setErrors({});
    setStatusMessage(null);
  };

  return (
    <div className="contact-form-wrapper glass-panel">
      {title && <h3 className="form-title">{title}</h3>}
      {subtitle && <p className="form-subtitle">{subtitle}</p>}

      {/* Submission Alert Banner */}
      {statusMessage && (
        <div className={`form-alert form-alert-${statusMessage.type}`}>
          <span>{statusMessage.type === 'success' ? '✅' : '⚠️'}</span>
          <p>{statusMessage.text}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="contact-form" noValidate>
        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Your Name <span className="required-star">*</span>
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="e.g. Shyam Gupta"
            value={formData.name}
            onChange={handleChange}
            className={`form-input ${errors.name ? 'input-error' : ''}`}
            disabled={isSubmitting}
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email Address <span className="required-star">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="e.g. pg275017@gmail.com"
            value={formData.email}
            onChange={handleChange}
            className={`form-input ${errors.email ? 'input-error' : ''}`}
            disabled={isSubmitting}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        {/* Subject Field */}
        <div className="form-group">
          <label htmlFor="subject" className="form-label">
            Subject (Optional)
          </label>
          <input
            id="subject"
            type="text"
            name="subject"
            placeholder="e.g. Collaboration on Web Project"
            value={formData.subject}
            onChange={handleChange}
            className="form-input"
            disabled={isSubmitting}
          />
        </div>

        {/* Message Field */}
        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Your Message <span className="required-star">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write your message or project requirements here..."
            value={formData.message}
            onChange={handleChange}
            className={`form-textarea ${errors.message ? 'input-error' : ''}`}
            disabled={isSubmitting}
          ></textarea>
          {errors.message && <span className="error-text">{errors.message}</span>}
        </div>

        {/* Form Action Controls */}
        <div className="form-actions">
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            text={isSubmitting ? 'Sending Message...' : 'Send Message'}
            icon={isSubmitting ? '⏳' : '🚀'}
          />
          <Button
            type="button"
            variant="ghost"
            onClick={handleReset}
            disabled={isSubmitting}
            text="Clear Form"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
