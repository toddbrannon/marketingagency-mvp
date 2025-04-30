import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import SEO from '@/components/common/SEO';
import SectionHeading from '@/components/common/SectionHeading';
import CallToAction from '@/components/common/CallToAction';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { services } from '@/data/services';

const renderIcon = (iconName: string) => {
  const icons = {
    Palette: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <circle cx="13.5" cy="6.5" r="0.5" />
        <circle cx="17.5" cy="10.5" r="0.5" />
        <circle cx="8.5" cy="7.5" r="0.5" />
        <circle cx="6.5" cy="12.5" r="0.5" />
        <path d="M12 22a7 7 0 0 0 7-7c0-3-2-6-4-9-2 3-4 6-4 9a7 7 0 0 0 1 3" />
        <path d="M12 22a7 7 0 0 1-7-7c0-3 2-6 4-9 2 3 4 6 4 9a7 7 0 0 1-1 3" />
      </svg>
    ),
    Share2: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
    Search: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    Globe: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    Mail: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  };

  return icons[iconName as keyof typeof icons] || null;
};

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState(services[0].id);
  const location = useLocation();
  
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && services.some(service => service.id === hash)) {
      setActiveTab(hash);
      const servicesSection = document.getElementById('services-section');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);
  
  return (
    <>
      <SEO 
        title="Services" 
        description="Explore our comprehensive marketing services including branding, social media, SEO, web design, and email marketing."
      />
      
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We offer comprehensive marketing solutions tailored to your business needs, helping you connect with your audience and achieve your goals.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24" id="services-section">
        <div className="container">
          <SectionHeading 
            title="What We Offer" 
            subtitle="Discover our range of services designed to boost your brand's presence and drive business growth."
            align="center"
            className="max-w-3xl mx-auto"
          />
          
          <div className="mt-12">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
                {services.map((service) => (
                  <TabsTrigger key={service.id} value={service.id} className="flex items-center gap-2">
                    <span className="hidden md:inline-flex">{renderIcon(service.icon)}</span>
                    <span className="truncate">{service.title.split('&')[0]}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {services.map((service) => (
                <TabsContent key={service.id} value={service.id} className="pt-6">
                  <div className="grid gap-10 lg:grid-cols-2 items-center">
                    <div className="space-y-4">
                      <h2 className="text-3xl font-bold tracking-tight">{service.title}</h2>
                      <p className="text-lg text-muted-foreground">{service.description}</p>
                      
                      <ul className="space-y-2 mt-6">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="pt-4">
                        <Button asChild size="lg">
                          <a href="/contact">Schedule a Discovery Call</a>
                        </Button>
                      </div>
                    </div>
                    
                    <div className="relative rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src={`https://images.pexels.com/photos/${
                          service.id === 'branding' ? '3184418' :
                          service.id === 'social-media' ? '3938022' :
                          service.id === 'seo-ppc' ? '265087' :
                          service.id === 'web-design' ? '1779487' :
                          '4348401'
                        }/pexels-photo-${
                          service.id === 'branding' ? '3184418' :
                          service.id === 'social-media' ? '3938022' :
                          service.id === 'seo-ppc' ? '265087' :
                          service.id === 'web-design' ? '1779487' :
                          '4348401'
                        }.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`} 
                        alt={service.title} 
                        className="w-full h-full object-cover aspect-video"
                      />
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <SectionHeading 
            title="Our Process" 
            subtitle="How we work with you to deliver exceptional results."
            align="center"
            className="max-w-3xl mx-auto mb-12"
          />
          
          <div className="grid gap-8 md:grid-cols-4">
            <Card className="relative">
              <div className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground shadow-lg">
                01
              </div>
              <CardHeader className="pt-8">
                <CardTitle>Discovery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We start by understanding your business, goals, target audience, and current marketing efforts.</p>
              </CardContent>
            </Card>
            
            <Card className="relative">
              <div className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground shadow-lg">
                02
              </div>
              <CardHeader className="pt-8">
                <CardTitle>Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We develop a tailored marketing strategy aligned with your business objectives and industry best practices.</p>
              </CardContent>
            </Card>
            
            <Card className="relative">
              <div className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground shadow-lg">
                03
              </div>
              <CardHeader className="pt-8">
                <CardTitle>Execution</CardTitle>
              
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Our team implements the strategy, creating and launching campaigns across relevant channels.</p>
              </CardContent>
            </Card>
            
            <Card className="relative">
              <div className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground shadow-lg">
                04
              </div>
              <CardHeader className="pt-8">
                <CardTitle>Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We continuously monitor performance, gather data, and refine our approach to maximize results.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container">
          <SectionHeading 
            title="Frequently Asked Questions" 
            subtitle="Get answers to common questions about our services."
            align="center"
            className="max-w-3xl mx-auto"
          />
          
          <div className="mt-12 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>How long does it take to see results?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Results timelines vary by service. Digital advertising can show results in days, while SEO and content marketing typically take 3-6 months to see significant impact. We'll provide realistic timelines for your specific goals.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Do you offer customized marketing packages?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Yes! We tailor our services to meet your specific needs and budget. After our initial consultation, we'll recommend a custom solution designed to achieve your business goals.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>How do you measure marketing success?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We establish clear KPIs aligned with your business objectives, then provide regular reporting with data-driven insights. Metrics vary by channel but typically include engagement, conversions, ROI, and other relevant performance indicators.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>How much do your services cost?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Our pricing depends on your needs, goals, and the scope of work. We offer flexible options from project-based pricing to monthly retainers. Contact us for a customized quote based on your specific requirements.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <CallToAction 
        title="Ready to Elevate Your Marketing?"
        description="Schedule a free 30-minute discovery call to discuss your marketing needs and learn how we can help you achieve your business goals."
        primaryButtonText="Schedule a Discovery Call"
        primaryButtonLink="/contact"
        variant="centered"
      />
    </>
  );
};

export default ServicesPage;