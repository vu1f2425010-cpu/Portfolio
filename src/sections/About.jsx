import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { certificationsData } from '../data/educationData';
import './About.css';

/**
 * About Section (Assignment 1 Requirement)
 * Infused with exact details from Shyam Gupta's Resume:
 * - Professional Summary
 * - Work Experience: GrubGain & DecodeLabs
 * - Industry Certifications: Cisco, MongoDB, Gemini, Power BI, Databricks
 */
const About = () => {
  const experiences = [
    {
      role: 'Backend Developer Intern',
      company: 'GrubGain (Restaurant Tech Startup)',
      period: 'Oct 2024 - Mar 2025',
      points: [
        'Built core restaurant comparison engine from scratch - the main USP of the platform.',
        'Optimized MongoDB aggregation pipelines and indexing, reducing query response times by 40% for real-time comparison.',
        'Tech Stack: Node.js, Express.js, MongoDB, REST APIs, Postman'
      ],
      icon: '🚀'
    },
    {
      role: 'Full Stack Developer Intern',
      company: 'DecodeLabs',
      period: 'Aug 2025 - Sep 2025',
      points: [
        'Led end-to-end development of company products - from UI/UX design to production deployment.',
        'Developed responsive frontend using React.js, Next.js & Tailwind CSS.',
        'Built robust backend APIs using Node.js & Express.js, handling the full project lifecycle.',
        'Delivered 2+ production-ready live products for the company.'
      ],
      icon: '💻'
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <span className="pulse-dot"></span> Professional Summary
          </span>
          <h2 className="section-title">
            Engineering Scalable APIs & <span className="gradient-text">Real-Time Web Apps</span>
          </h2>
          <p className="section-subtitle">
            Full Stack & Backend Developer from Thane, Mumbai with proven production experience building high-throughput systems and modern React web applications.
          </p>
        </div>

        <div className="about-grid">
          {/* Main Narrative */}
          <div className="about-narrative glass-panel">
            <div className="narrative-header">
              <span className="narrative-badge">About Me</span>
              <h3 className="narrative-title">Shyam Gupta</h3>
              <p className="narrative-location">📍 Thane, Mumbai • +91 9321407216 • pg275017@gmail.com</p>
            </div>

            <p className="narrative-text">
              I am a <strong>Full Stack Developer & Backend Developer</strong> specializing in engineered scalable APIs and real-time web applications. With hands-on startup and enterprise experience, I am proficient in <strong>Python, JavaScript, React.js, Node.js, and MongoDB</strong>.
            </p>

            <p className="narrative-text">
              During my internships, I architected the core restaurant comparison engine at <strong>GrubGain</strong> (optimizing MongoDB aggregation queries by 40%) and delivered multiple end-to-end production web applications at <strong>DecodeLabs</strong>. I am passionate about writing clean, maintainable code, designing responsive interfaces, and solving real-world performance bottlenecks.
            </p>

            <div className="about-cta">
              <Button
                text="Download Resume PDF"
                href="/resume.pdf"
                target="_blank"
                download="Shyam_Gupta_Resume.pdf"
                variant="primary"
                icon="📥"
              />
              <Button
                text="Let's Connect"
                href="#contact"
                variant="outline"
                icon="💬"
              />
            </div>
          </div>

          {/* Work Experience Cards */}
          <div className="experience-column">
            <h3 className="experience-heading">💼 Work Experience</h3>
            <div className="experience-list">
              {experiences.map((exp, idx) => (
                <Card
                  key={idx}
                  title={exp.role}
                  subtitle={`${exp.company} | ${exp.period}`}
                  icon={exp.icon}
                  badge={exp.period}
                  variant="default"
                  className="experience-card"
                >
                  <ul className="exp-points-list">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="exp-point">
                        <span className="exp-bullet">▹</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Row directly from Resume */}
        <div className="certifications-banner glass-panel">
          <h4 className="certifications-title">🏅 Industry Certifications</h4>
          <div className="certifications-grid">
            {certificationsData.map((cert, index) => (
              <div key={index} className="cert-item">
                <span className="cert-icon">{cert.icon}</span>
                <div>
                  <span className="cert-name">{cert.name}</span>
                  <span className="cert-issuer">{cert.issuer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
