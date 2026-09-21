# 🚀 Shyam Gupta | Modern React Developer Portfolio
### Full Stack Developer & Backend Developer • Thane, Mumbai

🌐 **Live Vercel Deployment:** [https://port-drab-sigma.vercel.app/](https://port-drab-sigma.vercel.app/)  
📂 **GitHub Repository:** [https://github.com/vu1f2425010-cpu/Portfolio](https://github.com/vu1f2425010-cpu/Portfolio)

A complete, modern, professional, and fully responsive Developer Portfolio website built using **React.js (v18+)**, **HTML5**, **CSS3**, and **JavaScript ES6+**.

This project unites **Week 1 Assignment 1 (Responsive Personal Portfolio)** and **Week 1 Assignment 2 (5 Reusable React Components with Props, State, and Events)** into one cohesive web application, meticulously personalized with **Shyam Gupta's resume credentials**.

---

## 🎨 Design System & Color Palette

The visual design is constructed around the exact requested color palette:

| Token | Hex Value | Name / Role | Usage |
| :--- | :--- | :--- | :--- |
| **Background** | `#0A0F1C` | Deep Navy | Main page background, input fields, and code blocks |
| **Cards** | `#111827` | Dark Slate | Project cards, education cards, contact panel & modals |
| **Primary Accent** | `#38BDF8` | Electric Blue | Buttons, active navigation links, and primary badges |
| **Secondary Accent** | `#FACC15` | Gold | Hover highlights, hover glow, status dots, and accents |

---

## 🌟 Key Highlights & Engineering Features

- **Custom Color Theme**: Deep Navy background (`#0A0F1C`), Dark Slate cards (`#111827`), Electric Blue buttons/links (`#38BDF8`), and Gold hover states (`#FACC15`).
- **Production Work Experience**: Highlights real-world internships at **GrubGain** (Backend Developer Intern) and **DecodeLabs** (Full Stack Developer Intern).
- **Dual Theme Support (Light / Dark Mode)**: Dynamic theme switching using React `useState`, synchronized with CSS Custom Properties and persisted via `localStorage`.
- **Fully Responsive Layouts**: Built with pure **CSS3 Flexbox** and **CSS Grid** (`repeat(auto-fit, minmax(...))`) across mobile, tablet, laptop, and desktop.
- **Micro-Animations**: Rotating typing specialties, glowing avatar ring, floating badges, and smooth scroll navigation.
- **Controlled Contact Form**: Real-time controlled inputs, client-side regex email validation, animated error messages, and submission notifications with form reset.
- **Industry Certifications**: Showcases Cisco Cybersecurity, MongoDB Associate, Gemini Certified Student, Power BI, and Databricks GenAI Fundamentals.

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
  - Professional summary from resume: "Engineered scalable APIs and real-time web applications with practical full-stack and backend experience, proficient in Python, JavaScript, React.js, Node.js, and MongoDB."
  - Details internships at **GrubGain** (optimized MongoDB aggregations by 40%) and **DecodeLabs** (delivered 2+ production-ready live products).
  - Displays industry certifications (Cisco Cybersecurity, MongoDB Associate, Gemini, Power BI, Databricks).
- **Education (`src/sections/Education.jsx`)**:
  - **B.E. in Computer Engineering (Third Year)**: Mumbai University | 2024 - 2028.
  - **HSC Maharashtra Board**: JEE (85%) | CET PCM (70%) | 2022 - 2024.
  - **SSC Maharashtra Board**: 2021 - 2022 (First Class with Distinction).
  - Rendered using the reusable `Card` component.
- **Projects (`src/sections/Projects.jsx`)**:
  - Dynamic `.map()` rendering from `src/data/projectsData.js`:
    - **GrubGain - Restaurant Comparison Platform**: Real-time restaurant comparison engine for prices, ratings, and menu items. Live at `grubgain.com`.
    - **Personal Developer Portfolio**: Responsive React application deployed live on Vercel (`port-drab-sigma.vercel.app`).
    - **DecodeLabs Production Web Products**: Full stack products with Next.js, React, Node.js, and Express.js.
    - **Birthday Event Booking & Management**: Real-time OTP authentication and fee portal.
- **Contact (`src/sections/Contact.jsx`)**:
  - Direct communication channels:
    - 📞 **Phone**: `+91 9321407216`
    - 📧 **Email**: `pg275017@gmail.com`
    - 📍 **Location**: `Thane, Mumbai`
    - 💻 **GitHub**: [github.com/vu1f2425010-cpu](https://github.com/vu1f2425010-cpu)
    - 💼 **LinkedIn**: [linkedin.com/in/Shyam-Gupta](https://linkedin.com/in/Shyam-Gupta)
  - Controlled contact form with real-time validation and feedback.

---

## 2. Assignment 2 Completion Details (5 Reusable Components)

All 5 required components are built as modular, reusable building blocks in `src/components/`:

### 1. Header (`src/components/Header.jsx`)
- **Features**: Brand logo badge, navigation links with smooth scrolling anchors, theme toggle button, resume download button, and mobile hamburger drawer.
- **State**: Manages mobile drawer toggle (`mobileMenuOpen`) and scroll shadow (`isScrolled`).
- **Props**: Receives `darkMode` and `onToggleTheme`.

### 2. Footer (`src/components/Footer.jsx`)
- **Features**: Brand identity, short bio, direct social profile links (GitHub, LinkedIn, Email, Phone), copyright notice, availability badge, and a smooth **Back-to-Top** button.

### 3. Card (`src/components/Card.jsx`)
- **Universal Reusability**: Single card component for **Projects**, **Education**, **Skills**, and the **Learning Demonstration**.
- **Card Background**: `#111827` with Electric Blue badges and Gold hover borders.
- **Props Accepted**:
  - `title`, `subtitle`, `description`, `image`, `technologies`, `link`, `linkText`, `githubLink`, `badge`, `icon`, `variant`, `children`.

### 4. Button (`src/components/Button.jsx`)
- **Universal Reusability**: Replaces native `<button>` and `<a>` elements across the entire website.
- **Colors**: Primary is Electric Blue (`#38BDF8`), hovering turns Gold (`#FACC15`).
- **Props Accepted**:
  - `text`, `onClick`, `type`, `variant`, `href`, `icon`, `disabled`, `children`.

### 5. Form (`src/components/Form.jsx`)
- **Features**: Controlled inputs for `name`, `email`, `subject`, and `message`.
- **Validation**: Name presence (min 2 chars), valid email regex format, and message length (min 10 chars).
- **Feedback**: Displays animated error warnings or a gold success confirmation banner upon simulated dispatch, followed by automatic form clearing.

---

## 3. React Core Concepts Demonstrated

### Where Components are Used
| Component | Primary Location | Secondary Usages |
| :--- | :--- | :--- |
| **`Header`** | `src/App.jsx` | Fixed across top of viewport |
| **`Footer`** | `src/App.jsx` | Anchored at page bottom |
| **`Card`** | `src/sections/Projects.jsx` | `Education.jsx`, `Skills.jsx`, `About.jsx`, `LearningDemo.jsx` |
| **`Button`** | `src/sections/Hero.jsx` | `Header.jsx`, `Card.jsx`, `Form.jsx`, `Footer.jsx`, `LearningDemo.jsx` |
| **`Form`** | `src/sections/Contact.jsx` | Reusable on any contact page |

### Where Props are Used
- **`Card` Props**: `title`, `description`, `image`, `technologies`, `link`, `githubLink`, `badge`, `variant` passed inside `Projects.jsx` and `Education.jsx`.
- **`Button` Props**: `variant="primary"`, `icon="🚀"`, `href="#projects"`, `onClick={handleReset}`, `disabled={isSubmitting}` passed across components.
- **`Header` Props**: `darkMode={darkMode}` and `onToggleTheme={handleToggleTheme}` passed from `App.jsx`.
- **`Form` Props**: `title` and `subtitle` passed from `Contact.jsx`.

### Where State is Used (`useState`)
1. **Light / Dark Mode State**: `const [darkMode, setDarkMode] = useState(true)` in `App.jsx` toggles the entire website's theme and syncs with `localStorage`.
2. **Mobile Menu Drawer State**: `const [mobileMenuOpen, setMobileMenuOpen] = useState(false)` in `Header.jsx` toggles the responsive drawer.
3. **Contact Form Field State**: `const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })` in `Form.jsx`.
4. **Form Validation & Status State**: `const [errors, setErrors] = useState({})` and `const [statusMessage, setStatusMessage] = useState(null)` in `Form.jsx`.
5. **Project Filter State**: `const [selectedFilter, setSelectedFilter] = useState('All')` in `Projects.jsx`.
6. **Skill Filter State**: `const [activeCategory, setActiveCategory] = useState('All')` in `Skills.jsx`.
7. **Interactive Sandbox State**: `const [interactiveCounter, setInteractiveCounter] = useState(0)` and `demoToggle` in `LearningDemo.jsx`.

### Where Events are Used
- **`onClick`**: Theme toggle button, mobile menu button, category filter tabs, form reset, counter increment/decrement, and smooth scroll anchors.
- **`onChange`**: Controlled inputs in `Form.jsx` updating `formData` on keystroke and clearing specific errors.
- **`onSubmit`**: Controlled form submission in `Form.jsx` preventing page reload (`e.preventDefault()`), validating fields, and updating state.

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
│   ├── screenshot1.png                          # Portfolio preview
│   ├── screenshot2.png                          # GrubGain preview
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
│   │   ├── About.jsx & About.css                # About Me & Experience section
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
- **Palette**: Deep Navy (`#0A0F1C`), Dark Slate (`#111827`), Electric Blue (`#38BDF8`), Gold (`#FACC15`)
- **Tooling & Bundling**: Vite 5
- **Typography**: Google Fonts (Outfit for headers, Inter for UI body, JetBrains Mono for code)
- **Deployment**: [Vercel](https://port-drab-sigma.vercel.app/)

---

## 7. Getting Started & How to Run

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
Open your browser at: `http://localhost:5173/`

### Production Build
```bash
npm run build
npm run preview
```

---

## 👤 Author

**SHYAM GUPTA**  
- **Role**: Full Stack Developer | Backend Developer  
- **Location**: Thane, Mumbai  
- **Phone**: [+91 9321407216](tel:+919321407216)  
- **Email**: [pg275017@gmail.com](mailto:pg275017@gmail.com)  
- **Live Portfolio**: [https://port-drab-sigma.vercel.app/](https://port-drab-sigma.vercel.app/)  
- **GitHub**: [https://github.com/vu1f2425010-cpu](https://github.com/vu1f2425010-cpu)  
- **LinkedIn**: [https://linkedin.com/in/Shyam-Gupta](https://linkedin.com/in/Shyam-Gupta)
