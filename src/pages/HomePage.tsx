import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Code2,
  TrendingUp,
  BarChart3,
  Cloud,
  Store,
  Compass,
  CheckCircle2,
  ArrowUpRight,
  Star,
  MapPin,
  Award,
  Server,
  Terminal,
  Globe,
  Target,
  LineChart,
  Activity,
  ShieldCheck,
  CreditCard,
  Users,
  CalendarCheck,
  Zap,
  Sparkles,
  Layers,
  Briefcase,
  Megaphone,
  MessagesSquare,
} from 'lucide-react';
import { companyInfo, keyStats, servicesData, projectsData, testimonialsData } from '../data/companyData';
import { InteractiveIphoneFrame } from '../components/InteractiveIphoneFrame';
import { SectionHeading } from '../components/SectionHeading';
import { Project, Service } from '../types';
import { useThemePalette } from '../context/ThemePaletteContext';

interface HomePageProps {
  onOpenConsultation: (service?: string) => void;
  onSelectProject: (project: Project) => void;
}

// Dynamic Lucide icon and category styling resolver
const getServiceCategoryMeta = (svc: Service) => {
  const query = `${svc.category || ''} ${svc.title} ${svc.iconName} ${svc.id}`.toLowerCase();

  // Cloud Category -> Cloud icon (e.g. AWS, Kubernetes, DevOps, Serverless)
  if (query.includes('cloud') || query.includes('devops') || query.includes('server')) {
    return {
      Icon: Cloud,
      SubIcon: Server,
      categoryLabel: 'Cloud & DevOps',
      iconContainerStyle: 'bg-sky-50 text-sky-600 border-sky-200/90 group-hover:bg-sky-500 group-hover:text-white',
      badgeStyle: 'bg-sky-50 text-sky-700 border-sky-200/80',
      iconGlow: 'rgba(14, 165, 233, 0.25)',
    };
  }

  // Analytics Category -> BarChart3 icon (e.g. Data Analytics, BI, Dashboards)
  if (query.includes('analytic') || query.includes('data') || query.includes('telemetry') || query.includes('barchart')) {
    return {
      Icon: BarChart3,
      SubIcon: LineChart,
      categoryLabel: 'Analytics & Telemetry',
      iconContainerStyle: 'bg-indigo-50 text-indigo-600 border-indigo-200/90 group-hover:bg-indigo-600 group-hover:text-white',
      badgeStyle: 'bg-indigo-50 text-indigo-700 border-indigo-200/80',
      iconGlow: 'rgba(99, 102, 241, 0.25)',
    };
  }

  // Marketing Category -> TrendingUp icon (e.g. Digital Marketing, Growth, SEO)
  if (query.includes('market') || query.includes('growth') || query.includes('seo') || query.includes('ad')) {
    return {
      Icon: TrendingUp,
      SubIcon: Megaphone,
      categoryLabel: 'Digital Marketing & Growth',
      iconContainerStyle: 'bg-blue-50 text-blue-600 border-blue-200/90 group-hover:bg-blue-600 group-hover:text-white',
      badgeStyle: 'bg-blue-50 text-blue-700 border-blue-200/80',
      iconGlow: 'rgba(37, 99, 235, 0.25)',
    };
  }

  // Full Stack Engineering -> Code2 icon (e.g. Web Apps, Microservices, APIs)
  if (query.includes('code') || query.includes('stack') || query.includes('dev') || query.includes('web')) {
    return {
      Icon: Code2,
      SubIcon: Layers,
      categoryLabel: 'Full Stack Engineering',
      iconContainerStyle: 'bg-cyan-50 text-cyan-700 border-cyan-200/90 group-hover:bg-cyan-600 group-hover:text-white',
      badgeStyle: 'bg-cyan-50 text-cyan-800 border-cyan-200/80',
      iconGlow: 'rgba(6, 182, 212, 0.25)',
    };
  }

  // Small Business Solutions -> Store / Briefcase icon
  if (query.includes('business') || query.includes('store') || query.includes('retail') || query.includes('briefcase')) {
    return {
      Icon: Store,
      SubIcon: Briefcase,
      categoryLabel: 'Small Business Suite',
      iconContainerStyle: 'bg-emerald-50 text-emerald-600 border-emerald-200/90 group-hover:bg-emerald-600 group-hover:text-white',
      badgeStyle: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
      iconGlow: 'rgba(16, 185, 129, 0.25)',
    };
  }

  // Consultation -> Compass / MessagesSquare icon
  if (query.includes('consult') || query.includes('strategy') || query.includes('compass') || query.includes('road')) {
    return {
      Icon: Compass,
      SubIcon: MessagesSquare,
      categoryLabel: 'Strategic Consultation',
      iconContainerStyle: 'bg-amber-50 text-amber-600 border-amber-200/90 group-hover:bg-amber-500 group-hover:text-white',
      badgeStyle: 'bg-amber-50 text-amber-700 border-amber-200/80',
      iconGlow: 'rgba(245, 158, 11, 0.25)',
    };
  }

  return {
    Icon: Sparkles,
    SubIcon: Layers,
    categoryLabel: svc.category || 'Digital Service',
    iconContainerStyle: 'bg-slate-100 text-slate-700 border-slate-200 group-hover:bg-slate-800 group-hover:text-white',
    badgeStyle: 'bg-slate-100 text-slate-700 border-slate-200',
    iconGlow: 'rgba(100, 116, 139, 0.25)',
  };
};

// Dynamic contextual Lucide icon for feature checklist bullets
const getFeatureIcon = (feature: string) => {
  const text = feature.toLowerCase();
  if (text.includes('api') || text.includes('graphql') || text.includes('backend')) {
    return <Terminal className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />;
  }
  if (text.includes('seo') || text.includes('search') || text.includes('google')) {
    return <Globe className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />;
  }
  if (text.includes('ad') || text.includes('roi') || text.includes('campaign')) {
    return <Target className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />;
  }
  if (text.includes('dashboard') || text.includes('telemetry') || text.includes('visualizer')) {
    return <LineChart className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />;
  }
  if (text.includes('churn') || text.includes('model') || text.includes('forecast')) {
    return <Activity className="w-3.5 h-3.5 text-violet-600 shrink-0 mt-0.5" />;
  }
  if (text.includes('cloud') || text.includes('terraform') || text.includes('docker') || text.includes('kubernetes') || text.includes('serverless')) {
    return <Server className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />;
  }
  if (text.includes('downtime') || text.includes('uptime') || text.includes('recovery') || text.includes('backup') || text.includes('audit')) {
    return <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />;
  }
  if (text.includes('payment') || text.includes('billing') || text.includes('gateway') || text.includes('upi')) {
    return <CreditCard className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />;
  }
  if (text.includes('crm') || text.includes('customer') || text.includes('inquiry') || text.includes('staff')) {
    return <Users className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />;
  }
  if (text.includes('timeline') || text.includes('milestone') || text.includes('proposal') || text.includes('roadmap')) {
    return <CalendarCheck className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />;
  }
  if (text.includes('mobile') || text.includes('responsive') || text.includes('animation') || text.includes('60fps')) {
    return <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />;
  }
  return <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />;
};

export const HomePage: React.FC<HomePageProps> = ({
  onOpenConsultation,
  onSelectProject,
}) => {
  const { currentPalette } = useThemePalette();

  return (
    <div className="min-h-screen pt-24 pb-20 overflow-hidden w-full">
      {/* ----------------- FULL SCREEN HERO SECTION ----------------- */}
      <section className="relative px-4 sm:px-8 lg:px-12 xl:px-16 pt-8 sm:pt-16 pb-20 sm:pb-32 w-full">
        {/* Apple-grade dynamic ambient light glow matching active palette */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[600px] blur-[150px] pointer-events-none -z-10 transition-colors duration-500"
          style={{ backgroundColor: currentPalette.glowColor }}
        />

        <div className="max-w-7xl 2xl:max-w-[1720px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Value Proposition & Hero copy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6 text-left"
            >
              {/* Subtle Trust Label */}
              <div
                className={`inline-flex items-center gap-2 text-xs font-bold ${currentPalette.textAccentClass} tracking-wide uppercase px-3.5 py-1 rounded-full ${currentPalette.bgAccentLightClass} border ${currentPalette.borderAccentClass} shadow-xs transition-colors duration-300`}
              >
                <span className={`w-2 h-2 rounded-full ${currentPalette.primaryClass} animate-pulse`} />
                <span>Chennai, India · Est. {companyInfo.foundedYear}</span>
                <span className="text-slate-300">|</span>
                <span className="text-slate-600 font-semibold">Next-Gen Software Engineering</span>
              </div>

              {/* Exact user-requested headline with dynamic theme gradient */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.12] text-balance">
                Welcome to{' '}
                <span
                  className={`bg-gradient-to-r ${currentPalette.gradientTextClass} bg-clip-text text-transparent transition-all duration-300`}
                >
                  KIQ Techno Pvt Ltd
                </span>{' '}
                — Modern Digital Solutions for Growing Businesses
              </h1>

              {/* Mission subtitle */}
              <p className="text-base sm:text-lg 2xl:text-xl text-slate-600 max-w-2xl leading-relaxed">
                Founded by {companyInfo.founder}, we empower ambitious enterprises and startups with cutting-edge full-stack web platforms, mobile mobility architectures, cloud infrastructure, and data telemetry.
              </p>

              {/* Primary Call to Action buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <Link
                  to="/portfolio"
                  className="px-8 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all duration-200 shadow-xl shadow-slate-900/15 flex items-center justify-center gap-2 group whitespace-nowrap active:scale-[0.98]"
                >
                  <span>See Our Projects</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button
                  onClick={() => onOpenConsultation('Free Consultation')}
                  className={`px-8 py-4 rounded-full bg-white/80 hover:bg-white text-slate-900 border border-slate-200 font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-md shadow-sm active:scale-[0.98] whitespace-nowrap group`}
                >
                  <span>Book Free Consultation</span>
                  <ArrowUpRight className={`w-4 h-4 ${currentPalette.textAccentClass} group-hover:scale-110 transition-transform`} />
                </button>
              </div>

              {/* Proof badges */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-6 text-xs text-slate-600">
                <div className="space-y-0.5">
                  <div className="font-extrabold text-slate-900 text-base font-mono">50+ Projects</div>
                  <div className="text-[11px] text-slate-500 font-medium">Shipped with Zero Downtime</div>
                </div>
                <div className="space-y-0.5">
                  <div className={`font-extrabold ${currentPalette.textAccentClass} text-base font-mono`}>100% On-Time</div>
                  <div className="text-[11px] text-slate-500 font-medium">Agile Milestone Delivery</div>
                </div>
                <div className="space-y-0.5">
                  <div className="font-extrabold text-slate-900 text-base font-mono">Chennai HQ</div>
                  <div className="text-[11px] text-slate-500 font-medium">Global Delivery Standards</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Apple-inspired Silver/Natural Titanium iPhone running live interactive apps */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="w-full">
                <InteractiveIphoneFrame initialTab="taxi" />
                <p className="text-center text-xs text-slate-500 mt-4 font-medium">
                  Interactive iOS Prototype · Tap tabs to switch live engines
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ----------------- FULL SCREEN KEY STATS BAR ----------------- */}
      <section className="px-4 sm:px-8 lg:px-12 xl:px-16 py-10 border-y border-slate-200/80 bg-white/70 backdrop-blur-xl w-full">
        <div className="max-w-7xl 2xl:max-w-[1720px] mx-auto w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {keyStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-left space-y-1 p-4 rounded-2xl bg-white/80 border border-slate-200/80 shadow-xs"
              >
                <div
                  className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-mono tracking-tight bg-gradient-to-r ${currentPalette.gradientTextClass} bg-clip-text text-transparent`}
                >
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-slate-900">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 leading-tight font-medium">
                  {stat.subtext}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- SERVICES OVERVIEW (CARD LAYOUTS) ----------------- */}
      <section id="services" className="px-4 sm:px-8 lg:px-12 xl:px-16 py-20 sm:py-32 relative w-full">
        <div className="max-w-7xl 2xl:max-w-[1720px] mx-auto space-y-14 w-full">
          <SectionHeading
            number="01"
            badge="Capabilities & Services"
            title="Engineered for Exponential Business Growth"
            description="From high-velocity full-stack engineering to predictive telemetry and turnkey small-business digital systems, we build what modern companies need."
          />

          {/* Cards Showcase: Apple Light Glass Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {servicesData.map((svc, idx) => {
              const meta = getServiceCategoryMeta(svc);
              const CategoryIcon = meta.Icon;

              return (
                <motion.div
                  key={svc.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="apple-card rounded-[32px] p-7 sm:p-8 flex flex-col justify-between group hover:border-slate-300 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Dynamic Subtle Light Sheen */}
                  <div
                    className="absolute top-0 right-0 w-36 h-36 rounded-full blur-2xl transition-all duration-300 pointer-events-none opacity-40"
                    style={{ backgroundColor: currentPalette.glowColor }}
                  />

                  <div className="space-y-4 relative z-10 text-left">
                    {/* Top Row: Dynamic Category Tag with Icon & Performance SLA */}
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border shadow-xs ${meta.badgeStyle}`}>
                        <CategoryIcon className="w-3.5 h-3.5" />
                        <span>{meta.categoryLabel}</span>
                      </div>
                      <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80">
                        {svc.highlightMetric}
                      </span>
                    </div>

                    {/* Prominent Apple Glass Icon Showcase Box */}
                    <div className="pt-2 flex items-center gap-4">
                      <div
                        className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-all duration-300 shadow-sm ${meta.iconContainerStyle} group-hover:scale-105 group-hover:shadow-md shrink-0`}
                      >
                        <CategoryIcon className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight transition-colors">
                          {svc.title}
                        </h3>
                        <p className={`text-xs ${currentPalette.textAccentClass} font-semibold mt-0.5`}>
                          {svc.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {svc.description}
                    </p>

                    {/* Key Highlights with Contextual Lucide Icons */}
                    <div className="space-y-2 pt-3 border-t border-slate-200/80">
                      <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                        <meta.SubIcon className="w-3 h-3 text-slate-500" />
                        <span>Core Capabilities:</span>
                      </div>
                      <ul className="space-y-2 text-xs text-slate-600 font-medium">
                        {svc.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            {getFeatureIcon(feature)}
                            <span className="leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between relative z-10">
                    <button
                      onClick={() => onOpenConsultation(svc.title)}
                      className={`text-xs font-bold ${currentPalette.textAccentClass} hover:opacity-80 flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform`}
                    >
                      <span>Inquire for {svc.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <span className="text-xs text-slate-400 font-mono font-semibold">
                      0{idx + 1}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ----------------- FULL SCREEN PORTFOLIO SPOTLIGHT ----------------- */}
      <section className="px-4 sm:px-8 lg:px-12 xl:px-16 py-20 sm:py-32 bg-slate-50/70 relative border-t border-slate-200/80 w-full">
        <div className="max-w-7xl 2xl:max-w-[1720px] mx-auto space-y-12 w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading
              number="02"
              badge="Innovation Lab"
              title="Featured In-Progress Projects"
              description="Explore the live mobility platforms, commercial intelligence dashboards, and client operations systems currently taking shape in our Chennai studio."
              align="left"
            />

            <Link
              to="/portfolio"
              className={`inline-flex items-center gap-2 text-sm font-bold ${currentPalette.textAccentClass} hover:opacity-80 transition-opacity whitespace-nowrap self-start md:self-end`}
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Interactive Project Cards with Bold Slide-in Animations */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {projectsData.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -25 : 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="apple-card rounded-[32px] p-7 sm:p-8 flex flex-col justify-between group hover:border-slate-300 transition-all duration-300 relative overflow-hidden"
              >
                <div className="space-y-4 text-left">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-mono font-bold px-3 py-1 rounded-full ${currentPalette.bgAccentLightClass} ${currentPalette.textAccentClass} border ${currentPalette.borderAccentClass}`}
                    >
                      {project.category}
                    </span>
                    <span className="text-xs text-amber-700 flex items-center gap-1 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
                      {project.status}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 font-medium">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Progress Bar */}
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-600 font-medium">Development Progress</span>
                      <span className={`${currentPalette.textAccentClass} font-mono font-bold`}>
                        {project.completionPercentage}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${currentPalette.buttonGradientClass} rounded-full`}
                        style={{ width: `${project.completionPercentage}%` }}
                      />
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    {project.metrics.slice(0, 2).map((m, i) => (
                      <div key={i} className="p-2.5 rounded-xl bg-white border border-slate-200/80 text-center shadow-xs">
                        <div className="text-[10px] text-slate-500 font-medium">{m.label}</div>
                        <div className="text-sm font-extrabold text-slate-900 font-mono">{m.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 text-[11px] rounded-lg bg-slate-100 text-slate-700 border border-slate-200/80 font-mono font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2.5 py-0.5 text-[11px] rounded-lg bg-slate-100 text-slate-500 font-mono font-medium">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 px-4 py-2 rounded-xl transition-all duration-200 flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Inspect System</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenConsultation(`Inquiry for ${project.title}`)}
                    className="text-xs text-slate-600 hover:text-slate-900 font-semibold transition-colors"
                  >
                    Request Demo
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- ABOUT & FOUNDER BRIEF ----------------- */}
      <section className="px-4 sm:px-8 lg:px-12 xl:px-16 py-20 sm:py-32 relative w-full">
        <div className="max-w-7xl 2xl:max-w-[1720px] mx-auto w-full">
          <div className="apple-card rounded-[36px] p-8 sm:p-14 border border-white/90 relative overflow-hidden">
            {/* Ambient backdrop glow */}
            <div
              className="absolute top-0 right-0 w-96 h-96 blur-[130px] pointer-events-none -z-10 opacity-30 transition-colors duration-500"
              style={{ backgroundColor: currentPalette.glowColor }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8 space-y-6 text-left">
                <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${currentPalette.textAccentClass}`}>
                  <Award className="w-4 h-4" />
                  <span>About KIQ Techno</span>
                </div>

                <h2 className="text-3xl sm:text-4xl 2xl:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Pioneering High-Velocity Engineering from Chennai
                </h2>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Founded in <strong className="text-slate-900 font-bold">{companyInfo.foundedYear}</strong> by{' '}
                  <strong className="text-slate-900 font-bold">{companyInfo.founder}</strong>, KIQ Techno Pvt Ltd
                  was formed with a single core mission: to provide <span className={`${currentPalette.textAccentClass} font-bold`}>"Modern Digital Solutions for Growing Businesses"</span> with
                  uncompromising performance, Apple-inspired human interface polish, and robust cloud resilience.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                    <div className="text-2xl font-extrabold text-slate-900 font-mono">50+</div>
                    <div className="text-xs text-slate-500 font-medium">Completed Projects</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                    <div className={`text-2xl font-extrabold ${currentPalette.textAccentClass} font-mono`}>100+</div>
                    <div className="text-xs text-slate-500 font-medium">Happy Customers</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                    <div className="text-2xl font-extrabold text-slate-900 font-mono">12</div>
                    <div className="text-xs text-slate-500 font-medium">Industry Awards</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                    <div className={`text-2xl font-extrabold ${currentPalette.textAccentClass} font-mono`}>2 Years</div>
                    <div className="text-xs text-slate-500 font-medium">In Active Service</div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    to="/about"
                    className={`px-8 py-3.5 rounded-full ${currentPalette.primaryClass} ${currentPalette.primaryHoverClass} text-white font-bold text-xs transition-colors flex items-center gap-2 shadow-md`}
                  >
                    <span>Read Founder Story & Mission</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                    <MapPin className={`w-3.5 h-3.5 ${currentPalette.textAccentClass}`} />
                    <span>Guindy Tech Corridor, Chennai</span>
                  </div>
                </div>
              </div>

              {/* Founder Profile Card */}
              <div className="lg:col-span-4">
                <div className="p-7 rounded-3xl bg-white/90 border border-slate-200/80 text-center space-y-4 shadow-lg shadow-slate-900/5">
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-tr ${currentPalette.swatch} mx-auto p-1 shadow-lg`}>
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-extrabold text-slate-900 text-2xl tracking-tight">
                      KS
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{companyInfo.founder}</h4>
                    <p className={`text-xs ${currentPalette.textAccentClass} font-bold`}>{companyInfo.founderTitle}</p>
                    <p className="text-xs text-slate-600 mt-2 italic">
                      "We treat every web application like precision hardware — smooth, responsive, and relentlessly dependable."
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200 flex items-center justify-center gap-4 text-xs text-slate-600 font-medium">
                    <a href={`mailto:${companyInfo.email}`} className={`hover:${currentPalette.textAccentClass} transition-colors`}>
                      {companyInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- TESTIMONIALS SPOTLIGHT ----------------- */}
      <section className="px-4 sm:px-8 lg:px-12 xl:px-16 py-20 sm:py-32 bg-slate-50/70 relative border-t border-slate-200/80 w-full">
        <div className="max-w-7xl 2xl:max-w-[1720px] mx-auto space-y-12 w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading
              number="03"
              badge="Client Verification"
              title="Endorsed by Fast-Growing Founders"
              description="Hear how our technical delivery has helped enterprises across Chennai, Bengaluru, Coimbatore, and Mumbai scale with certainty."
              align="left"
            />

            <Link
              to="/testimonials"
              className={`inline-flex items-center gap-2 text-sm font-bold ${currentPalette.textAccentClass} hover:opacity-80 transition-opacity whitespace-nowrap self-start md:self-end`}
            >
              <span>Read All 6 Testimonials</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonialsData.slice(0, 3).map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="apple-card rounded-[32px] p-7 flex flex-col justify-between group hover:border-slate-300 transition-all duration-300 text-left"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs text-slate-500 font-mono font-bold ml-2">5.0 Verified</span>
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed italic">
                    "{item.feedback}"
                  </p>

                  <div className={`p-3 rounded-2xl ${currentPalette.bgAccentLightClass} border ${currentPalette.borderAccentClass} text-xs ${currentPalette.textAccentClass} font-mono font-semibold`}>
                    Impact: {item.metricAchieved}
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-200/80 flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-tr ${item.avatarColor} flex items-center justify-center text-white font-bold text-xs shadow-sm`}
                  >
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{item.name}</h4>
                    <p className="text-[11px] text-slate-600 font-medium">
                      {item.role}, {item.company}
                    </p>
                    <p className="text-[10px] text-slate-500">{item.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- CALL TO ACTION BANNER ----------------- */}
      <section className="px-4 sm:px-8 lg:px-12 xl:px-16 py-20 relative w-full">
        <div className="max-w-6xl mx-auto w-full">
          <div className="relative rounded-[40px] bg-gradient-to-b from-white via-slate-50 to-white p-8 sm:p-16 text-center border border-slate-200/90 shadow-2xl shadow-slate-900/5 overflow-hidden">
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 blur-[90px] pointer-events-none opacity-40 transition-colors duration-500"
              style={{ backgroundColor: currentPalette.glowColor }}
            />

            <div className="max-w-3xl mx-auto space-y-6 relative z-10">
              <span
                className={`text-xs font-bold uppercase tracking-wider ${currentPalette.textAccentClass} px-3.5 py-1 rounded-full ${currentPalette.bgAccentLightClass} border ${currentPalette.borderAccentClass}`}
              >
                Start Your Digital Evolution
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
                Ready to build something extraordinary?
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Whether you need a custom high-performance web platform, mobility aggregator, or complete digital marketing engine, KIQ Techno Pvt Ltd delivers on time and within scope.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
                <button
                  onClick={() => onOpenConsultation('Free Consultation')}
                  className={`w-full sm:w-auto px-9 py-4 rounded-full bg-gradient-to-r ${currentPalette.buttonGradientClass} ${currentPalette.buttonGradientHoverClass} text-white font-bold text-sm transition-all duration-200 shadow-lg flex items-center justify-center gap-2 group`}
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-9 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-xs"
                >
                  <span>Direct Contact Details</span>
                  <ArrowUpRight className={`w-4 h-4 ${currentPalette.textAccentClass}`} />
                </Link>
              </div>

              <p className="text-xs text-slate-500 pt-2 font-medium">
                Call directly: <a href={`tel:${companyInfo.phone}`} className="text-slate-900 font-bold hover:underline font-mono">{companyInfo.phone}</a> · Email: <a href={`mailto:${companyInfo.email}`} className="text-slate-900 font-bold hover:underline">{companyInfo.email}</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
