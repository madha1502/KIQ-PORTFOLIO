import React from 'react';
import {
  Calendar,
  Clock,
  Compass,
  Mail,
  MapPin,
  Phone,
  Shield,
  Sparkles,
  Users,
  Zap,
  ArrowRight,
} from 'lucide-react';
import { companyInfo, keyStats } from '../data/companyData';
import { SectionHeading } from '../components/SectionHeading';

interface AboutPageProps {
  onOpenConsultation: (service?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenConsultation }) => {
  const principles = [
    {
      title: 'Precision Human Interface Engineering',
      desc: 'We reject bloated, clumsy web software. Every screen we construct adheres to Apple-inspired fluid motion, responsive tactile feedback, and instant state updates.',
      icon: <Sparkles className="w-5 h-5 text-sky-600" />,
    },
    {
      title: 'Sub-200ms API Execution Latency',
      desc: 'Whether building ride aggregators or multi-store retail sync engines, our backend microservices leverage Redis caching, connection pooling, and optimized SQL queries.',
      icon: <Zap className="w-5 h-5 text-blue-600" />,
    },
    {
      title: 'Transparent Milestone Governance',
      desc: 'No black-box development. Clients get direct visibility into every commit, automated staging deployment, and sprint review with dedicated support.',
      icon: <Shield className="w-5 h-5 text-emerald-600" />,
    },
    {
      title: 'Data Privacy & Strict Enterprise Security',
      desc: 'End-to-end encrypted storage, role-based access control (RBAC), and adherence to Indian digital personal data protection principles.',
      icon: <Compass className="w-5 h-5 text-indigo-600" />,
    },
  ];

  const milestones = [
    {
      period: 'Early 2025',
      title: 'Inception in Chennai',
      description:
        `Founded by Kavin Sengottuvel with a vision to deliver world-class digital solutions to growing businesses in Tamil Nadu and across India.`,
    },
    {
      period: 'Mid 2025',
      title: 'First 25 Enterprise Deployments',
      description:
        'Launched custom full-stack solutions for retail chains, automotive suppliers, and mobility startups. Achieved 99.9% uptime track record.',
    },
    {
      period: 'Late 2025',
      title: 'Mobility Lab & Multi-Aggregator R&D',
      description:
        'Commenced development of the proprietary Taxi Fare Comparison Platform and High-Velocity E-Commerce Analytics Engine.',
    },
    {
      period: 'Present Day (2026)',
      title: '50+ Milestone & 12 Industry Honors',
      description:
        'Surpassed 50 completed projects, serving 100+ happy clients with a dedicated 2-year proven record of engineering excellence.',
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-24 px-4 sm:px-8 lg:px-12 xl:px-16 w-full">
      {/* Ambient background light */}
      <div className="absolute top-20 right-1/4 w-[650px] h-[400px] bg-blue-300/20 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl 2xl:max-w-[1720px] mx-auto space-y-16 w-full">
        {/* Editorial Heading */}
        <SectionHeading
          number="03"
          badge="Company Heritage & Leadership"
          title="Building Modern Digital Foundations Since 2025"
          description="Headquartered in the vibrant technology corridor of Guindy, Chennai, KIQ Techno Pvt Ltd merges deep technical craftsmanship with pragmatic business outcomes."
          align="center"
        />

        {/* Founder & Mission Hero Bento */}
        <div className="apple-card rounded-[36px] p-8 sm:p-14 border border-white/90 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Founder Bio & Company Mission */}
            <div className="lg:col-span-8 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-700 uppercase tracking-wider px-3 py-1 rounded-full bg-sky-50 border border-sky-200">
                <Users className="w-4 h-4" />
                <span>Executive Leadership</span>
              </div>

              <h3 className="text-2xl sm:text-4xl 2xl:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                "Our mission is simple: provide modern digital solutions that empower growing businesses to outpace their competition."
              </h3>

              <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                <p>
                  Founded by <strong className="text-slate-900 font-bold">{companyInfo.founder}</strong> in{' '}
                  <strong className="text-slate-900 font-bold">{companyInfo.foundedYear}</strong>, KIQ Techno Pvt Ltd was born
                  from the recognition that too many businesses were held back by slow, fragile, and aesthetically outdated software.
                </p>
                <p>
                  Under Kavin’s leadership, our Chennai-based engineering team has designed and delivered over{' '}
                  <strong className="text-sky-700 font-bold">50+ successful digital initiatives</strong> across e-commerce, mobility, cloud automation,
                  and corporate operations. We pride ourselves on creating digital experiences that feel as fluid and refined as native Apple devices.
                </p>
              </div>

              {/* Direct coordinates box */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold">Direct Inquiries</div>
                    <a href={`tel:${companyInfo.phone}`} className="text-slate-900 font-mono hover:text-sky-600 font-bold">
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold">Official Email</div>
                    <a href={`mailto:${companyInfo.email}`} className="text-slate-900 hover:text-sky-600 font-bold">
                      {companyInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenConsultation('Founder Technical Consultation')}
                  className="px-8 py-3.5 rounded-full bg-sky-500 text-white font-bold text-xs hover:bg-sky-600 transition-colors flex items-center gap-2 shadow-md shadow-sky-500/20"
                >
                  <span>Schedule Consultation with {companyInfo.founder}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Founder Visual Showcase Card */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="w-full max-w-xs p-7 rounded-3xl bg-white border border-slate-200/80 text-center space-y-4 shadow-xl shadow-slate-900/5">
                <div className="relative mx-auto w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-sky-400 via-blue-500 to-indigo-600 shadow-lg shadow-sky-500/20">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-3xl font-extrabold text-slate-900 tracking-tight">
                    KS
                  </div>
                  <div className="absolute bottom-1 right-1 w-7 h-7 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold shadow">
                    ✓
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-slate-900">{companyInfo.founder}</h4>
                  <p className="text-xs text-sky-700 font-bold">{companyInfo.founderTitle}</p>
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    {companyInfo.legalName}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 space-y-2 text-xs text-slate-600 font-medium">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Founded:</span>
                    <span className="font-mono text-slate-900 font-bold">{companyInfo.foundedYear}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Headquarters:</span>
                    <span className="text-slate-900 font-bold">Chennai, India</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Track Record:</span>
                    <span className="font-mono text-sky-700 font-bold">2+ Years Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {keyStats.map((stat, i) => (
            <div
              key={i}
              className="apple-card rounded-3xl p-6 text-left space-y-1.5 border border-white/90"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-mono bg-gradient-to-r from-slate-900 via-sky-800 to-sky-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-900">{stat.label}</div>
              <div className="text-xs text-slate-500 leading-snug font-medium">{stat.subtext}</div>
            </div>
          ))}
        </div>

        {/* Engineering Philosophy & Principles */}
        <div className="space-y-8">
          <div className="text-left space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Our Standard of Excellence
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              The Four Pillars of KIQ Engineering
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {principles.map((pr, idx) => (
              <div
                key={idx}
                className="apple-card rounded-[32px] p-7 sm:p-8 space-y-3 border border-white/90 hover:border-sky-300 transition-all duration-300 text-left"
              >
                <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center shadow-xs">
                  {pr.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 tracking-tight">{pr.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{pr.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Journey Timeline */}
        <div className="space-y-8 pt-4">
          <div className="text-left space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Growth Trajectory
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              From 2025 to Present Expansion
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="apple-card rounded-3xl p-6 border border-white/90 space-y-2.5 relative text-left"
              >
                <div className="text-xs font-mono font-bold text-sky-700 px-2.5 py-0.5 rounded-full bg-sky-50 border border-sky-200 inline-block">
                  {m.period}
                </div>
                <h4 className="text-base font-bold text-slate-900">{m.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">{m.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Physical Chennai Location & Contact Card */}
        <div className="apple-card rounded-[36px] p-8 sm:p-10 border border-white/90 space-y-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                Registered Office
              </span>
              <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900">Guindy Tech Corridor, Chennai</h4>
            </div>
            <a
              href="https://maps.google.com/?q=Olympia+Technology+Park+Guindy+Chennai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-1.5 self-start sm:self-auto shadow-sm"
            >
              <span>Get Directions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600 pt-4 border-t border-slate-200">
            <div className="space-y-1">
              <span className="text-slate-400 uppercase font-bold">Address:</span>
              <p className="text-slate-800 leading-relaxed font-semibold">{companyInfo.fullAddress}</p>
            </div>
            <div className="space-y-1">
              <span className="text-slate-400 uppercase font-bold">Direct Voice:</span>
              <p>
                <a href={`tel:${companyInfo.phone}`} className="text-slate-900 hover:text-sky-600 font-mono font-bold">
                  {companyInfo.phone}
                </a>
              </p>
              <p className="text-slate-500">Mon–Fri: 9:00 AM – 7:00 PM IST</p>
            </div>
            <div className="space-y-1">
              <span className="text-slate-400 uppercase font-bold">Corporate Email:</span>
              <p>
                <a href={`mailto:${companyInfo.email}`} className="text-slate-900 hover:text-sky-600 font-bold">
                  {companyInfo.email}
                </a>
              </p>
              <p className="text-slate-500">Human Resources & Client Contracts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
