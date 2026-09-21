import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import './About.css';

/**
 * About Section (Assignment 1 Requirement)
 * Highlights:
 * - Professional introduction
 * - Career and learning interests
 * - Programming interests (React, JavaScript, Java, Full Stack)
 * - Goal of becoming an impactful software engineer
 */
const About = () => {
  const highlights = [
    {
      icon: '🎯',
      title: 'Career Aspiration',
      desc: 'Aspiring to become a world-class Full Stack Software Developer creating scalable web products that solve real-world problems.'
    },
    {
      icon: '🧠',
      title: 'Continuous Learner',
      desc: 'Strong believer in learning by doing. Actively mastering modern React, robust backend architectures, and developer tooling.'
    },
    {
      icon: '🛡️',
      title: 'Security Mindset',
      desc: 'Infusing every project with foundational cyber security best practices, input validation, and defensive programming.'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      desc: 'Enthusiastic team player with good communication, git workflow proficiency, and an eagerness to contribute to engineering teams.'
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <span className="pulse-dot"></span> About Me
          </span>
          <h2 className="section-title">
            Transforming Curiosity into <span className="gradient-text">Modern Web Solutions</span>
          </h2>
          <p className="section-subtitle">
            A dedicated Computer Engineering undergraduate with a drive for full-stack engineering, clean code, and interactive user experiences.
          </p>
        </div>

        <div className="about-grid">
          {/* Main Story Narrative */}
          <div className="about-narrative glass-panel">
            <div className="narrative-header">
              <span className="narrative-badge">My Journey</span>
              <h3 className="narrative-title">Who I Am & What Drives Me</h3>
            </div>

            <p className="narrative-text">
              Hello! I'm <strong>Shyam Gupta</strong>, a passionate Computer Engineering undergraduate who thrives at the intersection of logical problem-solving and creative interface design. My fascination with technology began with foundational programming in <strong>C and Java</strong>, which quickly ignited my enthusiasm for full-stack web development.
            </p>

            <p className="narrative-text">
              Over the past semesters, I've dived deep into the modern JavaScript and <strong>React.js</strong> ecosystem, building dynamic web applications like birthday booking management systems, tutoring portals, and AI analytics dashboards. I enjoy architecting reusable components, managing state smoothly, and applying clean CSS layouts with Flexbox and Grid.
            </p>

            <p className="narrative-text">
              My ultimate career goal is to join a forward-thinking engineering team as a <strong>Full Stack Software Engineer</strong>, where I can collaborate on high-impact projects, write tested and scalable code, and continually push the boundaries of modern web technologies.
            </p>

            <div className="about-cta">
              <Button
                text="Download Complete CV"
                href="/resume.pdf"
                target="_blank"
                variant="primary"
                icon="📥"
              />
              <Button
                text="Get In Touch"
                href="#contact"
                variant="outline"
                icon="💬"
              />
            </div>
          </div>

          {/* Highlights Grid Using Reusable Card Components */}
          <div className="about-highlights-grid">
            {highlights.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.desc}
                icon={item.icon}
                variant="default"
                className="about-highlight-card"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
