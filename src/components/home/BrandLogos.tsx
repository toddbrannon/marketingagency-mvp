import { useEffect, useRef } from 'react';
import SectionHeading from '@/components/common/SectionHeading';
import { Brand } from '@/types';

const brands: Brand[] = [
  {
    id: '1',
    name: 'Tech Innovate',
    logo: 'https://placehold.co/200x80/e2e8f0/64748b?text=Tech+Innovate'
  },
  {
    id: '2',
    name: 'Global Finance',
    logo: 'https://placehold.co/200x80/e2e8f0/64748b?text=Global+Finance'
  },
  {
    id: '3',
    name: 'Eco Solutions',
    logo: 'https://placehold.co/200x80/e2e8f0/64748b?text=Eco+Solutions'
  },
  {
    id: '4',
    name: 'Metro Media',
    logo: 'https://placehold.co/200x80/e2e8f0/64748b?text=Metro+Media'
  },
  {
    id: '5',
    name: 'Synergy Corp',
    logo: 'https://placehold.co/200x80/e2e8f0/64748b?text=Synergy+Corp'
  },
  {
    id: '6',
    name: 'Vertex Health',
    logo: 'https://placehold.co/200x80/e2e8f0/64748b?text=Vertex+Health'
  }
];

const BrandLogos = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Simple parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrollPosition = window.scrollY;
      const containerPosition = containerRef.current.offsetTop;
      const windowHeight = window.innerHeight;
      
      // Check if container is visible in viewport
      if (
        scrollPosition + windowHeight > containerPosition &&
        scrollPosition < containerPosition + containerRef.current.offsetHeight
      ) {
        // Calculate parallax effect
        const scrolled = (scrollPosition + windowHeight - containerPosition) * 0.05;
        
        // Apply different speeds to create parallax effect
        const logos = containerRef.current.querySelectorAll('.logo-item');
        logos.forEach((logo, index) => {
          const direction = index % 2 === 0 ? 1 : -1;
          const translateX = scrolled * direction * 0.5;
          (logo as HTMLElement).style.transform = `translateX(${translateX}px)`;
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section className="py-12 md:py-16" ref={containerRef}>
      <div className="container">
        <SectionHeading
          title="Trusted by Leading Brands"
          align="center"
          className="max-w-3xl mx-auto"
        />
        
        <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6">
          {brands.map((brand) => (
            <div 
              key={brand.id} 
              className="logo-item flex items-center justify-center transition-all duration-500 filter grayscale hover:grayscale-0"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-12 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;