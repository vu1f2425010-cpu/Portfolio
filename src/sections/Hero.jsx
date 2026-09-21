import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import './Hero.css';

/**
 * Hero Section
 * Highlights:
 * - "Hi, I'm Shyam Gupta"
 * - "Computer Engineering Student & Aspiring Full Stack Developer"
 * - Core interests: Web Dev, React, Full-Stack, New Technologies
 * - CTAs: "View My Projects" & "Contact Me" using reusable Button
 * - Subtle animations: Typing text rotation, floating cards, glowing photo ring
 */
const Hero = () => {
  // Rotating typing specialties
  const roles = [
    'Full Stack Development',
    'React & Modern JavaScript',
    'Responsive Web Applications',
    'Cyber Security & Clean Architecture'
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          // Pause at end of word
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section id="home" className="hero-section">
      {/* Background ambient lighting effects */}
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>

      <div className="container hero-container">
        {/* Left Column: Hero Copy & Actions */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="pulse-dot"></span>
            <span>Welcome to my digital portfolio</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Shyam Gupta</span>
          </h1>

          <h2 className="hero-subtitle">
            Computer Engineering Student & <br />
            <span className="hero-role-text">Aspiring Full Stack Developer</span>
          </h2>

          <div className="typing-container">
            <span className="typing-prefix">Passionate about </span>
            <span className="typing-dynamic">{displayText}</span>
            <span className="typing-cursor">|</span>
          </div>

          <p className="hero-description">
            Passionate about modern <strong>Web Development</strong>, programming, and building scalable applications with <strong>React</strong>. Dedicated to learning new technologies, writing maintainable code, and evolving into a skilled <strong>Full Stack Software Engineer</strong>.
          </p>

          {/* Call to Actions using reusable Button component */}
          <div className="hero-buttons">
            <Button
              text="View My Projects"
              href="#projects"
              variant="primary"
              icon="🚀"
            />
            <Button
              text="Contact Me"
              href="#contact"
              variant="outline"
              icon="✉️"
            />
          </div>

          {/* Quick Stats or Tech Pill Badges */}
          <div className="hero-tech-pills">
            <span className="tech-pill">⚛️ React.js</span>
            <span className="tech-pill">🌐 JavaScript ES6+</span>
            <span className="tech-pill">💻 Full Stack</span>
            <span className="tech-pill">🛡️ Security Mindset</span>
          </div>
        </div>

        {/* Right Column: Profile Image & Floating Highlights */}
        <div className="hero-visual">
          <div className="photo-wrapper">
            <div className="photo-glow-ring"></div>
            <img
              src="/myphoto.jpg"
              alt="Shyam Gupta"
              className="hero-avatar"
              onError={(e) => {
                // Graceful fallback if image path needs local fallback
                e.target.src = 'https://images.unsplash.com/photo-1534972195531-a756b1126f24?w=500&auto=format&fit=crop&q=80';
              }}
            />

            {/* Floating Glassmorphic Badges */}
            <div className="floating-badge badge-top-right glass-panel">
              <span className="floating-badge-icon">🎓</span>
              <div>
                <span className="floating-badge-title">B.E. Computer Eng.</span>
                <span className="floating-badge-desc">Academic Excellence</span>
              </div>
            </div>

            <div className="floating-badge badge-bottom-left glass-panel">
              <span className="floating-badge-icon">⚡</span>
              <div>
                <span className="floating-badge-title">React & Node.js</span>
                <span className="floating-badge-desc">Modern Web Dev</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
