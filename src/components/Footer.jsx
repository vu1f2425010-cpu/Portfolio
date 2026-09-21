import React from 'react';
import Button from './Button';
import './Footer.css';

/**
 * Reusable Footer Component (Assignment 2 Requirement)
 * Displays: Shyam Gupta, Full Stack & Backend Developer (Thane, Mumbai), exact socials and quick links
 */
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Top Footer: Brand, Info, Links */}
        <div className="footer-top">
          <div className="footer-brand-col">
            <a href="#home" className="footer-logo">
              <span className="logo-badge">SG</span>
              <span className="logo-text">
                Shyam<span className="gradient-text">.Dev</span>
              </span>
            </a>
            <p className="footer-description">
              Full Stack Developer & Backend Developer based in Thane, Mumbai. Passionate about architecting high-performance APIs, real-time databases, and responsive React applications.
            </p>
            <div className="footer-status">
              <span className="pulse-dot"></span>
              <span className="status-text">Available for Full Stack & Backend Roles</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About & Experience</a></li>
              <li><a href="#education">Education & Certifications</a></li>
              <li><a href="#skills">Technical Skills</a></li>
              <li><a href="#projects">Featured Projects</a></li>
              <li><a href="#contact">Contact Me</a></li>
              <li><a href="#demo">Learning Showcase</a></li>
            </ul>
          </div>

          {/* Social Links directly from Resume */}
          <div className="footer-social-col">
            <h4 className="footer-col-title">Profiles & Social</h4>
            <div className="social-links-grid">
              <a
                href="https://github.com/vu1f2425010-cpu"
                target="_blank"
                rel="noreferrer"
                className="social-btn glass-panel"
                aria-label="GitHub Profile"
              >
                <span className="social-icon">🐙</span>
                <div className="social-info">
                  <span className="social-platform">GitHub</span>
                  <span className="social-handle">@vu1f2425010-cpu</span>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/Shyam-Gupta"
                target="_blank"
                rel="noreferrer"
                className="social-btn glass-panel"
                aria-label="LinkedIn Profile"
              >
                <span className="social-icon">💼</span>
                <div className="social-info">
                  <span className="social-platform">LinkedIn</span>
                  <span className="social-handle">Shyam Gupta</span>
                </div>
              </a>

              <a
                href="mailto:pg275017@gmail.com"
                className="social-btn glass-panel"
                aria-label="Email Shyam"
              >
                <span className="social-icon">📧</span>
                <div className="social-info">
                  <span className="social-platform">Email</span>
                  <span className="social-handle">pg275017@gmail.com</span>
                </div>
              </a>

              <a
                href="tel:+919321407216"
                className="social-btn glass-panel"
                aria-label="Call Shyam"
              >
                <span className="social-icon">📞</span>
                <div className="social-info">
                  <span className="social-platform">Phone</span>
                  <span className="social-handle">+91 9321407216</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Footer: Copyright and Back-to-Top Button */}
        <div className="footer-bottom">
          <p className="copyright-text">
            © {currentYear} <span className="copyright-name">Shyam Gupta</span> • Full Stack & Backend Developer • Thane, Mumbai
          </p>
          <div className="footer-actions">
            <Button
              text="Back to Top"
              onClick={scrollToTop}
              variant="outline"
              icon="↑"
              className="btn-back-to-top"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
