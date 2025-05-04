// src/components/Footer.tsx

import React from 'react';

interface FooterProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  variant: string;
}

const Footer: React.FC<FooterProps> = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  variant,
}) => {
  return (
    <footer className={`footer footer--${variant}`}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="footer-buttons">
        <a href={primaryButtonLink} className="btn btn-primary">
          {primaryButtonText}
        </a>
        {secondaryButtonText && secondaryButtonLink && (
          <a href={secondaryButtonLink} className="btn btn-secondary">
            {secondaryButtonText}
          </a>
        )}
      </div>
    </footer>
  );
};

export default Footer;
