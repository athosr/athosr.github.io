const fs = require('fs');
const path = require('path');

// Copy all files from dist/ to repository root for GitHub Pages
const distPath = path.join(__dirname, '..', 'dist');
const rootPath = path.join(__dirname, '..');

function copyRecursive(src, dest) {
  const exists = fs.existsSync(src);
  if (!exists) {
    console.error(`✗ Source path does not exist: ${src}`);
    return false;
  }
  
  const stats = fs.statSync(src);
  const isDirectory = stats.isDirectory();

  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    
    const items = fs.readdirSync(src);
    for (const item of items) {
      copyRecursive(
        path.join(src, item),
        path.join(dest, item)
      );
    }
  } else {
    fs.copyFileSync(src, dest);
  }
  return true;
}

console.log('🚀 Deploying dist folder contents to repository root...\n');

// Files/directories to preserve in root (don't overwrite)
const preserveItems = ['.git', 'node_modules', 'src', 'scripts', 'package.json', 'package-lock.json', 'vite.config.js', 'tailwind.config.js', 'postcss.config.js', '.gitignore', 'README.md', 'DEPLOYMENT.md', '.github'];

// List of files/directories to copy from dist
const itemsToCopy = fs.readdirSync(distPath);

for (const item of itemsToCopy) {
  // Skip .nojekyll if it already exists (we'll handle it separately)
  if (item === '.nojekyll' && fs.existsSync(path.join(rootPath, '.nojekyll'))) {
    continue;
  }
  
  const src = path.join(distPath, item);
  const dest = path.join(rootPath, item);
  
  // Skip if item is in preserve list
  if (preserveItems.includes(item)) {
    console.log(`⊘ Skipped ${item} (preserved)`);
    continue;
  }
  
  // Remove existing file/directory if it exists
  if (fs.existsSync(dest)) {
    const destStats = fs.statSync(dest);
    if (destStats.isDirectory()) {
      fs.rmSync(dest, { recursive: true, force: true });
    } else {
      fs.unlinkSync(dest);
    }
  }
  
  if (copyRecursive(src, dest)) {
    console.log(`✓ Copied ${item}`);
  }
}

// Ensure .nojekyll exists in root
const nojekyllPath = path.join(rootPath, '.nojekyll');
if (!fs.existsSync(nojekyllPath)) {
  fs.writeFileSync(nojekyllPath, '');
  console.log('✓ Created .nojekyll in root');
}

console.log('\n✅ Deployment complete!');
console.log('📝 Next steps:');
console.log('   1. Review the changes');
console.log('   2. Commit: git add .');
console.log('   3. Commit: git commit -m "Deploy built files"');
console.log('   4. Push: git push origin main');

