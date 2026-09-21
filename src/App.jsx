import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Blog from './sections/Blog';
import TechDemo from './sections/TechDemo';
import './App.css';

/**
 * Root Application Component
 * Manages:
 * - Theme State (Light / Dark Mode) using useState (Requirement 1 & 11)
 * - Persisting user theme preference via localStorage
 * - Seamless integration of Header, 6 Sections, and Footer
 */
function App() {
  // 1. React State Requirement: Dark/Light Mode toggle
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('sg_portfolio_theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Default to dark mode for modern developer portfolio aesthetics
    return true;
  });

  // Synchronize theme state with the DOM document element and localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('sg_portfolio_theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('sg_portfolio_theme', 'light');
    }
  }, [darkMode]);

  // React Event Handler: Toggle theme state
  const handleToggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={`app-wrapper ${darkMode ? 'theme-dark' : 'theme-light'}`}>
      {/* 1. Header Component (Assignment 2 Reusable Component) */}
      <Header darkMode={darkMode} onToggleTheme={handleToggleTheme} />

      {/* Main Content Area with Semantic HTML5 Sections (Assignment 1 Requirement) */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Education Section */}
        <Education />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Engineering Articles & Blog Mini-Project Showcase */}
        <Blog />

        {/* Contact Section */}
        <Contact />

        {/* Week 1 Technical Concepts Showcase Section */}
        <TechDemo />

      </main>

      {/* 2. Footer Component (Assignment 2 Reusable Component) */}
      <Footer />
    </div>
  );
}

export default App;
