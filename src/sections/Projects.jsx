import React, { useState } from 'react';
import Card from '../components/Card';
import { projectsData } from '../data/projectsData';
import './Projects.css';

/**
 * Projects Section (Assignment 1 Requirement)
 * Highlights:
 * - Dynamically renders projects array using Array.prototype.map()
 * - Passes project details to reusable Card component via PROPS (Assignment 2 Requirement)
 * - Includes project title, description, technologies, View Project button, GitHub button
 * - Filter by category using React State (useState) & Events (onClick)
 */
const Projects = () => {
  // React State for active project category filter
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterOptions = ['All', 'Full Stack', 'Web Application', 'AI & Analytics', 'Cyber Security'];

  const displayedProjects = selectedFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <span className="pulse-dot"></span> Featured Portfolio
          </span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Real-world applications built with React, modern web standards, API integrations, and robust database architectures.
          </p>
        </div>

        {/* Category Filter Controls */}
        <div className="projects-filter-bar">
          {filterOptions.map((option) => (
            <button
              key={option}
              type="button"
              className={`project-filter-btn ${selectedFilter === option ? 'active' : ''}`}
              onClick={() => setSelectedFilter(option)}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Dynamic Project Cards Grid rendered via map() */}
        <div className="projects-grid">
          {displayedProjects.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              link={project.link}
              linkText={project.linkText || 'View Project'}
              githubLink={project.githubLink}
              badge={project.category}
              variant="project"
              className="project-card-item"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
