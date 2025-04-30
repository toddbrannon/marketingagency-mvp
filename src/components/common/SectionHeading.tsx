import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionHeading = ({
  title,
  subtitle,
  className,
  align = 'left',
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        'space-y-2 pb-8',
        {
          'text-left': align === 'left',
          'text-center mx-auto': align === 'center',
          'text-right ml-auto': align === 'right',
        },
        className
      )}
    >
      <h2 className="relative font-bold">
        {align === 'left' && (
          <span className="absolute -left-3 top-1/2 h-10 w-1 -translate-y-1/2 rounded-r-md bg-primary" />
        )}
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-muted-foreground max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;