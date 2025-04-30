import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SectionHeading from '@/components/common/SectionHeading';
import { CaseStudy } from '@/types';

const featuredCaseStudy: CaseStudy = {
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
};

const CaseStudyTeaser = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <SectionHeading
          title="Featured Project"
          subtitle="Explore how we've helped our clients achieve exceptional results through strategic marketing solutions."
        />
        
        <Card className="overflow-hidden border-0 bg-transparent shadow-none">
          <CardContent className="grid gap-6 p-0 md:grid-cols-2 md:gap-12">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={featuredCaseStudy.thumbnail}
                alt={featuredCaseStudy.title}
                className="aspect-video w-full object-cover transition-transform hover:scale-105"
              />
              <Badge className="absolute left-4 top-4">
                {featuredCaseStudy.industry}
              </Badge>
            </div>
            
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h3 className="text-2xl font-bold md:text-3xl">
                  {featuredCaseStudy.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {featuredCaseStudy.client}
                </p>
              </div>
              
              <p className="text-lg">
                {featuredCaseStudy.problem}
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {featuredCaseStudy.results.slice(0, 4).map((result, index) => (
                  <div key={index} className="space-y-1">
                    <p className="text-3xl font-bold text-primary">
                      {result.stat}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {result.label}
                    </p>
                  </div>
                ))}
              </div>
              
              <Button asChild size="lg" className="w-fit">
                <Link to={`/case-studies/${featuredCaseStudy.id}`}>
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CaseStudyTeaser;