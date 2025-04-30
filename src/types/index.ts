export interface NavItem {
  title: string;
  href: string;
  isExternal?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  thumbnail: string;
  heroImage: string;
  problem: string;
  solution: string;
  results: Result[];
  testimonial?: Testimonial;
}

export interface Result {
  stat: string;
  label: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
  };
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  position: string;
  company: string;
  image?: string;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
}