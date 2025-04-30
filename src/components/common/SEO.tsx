import { Helmet } from 'react-helmet-async';
import { SEOProps } from '@/types';

const SEO = ({ 
  title, 
  description, 
  keywords = [], 
  image, 
  url 
}: SEOProps) => {
  // Default values
  const defaultTitle = 'Catalyst Creative | Innovative Marketing Agency';
  const defaultDescription = 
    'Catalyst Creative is a full-service marketing agency specializing in brand strategy, digital marketing, and creative design solutions.';
  const defaultKeywords = [
    'marketing agency',
    'digital marketing',
    'branding',
    'web design',
    'SEO',
    'PPC',
    'social media marketing',
  ];
  const defaultImage = '/images/og-image.jpg';
  const siteUrl = 'https://catalystcreative.com';

  const seo = {
    title: title ? `${title} | Catalyst Creative` : defaultTitle,
    description: description || defaultDescription,
    keywords: [...defaultKeywords, ...keywords].join(', '),
    image: image || defaultImage,
    url: url ? `${siteUrl}${url}` : siteUrl,
  };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="image" content={seo.image} />

      {/* Open Graph */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      {/* Canonical URL */}
      <link rel="canonical" href={seo.url} />
    </Helmet>
  );
};

export default SEO;