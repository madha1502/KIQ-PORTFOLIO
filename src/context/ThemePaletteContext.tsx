import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemePaletteId = 'cupertino' | 'alpine' | 'midnight' | 'desert';

export interface ThemePalette {
  id: ThemePaletteId;
  name: string;
  subtitle: string;
  badge: string;
  swatch: string; // Tailwind gradient for swatch circle
  primaryClass: string;
  primaryHoverClass: string;
  textAccentClass: string;
  bgAccentLightClass: string;
  borderAccentClass: string;
  gradientTextClass: string;
  buttonGradientClass: string;
  buttonGradientHoverClass: string;
  glowColor: string;
  chartColor: string;
  accentHex: string;
}

export const THEME_PALETTES: Record<ThemePaletteId, ThemePalette> = {
  cupertino: {
    id: 'cupertino',
    name: 'Cupertino Sky',
    subtitle: 'Classic Apple iOS Electric Cobalt & Sky Blue',
    badge: 'iOS Classic',
    swatch: 'from-sky-500 to-blue-600',
    primaryClass: 'bg-sky-500',
    primaryHoverClass: 'hover:bg-sky-600',
    textAccentClass: 'text-sky-700',
    bgAccentLightClass: 'bg-sky-50',
    borderAccentClass: 'border-sky-200',
    gradientTextClass: 'from-sky-600 via-blue-600 to-indigo-600',
    buttonGradientClass: 'from-sky-500 via-blue-600 to-indigo-600',
    buttonGradientHoverClass: 'hover:from-sky-400 hover:via-blue-500 hover:to-indigo-500',
    glowColor: 'rgba(56, 189, 248, 0.22)',
    chartColor: '#0284c7',
    accentHex: '#0284c7',
  },
  alpine: {
    id: 'alpine',
    name: 'Alpine Sage',
    subtitle: 'High-end Mint Titanium & Emerald Green',
    badge: 'Fintech & Clean Tech',
    swatch: 'from-emerald-500 to-teal-600',
    primaryClass: 'bg-emerald-500',
    primaryHoverClass: 'hover:bg-emerald-600',
    textAccentClass: 'text-emerald-700',
    bgAccentLightClass: 'bg-emerald-50',
    borderAccentClass: 'border-emerald-200',
    gradientTextClass: 'from-emerald-600 via-teal-600 to-cyan-600',
    buttonGradientClass: 'from-emerald-500 via-teal-600 to-cyan-600',
    buttonGradientHoverClass: 'hover:from-emerald-400 hover:via-teal-500 hover:to-cyan-500',
    glowColor: 'rgba(16, 185, 129, 0.22)',
    chartColor: '#059669',
    accentHex: '#059669',
  },
  midnight: {
    id: 'midnight',
    name: 'Midnight Indigo',
    subtitle: 'Linear / Stripe Enterprise Violet & Royal Indigo',
    badge: 'Elite SaaS',
    swatch: 'from-indigo-500 to-purple-600',
    primaryClass: 'bg-indigo-600',
    primaryHoverClass: 'hover:bg-indigo-700',
    textAccentClass: 'text-indigo-700',
    bgAccentLightClass: 'bg-indigo-50',
    borderAccentClass: 'border-indigo-200',
    gradientTextClass: 'from-indigo-600 via-purple-600 to-pink-600',
    buttonGradientClass: 'from-indigo-600 via-purple-600 to-pink-600',
    buttonGradientHoverClass: 'hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500',
    glowColor: 'rgba(99, 102, 241, 0.22)',
    chartColor: '#4f46e5',
    accentHex: '#4f46e5',
  },
  desert: {
    id: 'desert',
    name: 'Desert Titanium',
    subtitle: 'Warm Champagne Gold, Amber & Terracotta',
    badge: 'iPhone 16 Pro Luxury',
    swatch: 'from-amber-500 to-orange-600',
    primaryClass: 'bg-amber-600',
    primaryHoverClass: 'hover:bg-amber-700',
    textAccentClass: 'text-amber-800',
    bgAccentLightClass: 'bg-amber-50',
    borderAccentClass: 'border-amber-200',
    gradientTextClass: 'from-amber-600 via-orange-600 to-rose-600',
    buttonGradientClass: 'from-amber-500 via-orange-600 to-rose-600',
    buttonGradientHoverClass: 'hover:from-amber-400 hover:via-orange-500 hover:to-rose-500',
    glowColor: 'rgba(245, 158, 11, 0.22)',
    chartColor: '#d97706',
    accentHex: '#d97706',
  },
};

interface ThemePaletteContextType {
  currentPalette: ThemePalette;
  paletteId: ThemePaletteId;
  setPaletteId: (id: ThemePaletteId) => void;
  allPalettes: ThemePalette[];
}

const ThemePaletteContext = createContext<ThemePaletteContextType | undefined>(undefined);

export const ThemePaletteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [paletteId, setPaletteId] = useState<ThemePaletteId>('cupertino');

  const currentPalette = THEME_PALETTES[paletteId];
  const allPalettes = Object.values(THEME_PALETTES);

  useEffect(() => {
    // Set CSS custom properties on document body for global reactive glow
    document.documentElement.style.setProperty('--theme-accent', currentPalette.accentHex);
    document.documentElement.style.setProperty('--theme-glow', currentPalette.glowColor);
  }, [currentPalette]);

  return (
    <ThemePaletteContext.Provider
      value={{
        currentPalette,
        paletteId,
        setPaletteId,
        allPalettes,
      }}
    >
      {children}
    </ThemePaletteContext.Provider>
  );
};

export const useThemePalette = () => {
  const context = useContext(ThemePaletteContext);
  if (!context) {
    throw new Error('useThemePalette must be used within a ThemePaletteProvider');
  }
  return context;
};
