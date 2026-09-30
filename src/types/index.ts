export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  features: string[];
  deliverables: string;
  highlightMetric: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Mobility' | 'Enterprise SaaS' | 'Client Systems' | 'All';
  tagline: string;
  description: string;
  status: 'In Active Development' | 'Beta Testing' | 'Pilot Phase';
  completionPercentage: number;
  techStack: string[];
  features: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  rating: number;
  feedback: string;
  avatarColor: string;
  industry: 'Retail' | 'Logistics' | 'Manufacturing' | 'Mobility' | 'FinTech' | 'D2C';
  metricAchieved: string;
}

export interface StatItem {
  value: string;
  label: string;
  subtext: string;
}

export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  headline: string;
  founder: string;
  founderTitle: string;
  foundedYear: number;
  location: string;
  fullAddress: string;
  email: string;
  phone: string;
  socials: {
    linkedin: string;
    facebook: string;
    twitter: string;
    github: string;
  };
}
