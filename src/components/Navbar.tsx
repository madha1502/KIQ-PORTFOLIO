import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Phone, Mail } from 'lucide-react';
import { companyInfo } from '../data/companyData';
import { useThemePalette } from '../context/ThemePaletteContext';

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { currentPalette } = useThemePalette();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 lg:px-12 xl:px-16 pt-3 pb-3">
        <div
          className={`max-w-7xl 2xl:max-w-[1720px] mx-auto rounded-full px-5 py-2.5 transition-all duration-300 flex items-center justify-between ${
            isScrolled
              ? 'glass-nav border border-white/80 shadow-xl shadow-slate-900/5'
              : 'bg-white/70 backdrop-blur-xl border border-white/90 shadow-sm'
          }`}
        >
          {/* Zone 1: Single text element wordmark */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group transition-opacity hover:opacity-90"
            aria-label="KIQ Techno Home"
          >
            <div
              className={`w-8 h-8 rounded-xl bg-gradient-to-tr ${currentPalette.swatch} flex items-center justify-center font-bold text-white text-xs shadow-md group-hover:scale-105 transition-transform duration-200`}
            >
              K
            </div>
            <span className="text-base font-bold tracking-tight text-slate-900">
              KIQ Techno
            </span>
          </Link>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-xs lg:text-sm font-semibold transition-colors whitespace-nowrap rounded-full ${
                    active ? `${currentPalette.textAccentClass} font-bold` : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                  {active && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-white/90 rounded-full -z-10 shadow-sm border border-slate-200/60"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className={`hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r ${currentPalette.buttonGradientClass} ${currentPalette.buttonGradientHoverClass} rounded-full transition-all duration-200 shadow-md hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap`}
            >
              <span>Free Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-slate-700 hover:text-slate-950 rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden bg-white/95 backdrop-blur-2xl border border-slate-200/80 rounded-3xl p-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl text-base font-semibold transition-colors ${
                      active
                        ? `${currentPalette.bgAccentLightClass} ${currentPalette.textAccentClass} font-bold border ${currentPalette.borderAccentClass}`
                        : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <span>{link.name}</span>
                    {active && <span className={`w-2 h-2 rounded-full ${currentPalette.primaryClass}`} />}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenConsultation) onOpenConsultation();
                  }}
                  className={`w-full py-3 px-4 bg-gradient-to-r ${currentPalette.buttonGradientClass} text-white font-semibold text-sm rounded-xl text-center shadow-lg flex items-center justify-center gap-2`}
                >
                  <span>Book Free Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <div className="flex items-center justify-between px-2 pt-1 text-xs text-slate-500">
                  <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-1.5 hover:underline font-medium">
                    <Phone className="w-3.5 h-3.5" />
                    <span>{companyInfo.phone}</span>
                  </a>
                  <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-1.5 hover:underline font-medium">
                    <Mail className="w-3.5 h-3.5" />
                    <span>{companyInfo.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
