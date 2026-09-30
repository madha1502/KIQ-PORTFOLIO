import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  CheckCircle2,
  ArrowRight,
  Clock,
  Zap,
  Navigation,
  ChevronRight,
} from 'lucide-react';
import { projectsData } from '../data/companyData';
import { SectionHeading } from '../components/SectionHeading';
import { Project } from '../types';

interface PortfolioPageProps {
  onSelectProject: (project: Project) => void;
  onOpenConsultation: (service?: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onSelectProject,
  onOpenConsultation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Interactive Live Simulator for Taxi Fare Platform
  const [taxiRoute, setTaxiRoute] = useState<'airport' | 'central' | 'guindy'>('airport');
  const [vehicleClass, setVehicleClass] = useState<'sedan' | 'mini' | 'auto'>('mini');

  // Interactive Live Simulator for E-commerce Dashboard
  const [analyticsPeriod, setAnalyticsPeriod] = useState<'7d' | '30d' | '90d'>('7d');
  const [activeMetricTab, setActiveMetricTab] = useState<'gmv' | 'orders' | 'aov'>('gmv');

  // Interactive Live Simulator for Client System
  const [crmTasks, setCrmTasks] = useState([
    { id: 1, title: 'Database Schema & Indexing', status: 'Completed', time: 'Yesterday' },
    { id: 2, title: 'Payment Gateway (UPI/Razorpay) Integration', status: 'In Review', time: '2 hrs ago' },
    { id: 3, title: 'High-Concurrency Load Testing (10k req/s)', status: 'In Progress', time: 'Running' },
  ]);

  const toggleTaskStatus = (id: number) => {
    setCrmTasks((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          const nextStatus = t.status === 'Completed' ? 'In Progress' : t.status === 'In Progress' ? 'In Review' : 'Completed';
          return { ...t, status: nextStatus };
        }
        return t;
      })
    );
  };

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  const getTaxiRates = () => {
    const multiplier = vehicleClass === 'sedan' ? 1.35 : vehicleClass === 'auto' ? 0.65 : 1.0;
    const basePrices = {
      airport: { uber: 360, ola: 345, rapido: 310, fasttrack: 330, dist: '14.2 km', duration: '28 min' },
      central: { uber: 520, ola: 495, rapido: 450, fasttrack: 470, dist: '22.8 km', duration: '44 min' },
      guindy: { uber: 290, ola: 280, rapido: 250, fasttrack: 270, dist: '11.8 km', duration: '22 min' },
    }[taxiRoute];

    return {
      dist: basePrices.dist,
      duration: basePrices.duration,
      uber: Math.round(basePrices.uber * multiplier),
      ola: Math.round(basePrices.ola * multiplier),
      rapido: Math.round(basePrices.rapido * multiplier),
      fasttrack: Math.round(basePrices.fasttrack * multiplier),
    };
  };

  const rates = getTaxiRates();

  return (
    <div className="min-h-screen pt-28 pb-24 px-4 sm:px-8 lg:px-12 xl:px-16 w-full">
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-1/3 w-[700px] h-[450px] bg-sky-300/20 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl 2xl:max-w-[1720px] mx-auto space-y-16 w-full">
        {/* Page Header */}
        <div className="space-y-6">
          <SectionHeading
            number="02"
            badge="Engineering Portfolio & Systems"
            title="Active Development & Innovation Pipeline"
            description="Inspect the core digital systems engineered by KIQ Techno Pvt Ltd. Each application is built with Apple-grade fluid responsiveness, sub-second latency, and enterprise-grade resilience."
            align="center"
          />

          {/* Interactive iOS Light Filter Tabs */}
          <div className="flex items-center justify-center gap-1.5 p-1.5 bg-slate-200/80 rounded-2xl max-w-md mx-auto shadow-inner">
            {['All', 'Mobility', 'Enterprise SaaS', 'Client Systems'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                  selectedCategory === cat
                    ? 'bg-white text-sky-700 font-extrabold shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Deep Dive Project Showcases */}
        <div className="space-y-12">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="apple-card rounded-[36px] p-7 sm:p-12 border border-white/90 hover:border-sky-300 transition-all duration-300 relative overflow-hidden"
            >
              {/* Radial gradient accent */}
              <div
                className="absolute top-0 right-0 w-96 h-96 blur-[130px] pointer-events-none -z-10 opacity-15"
                style={{ backgroundColor: project.accentColor }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
                {/* Left Side: System Narrative & Specs */}
                <div className="lg:col-span-7 space-y-6 text-left">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200">
                      {project.category}
                    </span>
                    <span className="text-xs text-amber-700 flex items-center gap-1.5 font-bold">
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                      {project.status}
                    </span>
                    <span className="text-xs text-slate-500 font-mono font-medium">
                      Phase {idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-sky-700 font-bold mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-base text-slate-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Completion Bar */}
                  <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-700 font-bold">Sprint Completion Rate</span>
                      <span className="text-sky-700 font-mono font-extrabold">
                        {project.completionPercentage}% Production Ready
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-sky-500 to-blue-600 rounded-full"
                        style={{ width: `${project.completionPercentage}%` }}
                      />
                    </div>
                  </div>

                  {/* Key Features List */}
                  <div className="space-y-2.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Engineered Capabilities:
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 font-medium">
                      {project.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="pt-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Full-Stack Architecture:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-xl bg-slate-100 border border-slate-200 text-slate-800 font-mono font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-sky-600 transition-colors flex items-center gap-1.5 shadow-md shadow-slate-900/10"
                    >
                      <span>Deep System Specs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onOpenConsultation(`Inquiry for ${project.title}`)}
                      className="px-6 py-3 rounded-xl bg-white text-slate-800 border border-slate-200 font-bold text-xs hover:bg-slate-50 transition-colors flex items-center gap-1.5 shadow-xs"
                    >
                      <span>Request Custom Implementation</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                  </div>
                </div>

                {/* Right Side: Working Interactive Simulator for this Project */}
                <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xl shadow-slate-900/5 space-y-4">
                  {/* Dynamic interactive simulator header */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
                    <span className="font-bold text-slate-900 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-sky-600" />
                      Live System Preview
                    </span>
                    <span className="text-[10px] text-emerald-700 font-mono font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      Sandbox Mode
                    </span>
                  </div>

                  {/* SIMULATOR 1: Taxi Platform */}
                  {project.id === 'taxi-fare-comparison' && (
                    <div className="space-y-4 text-left">
                      {/* Route Switcher */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                          Select Chennai Route:
                        </label>
                        <div className="grid grid-cols-3 gap-1.5 text-xs">
                          <button
                            onClick={() => setTaxiRoute('airport')}
                            className={`p-2.5 rounded-xl border text-center transition-colors ${
                              taxiRoute === 'airport'
                                ? 'bg-sky-50 border-sky-300 text-sky-800 font-bold shadow-xs'
                                : 'bg-slate-50 border-slate-200 text-slate-600'
                            }`}
                          >
                            Airport → T.Nagar
                          </button>
                          <button
                            onClick={() => setTaxiRoute('central')}
                            className={`p-2.5 rounded-xl border text-center transition-colors ${
                              taxiRoute === 'central'
                                ? 'bg-sky-50 border-sky-300 text-sky-800 font-bold shadow-xs'
                                : 'bg-slate-50 border-slate-200 text-slate-600'
                            }`}
                          >
                            Central → OMR
                          </button>
                          <button
                            onClick={() => setTaxiRoute('guindy')}
                            className={`p-2.5 rounded-xl border text-center transition-colors ${
                              taxiRoute === 'guindy'
                                ? 'bg-sky-50 border-sky-300 text-sky-800 font-bold shadow-xs'
                                : 'bg-slate-50 border-slate-200 text-slate-600'
                            }`}
                          >
                            Guindy → Marina
                          </button>
                        </div>
                      </div>

                      {/* Vehicle Class Switcher */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                          Vehicle Fleet Class:
                        </label>
                        <div className="grid grid-cols-3 gap-1.5 text-xs">
                          <button
                            onClick={() => setVehicleClass('mini')}
                            className={`py-1.5 rounded-lg border text-center font-medium transition-colors ${
                              vehicleClass === 'mini'
                                ? 'bg-slate-900 border-slate-900 text-white font-bold'
                                : 'bg-white border-slate-200 text-slate-600'
                            }`}
                          >
                            Cab Mini / Go
                          </button>
                          <button
                            onClick={() => setVehicleClass('sedan')}
                            className={`py-1.5 rounded-lg border text-center font-medium transition-colors ${
                              vehicleClass === 'sedan'
                                ? 'bg-slate-900 border-slate-900 text-white font-bold'
                                : 'bg-white border-slate-200 text-slate-600'
                            }`}
                          >
                            Prime Sedan
                          </button>
                          <button
                            onClick={() => setVehicleClass('auto')}
                            className={`py-1.5 rounded-lg border text-center font-medium transition-colors ${
                              vehicleClass === 'auto'
                                ? 'bg-slate-900 border-slate-900 text-white font-bold'
                                : 'bg-white border-slate-200 text-slate-600'
                            }`}
                          >
                            Auto / 3-Wheeler
                          </button>
                        </div>
                      </div>

                      {/* Route Info Badge */}
                      <div className="flex items-center justify-between text-xs p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 font-medium">
                        <span className="flex items-center gap-1.5">
                          <Navigation className="w-3.5 h-3.5 text-sky-600" />
                          <span>Distance: <strong className="text-slate-900">{rates.dist}</strong></span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-slate-500" />
                          <span>Est: <strong className="text-slate-900">{rates.duration}</strong></span>
                        </span>
                      </div>

                      {/* Live Aggregated Rates */}
                      <div className="space-y-2">
                        <div className="p-3 rounded-2xl bg-amber-50/90 border border-amber-200 shadow-xs flex items-center justify-between">
                          <div>
                            <div className="text-xs font-bold text-slate-900 flex items-center gap-2">
                              <span>Rapido Cab</span>
                              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-400 text-slate-950 font-extrabold">
                                BEST VALUE
                              </span>
                            </div>
                            <div className="text-[11px] text-amber-800 font-medium">3 min arrival · Live rate</div>
                          </div>
                          <div className="text-right">
                            <div className="text-base font-extrabold text-amber-700 font-mono">₹{rates.rapido}</div>
                            <div className="text-[10px] text-emerald-700 font-mono font-bold">
                              Save ₹{rates.uber - rates.rapido}
                            </div>
                          </div>
                        </div>

                        <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-between">
                          <div>
                            <div className="text-xs font-bold text-slate-900">FastTrack Cabs</div>
                            <div className="text-[10px] text-slate-500">Fixed Meter Rate</div>
                          </div>
                          <div className="text-sm font-bold text-sky-700 font-mono">₹{rates.fasttrack}</div>
                        </div>

                        <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-between">
                          <div>
                            <div className="text-xs font-bold text-slate-900">Ola Mini / Prime</div>
                            <div className="text-[10px] text-slate-500">1.1x Surge Applied</div>
                          </div>
                          <div className="text-sm font-bold text-slate-800 font-mono">₹{rates.ola}</div>
                        </div>

                        <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-between">
                          <div>
                            <div className="text-xs font-bold text-slate-900">Uber Go</div>
                            <div className="text-[10px] text-slate-500">1.25x Dynamic Surge</div>
                          </div>
                          <div className="text-sm font-bold text-slate-800 font-mono">₹{rates.uber}</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SIMULATOR 2: E-commerce Analytics Dashboard */}
                  {project.id === 'ecommerce-analytics-dashboard' && (
                    <div className="space-y-4 text-left">
                      {/* Time Range Selector */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs">
                          {(['7d', '30d', '90d'] as const).map((period) => (
                            <button
                              key={period}
                              onClick={() => setAnalyticsPeriod(period)}
                              className={`px-3 py-1 rounded-lg uppercase font-mono font-bold transition-colors ${
                                analyticsPeriod === period
                                  ? 'bg-white text-indigo-700 shadow-sm'
                                  : 'text-slate-600 hover:text-slate-900'
                              }`}
                            >
                              {period}
                            </button>
                          ))}
                        </div>

                        <span className="text-xs text-emerald-700 font-mono font-bold">
                          +24.8% YoY
                        </span>
                      </div>

                      {/* Interactive Metric Cards */}
                      <div className="grid grid-cols-3 gap-2">
                        <div
                          onClick={() => setActiveMetricTab('gmv')}
                          className={`p-2.5 rounded-xl border cursor-pointer transition-all ${
                            activeMetricTab === 'gmv'
                              ? 'bg-indigo-50 border-indigo-300 text-slate-900 shadow-xs'
                              : 'bg-white border-slate-200 text-slate-600'
                          }`}
                        >
                          <span className="text-[10px] font-medium text-slate-500">Gross Sales</span>
                          <div className="text-xs font-extrabold text-slate-900 font-mono mt-0.5">
                            {analyticsPeriod === '7d' ? '₹8.4L' : analyticsPeriod === '30d' ? '₹34.8L' : '₹1.1Cr'}
                          </div>
                        </div>

                        <div
                          onClick={() => setActiveMetricTab('orders')}
                          className={`p-2.5 rounded-xl border cursor-pointer transition-all ${
                            activeMetricTab === 'orders'
                              ? 'bg-indigo-50 border-indigo-300 text-slate-900 shadow-xs'
                              : 'bg-white border-slate-200 text-slate-600'
                          }`}
                        >
                          <span className="text-[10px] font-medium text-slate-500">Orders</span>
                          <div className="text-xs font-extrabold text-slate-900 font-mono mt-0.5">
                            {analyticsPeriod === '7d' ? '2,840' : analyticsPeriod === '30d' ? '11,450' : '38,200'}
                          </div>
                        </div>

                        <div
                          onClick={() => setActiveMetricTab('aov')}
                          className={`p-2.5 rounded-xl border cursor-pointer transition-all ${
                            activeMetricTab === 'aov'
                              ? 'bg-indigo-50 border-indigo-300 text-slate-900 shadow-xs'
                              : 'bg-white border-slate-200 text-slate-600'
                          }`}
                        >
                          <span className="text-[10px] font-medium text-slate-500">Avg Order</span>
                          <div className="text-xs font-extrabold text-slate-900 font-mono mt-0.5">
                            ₹2,965
                          </div>
                        </div>
                      </div>

                      {/* Interactive Simulated Line Graph */}
                      <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                        <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2 font-medium">
                          <span>Real-time Velocity Stream</span>
                          <span className="font-mono text-indigo-700 font-bold">99.98% Telemetry Sync</span>
                        </div>
                        <svg className="w-full h-24 overflow-visible" viewBox="0 0 320 90">
                          <defs>
                            <linearGradient id="ecomGradLight" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.25" />
                              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M0,75 C40,70 70,40 120,48 C170,55 210,25 260,35 C290,40 310,15 320,10"
                            fill="none"
                            stroke="#6366f1"
                            strokeWidth="2.5"
                          />
                          <path
                            d="M0,75 C40,70 70,40 120,48 C170,55 210,25 260,35 C290,40 310,15 320,10 L320,90 L0,90 Z"
                            fill="url(#ecomGradLight)"
                          />
                          <circle cx="320" cy="10" r="4" fill="#3b82f6" />
                        </svg>
                      </div>

                      {/* Live Store Feeds */}
                      <div className="space-y-1.5 text-xs">
                        <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-between font-medium">
                          <span className="text-slate-800">Shopify Direct · Order #4812</span>
                          <span className="font-mono text-emerald-700 font-bold">+₹4,590</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-between font-medium">
                          <span className="text-slate-800">Amazon Marketplace · Order #9910</span>
                          <span className="font-mono text-emerald-700 font-bold">+₹1,850</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SIMULATOR 3: Website + Client Management System */}
                  {project.id === 'website-client-management-system' && (
                    <div className="space-y-4 text-left">
                      <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-900 font-bold">Active Client Workspace</span>
                          <span className="text-[10px] text-sky-700 font-mono font-bold">Babu & Co Manufacturing</span>
                        </div>
                        <div className="text-[11px] text-slate-600 font-medium">
                          Milestone 3 of 4: Procurement Portal & Automated RFQs
                        </div>
                        <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-emerald-500 to-sky-500 h-full w-[85%]" />
                        </div>
                      </div>

                      {/* Interactive Task / Milestone Checklist */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-[11px] text-slate-500 uppercase font-bold">
                          <span>Milestone Deliverables</span>
                          <span className="text-[10px] text-sky-700">Tap to toggle</span>
                        </div>

                        {crmTasks.map((t) => (
                          <div
                            key={t.id}
                            onClick={() => toggleTaskStatus(t.id)}
                            className="p-2.5 rounded-xl bg-white border border-slate-200/80 hover:border-emerald-300 cursor-pointer transition-colors flex items-center justify-between text-xs shadow-xs"
                          >
                            <div className="flex items-center gap-2 truncate pr-2">
                              <CheckCircle2
                                className={`w-4 h-4 shrink-0 ${
                                  t.status === 'Completed'
                                    ? 'text-emerald-500'
                                    : t.status === 'In Review'
                                    ? 'text-amber-500'
                                    : 'text-sky-500'
                                }`}
                              />
                              <span className="text-slate-800 font-medium truncate">{t.title}</span>
                            </div>
                            <span
                              className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded shrink-0 ${
                                t.status === 'Completed'
                                  ? 'bg-emerald-100 text-emerald-700'
                                  : t.status === 'In Review'
                                  ? 'bg-amber-100 text-amber-700'
                                  : 'bg-sky-100 text-sky-700'
                              }`}
                            >
                              {t.status}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Automated GST Invoice Snapshot */}
                      <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between text-xs">
                        <div>
                          <div className="font-bold text-slate-900">Automated GST Escrow Settlement</div>
                          <div className="text-[10px] text-emerald-800">Invoice #INV-2026-089 · Verified</div>
                        </div>
                        <span className="font-mono text-base font-extrabold text-emerald-700">₹2,45,000</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
