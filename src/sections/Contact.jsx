import React from 'react';
import Form from '../components/Form';
import Card from '../components/Card';
import './Contact.css';

/**
 * Contact Section (Assignment 1 Requirement)
 * Embeds:
 * - Reusable Form component with state, validation & controlled inputs (Assignment 2 Requirement)
 * - Direct contact channel cards (Email, LinkedIn, GitHub)
 */
const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <span className="pulse-dot"></span> Let's Connect
          </span>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Open to discussing software development internships, freelance collaborations, or exciting web projects.
          </p>
        </div>

        <div className="contact-layout">
          {/* Left Column: Direct Contact Info & Perks */}
          <div className="contact-info-col">
            <div className="contact-info-card glass-panel">
              <span className="contact-info-badge">Contact Information</span>
              <h3 className="contact-info-title">Let's talk about your next project or role</h3>
              <p className="contact-info-desc">
                Feel free to reach out via the form or through any of my direct developer profiles. I typically respond within 24 hours.
              </p>

              <div className="contact-methods-list">
                <a href="mailto:pg275017@gmail.com" className="contact-method-item">
                  <div className="method-icon-box">📧</div>
                  <div>
                    <span className="method-label">Direct Email</span>
                    <span className="method-value">pg275017@gmail.com</span>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/shyam-gupta"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-method-item"
                >
                  <div className="method-icon-box">💼</div>
                  <div>
                    <span className="method-label">LinkedIn Profile</span>
                    <span className="method-value">linkedin.com/in/shyam-gupta</span>
                  </div>
                </a>

                <a
                  href="https://github.com/Shyamgupta"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-method-item"
                >
                  <div className="method-icon-box">💻</div>
                  <div>
                    <span className="method-label">GitHub Workspace</span>
                    <span className="method-value">github.com/Shyamgupta</span>
                  </div>
                </a>

                <div className="contact-method-item">
                  <div className="method-icon-box">📍</div>
                  <div>
                    <span className="method-label">Location</span>
                    <span className="method-value">India (Open to Remote Worldwide)</span>
                  </div>
                </div>
              </div>

              <div className="contact-availability-banner">
                <span className="pulse-dot"></span>
                <span>Currently available for Summer Internships & Freelance Work</span>
              </div>
            </div>
          </div>

          {/* Right Column: Controlled Form Component (Assignment 2 Requirement) */}
          <div className="contact-form-col">
            <Form
              title="Send a Direct Message"
              subtitle="Fill out your contact details and message. Validation and state handling are active in real-time."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
