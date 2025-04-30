import SEO from '@/components/common/SEO';
import Hero from '@/components/home/Hero';
import ServiceOverview from '@/components/home/ServiceOverview';
import Testimonials from '@/components/home/Testimonials';
import CaseStudyTeaser from '@/components/home/CaseStudyTeaser';
import BrandLogos from '@/components/home/BrandLogos';
import CallToAction from '@/components/common/CallToAction';

const HomePage = () => {
  return (
    <>
      <SEO 
        title="Home" 
        description="Catalyst Creative is a full-service marketing agency specializing in brand strategy, digital marketing, and creative solutions that drive business growth."
      />
      
      <Hero />
      <ServiceOverview />
      <Testimonials />
      <CaseStudyTeaser />
      <BrandLogos />
      
      <CallToAction 
        title="Ready to Transform Your Brand?"
        description="Let's collaborate to create a marketing strategy that drives real business growth and helps you stand out from the competition."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/services"
        variant="accent"
      />
    </>
  );
};

export default HomePage;