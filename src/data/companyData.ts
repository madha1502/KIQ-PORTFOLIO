import { CompanyInfo, Project, Service, StatItem, Testimonial } from '../types';

export const companyInfo: CompanyInfo = {
  name: 'KIQ Techno',
  legalName: 'KIQ Techno Pvt Ltd',
  tagline: 'Modern Digital Solutions for Growing Businesses',
  headline: 'Welcome to KIQ Techno Pvt Ltd — Modern Digital Solutions for Growing Businesses',
  founder: 'Kavin Sengottuvel',
  founderTitle: 'Founder & Managing Director',
  foundedYear: 2025,
  location: 'Chennai, Tamil Nadu, India',
  fullAddress: 'Level 4, Olympia Technology Park, SIDCO Industrial Estate, Guindy, Chennai, Tamil Nadu 600032, India',
  email: 'hr@kiqtechno.com',
  phone: '+91 7373330608',
  socials: {
    linkedin: 'https://linkedin.com/company/kiqtechno',
    facebook: 'https://facebook.com/kiqtechno',
    twitter: 'https://x.com/kiqtechno',
    github: 'https://github.com/kiqtechno',
  },
};

export const keyStats: StatItem[] = [
  {
    value: '50+',
    label: 'Projects Completed',
    subtext: 'High-performing enterprise & startup products delivered',
  },
  {
    value: '100+',
    label: 'Happy Customers',
    subtext: 'Across retail, mobility, finance, and manufacturing sectors',
  },
  {
    value: '12',
    label: 'Awards Received',
    subtext: 'Recognized for engineering innovation and UX excellence',
  },
  {
    value: '2 Years',
    label: 'In Service',
    subtext: 'Accelerating digital transformation from Chennai to global markets',
  },
];

export const servicesData: Service[] = [
  {
    id: 'full-stack-dev',
    title: 'Full Stack Development',
    category: 'Full Stack Engineering',
    subtitle: 'High-performance web applications & microservices',
    description:
      'We architect, build, and deploy production-grade software using React, Next.js, Node.js, and cloud-native databases. From responsive frontends with Apple-level fluid motion to fault-tolerant backend APIs.',
    iconName: 'Code2',
    features: [
      'Modern Single Page & Server-Rendered Web Apps',
      'Scalable GraphQL & RESTful API Architectures',
      'Mobile-responsive designs with 60fps micro-animations',
      'Zero-downtime CI/CD deployment pipelines',
    ],
    deliverables: 'Enterprise-grade codebase, full documentation & automated tests',
    highlightMetric: '99.98% uptime SLA',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    category: 'Digital Marketing & Growth',
    subtitle: 'Data-driven growth funnels and brand dominance',
    description:
      'Turn digital traffic into recurring revenue. Our omnichannel marketing solutions combine search engine dominance, high-conversion ad creative, email automation, and hyper-targeted social engagement.',
    iconName: 'TrendingUp',
    features: [
      'Technical Search Engine Optimization (SEO)',
      'High-ROI Paid Performance Ads (Meta, Google, LinkedIn)',
      'Conversion Rate Optimization (CRO) & A/B testing',
      'Automated retention & nurture email funnels',
    ],
    deliverables: 'Custom growth blueprint, live reporting dashboard & monthly analytics',
    highlightMetric: '3.4x average ROI for clients',
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    category: 'Data Analytics & Telemetry',
    subtitle: 'Transform raw metrics into actionable revenue levers',
    description:
      'Empower your leadership with real-time business intelligence. We construct unified data warehouses, predictive telemetry pipelines, and interactive executive dashboards tailored to your exact business KPIs.',
    iconName: 'BarChart3',
    features: [
      'Interactive executive dashboards & live metric visualizers',
      'Predictive customer churn & demand forecasting models',
      'Multi-source data pipelines (ETL/ELT automation)',
      'Privacy-compliant tracking and analytics audit',
    ],
    deliverables: 'Centralized telemetry hub, automated scheduled alerts & reports',
    highlightMetric: 'Sub-second query latency',
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services',
    category: 'Cloud Infrastructure & DevOps',
    subtitle: 'Resilient, scalable cloud infrastructure and DevOps',
    description:
      'Migrate, modernize, and automate your infrastructure on AWS, Google Cloud, and Azure. We optimize compute costs, secure edge networks, and ensure 24/7 reliability for mission-critical operations.',
    iconName: 'Cloud',
    features: [
      'Infrastructure as Code (Terraform, Docker, Kubernetes)',
      'Serverless architectures with auto-scaling compute',
      'Automated disaster recovery & encrypted backups',
      'Cloud spend auditing & up to 40% cost reduction',
    ],
    deliverables: 'Hardened cloud architecture, Terraform scripts & monitoring runbook',
    highlightMetric: 'Up to 42% cloud cost savings',
  },
  {
    id: 'small-business-solutions',
    title: 'Small Business Solutions',
    category: 'Small Business Suite',
    subtitle: 'Turnkey digital transformations engineered for growth',
    description:
      'Affordable, high-impact digital toolkits crafted specifically for emerging companies, retail storefronts, and local service providers looking to scale rapidly without huge enterprise overhead.',
    iconName: 'Store',
    features: [
      'Rapid turnaround digital storefronts and booking systems',
      'Google My Business & local hyper-targeted visibility',
      'Integrated payment gateways (UPI, Cards, Net Banking)',
      'Lightweight CRM for customer inquiries and lead follow-up',
    ],
    deliverables: 'Ready-to-launch website, staff onboarding & dedicated technical support',
    highlightMetric: 'Launch ready in 14 days',
  },
  {
    id: 'free-consultation',
    title: 'Free Consultation',
    category: 'Strategic Architecture Consultation',
    subtitle: 'Strategic architecture & digital roadmap session',
    description:
      'Book a complimentary 45-minute technical audit with founder Kavin Sengottuvel and our lead architects. We evaluate your current systems, uncover performance bottlenecks, and map a clear execution plan.',
    iconName: 'Compass',
    features: [
      'Comprehensive audit of current digital bottlenecks',
      'Technical architecture recommendation & tech stack selection',
      'Estimated project timeline, milestones, and transparent budgeting',
      'Zero obligation — actionable blueprint is yours to keep',
    ],
    deliverables: 'Written digital transformation proposal & roadmap document',
    highlightMetric: '100% complimentary & confidential',
  },
];

export const projectsData: Project[] = [
  {
    id: 'taxi-fare-comparison',
    title: 'Taxi Fare Comparison Platform',
    category: 'Mobility',
    tagline: 'Real-time multi-aggregator fare intelligence for Indian commuters',
    description:
      'An intelligent mobility aggregation engine that analyzes live rates across Uber, Ola, Rapido, and local Chennai taxi fleets in real time. Features automated surge pricing alerts, optimal pickup hotspot detection, and seamless one-tap booking redirection.',
    status: 'In Active Development',
    completionPercentage: 88,
    techStack: ['React', 'Node.js', 'Redis', 'WebSockets', 'Google Maps API', 'Tailwind CSS'],
    features: [
      'Sub-200ms multi-fleet price comparison engine',
      'Real-time surge multiplier radar across metropolitan zones',
      'Commuter trip cost savings tracker with historical trends',
      'PWA support with instant offline route caching',
    ],
    metrics: [
      { label: 'Latency', value: '< 180ms' },
      { label: 'Avg Savings', value: '23.4%' },
      { label: 'Providers', value: '4 Major Fleets' },
      { label: 'Active Beta Testers', value: '2,400+' },
    ],
    accentColor: '#38bdf8', // sky-400
  },
  {
    id: 'ecommerce-analytics-dashboard',
    title: 'E-commerce & Analytics Dashboards',
    category: 'Enterprise SaaS',
    tagline: 'High-velocity executive intelligence suite for omni-channel brands',
    description:
      'An end-to-end commerce intelligence platform designed to replace sluggish spreadsheets with real-time financial telemetry. Aggregates Shopify, Amazon, and WooCommerce order streams into unified cohort retention, inventory velocity, and net margin reports.',
    status: 'In Active Development',
    completionPercentage: 92,
    techStack: ['Next.js', 'TypeScript', 'D3.js', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
    features: [
      'Unified multi-store order and inventory sync engine',
      'Predictive stockout alert algorithm with lead-time calculation',
      'Customer lifetime value (LTV) cohort heatmaps',
      'One-click automated GST & financial reconciliation exports',
    ],
    metrics: [
      { label: 'Data Refresh', value: 'Real-Time' },
      { label: 'Sync Accuracy', value: '99.99%' },
      { label: 'Orders Processed', value: '450k+' },
      { label: 'Dashboard Speed', value: '60 FPS' },
    ],
    accentColor: '#818cf8', // indigo-400
  },
  {
    id: 'website-client-management-system',
    title: 'Website + Client Management System',
    category: 'Client Systems',
    tagline: 'Integrated agency operations hub and collaborative client portal',
    description:
      'A cohesive operations platform uniting public agency web storefronts with private, branded client workspaces. Consolidates contract signing, milestone tracking, design approval reviews, automated invoice generation, and real-time chat into one dark-themed portal.',
    status: 'In Active Development',
    completionPercentage: 85,
    techStack: ['React', 'Express', 'Tailwind CSS', 'Stripe API', 'Cloud Storage', 'PostgreSQL'],
    features: [
      'Branded client portals with customizable milestone roadmaps',
      'Interactive asset markup and feedback approval workflow',
      'Automated recurring billing, milestone escrow, and GST invoicing',
      'Encrypted document exchange and contract e-signatures',
    ],
    metrics: [
      { label: 'Admin Hours Saved', value: '14 hrs/wk' },
      { label: 'Client Approval Time', value: '-52%' },
      { label: 'Invoices Settled', value: '₹1.8 Cr+' },
      { label: 'System Uptime', value: '99.95%' },
    ],
    accentColor: '#34d399', // emerald-400
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'priya-menon',
    name: 'Priya Menon',
    role: 'Founder & CEO',
    company: 'Retail Pulse India',
    location: 'Chennai, Tamil Nadu',
    rating: 5,
    feedback:
      'KIQ Techno transformed our legacy retail operations with an agile custom web platform that feels as snappy and responsive as an Apple native app. Kavin and his engineering team delivered ahead of schedule and our online checkout conversions jumped by 42%.',
    avatarColor: 'from-cyan-500 to-blue-600',
    industry: 'Retail',
    metricAchieved: '+42% Online Checkout Conversion',
  },
  {
    id: 'karthik-rajan',
    name: 'Karthik Rajan',
    role: 'Operations Director',
    company: 'Apex Freight & Logistics',
    location: 'Bengaluru, Karnataka',
    rating: 5,
    feedback:
      'The custom dispatch analytics dashboard built by KIQ Techno reduced our fleet routing delays significantly. Their attention to fluid animations and dark-mode data visualization makes complex telemetry readable at a single glance during late-night operations.',
    avatarColor: 'from-blue-500 to-indigo-600',
    industry: 'Logistics',
    metricAchieved: '-38% Fleet Dispatch Latency',
  },
  {
    id: 'ramesh-babu',
    name: 'Ramesh Babu',
    role: 'Managing Partner',
    company: 'Babu & Co Precision Engineering',
    location: 'Coimbatore, Tamil Nadu',
    rating: 5,
    feedback:
      'As a 30-year-old engineering firm shifting to digital procurement, we needed a partner who understood both technology and real business constraints. KIQ Techno delivered our client management system with zero disruption to daily shipments. Highly recommended!',
    avatarColor: 'from-amber-500 to-orange-600',
    industry: 'Manufacturing',
    metricAchieved: '100% Digital RFQ Adoption',
  },
  {
    id: 'suresh-kumar',
    name: 'Suresh Kumar',
    role: 'Chief Technology Officer',
    company: 'SmartFleet Mobility Labs',
    location: 'Chennai, Tamil Nadu',
    rating: 5,
    feedback:
      'The architecture behind KIQ Techno’s Taxi Fare Comparison engine is exceptionally fast. Real-time rate comparisons across four APIs execute in under 180ms with fault-tolerant fallbacks. Truly world-class engineering execution right from Chennai.',
    avatarColor: 'from-emerald-500 to-teal-600',
    industry: 'Mobility',
    metricAchieved: '<180ms Multi-API Aggregation',
  },
  {
    id: 'aravind-sharma',
    name: 'Aravind Sharma',
    role: 'Product Lead',
    company: 'Horizon FinTech Solutions',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    feedback:
      'Their full-stack development speed and adherence to pixel-perfect design standards is on par with the best boutique agencies in the US and Europe. Every modal, hover state, and data card feels meticulously crafted. Exceptional work by Kavin and the team.',
    avatarColor: 'from-purple-500 to-pink-600',
    industry: 'FinTech',
    metricAchieved: 'Launched Beta 3 Weeks Early',
  },
  {
    id: 'meena-lakshmi',
    name: 'Meena Lakshmi',
    role: 'Creative Director',
    company: 'Vriksha Organics',
    location: 'Chennai, Tamil Nadu',
    rating: 5,
    feedback:
      'KIQ Techno handled our brand website rebuild alongside targeted digital marketing campaigns. Our direct consumer sales more than doubled in the first quarter, and customers constantly praise how elegant and fast the website is on mobile phones.',
    avatarColor: 'from-rose-500 to-red-600',
    industry: 'D2C',
    metricAchieved: '+210% Direct Consumer Orders',
  },
];
