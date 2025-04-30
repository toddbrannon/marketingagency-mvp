import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'branding',
    title: 'Branding & Identity',
    description: 'Build a powerful brand that resonates with your audience and sets you apart from competitors.',
    icon: 'Palette',
    features: [
      'Brand Strategy Development',
      'Logo & Visual Identity Design',
      'Brand Guidelines Creation',
      'Brand Messaging & Tone of Voice',
      'Brand Positioning & Architecture',
      'Brand Naming & Taglines',
      'Rebranding & Brand Refreshes',
      'Brand Asset Creation'
    ]
  },
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    description: 'Engage your audience where they are with strategic social media campaigns that drive results.',
    icon: 'Share2',
    features: [
      'Social Media Strategy',
      'Content Creation & Curation',
      'Community Management',
      'Social Media Advertising',
      'Influencer Partnerships',
      'Social Media Analytics & Reporting',
      'Social Media Audits',
      'Social Listening & Engagement'
    ]
  },
  {
    id: 'seo-ppc',
    title: 'SEO & PPC',
    description: 'Boost your visibility in search results and drive targeted traffic to your website.',
    icon: 'Search',
    features: [
      'Keyword Research & Analysis',
      'On-Page SEO Optimization',
      'Technical SEO Audits',
      'Content Strategy for SEO',
      'Link Building Campaigns',
      'Google Ads Campaign Management',
      'Display & Remarketing Campaigns',
      'Conversion Rate Optimization'
    ]
  },
  {
    id: 'web-design',
    title: 'Web Design & Development',
    description: 'Create stunning, high-performing websites that convert visitors into customers.',
    icon: 'Globe',
    features: [
      'Responsive Website Design',
      'UX/UI Design & Prototyping',
      'E-commerce Website Development',
      'WordPress Development',
      'Custom Web Applications',
      'Website Maintenance & Support',
      'Performance Optimization',
      'Web Accessibility Compliance'
    ]
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing',
    description: 'Nurture leads and drive conversions with targeted email campaigns that deliver value.',
    icon: 'Mail',
    features: [
      'Email Strategy Development',
      'Email Template Design',
      'Campaign Planning & Execution',
      'Email Automation Workflows',
      'Subscriber List Management',
      'A/B Testing & Optimization',
      'Performance Analytics & Reporting',
      'Deliverability Optimization'
    ]
  }
];

export default services;