const fs = require('fs');
const path = require('path');

// Copy function
function copyRecursive(src, dest) {
  const exists = fs.existsSync(src);
  if (!exists) return false;
  
  const stats = fs.statSync(src);
  const isDirectory = stats.isDirectory();

  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursive(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
  return true;
}

// Copy images from root images/ folder to public/images/
const rootImagesPath = path.join(__dirname, '..', 'images');
const publicImagesPath = path.join(__dirname, '..', 'public', 'images');

if (copyRecursive(rootImagesPath, publicImagesPath)) {
  console.log('✓ Successfully copied images to public/images/');
} else {
  console.log('⚠ No images folder found in root directory');
}

// Copy assets from root assets/ folder to public/assets/
const rootAssetsPath = path.join(__dirname, '..', 'assets');
const publicAssetsPath = path.join(__dirname, '..', 'public', 'assets');

if (copyRecursive(rootAssetsPath, publicAssetsPath)) {
  console.log('✓ Successfully copied assets to public/assets/');
} else {
  console.log('⚠ No assets folder found in root directory');
}

console.log('✓ Setup complete!');

