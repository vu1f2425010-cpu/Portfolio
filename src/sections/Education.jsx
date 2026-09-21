import React from 'react';
import Card from '../components/Card';
import { educationData } from '../data/educationData';
import './Education.css';

/**
 * Education Section (Assignment 1 Requirement)
 * Highlights:
 * - BE in Computer Engineering
 * - College information
 * - Relevant coursework & academic milestones
 * - Renders cleanly using the reusable Card component (Assignment 2 Requirement)
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
            Formal foundations in Computer Engineering, computer science theories, and hands-on software development.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="education-grid">
          {educationData.map((item) => (
            <Card
              key={item.id}
              title={item.degree}
              subtitle={item.institution}
              description={item.description}
              badge={item.badge}
              icon="🎓"
              variant="education"
              className="education-card-item"
            >
              {/* Nested Child Content for Education Details */}
              <div className="education-card-meta">
                <div className="meta-row">
                  <span className="meta-icon">📅</span>
                  <span className="meta-text">{item.period}</span>
                </div>
                <div className="meta-row">
                  <span className="meta-icon">🏆</span>
                  <span className="meta-text score-text">{item.score}</span>
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
