import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { NavItem } from '@/types';

const navItems: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Services', href: '/services' },
  { title: 'Case Studies', href: '/case-studies' },
  { title: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navigating
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-sm border-b'
          : 'bg-transparent'
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            onClick={handleLinkClick}
          >
            <span className="text-2xl font-bold tracking-tight text-primary">
              Catalyst
              <span className="text-accent">Creative</span>
            </span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      'px-2 py-1 font-medium transition-colors hover:text-primary',
                      isActive ? 'text-primary' : 'text-foreground/80'
                    )
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          'md:hidden fixed inset-x-0 top-16 z-50 bg-background/95 backdrop-blur-md border-b transform transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-y-0' : '-translate-y-[calc(100%)]'
        )}
      >
        <div className="container py-6">
          <ul className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      'block py-2 font-medium transition-colors hover:text-primary',
                      isActive ? 'text-primary' : 'text-foreground/80'
                    )
                  }
                  onClick={handleLinkClick}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
            <li>
              <Button asChild className="w-full mt-2">
                <Link to="/contact" onClick={handleLinkClick}>Get in Touch</Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;