import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '@/components/common/SEO';
import SectionHeading from '@/components/common/SectionHeading';
import CallToAction from '@/components/common/CallToAction';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { caseStudies } from '@/data/caseStudies';

const industries = [
  { value: 'all', label: 'All Industries' },
  { value: 'SaaS', label: 'SaaS' },
  { value: 'Healthcare', label: 'Healthcare' },
  { value: 'Sustainability', label: 'Sustainability' },
  { value: 'Media & Entertainment', label: 'Media' },
];

const CaseStudiesPage = () => {
  const [activeIndustry, setActiveIndustry] = useState('all');
  
  const filteredCaseStudies = activeIndustry === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === activeIndustry);
  
  return (
    <>
      <SEO 
        title="Case Studies" 
        description="Explore our client success stories and learn how we've helped businesses achieve their marketing goals."
      />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Our <span className="text-primary">Success Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore how we've helped businesses across industries transform their marketing strategies and achieve exceptional results.
            </p>
          </div>
        </div>
      </section>
      
      {/* Case Studies Filter & Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <SectionHeading 
            title="Case Studies" 
            subtitle="Filter by industry to find relevant success stories."
          />
          
          <Tabs 
            value={activeIndustry} 
            onValueChange={setActiveIndustry}
            className="w-full"
          >
            <TabsList className="flex flex-wrap mb-12">
              {industries.map((industry) => (
                <TabsTrigger
                  key={industry.value}
                  value={industry.value}
                  className={cn(
                    activeIndustry === industry.value
                      ? 'bg-primary text-primary-foreground'
                      : ''
                  )}
                >
                  {industry.label}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value={activeIndustry} className="mt-0">
              <div className="grid gap-8 md:grid-cols-2">
                {filteredCaseStudies.map((study) => (
                  <Card key={study.id} className="overflow-hidden border-0 bg-transparent shadow-none">
                    <CardContent className="p-0">
                      <Link 
                        to={`/case-studies/${study.id}`}
                        className="group block"
                      >
                        <div className="relative overflow-hidden rounded-lg mb-6">
                          <img
                            src={study.thumbnail}
                            alt={study.title}
                            className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <Badge className="absolute left-4 top-4">
                            {study.industry}
                          </Badge>
                        </div>
                        
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                          {study.title}
                        </h3>
                        <p className="mt-2 text-muted-foreground">
                          {study.client}
                        </p>
                        
                        <p className="mt-4 line-clamp-2">
                          {study.problem}
                        </p>
                        
                        <div className="mt-6 grid grid-cols-2 gap-4">
                          {study.results.slice(0, 2).map((result, index) => (
                            <div key={index} className="space-y-1">
                              <p className="text-2xl font-bold text-primary">
                                {result.stat}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {result.label}
                              </p>
                            </div>
                          ))}
                        </div>
                        
                        <Button 
                          variant="link" 
                          className="mt-4 p-0 group-hover:text-primary"
                        >
                          Read Case Study
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {filteredCaseStudies.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground">
                    No case studies found for this industry. Please try another filter.
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <CallToAction 
        title="Ready to Create Your Success Story?"
        description="Let's collaborate to develop a marketing strategy that drives real business results for your company."
        primaryButtonText="Start a Project"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn About Our Services"
        secondaryButtonLink="/services"
        variant="accent"
      />
    </>
  );
};

export default CaseStudiesPage;