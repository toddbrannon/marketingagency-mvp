import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/common/SectionHeading';
import { cn } from '@/lib/utils';
import { Testimonial } from '@/types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "Catalyst Creative transformed our brand from the ground up. Their strategic approach to our rebrand resulted in a 45% increase in customer engagement and significantly improved our market position.",
    author: "Sarah Johnson",
    position: "CMO",
    company: "Elevate Tech",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: '2',
    quote: "Working with Catalyst Creative on our digital marketing was a game-changer. They developed a comprehensive strategy that increased our organic traffic by 78% and doubled our conversion rate in just six months.",
    author: "Michael Rodriguez",
    position: "Founder",
    company: "Horizon Solutions",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: '3',
    quote: "The team at Catalyst Creative doesn't just deliver results—they truly care about our success. Their data-driven approach to our social media campaigns generated a 3x ROI and helped us reach entirely new market segments.",
    author: "Emily Chen",
    position: "CEO",
    company: "Nova Ventures",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: '4',
    quote: "Catalyst Creative's email marketing campaigns have consistently delivered incredible results for our business. Their strategic approach increased our open rates by 32% and drove a 28% increase in sales.",
    author: "David Patel",
    position: "Director of Marketing",
    company: "Pulse Fitness",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const testimonialCount = testimonials.length;
  
  const nextTestimonial = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialCount);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  }, [isAnimating, testimonialCount]);
  
  const prevTestimonial = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonialCount - 1 : prevIndex - 1
    );
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  }, [isAnimating, testimonialCount]);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [nextTestimonial]);
  
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Discover why businesses trust Catalyst Creative to deliver exceptional marketing results and drive growth."
          align="center"
          className="max-w-3xl mx-auto"
        />
        
        <div className="relative mt-12 max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="border-0 shadow-md overflow-hidden relative bg-background p-1">
                    <CardContent className="p-8">
                      <Quote className="h-12 w-12 text-primary/20 absolute top-6 left-6" />
                      <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                        <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-4 border-background shadow-sm">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.author}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <blockquote className="text-lg md:text-xl font-medium italic text-foreground mb-4 relative">
                            "{testimonial.quote}"
                          </blockquote>
                          <div>
                            <p className="font-semibold">{testimonial.author}</p>
                            <p className="text-muted-foreground">
                              {testimonial.position}, {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              disabled={isAnimating}
              className="rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex items-center gap-2 mx-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setActiveIndex(index);
                      setTimeout(() => setIsAnimating(false), 500);
                    }
                  }}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    index === activeIndex 
                      ? "w-8 bg-primary" 
                      : "w-2 bg-primary/30"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              disabled={isAnimating}
              className="rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;