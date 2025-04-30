import { CaseStudy } from '@/types';

export const caseStudies: CaseStudy[] = [
  {
    id: 'horizon-rebrand',
    title: 'Horizon Tech Rebrand & Digital Strategy',
    client: 'Horizon Technologies',
    industry: 'SaaS',
    thumbnail: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    heroImage: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    problem: 'Horizon Technologies needed a complete brand refresh and digital marketing strategy to reposition themselves in a competitive market and drive B2B lead generation.',
    solution: 'We developed a comprehensive rebranding strategy including a new visual identity, website redesign, and integrated digital marketing campaigns across multiple channels.',
    results: [
      { stat: '147%', label: 'Increase in qualified leads' },
      { stat: '89%', label: 'Growth in organic traffic' },
      { stat: '3.2x', label: 'Return on ad spend' },
      { stat: '64%', label: 'Increase in conversion rate' }
    ],
    testimonial: {
      id: 'horizon-testimonial',
      quote: "Catalyst Creative transformed our entire digital presence. Their strategic approach not only modernized our brand but directly impacted our bottom line with measurable results.",
      author: "Alex Martinez",
      position: "VP of Marketing",
      company: "Horizon Technologies"
    }
  },
  {
    id: 'vertex-social',
    title: 'Vertex Health Social Media Campaign',
    client: 'Vertex Health',
    industry: 'Healthcare',
    thumbnail: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    heroImage: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    problem: 'Vertex Health struggled to build brand awareness and establish thought leadership in the healthcare industry through social media.',
    solution: 'We created a strategic social media content plan focused on educational content, patient stories, and industry insights across multiple platforms.',
    results: [
      { stat: '215%', label: 'Increase in social engagement' },
      { stat: '78%', label: 'Growth in follower base' },
      { stat: '56%', label: 'More website traffic from social' },
      { stat: '23%', label: 'Increase in appointment bookings' }
    ],
    testimonial: {
      id: 'vertex-testimonial',
      quote: "The social media strategy developed by Catalyst Creative has completely transformed our online presence. Their focus on authentic storytelling and educational content has helped us connect with patients in a meaningful way.",
      author: "Sarah Miller",
      position: "Marketing Director",
      company: "Vertex Health"
    }
  },
  {
    id: 'eco-seo',
    title: 'Eco Solutions SEO & Content Strategy',
    client: 'Eco Solutions',
    industry: 'Sustainability',
    thumbnail: 'https://images.pexels.com/photos/3760527/pexels-photo-3760527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    heroImage: 'https://images.pexels.com/photos/3760527/pexels-photo-3760527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    problem: 'Eco Solutions needed to increase organic search visibility and establish themselves as an authority in sustainable products and services.',
    solution: 'We implemented a comprehensive SEO and content marketing strategy targeting high-value keywords and creating educational content that addressed customer pain points.',
    results: [
      { stat: '183%', label: 'Increase in organic traffic' },
      { stat: '#1', label: 'Position for 27 target keywords' },
      { stat: '94%', label: 'More time spent on site' },
      { stat: '52%', label: 'Increase in online sales' }
    ],
    testimonial: {
      id: 'eco-testimonial',
      quote: "The SEO and content strategy from Catalyst Creative has been instrumental in our growth. Their data-driven approach and quality content creation have helped us reach new customers who are passionate about sustainability.",
      author: "Thomas Green",
      position: "CEO",
      company: "Eco Solutions"
    }
  },
  {
    id: 'metro-email',
    title: 'Metro Media Email Automation Campaign',
    client: 'Metro Media',
    industry: 'Media & Entertainment',
    thumbnail: 'https://images.pexels.com/photos/3772511/pexels-photo-3772511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    heroImage: 'https://images.pexels.com/photos/3772511/pexels-photo-3772511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    problem: 'Metro Media was struggling with low engagement rates and subscriber retention in their email marketing efforts.',
    solution: 'We designed a personalized email automation campaign with segmented content streams based on user behavior and preferences.',
    results: [
      { stat: '68%', label: 'Increase in open rates' },
      { stat: '112%', label: 'Higher click-through rates' },
      { stat: '45%', label: 'Reduction in unsubscribe rates' },
      { stat: '37%', label: 'Increase in subscription conversions' }
    ],
    testimonial: {
      id: 'metro-testimonial',
      quote: "The email automation campaign designed by Catalyst Creative completely transformed our subscriber engagement. Their approach to personalization and content sequencing has created a much more effective channel for us.",
      author: "Rebecca Lee",
      position: "Head of Digital",
      company: "Metro Media"
    }
  }
];

export default caseStudies;