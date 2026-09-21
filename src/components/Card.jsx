import React from 'react';
import Button from './Button';
import './Card.css';

/**
 * Reusable Card Component (Assignment 2 Requirement)
 * Adaptable across: Projects, Education, Skills, and Demos
 * Accepts props:
 * @param {string} title - Card heading
 * @param {string} subtitle - Subheading or institution/category
 * @param {string} description - Descriptive text body
 * @param {string} image - Optional image URL / screenshot
 * @param {Array<string>} technologies - Array of technology/skill tags
 * @param {string} link - Primary destination URL
 * @param {string} linkText - Label for the primary action button
 * @param {string} githubLink - Optional repository URL
 * @param {string} badge - Highlight badge text (e.g. "CGPA", "Featured")
 * @param {string} icon - Category or item emoji/icon
 * @param {string} variant - Card style variant ('default' | 'project' | 'education' | 'skill' | 'interactive')
 * @param {React.ReactNode} children - Additional custom elements
 * @param {string} className - Optional additional CSS class
 */
const Card = ({
  title,
  subtitle,
  description,
  image,
  technologies = [],
  link,
  linkText = 'View Details',
  githubLink,
  badge,
  icon,
  variant = 'default',
  children,
  className = ''
}) => {
  return (
    <div className={`card card-${variant} glass-panel ${className}`}>
      {/* Optional Card Image Banner (Used in Projects) */}
      {image && (
        <div className="card-image-container">
          <img src={image} alt={title || 'Project Preview'} className="card-image" loading="lazy" />
          <div className="card-image-overlay">
            {link && (
              <Button
                href={link}
                text="Live Demo"
                variant="primary"
                className="btn-card-overlay"
              />
            )}
          </div>
        </div>
      )}

      <div className="card-content">
        {/* Card Header with optional icon & badge */}
        <div className="card-header">
          <div className="card-header-left">
            {icon && <span className="card-icon">{icon}</span>}
            <div>
              {title && <h3 className="card-title">{title}</h3>}
              {subtitle && <p className="card-subtitle">{subtitle}</p>}
            </div>
          </div>
          {badge && <span className="card-badge">{badge}</span>}
        </div>

        {/* Card Description */}
        {description && <p className="card-description">{description}</p>}

        {/* Technologies / Skill Tags */}
        {technologies && technologies.length > 0 && (
          <div className="card-tags">
            {technologies.map((tech, idx) => (
              <span key={idx} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Nested / Child Content (e.g., Education highlights, Skill list) */}
        {children && <div className="card-body-children">{children}</div>}

        {/* Card Footer Actions (Buttons) */}
        {(link || githubLink) && (
          <div className="card-actions">
            {link && (
              <Button
                text={linkText}
                href={link}
                variant="primary"
                icon="↗"
              />
            )}
            {githubLink && (
              <Button
                text="GitHub"
                href={githubLink}
                target="_blank"
                variant="outline"
                icon="🐙"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
