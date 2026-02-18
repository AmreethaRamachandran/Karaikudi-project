# Karaikudi Bakery Website

A modern, responsive bakery website built with **Vite**, **React**, **TypeScript**, and **Firebase**.

## Project Overview

This is a professional bakery website template inspired by the design and theme of [svasthyaa.com](https://svasthyaa.com/). The website features a clean, warm color scheme with professional typography and smooth animations.

## Features

- 🎨 **Modern Design** - Professional color palette and typography matching the reference design
- ⚡ **Fast Development** - Built with Vite for instant HMR (Hot Module Replacement)
- 🔥 **Firebase Integration** - Ready for authentication, database, and storage
- 📱 **Responsive Design** - Fully mobile-friendly layout
- ✨ **Smooth Animations** - Elegant transitions and animations throughout
- 🎯 **Semantic HTML** - Well-structured, accessible markup
- 🌈 **CSS Variables** - Easy theme customization

## Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 7.3
- **Language**: TypeScript
- **Backend Services**: Firebase
- **Styling**: CSS3 with CSS Variables
- **Package Manager**: npm

## Installation & Setup

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Steps

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Configure Firebase**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Get your Firebase configuration
   - Update `src/firebase.ts` with your config:

   ```typescript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID",
   };
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

   - Open your browser to `http://localhost:5173/`

## Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm lint
```

## Customization

### Color Theme

Edit the CSS variables in `src/styles/global.css`:

```css
:root {
  --primary-color: #8b6f47; /* Main brand color */
  --secondary-color: #d4a574; /* Secondary color */
  --accent-color: #c17844; /* Accent color */
  --light-bg: #fbf8f3; /* Light background */
  --dark-bg: #2c2c2c; /* Dark background */
  /* ... more variables ... */
}
```

### Typography

Update font families and sizes in the CSS variables section:

```css
--font-primary: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
--font-heading: "Georgia", "Garamond", serif;
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Header.css      # Header styles
│   ├── Hero.tsx        # Hero section
│   ├── Hero.css        # Hero styles
│   ├── Footer.tsx      # Footer component
│   ├── Footer.css      # Footer styles
│   └── index.ts        # Component exports
├── styles/
│   └── global.css      # Global styles and design system
├── firebase.ts         # Firebase configuration
├── App.tsx            # Main app component
├── App.css            # App-level styles
├── main.tsx           # Entry point
└── index.css          # Index styles
```

## GitHub & Version Control

### Initial Setup (Already Done)

This project has been initialized with git:

```bash
git init
git add .
git commit -m "Initial commit: Setup Vite + React + TypeScript + Firebase"
```

### Push to GitHub

1. **Create a new repository on GitHub**
   - Go to [github.com/new](https://github.com/new)
   - Name: `karaikudi-bakery` (or your preferred name)
   - Don't initialize with README, .gitignore, or license

2. **Push your local repository**

   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/karaikudi-bakery.git
   git branch -M main
   git push -u origin main
   ```

3. **Verify the push**
   - Visit your GitHub repository URL to confirm all files are there

## Next Steps

1. **Customize Content** - Replace placeholder text with your bakery's actual content
2. **Add Product Sections** - Create components for products, menu, services
3. **Firebase Configuration** - Set up authentication and database
4. **Image Assets** - Add high-quality bakery images
5. **Contact Form** - Implement contact functionality
6. **Deploy** - Deploy to Firebase Hosting or your preferred platform

## Deployment Options

### Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
npm run build
firebase deploy
```

### Vercel

- Connect GitHub repo to Vercel dashboard
- Auto-deploys on push

### Netlify

- Connect GitHub repo to Netlify dashboard
- Configure build command: `npm run build`
- Configure publish directory: `dist`

## License

This project is open source and available under the MIT License.

---

Made with ❤️ for Karaikudi Bakery
