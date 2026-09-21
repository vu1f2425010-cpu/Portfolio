import React, { useState } from 'react';
import Card from '../components/Card';
import { skillsData } from '../data/skillsData';
import './Skills.css';

/**
 * Skills Section (Assignment 1 Requirement)
 * Highlights:
 * - HTML, CSS, JavaScript, React.js, Java, C, Git/GitHub, Responsive Web Design
 * - Rendered using reusable Card components (Assignment 2 Requirement)
 * - Interactive category filtering using React State (useState)
 * - Hover animations and proficiency badges
 */
const Skills = () => {
  // React State for active skill category filter
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Frontend Development', 'Programming & Backend', 'Tools, Workflow & Security'];

  const filteredCategories = activeCategory === 'All'
    ? skillsData
    : skillsData.filter((cat) => cat.category === activeCategory);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <span className="pulse-dot"></span> Technical Toolbox
          </span>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Competencies</span>
          </h2>
          <p className="section-subtitle">
            Technologies, libraries, and languages I actively use to engineer clean, responsive, and maintainable software.
          </p>
        </div>

        {/* Category Filter Pills (Demonstrates React Events & State) */}
        <div className="skills-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid rendered using reusable Card components */}
        <div className="skills-grid">
          {filteredCategories.map((cat, idx) => (
            <Card
              key={idx}
              title={cat.category}
              description={cat.description}
              icon={cat.icon}
              badge={`${cat.skills.length} Skills`}
              variant="skill"
              className="skills-category-card"
            >
              {/* Skill Badges & Level Indicators */}
              <div className="skills-badge-list">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-chip glass-panel">
                    <span className="skill-chip-icon">{skill.icon}</span>
                    <div className="skill-chip-info">
                      <span className="skill-chip-name">{skill.name}</span>
                      <span className="skill-chip-level">{skill.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Featured Core Badges Banner */}
        <div className="core-skills-banner glass-panel">
          <h4 className="core-banner-title">🚀 Core Development Focus</h4>
          <div className="core-pills-row">
            <span className="core-pill highlight-pill">React.js Ecosystem</span>
            <span className="core-pill">Modern JavaScript (ES6+)</span>
            <span className="core-pill">HTML5 & CSS3 Flexbox/Grid</span>
            <span className="core-pill">Responsive Design Patterns</span>
            <span className="core-pill">Git Version Control</span>
            <span className="core-pill">Java & C Fundamentals</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
