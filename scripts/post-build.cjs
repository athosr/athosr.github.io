const fs = require('fs');
const path = require('path');

// Copy index.html to 404.html for GitHub Pages SPA routing
const distPath = path.join(__dirname, '..', 'dist');
const indexPath = path.join(distPath, 'index.html');
const notFoundPath = path.join(distPath, '404.html');
const nojekyllPath = path.join(distPath, '.nojekyll');
const publicNojekyllPath = path.join(__dirname, '..', 'public', '.nojekyll');

if (fs.existsSync(indexPath)) {
  // Copy 404.html
  fs.copyFileSync(indexPath, notFoundPath);
  console.log('✓ Copied index.html to 404.html for GitHub Pages');
} else {
  console.error('✗ index.html not found in dist folder');
  process.exit(1);
}

// Copy .nojekyll file to dist
if (fs.existsSync(publicNojekyllPath)) {
  fs.copyFileSync(publicNojekyllPath, nojekyllPath);
  console.log('✓ Copied .nojekyll to dist folder');
} else {
  // Create .nojekyll if it doesn't exist
  fs.writeFileSync(nojekyllPath, '');
  console.log('✓ Created .nojekyll in dist folder');
}

console.log('✓ Post-build complete!');

