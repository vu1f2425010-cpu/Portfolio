import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import './LearningDemo.css';

/**
 * Week 1 Learning Demonstration Section (Prompt Requirement 18)
 * Demonstrates:
 * 1. HTML5 -> Semantic structure (<header>, <nav>, <main>, <section>, <article>, <footer>)
 * 2. CSS3 -> Flexbox, Grid, Glassmorphism, CSS Variables, Responsive Media Queries
 * 3. JavaScript -> ES6+ features (Destructuring, Arrow functions, Template literals, Spread, Array methods)
 * 4. React -> Components (5 Reusable ones), Props, State (useState), Events (onClick, onChange, onSubmit)
 */
const LearningDemo = () => {
  const [activeTab, setActiveTab] = useState('react');
  const [interactiveCounter, setInteractiveCounter] = useState(0);
  const [demoToggle, setDemoToggle] = useState(false);

  const concepts = [
    {
      id: 'html5',
      tabTitle: 'HTML5 Semantic',
      icon: '📄',
      title: 'HTML5 Semantic Architecture',
      description: 'The foundation of the entire portfolio website relies strictly on semantic tags for supreme accessibility, screen-reader friendliness, and high SEO scores.',
      points: [
        'Semantic tags used: <header>, <nav>, <main>, <section>, <article>, <footer>, <form>',
        'Descriptive meta tags, viewport settings, and Google Fonts preconnect links in index.html',
        'Accessible form labeling using htmlFor and accessible aria-expanded attributes on hamburger menu',
        'Proper heading hierarchy (single <h1> in Hero, followed by clear <h2> and <h3> section levels)'
      ],
      codeSnippet: `<!-- Semantic Hierarchy -->
<header> ... <nav> ... </nav> </header>
<main>
  <section id="about"> ... </section>
  <section id="projects"> ... </section>
</main>
<footer> ... </footer>`
    },
    {
      id: 'css3',
      tabTitle: 'CSS3 & Responsive',
      icon: '🎨',
      title: 'CSS3 Modern Styling & Responsive Layouts',
      description: 'Crafted without bulky utility dependencies—pure custom CSS tokens, modern Flexbox, CSS Grid, and glassmorphism styling.',
      points: [
        'CSS Custom Properties (:root & [data-theme="light"]) enabling instant dynamic light/dark theming',
        'CSS Grid used for Projects, Education, and Skills responsive layouts (repeat(auto-fit, minmax(...)))',
        'CSS Flexbox utilized for navigation bars, card headers, and button groups',
        'Backdrop-filter blur with rgba transparencies for sleek glassmorphic panels and cards',
        'Smooth animations, pulsing indicator dots, and media queries for mobile (<768px) and tablet (<992px)'
      ],
      codeSnippet: `/* CSS3 Dual Theming & Grid */
:root { --bg-primary: #0a0f1d; --text-primary: #f8fafc; }
[data-theme='light'] { --bg-primary: #f8fafc; }

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}`
    },
    {
      id: 'es6',
      tabTitle: 'JavaScript ES6+',
      icon: '⚡',
      title: 'Modern JavaScript (ES6+) Features',
      description: 'Built entirely on ECMAScript 6 and beyond, utilizing clean, functional, and declarative paradigms across all components and data stores.',
      points: [
        'Arrow functions ((e) => {...}) for concise, lexically bound event handlers',
        'Object and Array destructuring: const { name, value } = e.target; const [state, setState] = useState()',
        'Array methods: .map() for dynamic rendering, .filter() for real-time category filtering',
        'Template literals (\`btn btn-\${variant}\`) for dynamic className generation',
        'Spread syntax (...prev, [name]: value) for immutable state updates'
      ],
      codeSnippet: `// ES6+ Destructuring, Arrow Functions & Spread
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};

const displayed = projects.map(({ id, title, ...rest }) => (
  <Card key={id} title={title} {...rest} />
));`
    },
    {
      id: 'react',
      tabTitle: 'React Core (Components, Props, State, Events)',
      icon: '⚛️',
      title: 'React Components, Props, State & Events In Action',
      description: 'Strictly satisfies Week 1 Assignment 2 requirements with five modular, highly reusable components exchanging data through props and updating UI via state.',
      points: [
        '5 Reusable Components: Header, Footer, Card, Button, Form',
        'Props: Used across all components (e.g. text, variant, onClick, technologies, icon, link)',
        'State (useState): Dark/Light mode theme, Mobile menu toggle, Filter categories, Controlled inputs, Success/Error notifications',
        'Events: onClick (theme toggle, filter pills, buttons), onChange (form inputs), onSubmit (form validation)'
      ],
      codeSnippet: `// 1. Reusable Component with Props
<Card title="Birthday App" technologies={['React', 'Node']} />

// 2. React State & Events
const [darkMode, setDarkMode] = useState(false);
<Button onClick={() => setDarkMode(!darkMode)} text="Toggle Theme" />`
    }
  ];

  const currentConcept = concepts.find((c) => c.id === activeTab) || concepts[0];

  return (
    <section id="demo" className="section demo-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <span className="pulse-dot"></span> Academic Verification
          </span>
          <h2 className="section-title">
            Week 1 <span className="gradient-text">Learning Demonstration</span>
          </h2>
          <p className="section-subtitle">
            An interactive inspection panel demonstrating how this project strictly integrates HTML5, CSS3, JavaScript ES6+, and React core concepts.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="demo-tabs-container">
          {concepts.map((concept) => (
            <button
              key={concept.id}
              type="button"
              className={`demo-tab-btn ${activeTab === concept.id ? 'active' : ''}`}
              onClick={() => setActiveTab(concept.id)}
            >
              <span className="demo-tab-icon">{concept.icon}</span>
              <span>{concept.tabTitle}</span>
            </button>
          ))}
        </div>

        {/* Concept Details Panel using Reusable Card Component */}
        <div className="demo-content-grid">
          <Card
            title={currentConcept.title}
            description={currentConcept.description}
            icon={currentConcept.icon}
            badge="Verified Requirement"
            variant="default"
            className="demo-card-highlight"
          >
            <div className="demo-points-wrapper">
              <h4 className="demo-points-title">Key Implementations:</h4>
              <ul className="demo-points-list">
                {currentConcept.points.map((pt, index) => (
                  <li key={index} className="demo-point-item">
                    <span className="demo-check">✓</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="demo-code-box">
              <span className="code-box-header">Code Implementation Snippet</span>
              <pre className="code-content">
                <code>{currentConcept.codeSnippet}</code>
              </pre>
            </div>
          </Card>

          {/* Interactive React Playground Card */}
          <div className="interactive-playground glass-panel">
            <div className="playground-header">
              <span className="pulse-dot"></span>
              <h3 className="playground-title">Live React State & Event Sandbox</h3>
            </div>
            <p className="playground-desc">
              Interact with these buttons to observe React's instant virtual DOM re-rendering driven by <code>useState</code> and <code>onClick</code> handlers.
            </p>

            {/* Interactive Counter Feature */}
            <div className="sandbox-feature">
              <span className="sandbox-label">Interactive Counter State:</span>
              <div className="sandbox-controls">
                <Button
                  text="- Decrement"
                  onClick={() => setInteractiveCounter((c) => c - 1)}
                  variant="outline"
                />
                <span className="sandbox-counter-value">{interactiveCounter}</span>
                <Button
                  text="+ Increment"
                  onClick={() => setInteractiveCounter((c) => c + 1)}
                  variant="primary"
                />
                <Button
                  text="Reset"
                  onClick={() => setInteractiveCounter(0)}
                  variant="ghost"
                />
              </div>
            </div>

            {/* Interactive Toggle Feature */}
            <div className="sandbox-feature">
              <span className="sandbox-label">Dynamic Boolean State:</span>
              <div className="sandbox-controls">
                <Button
                  text={demoToggle ? 'Status: Active (Click to Toggle)' : 'Status: Inactive (Click to Toggle)'}
                  onClick={() => setDemoToggle((prev) => !prev)}
                  variant={demoToggle ? 'primary' : 'secondary'}
                  icon={demoToggle ? '🟢' : '⚪'}
                />
              </div>
              <p className="toggle-explanation">
                Current React state value: <code>{demoToggle ? 'true' : 'false'}</code>
              </p>
            </div>

            {/* Checklist of 5 Reusable Components */}
            <div className="components-checklist">
              <h4 className="checklist-title">Assignment 2: 5 Reusable Components</h4>
              <div className="checklist-grid">
                <span className="check-chip">✅ 1. Header.jsx</span>
                <span className="check-chip">✅ 2. Footer.jsx</span>
                <span className="check-chip">✅ 3. Card.jsx</span>
                <span className="check-chip">✅ 4. Button.jsx</span>
                <span className="check-chip">✅ 5. Form.jsx</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningDemo;
