import React from 'react';
import Form from '../components/Form';
import './Contact.css';

/**
 * Contact Section (Assignment 1 Requirement)
 * Exact Contact info from Shyam Gupta's Resume:
 * - Phone: +91 9321407216
 * - Email: pg275017@gmail.com
 * - Location: Thane, Mumbai
 * - GitHub: github.com/vu1f2425010-cpu
 * - LinkedIn: linkedin.com/in/Shyam-Gupta
 * - Portfolio: port-drab-sigma.vercel.app
 */
const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <span className="pulse-dot"></span> Get In Touch
          </span>
          <h2 className="section-title">
            Let's Build Something <span className="gradient-text">Exceptional</span>
          </h2>
          <p className="section-subtitle">
            Open to full-time roles, internships, backend engineering projects, and full-stack collaborations.
          </p>
        </div>

        <div className="contact-layout">
          {/* Left Column: Direct Contact Info */}
          <div className="contact-info-col">
            <div className="contact-info-card glass-panel">
              <span className="contact-info-badge">Direct Channels</span>
              <h3 className="contact-info-title">Shyam Gupta</h3>
              <p className="contact-info-desc">
                Feel free to call, email, or connect via LinkedIn and GitHub. I look forward to discussing software engineering opportunities.
              </p>

              <div className="contact-methods-list">
                {/* Phone */}
                <a href="tel:+919321407216" className="contact-method-item">
                  <div className="method-icon-box">📞</div>
                  <div>
                    <span className="method-label">Phone</span>
                    <span className="method-value">+91 9321407216</span>
                  </div>
                </a>

                {/* Email */}
                <a href="mailto:pg275017@gmail.com" className="contact-method-item">
                  <div className="method-icon-box">📧</div>
                  <div>
                    <span className="method-label">Email</span>
                    <span className="method-value">pg275017@gmail.com</span>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/vu1f2425010-cpu"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-method-item"
                >
                  <div className="method-icon-box">💻</div>
                  <div>
                    <span className="method-label">GitHub</span>
                    <span className="method-value">github.com/vu1f2425010-cpu</span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/Shyam-Gupta"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-method-item"
                >
                  <div className="method-icon-box">💼</div>
                  <div>
                    <span className="method-label">LinkedIn</span>
                    <span className="method-value">linkedin.com/in/Shyam-Gupta</span>
                  </div>
                </a>

                {/* Location */}
                <div className="contact-method-item">
                  <div className="method-icon-box">📍</div>
                  <div>
                    <span className="method-label">Location</span>
                    <span className="method-value">Thane, Mumbai (Open to Relocation & Remote)</span>
                  </div>
                </div>
              </div>

              <div className="contact-availability-banner">
                <span className="pulse-dot"></span>
                <span>Ready for Full Stack / Backend Engineering Opportunities</span>
              </div>
            </div>
          </div>

          {/* Right Column: Controlled Form Component (Assignment 2 Requirement) */}
          <div className="contact-form-col">
            <Form
              title="Send a Direct Message"
              subtitle="Fill out the fields below to get in touch. Controlled React state and email validation are active."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
