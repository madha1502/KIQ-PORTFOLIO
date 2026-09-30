import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Facebook, Twitter, Github, CheckCircle2, ArrowRight } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setIsSubscribed(true);
    setNewsletterEmail('');
  };

  return (
    <footer className="relative border-t border-slate-200/80 bg-white/60 backdrop-blur-2xl pt-16 pb-12 overflow-hidden text-left">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-sky-400/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-slate-200">
          {/* Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-500 via-blue-600 to-indigo-600 flex items-center justify-center font-bold text-white text-sm shadow-md shadow-sky-500/25">
                K
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900">
                {companyInfo.legalName}
              </span>
            </Link>
            <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
              Engineering modern digital experiences, scalable cloud systems, and data-driven
              architectures for forward-thinking enterprises. Founded by {companyInfo.founder} in {companyInfo.foundedYear}.
            </p>

            {/* Social media connections */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={companyInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-sky-600 hover:bg-sky-50 hover:border-sky-300 transition-all duration-200 shadow-xs"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={companyInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 shadow-xs"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={companyInfo.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-all duration-200 shadow-xs"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={companyInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-all duration-200 shadow-xs"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 font-medium">
              <li>
                <Link to="/" className="hover:text-sky-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-sky-600 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-sky-600 transition-colors">
                  About KIQ
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-sky-600 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-sky-600 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Capabilities */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Solutions
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 font-medium">
              <li>
                <Link to="/#services" className="hover:text-sky-600 transition-colors">
                  Full Stack Development
                </Link>
              </li>
              <li>
                <Link to="/#services" className="hover:text-sky-600 transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/#services" className="hover:text-sky-600 transition-colors">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link to="/#services" className="hover:text-sky-600 transition-colors">
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/#services" className="hover:text-sky-600 transition-colors">
                  Small Business Suite
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-sky-600 transition-colors">
                  Free Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Coordinates */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Chennai Office
            </h4>
            <div className="space-y-2.5 text-xs text-slate-600 font-medium">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Olympia Tech Park, Guindy, Chennai, Tamil Nadu 600032
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-600 shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="hover:text-slate-900 transition-colors font-mono">
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-600 shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-slate-900 transition-colors">
                  {companyInfo.email}
                </a>
              </div>
            </div>

            {/* Newsletter input */}
            <div className="pt-2">
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Engineering updates email"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 shadow-xs"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="absolute right-1 top-1 bottom-1 px-2.5 bg-sky-500 hover:bg-sky-600 text-white rounded-lg flex items-center justify-center transition-colors shadow-xs"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                {isSubscribed && (
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-600 font-semibold">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Subscribed to KIQ Engineering Notes</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <div>
            © {companyInfo.foundedYear}–{new Date().getFullYear()} {companyInfo.legalName}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Chennai, India</span>
            <span>·</span>
            <span>CIN Verified</span>
            <span>·</span>
            <Link to="/contact" className="hover:text-slate-800 transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link to="/contact" className="hover:text-slate-800 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
