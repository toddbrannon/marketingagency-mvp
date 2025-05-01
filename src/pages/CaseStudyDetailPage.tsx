import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, User } from 'lucide-react';
import SEO from '@/components/common/SEO';
import CallToAction from '@/components/common/CallToAction';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { caseStudies } from '@/data/caseStudies';

const CaseStudyDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const caseStudy = caseStudies.find((study) => study.id === id);
  
  if (!caseStudy) {
    return <Navigate to="/case-studies" />;
  }
  
  const currentIndex = caseStudies.findIndex((study) => study.id === id);
  const nextCaseStudy = caseStudies[(currentIndex + 1) % caseStudies.length];
  
  return (
    <>
      <SEO 
        title={`${caseStudy.title} | Case Study`} 
        description={`Learn how we helped ${caseStudy.client} overcome challenges and achieve exceptional results through strategic marketing solutions.`}
      />
      
      <section className="py-16 md:py-20 bg-muted">
        <div className="container">
          <div className="flex flex-col items-start gap-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="mb-2"
              asChild
            >
              <Link to="/case-studies">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Case Studies
              </Link>
            </Button>
            
            <Badge className="mb-2">{caseStudy.industry}</Badge>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4">
              {caseStudy.title}
            </h1>
            
            <div className="flex items-center text-muted-foreground">
              <User className="mr-2 h-4 w-4" />
              <span className="mr-6">{caseStudy.client}</span>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container">
          <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
            <img
              src={caseStudy.heroImage}
              alt={caseStudy.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">The Challenge</h2>
                <p className="text-lg">{caseStudy.problem}</p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Our Solution</h2>
                <p className="text-lg">{caseStudy.solution}</p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">The Results</h2>
                <div className="grid grid-cols-2 gap-8 my-8">
                  {caseStudy.results.map((result, index) => (
                    <Card key={index}>
                      <CardContent className="p-6 text-center">
                        <p className="text-4xl font-bold text-primary mb-2">
                          {result.stat}
                        </p>
                        <p className="text-lg text-muted-foreground">
                          {result.label}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              {caseStudy.testimonial && (
                <div className="bg-muted rounded-lg p-8">
                  <blockquote className="text-xl italic mb-6">
                    "{caseStudy.testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div>
                      <p className="font-semibold">{caseStudy.testimonial.author}</p>
                      <p className="text-muted-foreground">
                        {caseStudy.testimonial.position}, {caseStudy.testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Client</p>
                      <p className="font-medium">{caseStudy.client}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Industry</p>
                      <p className="font-medium">{caseStudy.industry}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Services</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="outline">Brand Strategy</Badge>
                        <Badge variant="outline">Web Design</Badge>
                        <Badge variant="outline">Digital Marketing</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Need Similar Results?</h3>
                  <p className="mb-6">Let's discuss how we can help your business achieve exceptional growth.</p>
                  <Button asChild className="w-full">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-muted">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <p className="text-muted-foreground mb-2">Next Case Study</p>
              <h3 className="text-2xl font-bold">{nextCaseStudy.title}</h3>
            </div>
            <Button className="mt-4 md:mt-0" asChild>
              <Link to={`/case-studies/${nextCaseStudy.id}`}>
                Read Next Case Study
                <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <CallToAction 
        title="Ready to Transform Your Business?"
        description="Let's collaborate to develop a marketing strategy that drives real business results."
        primaryButtonText="Start a Project"
        primaryButtonLink="/contact"
        variant="centered"
      />
    </>
  );
};

export default CaseStudyDetailPage;