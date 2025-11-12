# Athos Santos Portfolio

A modern, responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- 🚀 **Modern Stack**: React 18, Vite, Tailwind CSS, Framer Motion
- 📱 **Fully Responsive**: Optimized for all device sizes
- ⚡ **Fast Loading**: Optimized build with code splitting
- 🎨 **Smooth Animations**: Beautiful transitions and motion effects
- 🌐 **SPA Routing**: Client-side routing with React Router
- 📄 **GitHub Pages Ready**: Configured for static hosting

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. **Important**: Set up images:
   ```bash
   npm run setup
   ```
   This copies images from `images/` to `public/images/` for Vite to serve them.

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/     # Reusable React components
│   ├── pages/          # Page components
│   ├── data/           # Portfolio data and content
│   ├── App.jsx         # Main app component with routing
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Static assets (images, etc.)
├── dist/               # Production build output
└── vite.config.js      # Vite configuration
```

## Deployment to GitHub Pages

1. Build the project:
```bash
npm run build
```

2. The build automatically creates a `404.html` file for GitHub Pages SPA routing.

3. Configure GitHub Pages to serve from the `dist` folder (or deploy `dist` contents to the root).

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **GitHub Pages** - Static hosting

## License

Private - All rights reserved

