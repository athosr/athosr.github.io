# Deployment Guide for GitHub Pages

## Pre-Deployment Checklist

1. **Move Images to Public Folder**
   - Copy all images from `images/` folder to `public/images/`
   - This ensures images are included in the build and accessible at runtime

2. **Build the Project**
   ```bash
   npm run build
   ```
   This creates:
   - `dist/` folder with all production files
   - `dist/404.html` (automatically created for GitHub Pages SPA routing)

## Deployment Options

### Option 1: Deploy dist folder contents to root
1. Copy all contents from `dist/` to the repository root
2. Commit and push
3. GitHub Pages will serve from root

### Option 2: Use GitHub Actions (Recommended)
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Option 3: Use gh-pages branch
1. Build the project: `npm run build`
2. Copy `dist/` contents to a `gh-pages` branch
3. Push the branch
4. Configure GitHub Pages to serve from `gh-pages` branch

## Important Notes

- The build automatically creates `404.html` for client-side routing
- All image paths should use `/images/` (absolute paths)
- Ensure `public/images/` contains all your images before building
- The base path is set to `/` - if deploying to a subdirectory, update `vite.config.js` base path

