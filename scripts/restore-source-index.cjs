const fs = require('fs');
const path = require('path');

const rootPath = path.join(__dirname, '..');
const indexPath = path.join(rootPath, 'index.html');

const sourceIndexContent = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
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
    
    <link id="prism-theme-active" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prism-themes@1.9.0/themes/prism-ghcolors.css" />
    <script>
      (function () {
        var dark = false;
        try {
          var s = localStorage.getItem('theme');
          if (s === 'dark') dark = true;
          else if (s === 'light') dark = false;
          else dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        } catch (e) {}
        var el = document.getElementById('prism-theme-active');
        if (el && dark) {
          el.setAttribute('href', 'https://cdn.jsdelivr.net/npm/prism-themes@1.9.0/themes/prism-one-dark.css');
        }
      })();
    </script>
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

