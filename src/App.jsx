import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { CursorGameProvider } from './contexts/CursorGameContext';
import CursorAura from './components/CursorAura';
import BackgroundCursorGame from './components/BackgroundCursorGame';
import GlimmerAchievementToast from './components/GlimmerAchievementToast';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Work from './pages/Work';
import AboutPage from './pages/AboutPage';
import ProjectDetail from './components/ProjectDetail';

const Devlog = lazy(() => import('./pages/Devlog'));
const DevlogPost = lazy(() => import('./pages/DevlogPost'));

function App() {
  return (
    <ThemeProvider>
      <CursorGameProvider>
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <ScrollToTop />
        <div className="App relative flex min-h-dvh w-full flex-1 flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
          <CursorAura />
          <BackgroundCursorGame />
          <div className="relative z-10 flex min-h-dvh flex-1 flex-col">
            <Navbar />
            <main className="flex w-full flex-1 flex-col">
              <Suspense
                fallback={
                  <div className="flex min-h-[40vh] flex-1 items-center justify-center text-sm text-slate-500 dark:text-slate-400">
                    Loading…
                  </div>
                }
              >
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/work" element={<Work />} />
                  <Route path="/work/:id" element={<ProjectDetail />} />
                  <Route path="/devlog" element={<Devlog />} />
                  <Route path="/devlog/:slug" element={<DevlogPost />} />
                  <Route path="/about" element={<AboutPage />} />
                </Routes>
              </Suspense>
            </main>
          </div>
        </div>
      </Router>
      <GlimmerAchievementToast />
      </CursorGameProvider>
    </ThemeProvider>
  );
}

export default App;

