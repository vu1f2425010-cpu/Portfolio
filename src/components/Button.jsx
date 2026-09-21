import React from 'react';
import './Button.css';

/**
 * Reusable Button Component (Assignment 2 Requirement)
 * Accepts props:
 * @param {string} text - Text to display on the button
 * @param {function} onClick - Click event handler
 * @param {string} type - Button type ('button' | 'submit' | 'reset')
 * @param {string} variant - Visual style ('primary' | 'outline' | 'secondary' | 'ghost' | 'icon')
 * @param {string} href - Optional link URL; renders an <a> anchor if provided
 * @param {string} target - Anchor target (e.g. '_blank')
 * @param {boolean} disabled - Whether the button is disabled
 * @param {React.ReactNode} icon - Optional icon element
 * @param {React.ReactNode} children - Fallback/additional child elements
 * @param {string} className - Optional extra CSS class names
 */
const Button = ({
  text,
  onClick,
  type = 'button',
  variant = 'primary',
  href,
  target,
  rel,
  download,
  disabled = false,
  icon,
  children,
  className = '',
  ariaLabel
}) => {
  const buttonClass = `btn btn-${variant} ${className} ${disabled ? 'btn-disabled' : ''}`.trim();
  const content = (
    <>
      {icon && <span className="btn-icon">{icon}</span>}
      <span>{text || children}</span>
    </>
  );

  // If an href is supplied, render an accessible anchor tag styled as a button
  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        className={buttonClass}
        onClick={disabled ? (e) => e.preventDefault() : onClick}
        target={target}
        rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
        download={download}
        aria-label={ariaLabel || text}
        role="button"
      >
        {content}
      </a>
    );
  }

  // Otherwise render a standard native button
  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel || text}
    >
      {content}
    </button>
  );
};

export default Button;
