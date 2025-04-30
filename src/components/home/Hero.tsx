import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-16 md:pt-24 lg:pt-32">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]" />
      </div>
      
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl xl:text-7xl">
                Transform Your Brand's <span className="text-primary">Digital Presence</span>
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl max-w-[600px]">
                We craft innovative marketing strategies that drive growth, 
                build brand awareness, and deliver measurable results for 
                ambitious businesses.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="group">
                <Link to="/contact">
                  Get Started
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/case-studies">
                  View Our Work
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center pt-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="h-10 w-10 overflow-hidden rounded-full border-2 border-background"
                  >
                    <img 
                      src={`https://randomuser.me/api/portraits/women/${i + 20}.jpg`} 
                      alt={`Client ${i}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="h-5 w-5 fill-primary"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">4.9/5</span> from over 300 reviews
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative mx-auto lg:ml-auto">
            <div className="relative rounded-lg overflow-hidden shadow-2xl md:min-h-[500px] bg-muted">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Marketing Team Collaboration"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent flex items-end p-8">
                <div className="max-w-sm">
                  <blockquote className="text-lg md:text-xl font-medium italic text-foreground mb-2">
                    "Catalyst Creative transformed our online presence and doubled our leads in 3 months."
                  </blockquote>
                  <p className="font-semibold">Jessica Chen, CEO at TechStart</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-secondary opacity-80" />
            <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-accent opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;