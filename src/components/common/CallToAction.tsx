import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CallToActionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  className?: string;
  variant?: 'default' | 'centered' | 'accent';
}

const CallToAction = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  className,
  variant = 'default',
}: CallToActionProps) => {
  return (
    <section
      className={cn(
        'py-16 md:py-24',
        {
          'bg-muted': variant === 'default',
          'bg-primary text-primary-foreground': variant === 'accent',
        },
        className
      )}
    >
      <div className="container">
        <div
          className={cn('max-w-3xl', {
            'mx-auto text-center': variant === 'centered',
            'ml-auto text-right': variant === 'default' && !variant,
          })}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 break-words">
            {title}
          </h2>
          <p
            className={cn('mb-8 text-lg break-words', {
              'text-muted-foreground': variant !== 'accent',
            })}
          >
            {description}
          </p>
          <div
            className={cn('flex gap-4', {
              'justify-center': variant === 'centered',
              'justify-end': variant === 'default' && !variant,
            })}
          >
            <Button asChild size="lg">
              <Link to={primaryButtonLink}>
                {primaryButtonText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            {secondaryButtonText && secondaryButtonLink && (
              <Button
                asChild
                variant="outline"
                size="lg"
                className={cn({
                  'bg-transparent border-white hover:bg-white/10': variant === 'accent',
                })}
              >
                <Link to={secondaryButtonLink}>{secondaryButtonText}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
