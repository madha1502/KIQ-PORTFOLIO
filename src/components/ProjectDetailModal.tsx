import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onConsult: (serviceTitle: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onConsult,
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-white/95 backdrop-blur-3xl border border-white/90 rounded-3xl p-6 sm:p-8 shadow-[0_25px_70px_rgba(15,23,42,0.2)] z-10 overflow-hidden text-left"
        >
          {/* Subtle accent glow */}
          <div
            className="absolute top-0 right-0 w-80 h-80 blur-[100px] pointer-events-none -z-10 opacity-15"
            style={{ backgroundColor: project.accentColor }}
          />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="space-y-2 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200">
                {project.category}
              </span>
              <span className="text-xs text-amber-700 font-semibold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                {project.status}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {project.title}
            </h3>

            <p className="text-sm text-sky-700 font-semibold">
              {project.tagline}
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-6">
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="text-slate-700 font-semibold">Development Completion Phase</span>
              <span className="font-mono text-sky-700 font-bold">{project.completionPercentage}% Complete</span>
            </div>
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${project.completionPercentage}%` }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="h-full rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600"
              />
            </div>
          </div>

          {/* Detailed Narrative */}
          <div className="space-y-5 text-sm text-slate-700">
            <p className="leading-relaxed">
              {project.description}
            </p>

            {/* Metrics Grid */}
            <div>
              <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-3">
                Key Performance Telemetry
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-[11px] text-slate-500 font-medium">{m.label}</div>
                    <div className="text-base font-extrabold text-slate-900 font-mono mt-1">{m.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Architectural Features */}
            <div>
              <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-2.5">
                Core Architectural Capabilities
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {project.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-2">
                Engineered With
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-xs rounded-lg bg-slate-100 border border-slate-200 text-slate-800 font-mono font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-slate-500">
              Inquiring for your enterprise or startup?
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onConsult(project.title);
                }}
                className="flex-1 sm:flex-none px-5 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-xs font-bold shadow-md shadow-sky-500/25 flex items-center justify-center gap-1.5 transition-all"
              >
                <span>Request Custom Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
