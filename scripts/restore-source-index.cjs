const fs = require('fs');
const path = require('path');

const rootPath = path.join(__dirname, '..');
const indexPath = path.join(rootPath, 'index.html');

const sourceIndexContent = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Software Engineer & Game Developer" />
    <meta name="keywords" content="athos santos, athos, software engineer, game developer, unreal engine, programmer" />
    <meta name="author" content="Athos Santos" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Athos Santos - Software Engineer & Game Developer" />
    <meta property="og:description" content="Software Engineer & Game Developer" />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:title" content="Athos Santos - Software Engineer & Game Developer" />
    <meta property="twitter:description" content="Software Engineer & Game Developer" />
    
    <title>Athos Santos - Software Engineer & Game Developer</title>
    
    <!-- Prism.js for syntax highlighting -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-python.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-javascript.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`;

fs.writeFileSync(indexPath, sourceIndexContent);
console.log('✓ Restored source index.html for development');

