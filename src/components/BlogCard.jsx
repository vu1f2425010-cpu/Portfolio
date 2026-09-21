import React from 'react';
import './BlogCard.css';

/**
 * Reusable BlogCard Component (Assignment Requirement)
 * Displays an individual blog article card with category badge, date, title, summary, and action link.
 * 
 * @param {Object} props
 * @param {Object} props.post - Blog post object containing id, title, category, date, summary
 * @param {string} [props.className] - Optional extra CSS class
 */
const BlogCard = ({ post, className = '' }) => {
  if (!post) return null;

  const { id, title, category, date, summary, readTime, tags } = post;

  // Format date to human-readable string (e.g., "Mar 15, 2026")
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  // Dynamic category badge styling
  const getCategoryClass = (cat) => {
    switch (cat?.toLowerCase()) {
      case 'react':
        return 'badge-react';
      case 'css':
        return 'badge-css';
      case 'javascript':
        return 'badge-js';
      case 'backend':
        return 'badge-backend';
      default:
        return 'badge-default';
    }
  };

  return (
    <article className={`blog-card ${className}`} id={`blog-post-${id}`}>
      {/* Top Meta: Category Badge + Date + Read Time */}
      <div className="blog-card-header">
        <span className={`blog-category-badge ${getCategoryClass(category)}`}>
          {category}
        </span>
        <div className="blog-card-timing">
          <time dateTime={date} className="blog-date">
            📅 {formattedDate}
          </time>
          {readTime && (
            <span className="blog-read-time">⏱️ {readTime}</span>
          )}
        </div>
      </div>

      {/* Blog Title */}
      <h3 className="blog-card-title">{title}</h3>

      {/* Blog Summary */}
      <p className="blog-card-summary">{summary}</p>

      {/* Tags List if available */}
      {tags && tags.length > 0 && (
        <div className="blog-card-tags" aria-label="Post tags">
          {tags.map((tag, idx) => (
            <span key={idx} className="blog-tag-pill">
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Card Action Link */}
      <div className="blog-card-footer">
        <a 
          href={`#blog-post-${id}`} 
          className="blog-read-link"
          onClick={(e) => {
            e.preventDefault();
            alert(`Opening article: "${title}"\n\nCategory: ${category}\nPublished: ${formattedDate}\n\nSummary:\n${summary}`);
          }}
          aria-label={`Read full article about ${title}`}
        >
          <span>Read Article</span>
          <span className="arrow-icon" aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
};

export default BlogCard;
