import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import './Hero.css';

/**
 * Hero Section
 * Aligned with Shyam Gupta's Resume:
 * - Full Stack Developer | Backend Developer | Thane, Mumbai
 * - Core experience: GrubGain, DecodeLabs, Python, React.js, Node.js, MongoDB
 * - Primary Accent #38BDF8 [Electric Blue], Secondary Accent #FACC15 [Gold hover]
 */
const Hero = () => {
  const roles = [
    'Full Stack Developer',
    'Backend Developer & API Architect',
    'React.js & Next.js Engineer',
    'MongoDB Aggregation & Database Specialist'
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
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
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>

      <div className="container hero-container">
        {/* Left Column: Copy & Actions */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="pulse-dot"></span>
            <span>📍 Thane, Mumbai • Available for Roles</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">SHYAM GUPTA</span>
          </h1>

          <h2 className="hero-subtitle">
            Full Stack Developer | Backend Developer
          </h2>

          <div className="typing-container">
            <span className="typing-prefix">Specializing in </span>
            <span className="typing-dynamic">{displayText}</span>
            <span className="typing-cursor">|</span>
          </div>

          <p className="hero-description">
            Engineered scalable APIs and real-time web applications with practical full-stack and backend experience. Proficient in <strong>Python</strong>, <strong>JavaScript</strong>, <strong>React.js</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>. Built real-time restaurant comparison engines at <strong>GrubGain</strong> and delivered end-to-end production products at <strong>DecodeLabs</strong>.
          </p>

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
            <Button
              text="Download CV"
              href="/resume.pdf"
              target="_blank"
              download="Shyam_Gupta_Resume.pdf"
              variant="secondary"
              icon="📄"
            />
          </div>

          <div className="hero-tech-pills">
            <span className="tech-pill">⚛️ React.js & Next.js</span>
            <span className="tech-pill">🟢 Node.js & Express</span>
            <span className="tech-pill">🍃 MongoDB Aggregations</span>
            <span className="tech-pill">🐍 Python & APIs</span>
            <span className="tech-pill">🛡️ Cisco Cybersecurity</span>
          </div>
        </div>

        {/* Right Column: Profile Visual */}
        <div className="hero-visual">
          <div className="photo-wrapper">
            <div className="photo-glow-ring"></div>
            <img
              src="/myphoto.jpg"
              alt="Shyam Gupta"
              className="hero-avatar"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1534972195531-a756b1126f24?w=500&auto=format&fit=crop&q=80';
              }}
            />

            <div className="floating-badge badge-top-right glass-panel">
              <span className="floating-badge-icon">💼</span>
              <div>
                <span className="floating-badge-title">GrubGain & DecodeLabs</span>
                <span className="floating-badge-desc">Internship Experience</span>
              </div>
            </div>

            <div className="floating-badge badge-bottom-left glass-panel">
              <span className="floating-badge-icon">🎓</span>
              <div>
                <span className="floating-badge-title">B.E. Computer Eng.</span>
                <span className="floating-badge-desc">Mumbai University (3rd Yr)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
