import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/common/SEO';

const NotFoundPage = () => {
  return (
    <>
      <SEO 
        title="Page Not Found" 
        description="The page you are looking for doesn't exist or has been moved."
      />
      
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-md text-center">
            <h1 className="text-9xl font-bold text-primary">404</h1>
            <h2 className="mt-6 text-3xl font-bold">Page Not Found</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The page you are looking for doesn't exist or has been moved.
            </p>
            <div className="mt-10">
              <Button asChild size="lg">
                <Link to="/">
                  <Home className="mr-2 h-5 w-5" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;