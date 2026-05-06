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
import Devlog from './pages/Devlog';
import DevlogPost from './pages/DevlogPost';
import ProjectDetail from './components/ProjectDetail';

function App() {
  return (
    <ThemeProvider>
      <CursorGameProvider>
      <Router>
        <ScrollToTop />
        <div className="App relative flex min-h-dvh w-full flex-1 flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
          <CursorAura />
          <BackgroundCursorGame />
          <div className="relative z-10 flex min-h-dvh flex-1 flex-col">
            <Navbar />
            <main className="flex w-full flex-1 flex-col">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work" element={<Work />} />
                <Route path="/work/:id" element={<ProjectDetail />} />
                <Route path="/devlog" element={<Devlog />} />
                <Route path="/devlog/:slug" element={<DevlogPost />} />
                <Route path="/about" element={<AboutPage />} />
              </Routes>
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

