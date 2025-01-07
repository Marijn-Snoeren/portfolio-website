# Project Name: Portfolio Website

## Overview
This project is a showcase portfolio website built with **React**, **Next.js**, **Tailwind CSS**, and **Motion**. It includes features such as a parallax effect, scroll-based animations, and dynamic project details pages. The purpose of this project is to create a visually appealing and functional website to present my work and skills effectively.

---

## Commit History

### Commit: `initial-setup`
- **Description**: Set up the project with Next.js, Tailwind CSS, and Motion. Created the initial folder structure and installed necessary dependencies.
- **Files Modified**:
  - `package.json`: Added dependencies.
  - `tailwind.config.js`: Set up the Tailwind configuration.
  - `pages/_app.js`: Included global styles.
- **Reason**: To establish the foundation for the project and ensure all tools are properly configured.

---

### Commit: `create-homepage-layout`
- **Description**: Designed the homepage layout with responsive sections for the hero, about, and project previews.
- **Files Modified**:
  - `pages/index.js`: Added the main structure of the homepage.
  - `components/Hero.js`: Created the hero section component.
  - `components/About.js`: Created the about section component.
- **Reason**: To provide a base for the homepage and start implementing the design.

---

### Commit: `add-parallax-effect`
- **Description**: Implemented a parallax scrolling effect for the hero section image.
- **Files Modified**:
  - `components/Hero.js`: Added the parallax logic using Motion.
  - `styles/globals.css`: Adjusted styles for smooth scrolling.
- **Reason**: To enhance the visual appeal of the homepage.

---

### Commit: `setup-project-details-page`
- **Description**: Created a dynamic project details page to showcase individual projects with animations.
- **Files Modified**:
  - `pages/projects/[id].js`: Added logic to fetch and display project data dynamically.
  - `components/ProjectDetails.js`: Built the project details component.
  - `styles/ProjectDetails.module.css`: Added styles for the project details page.
- **Reason**: To allow users to view detailed information about each project.

---

### Commit: `add-scroll-navigation-animation`
- **Description**: Added a scroll-based animation that triggers navigation when reaching the bottom of the project details page.
- **Files Modified**:
  - `components/ProjectDetails.js`: Integrated the scroll-based navigation trigger.
  - `styles/animations.css`: Added styles for the scroll animations.
- **Reason**: To improve user experience and add interactive elements.

---

### Commit: `fix-bug-navigation-trigger`
- **Description**: Fixed an issue where the scroll-based navigation was triggering prematurely.
- **Files Modified**:
  - `components/ProjectDetails.js`: Adjusted the scroll threshold logic.
  - `utils/helpers.js`: Added a utility function to debounce the scroll event.
- **Reason**: To ensure the navigation trigger works as intended and enhances the user experience.

---

### Commit: `finalize-design`
- **Description**: Polished the overall design, improved responsiveness, and added final touches to the animations.
- **Files Modified**:
  - `components/Header.js`: Updated the navigation bar design.
  - `components/Footer.js`: Improved footer layout and added links.
  - `styles/globals.css`: Updated global styles for consistency.
- **Reason**: To ensure the website looks professional and works seamlessly on all devices.

---

## How to Use
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/portfolio-website.git

2. Install dependencies:
   ```bash
   npm install

3. Run the development server:
   ```bash
   npm run dev

4. Open your browser and navigate to http://localhost:3000.
