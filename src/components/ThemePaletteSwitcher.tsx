import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Palette, Check, Sparkles, X, ChevronUp, ChevronDown } from 'lucide-react';
import { useThemePalette, ThemePaletteId } from '../context/ThemePaletteContext';

export const ThemePaletteSwitcher: React.FC = () => {
  const { currentPalette, paletteId, setPaletteId, allPalettes } = useThemePalette();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {/* Expanded Palette Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="mb-3 p-4 rounded-3xl bg-white/95 backdrop-blur-2xl border border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.15)] w-72 sm:w-80 space-y-3 text-left"
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                <Palette className="w-3.5 h-3.5 text-sky-600" />
                <span>Apple UI Color Schemes</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700"
                aria-label="Close theme selector"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-[11px] text-slate-500 leading-snug">
              Select an Apple-inspired color combination tailored for modern tech & enterprise software:
            </p>

            <div className="space-y-1.5">
              {allPalettes.map((p) => {
                const isSelected = paletteId === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => {
                      setPaletteId(p.id);
                    }}
                    className={`w-full p-2.5 rounded-2xl border text-left transition-all flex items-center justify-between group ${
                      isSelected
                        ? 'bg-slate-50 border-slate-300 shadow-xs ring-1 ring-slate-300'
                        : 'bg-white/60 border-slate-200/60 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-7 h-7 rounded-full bg-gradient-to-tr ${p.swatch} shadow-sm shrink-0 flex items-center justify-center text-white`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                          <span>{p.name}</span>
                          <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-slate-100 text-slate-600 font-normal">
                            {p.badge}
                          </span>
                        </div>
                        <div className="text-[10px] text-slate-500 leading-tight">
                          {p.subtitle}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Pill Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2.5 rounded-full bg-white/90 hover:bg-white text-slate-800 text-xs font-bold shadow-xl shadow-slate-900/10 border border-slate-200/90 flex items-center gap-2.5 backdrop-blur-xl transition-all"
        aria-label="Toggle color palette switcher"
      >
        <div className={`w-4 h-4 rounded-full bg-gradient-to-tr ${currentPalette.swatch} shadow-xs ring-1 ring-white`} />
        <span>Palette: <strong className="text-slate-900">{currentPalette.name}</strong></span>
        {isOpen ? <ChevronDown className="w-3.5 h-3.5 text-slate-400" /> : <ChevronUp className="w-3.5 h-3.5 text-slate-400" />}
      </motion.button>
    </div>
  );
};
