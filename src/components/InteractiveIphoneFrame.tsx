import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Car,
  TrendingUp,
  Briefcase,
  Wifi,
  Battery,
  Navigation,
  CheckCircle2,
  Clock,
} from 'lucide-react';

interface InteractiveIphoneFrameProps {
  initialTab?: 'taxi' | 'ecommerce' | 'client';
}

export const InteractiveIphoneFrame: React.FC<InteractiveIphoneFrameProps> = ({
  initialTab = 'taxi',
}) => {
  const [activeTab, setActiveTab] = useState<'taxi' | 'ecommerce' | 'client'>(initialTab);
  const [selectedRoute, setSelectedRoute] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);
  const [analyticsRange, setAnalyticsRange] = useState<'7d' | '30d'>('7d');
  const [clientTaskStatus, setClientTaskStatus] = useState<Record<string, string>>({
    task1: 'Completed',
    task2: 'In Review',
    task3: 'In Progress',
  });

  const routes = [
    {
      from: 'Chennai Airport (MAA)',
      to: 'T. Nagar Commercial Hub',
      dist: '14.2 km',
      estTime: '28 min',
      fares: [
        { provider: 'Rapido Cab', price: '₹295', tag: 'Best Deal', save: 'Save ₹45', color: 'text-amber-600' },
        { provider: 'Ola Mini', price: '₹325', tag: '1.1x Surge', save: 'Save ₹15', color: 'text-emerald-600' },
        { provider: 'Uber Go', price: '₹340', tag: '1.2x Surge', save: '', color: 'text-slate-800' },
        { provider: 'FastTrack Cabs', price: '₹310', tag: 'Fixed Meter', save: 'Save ₹30', color: 'text-sky-600' },
      ],
    },
    {
      from: 'Chennai Central Station',
      to: 'OMR Tech Corridor (Tidel)',
      dist: '22.8 km',
      estTime: '42 min',
      fares: [
        { provider: 'Rapido Cab', price: '₹440', tag: 'Best Deal', save: 'Save ₹75', color: 'text-amber-600' },
        { provider: 'FastTrack Cabs', price: '₹460', tag: 'Fixed Meter', save: 'Save ₹55', color: 'text-sky-600' },
        { provider: 'Ola Mini', price: '₹490', tag: '1.2x Surge', save: 'Save ₹25', color: 'text-emerald-600' },
        { provider: 'Uber Go', price: '₹515', tag: '1.3x Surge', save: '', color: 'text-slate-800' },
      ],
    },
    {
      from: 'Guindy Industrial Park',
      to: 'Marina Beach Promenade',
      dist: '12.4 km',
      estTime: '24 min',
      fares: [
        { provider: 'Rapido Cab', price: '₹250', tag: 'Best Deal', save: 'Save ₹35', color: 'text-amber-600' },
        { provider: 'Ola Mini', price: '₹270', tag: 'Standard', save: 'Save ₹15', color: 'text-emerald-600' },
        { provider: 'Uber Go', price: '₹285', tag: 'Standard', save: '', color: 'text-slate-800' },
        { provider: 'FastTrack Cabs', price: '₹275', tag: 'Fixed Meter', save: 'Save ₹10', color: 'text-sky-600' },
      ],
    },
  ];

  const handleSimulateCalculation = (idx: number) => {
    setSelectedRoute(idx);
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
    }, 450);
  };

  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[370px]">
      {/* Outer ambient frosted glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-sky-400/20 via-blue-400/15 to-indigo-400/20 rounded-[54px] blur-2xl -z-10 opacity-80" />

      {/* Silver / Natural Titanium iPhone Chassis */}
      <div className="relative rounded-[48px] bg-gradient-to-b from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1] p-[3px] shadow-[0_30px_90px_rgba(15,23,42,0.18)] border border-white">
        {/* Hardware buttons simulation */}
        <div className="absolute -left-[5px] top-28 w-[4px] h-9 bg-slate-400 rounded-l-sm" />
        <div className="absolute -left-[5px] top-42 w-[4px] h-12 bg-slate-400 rounded-l-sm" />
        <div className="absolute -left-[5px] top-58 w-[4px] h-12 bg-slate-400 rounded-l-sm" />
        <div className="absolute -right-[5px] top-36 w-[4px] h-16 bg-slate-400 rounded-r-sm" />

        {/* Screen Bezel */}
        <div className="rounded-[45px] bg-[#f8fafc] overflow-hidden border-[6px] border-[#0f172a] relative">
          {/* Status Bar */}
          <div className="h-11 px-7 flex items-center justify-between text-[11px] font-semibold text-slate-800 select-none pt-1 bg-white/70 backdrop-blur-md">
            <span>9:41</span>
            {/* Dynamic Island */}
            <div className="w-24 h-5 bg-black rounded-full flex items-center justify-between px-2 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <div className="flex items-center gap-1 text-[9px] text-white font-mono tracking-tight font-medium">
                <span>KIQ OS</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-slate-800" />
            </div>
            <div className="flex items-center gap-1.5 text-slate-800">
              <Wifi className="w-3 h-3" />
              <Battery className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Interactive Screen Header: Project Selector */}
          <div className="px-4 pt-2.5 pb-2.5 border-b border-slate-200/80 bg-white/80 backdrop-blur-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500">
                Live Prototype Simulator
              </span>
              <span className="flex items-center gap-1 text-[10px] text-emerald-600 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                Live Engine
              </span>
            </div>

            {/* iOS Light Segmented Control */}
            <div className="grid grid-cols-3 gap-1 bg-slate-200/70 p-1 rounded-2xl text-[11px]">
              <button
                onClick={() => setActiveTab('taxi')}
                className={`py-1.5 rounded-xl font-semibold transition-all text-center flex items-center justify-center gap-1 ${
                  activeTab === 'taxi'
                    ? 'bg-white text-sky-700 shadow-sm border border-slate-200/60'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Car className="w-3 h-3 text-sky-600" />
                <span>Taxi</span>
              </button>
              <button
                onClick={() => setActiveTab('ecommerce')}
                className={`py-1.5 rounded-xl font-semibold transition-all text-center flex items-center justify-center gap-1 ${
                  activeTab === 'ecommerce'
                    ? 'bg-white text-indigo-700 shadow-sm border border-slate-200/60'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <TrendingUp className="w-3 h-3 text-indigo-600" />
                <span>Analytics</span>
              </button>
              <button
                onClick={() => setActiveTab('client')}
                className={`py-1.5 rounded-xl font-semibold transition-all text-center flex items-center justify-center gap-1 ${
                  activeTab === 'client'
                    ? 'bg-white text-emerald-700 shadow-sm border border-slate-200/60'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Briefcase className="w-3 h-3 text-emerald-600" />
                <span>Portal</span>
              </button>
            </div>
          </div>

          {/* Screen Content Body */}
          <div className="p-4 h-[395px] overflow-y-auto bg-gradient-to-b from-white via-slate-50 to-slate-100 text-left">
            <AnimatePresence mode="wait">
              {/* TAB 1: TAXI FARE COMPARISON */}
              {activeTab === 'taxi' && (
                <motion.div
                  key="taxi"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Taxi Fare Radar</h4>
                      <p className="text-[11px] text-slate-500">Chennai Metro Mobility</p>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-100 text-sky-700 border border-sky-200 font-mono font-semibold">
                      4 APIs Live
                    </span>
                  </div>

                  {/* Route Selection */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                      Select Demo Route
                    </label>
                    <div className="space-y-1">
                      {routes.map((r, i) => (
                        <button
                          key={i}
                          onClick={() => handleSimulateCalculation(i)}
                          className={`w-full text-left p-2.5 rounded-xl border text-xs transition-all flex items-center justify-between ${
                            selectedRoute === i
                              ? 'bg-sky-50/80 border-sky-300 text-slate-900 shadow-xs'
                              : 'bg-white border-slate-200/80 text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          <div className="truncate pr-2">
                            <div className="font-semibold text-slate-900 truncate">{r.from}</div>
                            <div className="text-[10px] text-slate-500 truncate">→ {r.to}</div>
                          </div>
                          <div className="text-right shrink-0">
                            <span className="text-[10px] text-sky-600 font-mono font-bold">{r.dist}</span>
                            <div className="text-[9px] text-slate-500">{r.estTime}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Fare Comparison List */}
                  <div className="pt-1">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-bold text-slate-700">Live Provider Rates</span>
                      {isCalculating && (
                        <span className="text-[10px] text-sky-600 animate-pulse font-mono font-semibold">Updating...</span>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      {routes[selectedRoute].fares.map((f, idx) => (
                        <div
                          key={idx}
                          className={`p-2.5 rounded-xl border flex items-center justify-between transition-all ${
                            f.save
                              ? 'bg-amber-50/90 border-amber-200 shadow-xs'
                              : 'bg-white border-slate-200/70 shadow-xs'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600">
                              <Navigation className="w-3 h-3 text-sky-600" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-slate-900">{f.provider}</div>
                              <div className="text-[10px] text-slate-500">{f.tag}</div>
                            </div>
                          </div>

                          <div className="text-right">
                            <div className={`text-sm font-extrabold font-mono ${f.color}`}>{f.price}</div>
                            {f.save && (
                              <div className="text-[9px] font-bold text-amber-700 font-mono">
                                {f.save}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 2: E-COMMERCE & ANALYTICS */}
              {activeTab === 'ecommerce' && (
                <motion.div
                  key="ecommerce"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Revenue Telemetry</h4>
                      <p className="text-[11px] text-slate-500">Omni-channel Intelligence</p>
                    </div>
                    <div className="flex bg-slate-200 p-0.5 rounded-lg text-[10px]">
                      <button
                        onClick={() => setAnalyticsRange('7d')}
                        className={`px-2 py-0.5 rounded-md font-semibold ${
                          analyticsRange === '7d' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600'
                        }`}
                      >
                        7D
                      </button>
                      <button
                        onClick={() => setAnalyticsRange('30d')}
                        className={`px-2 py-0.5 rounded-md font-semibold ${
                          analyticsRange === '30d' ? 'bg-white text-indigo-700 shadow-xs' : 'text-slate-600'
                        }`}
                      >
                        30D
                      </button>
                    </div>
                  </div>

                  {/* High Level Metrics */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                      <span className="text-[10px] text-slate-500 font-medium">Gross Sales</span>
                      <div className="text-sm font-extrabold text-slate-900 font-mono mt-0.5">
                        {analyticsRange === '7d' ? '₹8,42,100' : '₹34,18,500'}
                      </div>
                      <span className="text-[9px] text-emerald-600 font-bold">+18.4% vs prev</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                      <span className="text-[10px] text-slate-500 font-medium">Conversion Rate</span>
                      <div className="text-sm font-extrabold text-indigo-600 font-mono mt-0.5">4.28%</div>
                      <span className="text-[9px] text-emerald-600 font-bold">+0.8% baseline</span>
                    </div>
                  </div>

                  {/* SVG Chart Preview */}
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                    <div className="flex items-center justify-between text-[10px] text-slate-500 mb-1">
                      <span>Hourly Velocity</span>
                      <span className="font-mono text-indigo-600 font-semibold">Peak: 142 orders/hr</span>
                    </div>
                    <svg className="w-full h-20 overflow-visible" viewBox="0 0 280 80">
                      <defs>
                        <linearGradient id="chartGradientLight" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,60 Q40,50 70,30 T140,25 T210,40 T280,10"
                        fill="none"
                        stroke="#6366f1"
                        strokeWidth="2.5"
                      />
                      <path
                        d="M0,60 Q40,50 70,30 T140,25 T210,40 T280,10 L280,80 L0,80 Z"
                        fill="url(#chartGradientLight)"
                      />
                      <circle cx="280" cy="10" r="3.5" fill="#3b82f6" />
                    </svg>
                  </div>

                  {/* Live order notification item */}
                  <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      <span className="text-[11px] text-slate-800 font-medium">New Shopify Sync: Order #8921</span>
                    </div>
                    <span className="font-mono text-emerald-700 text-[11px] font-bold">₹4,290</span>
                  </div>
                </motion.div>
              )}

              {/* TAB 3: CLIENT MANAGEMENT SYSTEM */}
              {activeTab === 'client' && (
                <motion.div
                  key="client"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Project Operations Hub</h4>
                      <p className="text-[11px] text-slate-500">KIQ Client Workspace</p>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200 font-mono font-semibold">
                      Phase 2 Active
                    </span>
                  </div>

                  {/* Active Project Card */}
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900">Retail Pulse Storefront</span>
                      <span className="text-[10px] text-emerald-600 font-mono font-bold">88% Complete</span>
                    </div>

                    <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-sky-500 to-emerald-500 h-full w-[88%]" />
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-slate-500">
                      <span>Delivery: Oct 15</span>
                      <span>Lead: Kavin S.</span>
                    </div>
                  </div>

                  {/* Interactive Milestones */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                      <span>Interactive Milestones</span>
                      <span>Tap to Toggle</span>
                    </div>

                    <div
                      onClick={() =>
                        setClientTaskStatus((prev) => ({
                          ...prev,
                          task2: prev.task2 === 'In Review' ? 'Approved' : 'In Review',
                        }))
                      }
                      className="p-2.5 rounded-xl bg-white border border-slate-200/80 hover:border-emerald-400 cursor-pointer transition-all flex items-center justify-between shadow-xs"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2
                          className={`w-3.5 h-3.5 ${
                            clientTaskStatus.task2 === 'Approved' ? 'text-emerald-500' : 'text-amber-500'
                          }`}
                        />
                        <span className="text-xs text-slate-800 font-medium">Payment Gateway UPI Integration</span>
                      </div>
                      <span
                        className={`text-[9px] px-2 py-0.5 rounded font-mono font-bold ${
                          clientTaskStatus.task2 === 'Approved'
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-amber-100 text-amber-700'
                        }`}
                      >
                        {clientTaskStatus.task2}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 flex items-center justify-between shadow-xs">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-xs text-slate-800 font-medium">Cloud CDN Architecture</span>
                      </div>
                      <span className="text-[9px] px-2 py-0.5 rounded font-mono font-bold bg-emerald-100 text-emerald-700">
                        Completed
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 flex items-center justify-between shadow-xs">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-sky-500 animate-spin" />
                        <span className="text-xs text-slate-800 font-medium">Automated QA & Load Testing</span>
                      </div>
                      <span className="text-[9px] px-2 py-0.5 rounded font-mono font-bold bg-sky-100 text-sky-700">
                        In Progress
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Home indicator bar (iPhone gesture line) */}
          <div className="py-2 flex justify-center bg-slate-100 border-t border-slate-200">
            <div className="w-28 h-1 bg-slate-400 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
