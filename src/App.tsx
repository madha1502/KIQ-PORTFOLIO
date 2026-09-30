import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUp, Sparkles } from 'lucide-react';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ThemePaletteSwitcher } from './components/ThemePaletteSwitcher';
import { AppleGlassPageTransition } from './components/AppleGlassPageTransition';

import { HomePage } from './pages/HomePage';
import { PortfolioPage } from './pages/PortfolioPage';
import { AboutPage } from './pages/AboutPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { ContactPage } from './pages/ContactPage';

import { Project } from './types';
import { ThemePaletteProvider, useThemePalette } from './context/ThemePaletteContext';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
}

function MainApp() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationService, setConsultationService] = useState('Full Stack Development');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { currentPalette } = useThemePalette();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenConsultation = (service?: string) => {
    if (service) setConsultationService(service);
    setIsConsultationOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col font-sans selection:bg-sky-500/20 selection:text-sky-900 w-full overflow-x-hidden">
      <ScrollToTop />

      {/* Floating Apple Light Frosted Glass Navbar */}
      <Navbar onOpenConsultation={() => handleOpenConsultation('Free Consultation')} />

      {/* Main Routes Wrapped with Apple Glass Page Transition Overlay */}
      <main className="flex-1 w-full">
        <AppleGlassPageTransition>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenConsultation={handleOpenConsultation}
                  onSelectProject={(proj) => setSelectedProject(proj)}
                />
              }
            />
            <Route
              path="/portfolio"
              element={
                <PortfolioPage
                  onSelectProject={(proj) => setSelectedProject(proj)}
                  onOpenConsultation={handleOpenConsultation}
                />
              }
            />
            <Route
              path="/about"
              element={<AboutPage onOpenConsultation={handleOpenConsultation} />}
            />
            <Route
              path="/testimonials"
              element={<TestimonialsPage onOpenConsultation={handleOpenConsultation} />}
            />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="*"
              element={
                <HomePage
                  onOpenConsultation={handleOpenConsultation}
                  onSelectProject={(proj) => setSelectedProject(proj)}
                />
              }
            />
          </Routes>
        </AppleGlassPageTransition>
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Interactive Modals */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultService={consultationService}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onConsult={(title) => handleOpenConsultation(`Inquiry for ${title}`)}
      />

      {/* Apple Theme Palette Switcher Pill (Bottom Left) */}
      <ThemePaletteSwitcher />

      {/* Floating Dock Action Pill (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-800 backdrop-blur-xl border border-slate-200/80 flex items-center justify-center shadow-lg transition-all"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleOpenConsultation('Quick Technical Inquiry')}
          className={`px-5 py-3 rounded-full bg-gradient-to-r ${currentPalette.buttonGradientClass} ${currentPalette.buttonGradientHoverClass} text-white text-xs font-bold shadow-xl border border-white/60 flex items-center gap-2 backdrop-blur-xl transition-all`}
        >
          <Sparkles className="w-3.5 h-3.5 text-white animate-spin" />
          <span>Quick Consultation</span>
        </motion.button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ThemePaletteProvider>
        <MainApp />
      </ThemePaletteProvider>
    </BrowserRouter>
  );
}
