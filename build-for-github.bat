@echo off
setlocal
cd /d "%~dp0"

echo.
echo  Building for GitHub Pages (vite build + post-build + copy dist to repo root^)
echo.

call npm run deploy
if errorlevel 1 (
  echo.
  echo  Build or deploy step failed. Fix the errors above, then run this script again.
  pause
  exit /b 1
)

echo.
echo  Done. Review changes, then commit and push when ready.
echo.
pause
