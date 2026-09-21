import React, { useState, useEffect } from 'react';
import Button from './Button';
import './Header.css';

/**
 * Reusable Header Component (Assignment 2 Requirement)
 * Accepts props:
 * @param {boolean} darkMode - Current theme state (true for dark, false for light)
 * @param {function} onToggleTheme - Callback event handler to toggle theme
 */
const Header = ({ darkMode, onToggleTheme }) => {
  // React State for Mobile Navigation Drawer (Assignment 2 State requirement)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // React State for Header Scrolled State
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor window scroll to add glass shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking any nav link
  const handleNavLinkClick = (e, targetId) => {
    setMobileMenuOpen(false);
    // Smooth scroll handled by native anchor + html scroll-behavior: smooth
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
    { name: 'Demonstration', href: '#demo' }
  ];

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        {/* Portfolio Logo / Brand */}
        <a href="#home" className="header-logo" onClick={(e) => handleNavLinkClick(e, 'home')}>
          <span className="logo-badge">SG</span>
          <span className="logo-text">
            Shyam<span className="gradient-text">.Dev</span>
          </span>
        </a>

        {/* Desktop Navigation Menu */}
        <nav className="header-nav-desktop" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name} className="nav-item">
                <a
                  href={link.href}
                  className="nav-link"
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Controls: Dark/Light Mode Toggle + Resume Button + Mobile Hamburger */}
        <div className="header-actions">
          {/* Light/Dark Mode Toggle Button with React State and Events */}
          <Button
            onClick={onToggleTheme}
            variant="ghost"
            className="theme-toggle-btn"
            ariaLabel={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            icon={darkMode ? '☀️' : '🌙'}
            text={darkMode ? 'Light' : 'Dark'}
          />

          {/* Quick Resume Link */}
          <Button
            text="Resume"
            href="/resume.pdf"
            target="_blank"
            download="Shyam_Gupta_Resume.pdf"
            variant="outline"
            className="header-resume-btn"
            icon="📄"
          />

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className={`hamburger-btn ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.name} className="mobile-nav-item">
                <a
                  href={link.href}
                  className="mobile-nav-link"
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-drawer-footer">
            <Button
              text="Download CV"
              href="/resume.pdf"
              target="_blank"
              download="Shyam_Gupta_Resume.pdf"
              variant="primary"
              className="mobile-resume-btn"
              icon="📥"
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
