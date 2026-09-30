import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Clock,
  Shield,
  ArrowRight,
  Phone,
  Mail,
  Calendar,
  Sparkles,
  FileCheck2,
  Check,
  Building2,
  Send,
} from 'lucide-react';
import { companyInfo } from '../data/companyData';
import { useThemePalette } from '../context/ThemePaletteContext';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Full Stack Development',
}) => {
  const { currentPalette } = useThemePalette();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: defaultService,
    timeline: 'Immediate (Next 2 weeks)',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setReferenceId(`KIQ-${Math.floor(100000 + Math.random() * 900000)}`);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: defaultService,
      timeline: 'Immediate (Next 2 weeks)',
      notes: '',
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Frosted Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-md"
        />

        {/* Modal Window: Apple iOS Frosted Glass */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-xl bg-white/95 backdrop-blur-3xl border border-white/80 rounded-3xl p-6 sm:p-8 shadow-[0_25px_70px_rgba(15,23,42,0.2)] z-10 overflow-hidden"
        >
          {/* Ambient header glow */}
          <div
            className="absolute top-0 right-0 w-64 h-64 blur-[80px] pointer-events-none -z-10 opacity-30 transition-colors duration-500"
            style={{ backgroundColor: currentPalette.glowColor }}
          />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors z-20"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="consultation-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="mb-6 space-y-1 text-left">
                  <div
                    className={`inline-flex items-center gap-2 text-xs font-semibold ${currentPalette.textAccentClass} uppercase tracking-wider px-3 py-0.5 rounded-full ${currentPalette.bgAccentLightClass} border ${currentPalette.borderAccentClass}`}
                  >
                    <Clock className="w-3.5 h-3.5" />
                    <span>45-Minute Strategic Session</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Book a Free Consultation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Connect with founder {companyInfo.founder} and the KIQ engineering team. We'll map your architecture, timeline, and ROI.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 shadow-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 shadow-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 shadow-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Company / Venture Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Acme Tech"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 shadow-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Area of Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-sky-500 shadow-xs"
                      >
                        <option value="Full Stack Development">Full Stack Development</option>
                        <option value="Digital Marketing">Digital Marketing & Growth</option>
                        <option value="Data Analytics">Data Analytics & Dashboards</option>
                        <option value="Cloud Services">Cloud Infrastructure & DevOps</option>
                        <option value="Small Business Solutions">Small Business Suite</option>
                        <option value="Mobility / Taxi Platform">Mobility / Taxi Fare Engine</option>
                        <option value="Custom Software Consultation">Custom Architecture Review</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Expected Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-sky-500 shadow-xs"
                      >
                        <option value="Immediate (Next 2 weeks)">Immediate (Next 2 weeks)</option>
                        <option value="Next 1-2 Months">Next 1–2 Months</option>
                        <option value="Exploring Feasibility">Exploring Feasibility / Scoping</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Tell us briefly about what you want to build
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Key features, current bottlenecks, target audience, or desired tech stack..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 shadow-xs resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 px-5 rounded-xl bg-gradient-to-r ${currentPalette.buttonGradientClass} ${currentPalette.buttonGradientHoverClass} text-white font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 group disabled:opacity-50`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <Send className="w-4 h-4 animate-bounce" />
                          <span>Preparing Your Roadmap Session...</span>
                        </div>
                      ) : (
                        <>
                          <span>Confirm Free Strategic Session</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                    <Shield className={`w-3.5 h-3.5 ${currentPalette.textAccentClass}`} />
                    <span>100% Confidential · Strict NDA Guarantee · No Obligation</span>
                  </div>
                </form>
              </motion.div>
            ) : (
              /* DELIGHTFUL APPLE-GRADE SUCCESS ANIMATION STATE */
              <motion.div
                key="consultation-success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: 'spring', damping: 20, stiffness: 260 }}
                className="py-4 text-center space-y-6"
              >
                {/* Animated Circular Badge with Expanding Rings & Checkmark Draw */}
                <div className="relative mx-auto w-24 h-24 flex items-center justify-center">
                  {/* Outer pulse ring 1 */}
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: [1, 1.5, 1.3], opacity: [0.6, 0.15, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
                    className="absolute inset-0 rounded-full bg-emerald-400"
                  />

                  {/* Outer pulse ring 2 */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: [0.8, 1.25, 1.1], opacity: [0.8, 0.25, 0.4] }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="absolute inset-0 rounded-full bg-emerald-100"
                  />

                  {/* Main Glass Icon Container with spring pop */}
                  <motion.div
                    initial={{ scale: 0, rotate: -30 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 18,
                      delay: 0.1,
                    }}
                    className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-emerald-500 via-teal-500 to-emerald-400 p-[2px] shadow-xl shadow-emerald-500/30 flex items-center justify-center"
                  >
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-emerald-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <motion.path
                          d="M20 6L9 17l-5-5"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{
                            duration: 0.55,
                            delay: 0.25,
                            ease: 'easeInOut',
                          }}
                        />
                      </svg>
                    </div>
                  </motion.div>

                  {/* Floating celebration sparkle chips */}
                  <motion.div
                    initial={{ opacity: 0, y: 0, x: 0 }}
                    animate={{ opacity: [0, 1, 0], y: -28, x: 24 }}
                    transition={{ duration: 1.4, delay: 0.3 }}
                    className="absolute text-amber-400"
                  >
                    <Sparkles className="w-4 h-4 fill-amber-300" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 0, x: 0 }}
                    animate={{ opacity: [0, 1, 0], y: -24, x: -24 }}
                    transition={{ duration: 1.4, delay: 0.4 }}
                    className="absolute text-sky-400"
                  >
                    <Sparkles className="w-3.5 h-3.5 fill-sky-300" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 0, x: 0 }}
                    animate={{ opacity: [0, 1, 0], y: 22, x: 26 }}
                    transition={{ duration: 1.4, delay: 0.45 }}
                    className="absolute text-emerald-400"
                  >
                    <Sparkles className="w-3.5 h-3.5 fill-emerald-300" />
                  </motion.div>
                </div>

                {/* Staggered Title & Greeting */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="space-y-1.5"
                >
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-700 shadow-xs">
                    <FileCheck2 className="w-3.5 h-3.5" />
                    <span>Session Reserved · Ref: {referenceId}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Consultation Request Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900 font-bold">{formData.name}</strong>. Founder{' '}
                    <strong className="text-slate-900 font-bold">{companyInfo.founder}</strong> and our lead architects are reviewing your brief.
                  </p>
                </motion.div>

                {/* Staggered Apple Glass Booking Receipt Card */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.32, duration: 0.4 }}
                  className="p-4 rounded-2xl bg-slate-50/90 border border-slate-200/90 text-left max-w-md mx-auto space-y-2 text-xs text-slate-700 shadow-xs"
                >
                  <div className="flex justify-between items-center py-0.5 border-b border-slate-200/60">
                    <span className="text-slate-500 font-medium">Selected Focus:</span>
                    <span className="font-bold text-slate-900">{formData.service}</span>
                  </div>
                  <div className="flex justify-between items-center py-0.5 border-b border-slate-200/60">
                    <span className="text-slate-500 font-medium">Target Timeline:</span>
                    <span className="font-bold text-slate-900">{formData.timeline}</span>
                  </div>
                  <div className="flex justify-between items-center py-0.5 border-b border-slate-200/60">
                    <span className="text-slate-500 font-medium">Confirmation Sent To:</span>
                    <span className="font-bold text-slate-900 font-mono">{formData.email}</span>
                  </div>
                  <div className="flex justify-between items-center py-0.5">
                    <span className="text-slate-500 font-medium">Direct Hotline:</span>
                    <a href={`tel:${companyInfo.phone}`} className={`font-bold ${currentPalette.textAccentClass} hover:underline font-mono`}>
                      {companyInfo.phone}
                    </a>
                  </div>
                </motion.div>

                {/* Next Steps Visual Micro-Timeline */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.42, duration: 0.4 }}
                  className="grid grid-cols-3 gap-2 max-w-md mx-auto text-left"
                >
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-center shadow-2xs">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto text-[10px] font-bold mb-1">
                      1
                    </div>
                    <div className="text-[10px] font-bold text-slate-900">Brief Logged</div>
                    <div className="text-[9px] text-slate-500">Instant</div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-center shadow-2xs">
                    <div className={`w-5 h-5 rounded-full ${currentPalette.bgAccentLightClass} ${currentPalette.textAccentClass} flex items-center justify-center mx-auto text-[10px] font-bold mb-1`}>
                      2
                    </div>
                    <div className="text-[10px] font-bold text-slate-900">Architecture Audit</div>
                    <div className="text-[9px] text-slate-500">&lt; 2 Hours</div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-center shadow-2xs">
                    <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center mx-auto text-[10px] font-bold mb-1">
                      3
                    </div>
                    <div className="text-[10px] font-bold text-slate-900">Calendar Invite</div>
                    <div className="text-[9px] text-slate-500">Google Meet</div>
                  </div>
                </motion.div>

                {/* Staggered Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.35 }}
                  className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-sm mx-auto"
                >
                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-sm"
                  >
                    Done
                  </button>

                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <Phone className="w-3.5 h-3.5 text-slate-600" />
                    <span>Call Desk Now</span>
                  </a>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
