# Foodies - Food Sharing Platform

## Project Classification
**Category:** Full-Stack Web Development  
**Primary Focus:** Frontend  
**Framework Stack:** React + Next.js (App Router)

---

## Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Step-by-Step Installation

1. **Clone or download the project:**
   ```bash
   cd foodies-app-course-project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Initialize the database:**
   ```bash
   node initdb.js
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   - Navigate to [http://localhost:3000](http://localhost:3000)

### Production Build
```bash
npm run build
npm start
```

---

## Project Status
**Status:** Active Development  

Foodies is a community-driven food sharing platform that allows users to browse, share, and discover meals from around the world. The application features a meal catalog, community engagement, and user-generated content with form validation and XSS protection.

---

## Main Features & Structure

### Core Functionality
- **Meal Browsing:** Explore a curated catalog of meals with detailed information
- **Meal Sharing:** Users can submit and share their own meal recipes
- **Community Pages:** Engage with other food enthusiasts and view shared meals
- **Dynamic Routing:** Individual meal pages with slug-based navigation

### Project Structure
```
/app                    - Next.js app routes (pages)
  /meals               - Meal listing and detail pages
  /meals/[slug]        - Dynamic meal detail page
  /meals/share         - Meal submission form
  /community           - Community page
  /layout.js           - Root layout with header

/component             - React components
  /Header              - Navigation header components
  /Images              - Image carousel/picker components
  /Meals               - Meal display and form components
  /Reusable            - Reusable UI components (NavLink)

/DataBase              - Database operations
  meals.js             - Meal data queries
  formAction.js        - Server-side form handling

/public                - Static assets (images, icons)
```

---

## Tech Stack & Skills

### Languages & Frameworks
- **JavaScript (ES6+)**
- **React 19** - UI library
- **Next.js 15** - React framework with server-side rendering and API routes

### Key Dependencies
- **better-sqlite3** - Embedded SQL database
- **slugify** - URL-friendly string conversion
- **xss** - XSS attack prevention

### Core Concepts & Skills
- **Server Components** - Next.js App Router and server-side rendering
- **File-based Routing** - Dynamic routes with `[slug]` parameters
- **CSS Modules** - Component-scoped styling
- **Server Actions** - Form submissions and database operations
- **Image Optimization** - Next.js image components
- **Security** - Input sanitization and XSS protection
- **Database Operations** - SQLite queries and data management
- **Responsive Design** - Mobile-friendly UI

---

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Create optimized production build
npm start        # Start production server
npm run lint     # Run ESLint
```

---

## Notes
- The application uses **CSS Modules** for styling to avoid conflicts
- Database is initialized from `meals.json` on first run
- All form inputs are sanitized to prevent XSS attacks
- Image assets stored in `/public/images`
