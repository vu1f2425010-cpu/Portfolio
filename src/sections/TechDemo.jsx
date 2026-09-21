import React, { useState } from 'react';
import './TechDemo.css';

/**
 * TechDemo Section — "Technical Skills & Week 1 Concepts"
 * (Assignment Step 22 Requirement)
 *
 * Visually demonstrates Week 1 concepts in a way that is
 * native to the existing portfolio design system.
 * Uses: React State (useState), React Events (onClick),
 * CSS Grid, CSS Flexbox, Props, and semantic HTML.
 */

// Concept data stored in a JS array (ES6+, demonstrating data-driven UI)
const week1Concepts = [
  {
    id: 'html',
    icon: '🏷️',
    category: 'HTML5',
    color: '#e34c26',
    glowColor: 'rgba(227, 76, 38, 0.25)',
    items: ['Semantic Structure', '<header> <main> <section>', '<footer> <nav> <article>', 'Accessibility & ARIA', 'alt text & labels'],
    detail:
      'Every section in this portfolio uses semantic HTML5 elements: <header>, <nav>, <main>, <section>, <footer>, <article>. Images include descriptive alt attributes. Form inputs have proper <label> elements linked via htmlFor.',
  },
  {
    id: 'css',
    icon: '🎨',
    category: 'CSS3',
    color: '#38BDF8',
    glowColor: 'rgba(56, 189, 248, 0.25)',
    items: ['Flexbox Navigation', 'CSS Grid Layout', 'Responsive Design', 'Custom Properties', 'Glassmorphism'],
    detail:
      'Flexbox is used in the Header nav, Hero buttons, social links, and filter bars. CSS Grid drives the Projects, Skills, Education, and TechDemo grids. Media queries ensure full responsiveness from 320px to 1600px+. CSS custom properties define the entire design token system.',
  },
  {
    id: 'js',
    icon: '⚡',
    category: 'JavaScript ES6+',
    color: '#FACC15',
    glowColor: 'rgba(250, 204, 21, 0.25)',
    items: ['const & let', 'Arrow Functions', 'Template Literals', 'Destructuring', 'Array .map() & .filter()', 'Spread Operator', 'ES Modules'],
    detail:
      'Arrow functions are used throughout components. Array.map() renders all project, education, and skill cards. Array.filter() powers the Projects and Skills filter bars. Destructuring is used in every component props signature. ES Modules (import/export) organize the data layer.',
  },
  {
    id: 'react',
    icon: '⚛️',
    category: 'React',
    color: '#61dafb',
    glowColor: 'rgba(97, 218, 251, 0.25)',
    items: ['Functional Components', 'Props', 'useState Hook', 'useEffect Hook', 'Event Handlers', 'Controlled Forms', 'Component Reuse'],
    detail:
      'The entire portfolio is built with reusable React components. Props flow data from parent to child (App → Header → Button). useState manages: dark/light mode, mobile menu, form inputs, filter selections, and typing animation. useEffect syncs theme to DOM and manages scroll events. onClick, onChange, and onSubmit event handlers are active throughout.',
  },
];

// Component breakdown for the architecture showcase
const componentMap = [
  { name: 'Header', type: 'component', description: 'Nav, dark mode toggle, mobile drawer', state: 'mobileMenuOpen, isScrolled', props: 'darkMode, onToggleTheme', events: 'onClick, scroll' },
  { name: 'Footer', type: 'component', description: 'Social links, navigation, copyright', state: '—', props: 'none (standalone)', events: 'onClick (scrollToTop)' },
  { name: 'Card', type: 'component', description: 'Reusable across Projects, Education, Skills', state: '—', props: 'title, subtitle, description, technologies, link, badge, icon, variant, children', events: '—' },
  { name: 'Button', type: 'component', description: 'Renders <button> or <a> based on href prop', state: '—', props: 'text, variant, onClick, type, href, target, disabled, icon', events: 'onClick' },
  { name: 'Form', type: 'component', description: 'Contact form with validation', state: 'formData, errors, isSubmitting, statusMessage', props: 'title, subtitle, onSubmitSuccess', events: 'onChange, onSubmit, onClick (reset)' },
];

const TechDemo = () => {
  // React State: track which concept card is expanded (demonstrates useState)
  const [activeCard, setActiveCard] = useState(null);
  // React State: track active tab in the component map
  const [activeTab, setActiveTab] = useState('component');

  // React Event Handler: toggle expanded card
  const handleCardToggle = (id) => {
    setActiveCard((prev) => (prev === id ? null : id));
  };

  return (
    <section id="demo" className="section tech-demo-section" aria-label="Week 1 Technical Concepts Showcase">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <span className="pulse-dot"></span> Week 1 Showcase
          </span>
          <h2 className="section-title">
            Technical Skills &amp; <span className="gradient-text">Week 1 Concepts</span>
          </h2>
          <p className="section-subtitle">
            A structured overview of the technologies and React concepts demonstrated throughout this portfolio — built as one cohesive professional product.
          </p>
        </div>

        {/* === CONCEPT CARDS GRID — CSS Grid + React map() + State + Events === */}
        <div className="demo-concepts-grid" role="list">
          {week1Concepts.map((concept) => {
            const isExpanded = activeCard === concept.id;
            return (
              <article
                key={concept.id}
                className={`demo-concept-card glass-panel ${isExpanded ? 'expanded' : ''}`}
                role="listitem"
                style={{ '--card-accent': concept.color, '--card-glow': concept.glowColor }}
                onClick={() => handleCardToggle(concept.id)}
                aria-expanded={isExpanded}
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleCardToggle(concept.id)}
              >
                <div className="demo-card-header">
                  <div className="demo-card-icon-wrap">
                    <span className="demo-card-icon" aria-hidden="true">{concept.icon}</span>
                  </div>
                  <div className="demo-card-title-group">
                    <h3 className="demo-card-category">{concept.category}</h3>
                    <span className="demo-card-count">{concept.items.length} concepts</span>
                  </div>
                  <span className="demo-card-toggle" aria-hidden="true">
                    {isExpanded ? '▲' : '▼'}
                  </span>
                </div>

                {/* Tag list: always visible */}
                <ul className="demo-concept-tags" aria-label={`${concept.category} concepts`}>
                  {concept.items.map((item, idx) => (
                    <li key={idx} className="demo-concept-tag">
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Expanded detail — React state-driven conditional render */}
                {isExpanded && (
                  <div className="demo-card-detail">
                    <p>{concept.detail}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* === ASSIGNMENT CHECKLIST === */}
        <div className="demo-checklist-grid">
          {/* Assignment 1 */}
          <div className="demo-checklist-panel glass-panel">
            <h3 className="demo-checklist-title">
              <span className="demo-check-icon">📋</span> Assignment 1 — Portfolio
            </h3>
            <ul className="demo-checklist">
              {[
                'Responsive Personal Portfolio',
                'About Section (Professional Summary + Experience)',
                'Education Section (BE, HSC, SSC with Cards)',
                'Projects Section (Dynamic cards via .map())',
                'Contact Section (Form + Direct Info)',
              ].map((item, idx) => (
                <li key={idx} className="demo-check-item">
                  <span className="check-mark" aria-hidden="true">✅</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Assignment 2 */}
          <div className="demo-checklist-panel glass-panel">
            <h3 className="demo-checklist-title">
              <span className="demo-check-icon">⚛️</span> Assignment 2 — React Components
            </h3>
            <ul className="demo-checklist">
              {[
                'Header Component (Props: darkMode, onToggleTheme)',
                'Footer Component (Reusable, standalone)',
                'Card Component (Props: title, description, technologies, variant…)',
                'Button Component (Props: text, variant, onClick, href, icon…)',
                'Form Component (State: formData, errors, isSubmitting)',
                'Props — Data flows throughout all components',
                'State — Theme, menu, filters, typing animation, form',
                'Events — onClick, onChange, onSubmit, onScroll',
              ].map((item, idx) => (
                <li key={idx} className="demo-check-item">
                  <span className="check-mark" aria-hidden="true">✅</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* === COMPONENT ARCHITECTURE MAP — Tabbed with React State === */}
        <div className="demo-architecture glass-panel">
          <h3 className="demo-arch-title">🏗️ Component Architecture</h3>
          <p className="demo-arch-subtitle">
            Five reusable React components form the foundation of this portfolio.
          </p>

          {/* Tab filter — demonstrates onClick State */}
          <div className="demo-arch-tabs" role="tablist" aria-label="Component filter">
            {['component', 'state', 'props', 'events'].map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                className={`demo-arch-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Component table */}
          <div className="demo-arch-table" role="tabpanel">
            <div className="arch-table-header">
              <span>Component</span>
              <span>Description</span>
              <span className="arch-col-highlight">
                {activeTab === 'component' && 'Type'}
                {activeTab === 'state' && '🔄 State (useState)'}
                {activeTab === 'props' && '📦 Props'}
                {activeTab === 'events' && '🖱️ Events'}
              </span>
            </div>
            {componentMap.map((comp, idx) => (
              <div key={idx} className="arch-table-row glass-panel">
                <span className="arch-comp-name">&lt;{comp.name}/&gt;</span>
                <span className="arch-comp-desc">{comp.description}</span>
                <span className="arch-comp-detail">
                  <code>
                    {activeTab === 'component' && comp.type}
                    {activeTab === 'state' && comp.state}
                    {activeTab === 'props' && comp.props}
                    {activeTab === 'events' && comp.events}
                  </code>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* === TECH STACK SUMMARY STRIP === */}
        <div className="demo-tech-strip glass-panel">
          <h4 className="demo-strip-title">🛠️ Technologies Used in This Portfolio</h4>
          <div className="demo-strip-grid">
            {[
              { label: 'HTML5', sub: 'Semantic Structure', icon: '🏷️' },
              { label: 'CSS3', sub: 'Flexbox • Grid • Variables', icon: '🎨' },
              { label: 'Responsive', sub: 'Mobile-first Design', icon: '📱' },
              { label: 'JavaScript', sub: 'ES6+ • Modules • map()', icon: '⚡' },
              { label: 'React 18', sub: 'Components • Hooks', icon: '⚛️' },
              { label: 'Props', sub: 'Data-driven UI', icon: '📦' },
              { label: 'State', sub: 'useState • useEffect', icon: '🔄' },
              { label: 'Events', sub: 'onClick • onChange • onSubmit', icon: '🖱️' },
            ].map((tech, idx) => (
              <div key={idx} className="demo-strip-item glass-panel">
                <span className="strip-icon" aria-hidden="true">{tech.icon}</span>
                <span className="strip-label">{tech.label}</span>
                <span className="strip-sub">{tech.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechDemo;
