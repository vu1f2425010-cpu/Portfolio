import React from 'react';
import Button from './Button';
import './Footer.css';

/**
 * Reusable Footer Component (Assignment 2 Requirement)
 * Displays: Name, short description, social icons, quick links, copyright, and back to top
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
              Computer Engineering Student & Aspiring Full Stack Developer. Dedicated to crafting responsive, performant, and delightful digital web experiences.
            </p>
            <div className="footer-status">
              <span className="pulse-dot"></span>
              <span className="status-text">Available for Internships & Projects</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#demo">Learning Showcase</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-social-col">
            <h4 className="footer-col-title">Connect & Social</h4>
            <div className="social-links-grid">
              <a
                href="https://github.com/Shyamgupta"
                target="_blank"
                rel="noreferrer"
                className="social-btn glass-panel"
                aria-label="GitHub Profile"
              >
                <span className="social-icon">🐙</span>
                <div className="social-info">
                  <span className="social-platform">GitHub</span>
                  <span className="social-handle">@Shyamgupta</span>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/shyam-gupta"
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
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Footer: Copyright and Back-to-Top Button */}
        <div className="footer-bottom">
          <p className="copyright-text">
            © {currentYear} <span className="copyright-name">Shyam Gupta</span>. Built with React.js, HTML5, CSS3 & JavaScript ES6+.
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
