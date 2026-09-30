import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useThemePalette } from '../context/ThemePaletteContext';
import { Sparkles, Layers } from 'lucide-react';

interface AppleGlassPageTransitionProps {
  children: React.ReactNode;
}

const routeTitles: Record<string, string> = {
  '/': 'Home',
  '/portfolio': 'Portfolio & Systems',
  '/about': 'About KIQ Techno',
  '/testimonials': 'Client Testimonials',
  '/contact': 'Contact Chennai Desk',
};

export const AppleGlassPageTransition: React.FC<AppleGlassPageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const { currentPalette } = useThemePalette();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayRouteName, setDisplayRouteName] = useState(routeTitles[location.pathname] || 'KIQ Techno');

  useEffect(() => {
    setDisplayRouteName(routeTitles[location.pathname] || 'KIQ Techno');
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 450);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="relative w-full">
      {/* Dynamic Frosted Glass Route Transition Overlay */}
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            key={`overlay-${location.pathname}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 pointer-events-none flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Layer 1: Frosted Glass Sheet Sweep */}
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: '0%' }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 bg-white/75 backdrop-blur-3xl saturate-180 border-b border-white/90 shadow-[0_25px_60px_rgba(15,23,42,0.08)]"
            >
              {/* Subtle leading specular edge highlight */}
              <div
                className="absolute bottom-0 inset-x-0 h-[2px] opacity-80"
                style={{
                  background: `linear-gradient(90deg, transparent 0%, ${currentPalette.accentHex} 50%, transparent 100%)`,
                  boxShadow: `0 0 20px ${currentPalette.accentHex}`,
                }}
              />
            </motion.div>

            {/* Layer 2: Apple Dynamic Island Route Capsule */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 15 }}
              transition={{ duration: 0.3, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-2xl border border-white shadow-xl shadow-slate-900/10 flex items-center gap-2.5"
            >
              <div
                className={`w-5 h-5 rounded-full bg-gradient-to-tr ${currentPalette.swatch} flex items-center justify-center shadow-xs text-white text-[10px] font-bold`}
              >
                K
              </div>
              <span className="text-xs font-bold text-slate-900 tracking-tight">
                {displayRouteName}
              </span>
              <span
                className={`w-2 h-2 rounded-full ${currentPalette.primaryClass} animate-ping`}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Content with Coordinated Fluid Motion */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 12, filter: 'blur(3px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -8, filter: 'blur(2px)' }}
          transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
