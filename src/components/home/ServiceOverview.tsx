import { Link } from 'react-router-dom';
import { 
  Palette, 
  Share2, 
  Search, 
  Globe, 
  Mail 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/common/SectionHeading';
import { Service } from '@/types';

const services: Service[] = [
  {
    id: 'branding',
    title: 'Branding & Identity',
    description: 'Build a powerful brand that resonates with your audience and sets you apart from competitors.',
    icon: 'Palette',
    features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy']
  },
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    description: 'Engage your audience where they are with strategic social media campaigns that drive results.',
    icon: 'Share2',
    features: ['Content Creation', 'Community Management', 'Paid Advertising', 'Analytics & Reporting']
  },
  {
    id: 'seo-ppc',
    title: 'SEO & PPC',
    description: 'Boost your visibility in search results and drive targeted traffic to your website.',
    icon: 'Search',
    features: ['Keyword Research', 'On-Page SEO', 'PPC Campaign Management', 'Conversion Optimization']
  },
  {
    id: 'web-design',
    title: 'Web Design & Development',
    description: 'Create stunning, high-performing websites that convert visitors into customers.',
    icon: 'Globe',
    features: ['Responsive Design', 'UX/UI Design', 'E-commerce Solutions', 'Website Maintenance']
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing',
    description: 'Nurture leads and drive conversions with targeted email campaigns that deliver value.',
    icon: 'Mail',
    features: ['Campaign Strategy', 'Email Automation', 'List Management', 'Performance Analytics']
  }
];

const renderIcon = (icon: string) => {
  switch (icon) {
    case 'Palette':
      return <Palette className="h-6 w-6" />;
    case 'Share2':
      return <Share2 className="h-6 w-6" />;
    case 'Search':
      return <Search className="h-6 w-6" />;
    case 'Globe':
      return <Globe className="h-6 w-6" />;
    case 'Mail':
      return <Mail className="h-6 w-6" />;
    default:
      return null;
  }
};

const ServiceOverview = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <SectionHeading
          title="Our Services"
          subtitle="We offer comprehensive marketing solutions tailored to your business needs. From brand strategy to digital campaigns, we've got you covered."
          align="center"
          className="max-w-3xl mx-auto"
        />
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((service) => (
            <Card key={service.id} className="overflow-hidden transition-all hover:shadow-md">
              <CardHeader className="pb-3">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                  {renderIcon(service.icon)}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-balance">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <svg
                        className="h-4 w-4 shrink-0 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline">
                  <Link to={`/services#${service.id}`}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;