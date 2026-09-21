import React from 'react';
import Card from '../components/Card';
import { educationData } from '../data/educationData';
import './Education.css';

/**
 * Education Section Component (Assignment Requirement 1)
 * Displays:
 * - Degree / Diploma details
 * - College / School name
 * - CGPA / Academic marks
 * - Graduation year and timeline
 * Renders in a clean, modern card format using the reusable Card component.
 */
const Education = () => {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <span className="pulse-dot"></span> Academic Journey
          </span>
          <h2 className="section-title">
            Education & <span className="gradient-text">Qualifications</span>
          </h2>
          <p className="section-subtitle">
            Formal foundations in Computer Engineering, core computer science principles, and hands-on software development.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="education-grid">
          {educationData.map((item) => (
            <Card
              key={item.id}
              title={item.degree}
              subtitle={item.collegeName || item.institution}
              description={item.description}
              badge={item.badge}
              icon="🎓"
              variant="education"
              className="education-card-item"
            >
              {/* Institutional Affiliation */}
              {item.institution && item.collegeName && (
                <div className="education-affil">
                  <span className="affil-label">Affiliated to:</span>
                  <span className="affil-val">{item.institution}</span>
                </div>
              )}

              {/* Education Details: Graduation Year & CGPA / Marks */}
              <div className="education-card-meta">
                <div className="meta-row">
                  <span className="meta-icon">🎓</span>
                  <span className="meta-text graduation-pill">{item.graduationYear}</span>
                </div>
                <div className="meta-row">
                  <span className="meta-icon">📅</span>
                  <span className="meta-text">{item.period}</span>
                </div>
                <div className="meta-row">
                  <span className="meta-icon">🏆</span>
                  <span className="meta-text score-text cgpa-badge">{item.cgpa || item.score}</span>
                </div>
              </div>

              {item.highlights && item.highlights.length > 0 && (
                <div className="education-highlights">
                  <h4 className="highlights-title">Academic Highlights & Coursework:</h4>
                  <ul className="highlights-list">
                    {item.highlights.map((point, idx) => (
                      <li key={idx} className="highlight-point">
                        <span className="bullet-indicator">▹</span> {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
