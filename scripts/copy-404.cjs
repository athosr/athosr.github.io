const fs = require('fs');
const path = require('path');

// Copy index.html to 404.html for GitHub Pages SPA routing
const distPath = path.join(__dirname, '..', 'dist');
const indexPath = path.join(distPath, 'index.html');
const notFoundPath = path.join(distPath, '404.html');

if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, notFoundPath);
  console.log('✓ Copied index.html to 404.html for GitHub Pages');
} else {
  console.error('✗ index.html not found in dist folder');
  process.exit(1);
}

