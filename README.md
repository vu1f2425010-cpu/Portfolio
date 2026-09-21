# 🚀 Shyam Gupta | Modern React Developer Portfolio
### Week 1 Comprehensive Submission: Assignment 1 & Assignment 2

A complete, modern, professional, and fully responsive Developer Portfolio website built using **React.js (v18+)**, **HTML5**, **CSS3**, and **JavaScript ES6+**.

This project unites **Week 1 Assignment 1 (Responsive Personal Portfolio)** and **Week 1 Assignment 2 (5 Reusable React Components with Props, State, and Events)** into one cohesive web application.

---

## 🌟 Key Highlights & Design Aesthetics

- **Modern Glassmorphism Design**: Frosted glass panels with backdrop blur filters, soft gradient borders, and subtle glow shadows.
- **Dual Theme Support (Light / Dark Mode)**: Dynamic theme switching using React `useState`, synchronized with CSS Custom Properties and persisted via `localStorage`.
- **Fully Responsive**: Crafted with modern **CSS3 Flexbox** and **CSS Grid**, providing seamless layouts across mobile, tablet, laptop, and ultra-wide displays without horizontal scrollbars.
- **Smooth Navigation**: Sticky glassmorphic navbar with smooth section scrolling, dynamic scroll shadows, and an animated mobile drawer menu.
- **Subtle Micro-Animations**: Typing specialty rotation effect, hovering card lifts, glowing profile ring, and animated pulsing status badges.
- **Controlled Contact Form**: Real-time controlled inputs, client-side regex email validation, animated error messages, and submission notifications with form reset.
- **Dynamic Projects Showcase**: Real-world projects mapped dynamically from an array into reusable Card components with active category filtering.

---

## 📋 Table of Contents
1. [Assignment 1 Completion Details](#1-assignment-1-completion-details)
2. [Assignment 2 Completion Details (5 Reusable Components)](#2-assignment-2-completion-details-5-reusable-components)
3. [React Core Concepts Demonstrated](#3-react-core-concepts-demonstrated)
   - [Where Components are Used](#where-components-are-used)
   - [Where Props are Used](#where-props-are-used)
   - [Where State is Used](#where-state-is-used)
   - [Where Events are Used](#where-events-are-used)
4. [Week 1 Learning Demonstration Section](#4-week-1-learning-demonstration-section)
5. [Project Directory Structure](#5-project-directory-structure)
6. [Tech Stack](#6-tech-stack)
7. [Getting Started & How to Run](#7-getting-started--how-to-run)

---

## 1. Assignment 1 Completion Details

### Required Sections:
- **About (`src/sections/About.jsx`)**:
  - Personal narrative as a passionate Computer Engineering undergraduate.
  - Clear career goals in full-stack software development.
  - Highlights cards detailing problem solving, security mindset, and continuous learning.
- **Education (`src/sections/Education.jsx`)**:
  - B.E. in Computer Engineering with academic distinction (CGPA 8.8/10.0).
  - Higher Secondary Schooling achievements.
  - Detailed coursework breakdown: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks.
  - Rendered using the reusable `Card` component.
- **Projects (`src/sections/Projects.jsx`)**:
  - Dynamic `.map()` rendering from `src/data/projectsData.js`.
  - Featured projects include:
    - **Birthday Event Booking & Management**: Email login, fee portal, and real OTP verification.
    - **Tuition & Academic Management App**: Student/teacher management, attendance, and fee logs.
    - **GrubGain MarketIQ**: AI-based restaurant market research and Stripe preview.
    - **Cyber Security Threat Monitor**: Lightweight vulnerability scanner and network visualizer.
  - Dynamic category filters: Full Stack, Web Application, AI & Analytics, Cyber Security.
- **Contact (`src/sections/Contact.jsx`)**:
  - Direct communication channels: Email (`pg275017@gmail.com`), LinkedIn, GitHub, Location.
  - Fully integrated controlled message form with instant feedback.

---

## 2. Assignment 2 Completion Details (5 Reusable Components)

All 5 required components are built as modular, reusable building blocks in `src/components/`:

### 1. Header (`src/components/Header.jsx`)
- **Features**: Brand logo badge, navigation links with smooth scrolling anchors, theme toggle button, resume download button, and mobile hamburger drawer.
- **State**: Manages mobile drawer toggle (`mobileMenuOpen`) and scroll shadow (`isScrolled`).
- **Props**: Receives `darkMode` and `onToggleTheme`.

### 2. Footer (`src/components/Footer.jsx`)
- **Features**: Brand identity, short bio, direct social profile links (GitHub, LinkedIn, Email), copyright notice, availability badge, and a smooth **Back-to-Top** button.

### 3. Card (`src/components/Card.jsx`)
- **Universal Reusability**: Serves as the single card component for **Projects**, **Education**, **Skills**, and the **Learning Demonstration**.
- **Props Accepted**:
  - `title`: Card heading text
  - `subtitle`: Subheading, period, or institution
  - `description`: Descriptive text content
  - `image`: Project preview image / screenshot
  - `technologies`: Array of skill badges (`string[]`)
  - `link`: Destination URL
  - `linkText`: Action button label
  - `githubLink`: Optional repository URL
  - `badge`: Status or category tag
  - `icon`: Visual emoji or icon indicator
  - `variant`: Visual style modifier (`project`, `education`, `skill`, `default`)
  - `children`: Flexible nested content (lists, stats, metadata)

### 4. Button (`src/components/Button.jsx`)
- **Universal Reusability**: Replaces native `<button>` and `<a>` elements across the entire website.
- **Props Accepted**:
  - `text`: Label displayed inside the button
  - `onClick`: Event callback function
  - `type`: Button type (`'button'` | `'submit'` | `'reset'`)
  - `variant`: Visual style (`'primary'` | `'outline'` | `'secondary'` | `'ghost'`)
  - `href`: When passed, renders an accessible `<a>` styled as a button
  - `icon`: Optional prefix emoji / icon
  - `disabled`: Disables interaction and adds opacity
  - `children`: Fallback child components

### 5. Form (`src/components/Form.jsx`)
- **Features**: Controlled inputs for `name`, `email`, `subject`, and `message`.
- **Validation**: Ensures name presence (min 2 chars), valid email regex format (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`), and message length (min 10 chars).
- **Feedback**: Displays animated error warnings or a green success confirmation banner upon simulated dispatch, followed by automatic form clearing.

---

## 3. React Core Concepts Demonstrated

### Where Components are Used
| Component | Primary Location | Secondary Usages |
| :--- | :--- | :--- |
| **`Header`** | `src/App.jsx` | Fixed across top of viewport |
| **`Footer`** | `src/App.jsx` | Anchored at page bottom |
| **`Card`** | `src/sections/Projects.jsx` | `Education.jsx`, `Skills.jsx`, `About.jsx`, `LearningDemo.jsx` |
| **`Button`** | `src/sections/Hero.jsx` | `Header.jsx`, `Card.jsx`, `Form.jsx`, `Footer.jsx`, `LearningDemo.jsx` |
| **`Form`** | `src/sections/Contact.jsx` | Can be embedded on any landing page |

### Where Props are Used
- **`Card` Props**: `title`, `description`, `image`, `technologies`, `link`, `githubLink`, `badge`, `variant` passed inside `Projects.jsx` (`project.title`, etc.) and `Education.jsx`.
- **`Button` Props**: `variant="primary"`, `icon="🚀"`, `href="#projects"`, `onClick={handleReset}`, `disabled={isSubmitting}` passed in `Hero.jsx`, `Form.jsx`, `Header.jsx`, etc.
- **`Header` Props**: `darkMode={darkMode}` and `onToggleTheme={handleToggleTheme}` passed from `App.jsx`.
- **`Form` Props**: `title` and `subtitle` passed from `Contact.jsx`.

### Where State is Used (`useState`)
1. **Light / Dark Mode State**: `const [darkMode, setDarkMode] = useState(true)` in `App.jsx` toggles the entire website's theme and syncs with `localStorage`.
2. **Mobile Menu Drawer State**: `const [mobileMenuOpen, setMobileMenuOpen] = useState(false)` in `Header.jsx` toggles the responsive drawer.
3. **Contact Form Field State**: `const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })` in `Form.jsx` handles controlled inputs.
4. **Form Validation & Status State**: `const [errors, setErrors] = useState({})` and `const [statusMessage, setStatusMessage] = useState(null)` in `Form.jsx`.
5. **Project Filter State**: `const [selectedFilter, setSelectedFilter] = useState('All')` in `Projects.jsx`.
6. **Skill Filter State**: `const [activeCategory, setActiveCategory] = useState('All')` in `Skills.jsx`.
7. **Interactive Sandbox State**: `const [interactiveCounter, setInteractiveCounter] = useState(0)` and `demoToggle` in `LearningDemo.jsx`.

### Where Events are Used
- **`onClick`**:
  - Theme toggler button (Dark $\leftrightarrow$ Light).
  - Mobile hamburger menu button.
  - Project and Skill category filter tabs.
  - Form reset button (`Clear Form`).
  - Interactive counter in the sandbox (`+ Increment`, `- Decrement`, `Reset`).
  - Smooth scroll anchor links.
- **`onChange`**:
  - Controlled inputs in `Form.jsx` updating `formData` on keystroke and clearing specific errors.
- **`onSubmit`**:
  - Controlled form submission in `Form.jsx` preventing default page reload (`e.preventDefault()`), running validations, and triggering submission state.

---

## 4. Week 1 Learning Demonstration Section

Located at the bottom of the page (`#demo`), this section provides an interactive inspection panel demonstrating:
1. **HTML5 Semantic Structure**: Clean hierarchy using `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>`.
2. **CSS3 Styling & Responsiveness**: Flexbox, CSS Grid, Custom Property tokens, and media queries.
3. **JavaScript (ES6+) Features**: Destructuring, arrow functions, template literals, array `.map()` / `.filter()`, and object spread syntax.
4. **React Core Principles**: Interactive state sandbox with a live counter and boolean toggle proving instant virtual DOM re-rendering.

---

## 5. Project Directory Structure

```
c:\port/
├── public/
│   ├── myphoto.jpg                              # Developer profile avatar
│   ├── screenshot1.png                          # Birthday Event Booking preview
│   ├── screenshot2.png                          # GrubGain MarketIQ preview
│   └── resume.pdf                               # Downloadable CV
├── src/
│   ├── components/
│   │   ├── Header.jsx & Header.css              # Reusable Header component
│   │   ├── Footer.jsx & Footer.css              # Reusable Footer component
│   │   ├── Card.jsx & Card.css                  # Reusable Card component
│   │   ├── Button.jsx & Button.css              # Reusable Button component
│   │   └── Form.jsx & Form.css                  # Reusable Contact Form component
│   ├── sections/
│   │   ├── Hero.jsx & Hero.css                  # Hero banner section
│   │   ├── About.jsx & About.css                # About Me section
│   │   ├── Education.jsx & Education.css        # Academic Education section
│   │   ├── Skills.jsx & Skills.css              # Skills & competencies section
│   │   ├── Projects.jsx & Projects.css          # Featured Projects section
│   │   ├── Contact.jsx & Contact.css            # Contact section
│   │   └── LearningDemo.jsx & LearningDemo.css  # Week 1 demonstration section
│   ├── data/
│   │   ├── projectsData.js                      # Projects data array
│   │   ├── educationData.js                     # Education credentials data
│   │   └── skillsData.js                        # Categorized skills data
│   ├── App.jsx                                  # Root application component
│   ├── App.css                                  # Layout & section styling
│   ├── index.css                                # Global CSS tokens & theme variables
│   └── main.jsx                                 # Application mounting entry point
├── index.html                                   # HTML5 template with Google Fonts & SEO
├── package.json                                 # NPM dependencies and scripts
├── vite.config.js                               # Vite bundler configuration
└── README.md                                    # Complete project documentation
```

---

## 6. Tech Stack

- **Core**: React 18, HTML5, JavaScript ES6+
- **Styling**: Vanilla CSS3 (Custom Properties, Flexbox, CSS Grid, Glassmorphism)
- **Tooling & Bundling**: Vite 5
- **Typography**: Google Fonts (Outfit for headers, Inter for UI body, JetBrains Mono for code)

---

## 7. Getting Started & How to Run

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm (v9.0.0 or higher)

### Installation
```bash
# Clone or navigate to the repository folder
cd c:\port

# Install required dependencies
npm install
```

### Running Locally (Development Mode)
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:5173/
```

### Production Build & Preview
```bash
# Build the production bundle
npm run build

# Preview the built production output
npm run preview
```

---

## 👤 Author

**Shyam Gupta**  
- **Email**: [pg275017@gmail.com](mailto:pg275017@gmail.com)  
- **LinkedIn**: [linkedin.com/in/shyam-gupta](https://linkedin.com/in/shyam-gupta)  
- **GitHub**: [github.com/Shyamgupta](https://github.com/Shyamgupta)
