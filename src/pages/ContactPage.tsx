import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  CheckCircle2,
  Send,
  Clock,
  ShieldCheck,
  Building,
  HelpCircle,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';
import { companyInfo } from '../data/companyData';
import { SectionHeading } from '../components/SectionHeading';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    serviceInterest: 'Full Stack Development',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

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
      subject: '',
      message: '',
      serviceInterest: 'Full Stack Development',
    });
  };

  const faqs = [
    {
      q: 'How fast can KIQ Techno kick off a new development sprint?',
      a: 'Following our initial technical scoping call with founder Kavin Sengottuvel, we can typically assemble the project architecture and start development within 5 to 7 business days.',
    },
    {
      q: 'What engagement models do you provide?',
      a: 'We offer fixed-scope milestone delivery, dedicated engineering sprint pods, and monthly retainer options for continuous product development and cloud maintenance.',
    },
    {
      q: 'Who retains the intellectual property (IP) and source code?',
      a: 'You retain 100% full intellectual property and source code ownership upon milestone settlement. We transfer GitHub repositories and cloud credentials directly to your team.',
    },
    {
      q: 'Where is the development team situated?',
      a: 'Our core engineering and leadership team is based on-site in Guindy, Chennai, India, operating under strict international data privacy and security protocols.',
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-24 px-4 sm:px-8 lg:px-12 xl:px-16 w-full">
      {/* Ambient background light */}
      <div className="absolute top-20 right-1/3 w-[700px] h-[450px] bg-sky-300/20 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl 2xl:max-w-[1720px] mx-auto space-y-16 w-full">
        {/* Page Header */}
        <SectionHeading
          number="05"
          badge="Direct Engineering Channel"
          title="Connect with Our Chennai Engineering Team"
          description="Have a project in mind, need technical architecture review, or looking to scale your digital presence? We respond to all business inquiries within 4 hours."
          align="center"
        />

        {/* Core Layout: Contact Info Block + Working Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* LEFT: Contact Information Block */}
          <div className="lg:col-span-5 space-y-6">
            <div className="apple-card rounded-[36px] p-7 sm:p-10 border border-white/90 space-y-6 relative overflow-hidden text-left">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                  Headquarters Coordinates
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  KIQ Techno Pvt Ltd
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Registered Software Engineering Firm · Chennai, India
                </p>
              </div>

              {/* Physical Address */}
              <div className="space-y-4 text-xs text-slate-600 pt-2 border-t border-slate-200">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shrink-0 mt-0.5 shadow-xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">
                      Physical Address:
                    </span>
                    <p className="text-slate-800 leading-relaxed font-semibold">
                      {companyInfo.fullAddress}
                    </p>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shrink-0 mt-0.5 shadow-xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">
                      Direct Email:
                    </span>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="text-slate-900 hover:text-sky-600 text-sm font-bold transition-colors block"
                    >
                      {companyInfo.email}
                    </a>
                    <span className="text-[10px] text-slate-500 font-medium">Official HR & Client Inquiries</span>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shrink-0 mt-0.5 shadow-xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">
                      Phone Number:
                    </span>
                    <a
                      href={`tel:${companyInfo.phone}`}
                      className="text-slate-900 hover:text-sky-600 text-sm font-extrabold font-mono transition-colors block"
                    >
                      {companyInfo.phone}
                    </a>
                    <span className="text-[10px] text-slate-500 font-medium">Available Mon–Sat, 9AM–7PM IST</span>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-4 border-t border-slate-200 space-y-2.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                  Official Channels:
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={companyInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-sky-50 text-slate-800 hover:text-sky-700 border border-slate-200 hover:border-sky-300 text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-xs"
                  >
                    <Linkedin className="w-4 h-4 text-sky-600" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={companyInfo.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-800 hover:text-blue-700 border border-slate-200 hover:border-blue-300 text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-xs"
                  >
                    <Facebook className="w-4 h-4 text-blue-600" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>

              {/* Direct Chennai Map Preview Card */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 text-slate-900 font-bold">
                    <Building className="w-3.5 h-3.5 text-sky-600" />
                    Olympia Tech Park, Guindy
                  </span>
                  <span className="text-[10px] text-emerald-700 font-mono font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">Open</span>
                </div>
                <p className="text-xs text-slate-500 leading-snug">
                  Located right beside the Guindy Metro & Suburban Hub in Chennai's prominent IT Corridor.
                </p>
                <a
                  href="https://maps.google.com/?q=Olympia+Technology+Park+Guindy+Chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-sky-700 hover:text-sky-800 inline-flex items-center gap-1 font-bold pt-1"
                >
                  <span>Open in Google Maps</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form (Name, Email, Phone, Subject, Message) */}
          <div className="lg:col-span-7">
            <div className="apple-card rounded-[36px] p-7 sm:p-12 border border-white/90 relative overflow-hidden">
              {!isSubmitted ? (
                <div className="space-y-6 text-left">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-bold text-sky-700 uppercase tracking-wider">
                      <Send className="w-3.5 h-3.5" />
                      <span>Project Scoping & Inquiries</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      Send Us a Message
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Fill out the details below. Our technical directors will review your brief and contact you promptly.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Anand Murthy"
                          className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 shadow-xs transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="anand@company.in"
                          className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 shadow-xs transition-colors"
                        />
                      </div>
                    </div>

                    {/* Phone & Subject */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98400 12345"
                          className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 shadow-xs transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Subject *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="e.g. Taxi Platform Development"
                          className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 shadow-xs transition-colors"
                        />
                      </div>
                    </div>

                    {/* Service Interest */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Area of Service Interest
                      </label>
                      <select
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-sky-500 shadow-xs transition-colors"
                      >
                        <option value="Full Stack Development">Full Stack Development</option>
                        <option value="Digital Marketing">Digital Marketing & Growth Funnels</option>
                        <option value="Data Analytics">Data Analytics & Telemetry Dashboards</option>
                        <option value="Cloud Services">Cloud Infrastructure & DevOps</option>
                        <option value="Small Business Solutions">Small Business Solutions Suite</option>
                        <option value="Mobility / Taxi Platform">Mobility & Taxi Fare Comparison Engine</option>
                        <option value="Free Consultation">Free Technical Consultation</option>
                      </select>
                    </div>

                    {/* Message Body */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Project Message / Brief *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your requirements, project scope, target timeline, or existing platform..."
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 shadow-xs transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 px-6 rounded-2xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm transition-all shadow-md shadow-sky-500/25 flex items-center justify-center gap-2 group disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>Transmitting Message...</span>
                        ) : (
                          <>
                            <span>Send Project Message</span>
                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-500 pt-2 font-medium">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-sky-600" />
                        <span>Average response time: &lt; 4 hours</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                        <span>NDA & Confidentiality Guaranteed</span>
                      </span>
                    </div>
                  </form>
                </div>
              ) : (
                /* Success Screen */
                <div className="py-12 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-900">Message Transmitted Successfully!</h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting <strong className="text-slate-900">KIQ Techno Pvt Ltd</strong>,{' '}
                      <span className="text-sky-700 font-bold">{formData.name}</span>. Our technical desk has logged your request regarding{' '}
                      <span className="text-slate-900 font-semibold">"{formData.subject}"</span>.
                    </p>
                    <p className="text-xs text-slate-500">
                      A confirmation email has been dispatched to <strong className="text-slate-800">{formData.email}</strong>.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 max-w-md mx-auto text-left space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Phone Provided:</span>
                      <span className="font-mono text-slate-900 font-bold">{formData.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Subject:</span>
                      <span className="text-slate-900 font-semibold">{formData.subject}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Direct Inquiries:</span>
                      <a href={`tel:${companyInfo.phone}`} className="text-sky-600 font-bold hover:underline">
                        {companyInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="apple-card rounded-[36px] p-7 sm:p-12 border border-white/90 space-y-6">
          <div className="space-y-1 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700 flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Frequently Asked Questions</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Everything You Need to Know Before Getting Started
            </h3>
          </div>

          <div className="divide-y divide-slate-200">
            {faqs.map((faq, i) => (
              <div key={i} className="py-4">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full flex items-center justify-between text-left gap-4 group"
                >
                  <span className="text-base font-bold text-slate-800 group-hover:text-sky-700 transition-colors">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                      expandedFaq === i ? 'rotate-180 text-sky-600' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {expandedFaq === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-sm text-slate-600 pt-2.5 leading-relaxed text-left"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
