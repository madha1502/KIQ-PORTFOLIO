import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, CheckCircle2, Shield, ArrowRight, Phone, Mail } from 'lucide-react';
import { companyInfo } from '../data/companyData';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
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
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-400/15 blur-[80px] pointer-events-none -z-10" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {!isSubmitted ? (
            <div>
              <div className="mb-6 space-y-1 text-left">
                <div className="flex items-center gap-2 text-xs font-semibold text-sky-600 uppercase tracking-wider">
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
                    className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-sm transition-all shadow-md shadow-sky-500/25 flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Scheduling Call...</span>
                    ) : (
                      <>
                        <span>Confirm Free Strategic Session</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                  <Shield className="w-3.5 h-3.5 text-sky-600" />
                  <span>100% Confidential · Strict NDA Guarantee · No Obligation</span>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Consultation Request Received!</h3>
                <p className="text-sm text-slate-600 mt-1 max-w-md mx-auto">
                  Thank you, <span className="text-sky-600 font-bold">{formData.name}</span>.
                  Founder Kavin Sengottuvel and our technical team will review your project brief and follow up at{' '}
                  <span className="text-slate-900 font-semibold">{formData.email}</span> within 4 business hours.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left max-w-sm mx-auto space-y-2 text-xs text-slate-700">
                <div className="flex justify-between">
                  <span className="text-slate-500">Selected Track:</span>
                  <span className="font-bold text-slate-900">{formData.service}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Target Timeline:</span>
                  <span className="font-bold text-slate-900">{formData.timeline}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Direct Support:</span>
                  <a href={`tel:${companyInfo.phone}`} className="text-sky-600 font-semibold hover:underline">
                    {companyInfo.phone}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
