import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Star,
  CheckCircle2,
  MapPin,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';
import { testimonialsData, companyInfo } from '../data/companyData';
import { SectionHeading } from '../components/SectionHeading';

interface TestimonialsPageProps {
  onOpenConsultation: (service?: string) => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({
  onOpenConsultation,
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');

  const industries = ['All', 'Retail', 'Logistics', 'Manufacturing', 'Mobility', 'FinTech', 'D2C'];

  const filteredTestimonials =
    selectedIndustry === 'All'
      ? testimonialsData
      : testimonialsData.filter((t) => t.industry === selectedIndustry);

  return (
    <div className="min-h-screen pt-28 pb-24 px-4 sm:px-8 lg:px-12 xl:px-16 w-full">
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-1/4 w-[700px] h-[400px] bg-sky-300/20 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl 2xl:max-w-[1720px] mx-auto space-y-14 w-full">
        {/* Page Header */}
        <div className="space-y-6">
          <SectionHeading
            number="04"
            badge="Verified Client Testimonials"
            title="Trusted by Emerging Founders & Enterprise Leaders"
            description="Read firsthand how KIQ Techno Pvt Ltd delivers rapid engineering sprints, Apple-inspired interface polish, and measurable business ROI across India."
            align="center"
          />

          {/* Industry Filter Controls */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-slate-200/80 rounded-2xl max-w-2xl mx-auto shadow-inner">
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setSelectedIndustry(ind)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                  selectedIndustry === ind
                    ? 'bg-white text-sky-700 font-extrabold shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>

        {/* Aggregate Trust Banner */}
        <div className="apple-card rounded-[32px] p-6 sm:p-10 border border-white/90 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono">100%</div>
            <div className="text-xs text-slate-500 font-bold">On-Time Milestone Delivery</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-sky-600 font-mono">5.0 / 5.0</div>
            <div className="text-xs text-slate-500 font-bold">Verified Client Rating</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono">50+</div>
            <div className="text-xs text-slate-500 font-bold">Projects Shipped Since 2025</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 font-mono">0 hr</div>
            <div className="text-xs text-slate-500 font-bold">Unplanned Production Downtime</div>
          </div>
        </div>

        {/* Testimonials Grid: 6 Required Clients */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredTestimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="apple-card rounded-[32px] p-7 sm:p-8 flex flex-col justify-between group hover:border-sky-300 transition-all duration-300 relative overflow-hidden text-left"
            >
              {/* Subtle top sheen */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-400/10 group-hover:bg-sky-400/15 rounded-full blur-2xl transition-all duration-300 pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* Header: Rating & Industry */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {t.industry}
                  </span>
                </div>

                {/* Feedback Body */}
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{t.feedback}"
                </p>

                {/* Quantified Business Outcome */}
                <div className="p-3 rounded-2xl bg-sky-50 border border-sky-200/80 flex items-center gap-2 text-xs text-sky-800 font-mono font-bold">
                  <TrendingUp className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>{t.metricAchieved}</span>
                </div>
              </div>

              {/* Client Profile Footer */}
              <div className="pt-5 mt-5 border-t border-slate-200/80 flex items-center gap-3 relative z-10">
                <div
                  className={`w-11 h-11 rounded-2xl bg-gradient-to-tr ${t.avatarColor} p-0.5 flex items-center justify-center text-white font-bold text-sm shadow-md shrink-0`}
                >
                  <div className="w-full h-full rounded-[14px] bg-white flex items-center justify-center font-extrabold text-slate-900 text-xs">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold text-slate-900 truncate">{t.name}</h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                  </div>
                  <p className="text-xs text-slate-600 font-medium truncate">
                    {t.role}, {t.company}
                  </p>
                  <p className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5 font-medium">
                    <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                    <span className="truncate">{t.location}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA for Project Inquiry */}
        <div className="apple-card rounded-[36px] p-8 sm:p-12 text-center space-y-4 border border-white/90 max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Join 100+ Happy Customers Scaling with KIQ Techno
          </h3>
          <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Schedule a free strategic architecture audit with founder {companyInfo.founder} and start engineering your competitive advantage today.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenConsultation('Client Reference Inquiry')}
              className="px-8 py-3.5 rounded-full bg-sky-500 text-white font-bold text-xs hover:bg-sky-600 transition-colors inline-flex items-center gap-2 shadow-md shadow-sky-500/20"
            >
              <span>Schedule Free Project Scoping</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
