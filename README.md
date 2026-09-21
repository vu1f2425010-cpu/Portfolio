# 🚀 Shyam Gupta | Modern React Developer Portfolio
### Full Stack Developer & Backend Developer • Thane, Mumbai

🌐 **Live Vercel Deployment:** [https://port-drab-sigma.vercel.app/](https://port-drab-sigma.vercel.app/)
📂 **GitHub Repository:** [https://github.com/vu1f2425010-cpu/Portfolio](https://github.com/vu1f2425010-cpu/Portfolio)

A complete, modern, professional, and fully responsive Developer Portfolio website built using **React.js (v18+)**, **HTML5**, **CSS3**, and **JavaScript ES6+**.

This project unites **Week 1 Assignment 1 (Responsive Personal Portfolio)** and **Week 1 Assignment 2 (5 Reusable React Components with Props, State, and Events)** into one cohesive web application, meticulously personalized with **Shyam Gupta's resume credentials**.

---

## ✅ Complete Audit & Final Report

### 📋 What Was Already Present (Fully Implemented)

| Feature | Status | Where |
|---|---|---|
| Header component | ✅ | `components/Header.jsx` — mobile nav, dark mode toggle, scroll state |
| Footer component | ✅ | `components/Footer.jsx` — social links, navigation, copyright |
| Card component | ✅ | `components/Card.jsx` — reusable with 9+ props, 5 variants |
| Button component | ✅ | `components/Button.jsx` — renders `<a>` or `<button>`, all variants |
| Form component | ✅ | `components/Form.jsx` — controlled inputs, validation, success state |
| Hero section | ✅ | `sections/Hero.jsx` — typing animation, profile photo, tech pills |
| About section | ✅ | `sections/About.jsx` — professional summary, work experience |
| Education section | ✅ | `sections/Education.jsx` — 3 cards via reusable Card + data array |
| Skills section | ✅ | `sections/Skills.jsx` — filter state, skill chips, core banner |
| Projects section | ✅ | `sections/Projects.jsx` — dynamic `.map()`, filter state |
| Contact section | ✅ | `sections/Contact.jsx` — Form component + direct contact info |
| Dark/Light mode state | ✅ | `App.jsx` — `useState`, persisted to localStorage |
| CSS Grid | ✅ | `projects-grid`, `skills-grid`, `education-grid` |
| CSS Flexbox | ✅ | Header nav, filter bars, hero buttons, social links |
| Responsive design | ✅ | Media queries in every CSS file |
| Google Fonts | ✅ | Outfit, Inter, JetBrains Mono in `index.html` |
| Semantic HTML5 | ✅ | `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<article>` |
| ES6+ throughout | ✅ | `const`, arrow functions, destructuring, `.map()`, `.filter()`, modules |
| Accessibility | ✅ | `alt` text, `htmlFor`, `aria-label`, `aria-expanded`, `:focus-visible` |
| SEO meta tags | ✅ | Title, description, keywords in `index.html` |

---

### ➕ What Was Added / Fixed

| Change | File | Why |
|---|---|---|
| **Created `TechDemo.jsx`** | `src/sections/TechDemo.jsx` | The `#demo` section was referenced in Header nav & Footer links but did NOT EXIST — caused a broken anchor link |
| **Created `TechDemo.css`** | `src/sections/TechDemo.css` | Full styling matching existing design system |
| **Imported TechDemo in App** | `src/App.jsx` | Wired the new section into the page render |
| **Fixed category bug** in projects | `src/data/projectsData.js` | "Portfolio" project had category `"Frontend"` but the filter only had `"Web Application"` — filtering never showed it |
| **Fixed category mismatch** in skills | `src/data/skillsData.js` | Had 4 categories that didn't match the 3 filter options in `Skills.jsx`. Merged and renamed to match exactly. Also added CSS Flexbox & Grid as an explicit skill |

---

### 🏗️ How Each Week 1 Requirement Is Satisfied

**Assignment 1 — Portfolio:**
- ✅ **Responsive** — media queries in every section, no horizontal scroll on mobile
- ✅ **About** — `About.jsx` with professional summary, GrubGain & DecodeLabs experience cards
- ✅ **Education** — `Education.jsx` with BE / HSC / SSC cards rendered from data array
- ✅ **Projects** — `Projects.jsx` with dynamic `.map()`, filter, GitHub + Live links
- ✅ **Contact** — `Contact.jsx` with direct info + reusable `Form` component

**Assignment 2 — React Components:**
- ✅ **Header** — `Header.jsx` receives `darkMode` & `onToggleTheme` props
- ✅ **Footer** — `Footer.jsx` standalone with `Button` sub-component
- ✅ **Card** — `Card.jsx` used across Education, About (experience), Skills, Projects, TechDemo
- ✅ **Button** — `Button.jsx` used everywhere, renders `<a>` or `<button>` based on `href` prop
- ✅ **Form** — `Form.jsx` with 4 controlled inputs, validation, success message, form reset

---

### 📦 Props Demonstrated

```jsx
<Header darkMode={darkMode} onToggleTheme={handleToggleTheme} />

<Card
  title="Project Name"
  subtitle="Institution"
  description="..."
  technologies={["React", "Node.js"]}
  link="https://..."
  badge="Full Stack"
  icon="🚀"
  variant="project"
/>

<Button
  text="View Projects"
  variant="primary"
  onClick={handleClick}
  href="#projects"
  icon="🚀"
  disabled={false}
/>

<Form
  title="Send a Direct Message"
  subtitle="..."
  onSubmitSuccess={handleSuccess}
/>
```

---

### 🔄 State Demonstrated (`useState`)

| State Variable | Component | Purpose |
|---|---|---|
| `darkMode` | `App.jsx` | Light / Dark theme toggle, persisted to localStorage |
| `mobileMenuOpen` | `Header.jsx` | Mobile hamburger drawer open/close |
| `isScrolled` | `Header.jsx` | Adds glass shadow on scroll |
| `formData` | `Form.jsx` | Controlled input values (name, email, subject, message) |
| `errors` | `Form.jsx` | Validation error messages per field |
| `isSubmitting` | `Form.jsx` | Loading state during form submission |
| `statusMessage` | `Form.jsx` | Success / error alert banner |
| `selectedFilter` | `Projects.jsx` | Active project category filter |
| `activeCategory` | `Skills.jsx` | Active skill category filter |
| `currentRoleIndex` | `Hero.jsx` | Typing animation role index |
| `displayText` | `Hero.jsx` | Typing animation displayed text |
| `isDeleting` | `Hero.jsx` | Typing animation delete phase |
| `activeCard` | `TechDemo.jsx` | Expanded concept card (Week 1 showcase) |
| `activeTab` | `TechDemo.jsx` | Active tab in component architecture table |

---

### 🖱️ Events Demonstrated

| Event | Where | What it does |
|---|---|---|
| `onClick` | Header hamburger button | Toggles `mobileMenuOpen` state |
| `onClick` | Theme toggle button | Calls `onToggleTheme`, flips `darkMode` |
| `onClick` | Project filter buttons | Sets `selectedFilter` state |
| `onClick` | Skills filter pills | Sets `activeCategory` state |
| `onClick` | Footer "Back to Top" | Smooth scrolls to top |
| `onClick` | Form "Clear Form" | Resets all `formData` and `errors` |
| `onClick` | TechDemo concept cards | Toggles `activeCard` expand/collapse |
| `onClick` | TechDemo arch tabs | Sets `activeTab` state |
| `onChange` | Form inputs | Updates `formData` field, clears individual error |
| `onSubmit` | Contact form | `e.preventDefault()`, validates, submits, resets |
| `onScroll` (via `useEffect`) | Header | Detects scroll position, toggles `isScrolled` |
| `onKeyDown` | TechDemo cards | Keyboard `Enter` expands card (accessibility) |

---

### 🌐 HTML5 Semantic Structure

```html
<header>         <!-- Header component — nav, logo, theme toggle -->
  <nav>          <!-- Desktop navigation -->
  <nav>          <!-- Mobile drawer navigation -->
</header>

<main>           <!-- All content sections -->
  <section id="home">       <!-- Hero -->
  <section id="about">      <!-- About -->
  <section id="education">  <!-- Education -->
  <section id="skills">     <!-- Skills -->
  <section id="projects">   <!-- Projects -->
  <section id="contact">    <!-- Contact -->
  <section id="demo">       <!-- TechDemo -->
</main>

<footer>         <!-- Footer component -->
```

---

### 🎨 CSS Grid Usage

```css
/* Projects Section */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 2.25rem;
}

/* Skills Section */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2rem;
}

/* Education Section */
.education-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

/* TechDemo Concept Cards */
.demo-concepts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.75rem;
}

/* TechDemo Tech Strip */
.demo-strip-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
}
```

---

### 📁 Exact Files Changed

| File | Action | Change |
|---|---|---|
| `src/App.jsx` | Modified | Added `TechDemo` import & render |
| `src/data/projectsData.js` | Fixed | `"Frontend"` → `"Web Application"` category |
| `src/data/skillsData.js` | Fixed | 4 categories merged into 3 matching filter options |
| `src/sections/TechDemo.jsx` | **NEW** | Week 1 showcase section |
| `src/sections/TechDemo.css` | **NEW** | TechDemo styles (CSS Grid + Flexbox) |

---

## 🎨 Design System & Color Palette

| Token | Hex Value | Name / Role | Usage |
| :--- | :--- | :--- | :--- |
| **Background** | `#0A0F1C` | Deep Navy | Main page background, input fields, and code blocks |
| **Cards** | `#111827` | Dark Slate | Project cards, education cards, contact panel & modals |
| **Primary Accent** | `#38BDF8` | Electric Blue | Buttons, active navigation links, and primary badges |
| **Secondary Accent** | `#FACC15` | Gold | Hover highlights, hover glow, status dots, and accents |

---

## 📁 Project Directory Structure

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
│   │   └── TechDemo.jsx & TechDemo.css          # Week 1 demonstration section [NEW]
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

## 🛠️ Tech Stack

- **Core**: React 18, HTML5, JavaScript ES6+
- **Styling**: Vanilla CSS3 (Custom Properties, Flexbox, CSS Grid, Glassmorphism)
- **Palette**: Deep Navy (`#0A0F1C`), Dark Slate (`#111827`), Electric Blue (`#38BDF8`), Gold (`#FACC15`)
- **Tooling & Bundling**: Vite 5
- **Typography**: Google Fonts (Outfit for headers, Inter for UI body, JetBrains Mono for code)
- **Deployment**: [Vercel](https://port-drab-sigma.vercel.app/)

---

## 🚀 Getting Started & How to Run

### Installation
```bash
# Navigate to the repository folder
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

### Deploy to Vercel
The project is 100% Vercel-ready — no new dependencies were added, only `.jsx` and `.css` files.
Push to your connected GitHub repository and Vercel will auto-deploy.

---

## ✅ Final Assignment Checklist

### Assignment 1
- [x] Responsive personal portfolio
- [x] About section
- [x] Education section
- [x] Projects section
- [x] Contact section

### Assignment 2
- [x] Header component
- [x] Footer component
- [x] Card component
- [x] Button component
- [x] Form component
- [x] Props
- [x] State
- [x] Events

### Technologies
- [x] HTML5 semantic structure
- [x] CSS3
- [x] Flexbox
- [x] CSS Grid
- [x] Responsive Design
- [x] JavaScript ES6+
- [x] React components

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
