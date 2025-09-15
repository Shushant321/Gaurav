import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = 'VConnect360 - Professional Branding & Marketing Agency',
  description = 'Transform your business with our professional branding and marketing services. We create compelling brand experiences that drive growth and inspire audiences.',
  keywords = ['branding', 'marketing', 'design', 'digital agency', 'brand strategy'],
  image = '/og-image.jpg',
  url = 'https://VConnect360.com',
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  structuredData,
}) => {
  const fullTitle = title.includes('VConnect360') ? title : `${title} | VConnect360`;
  const keywordsString = keywords.join(', ');

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsString} />
      <meta name="author" content={author || 'VConnect360 Team'} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="VConnect360" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@VConnect360" />
      <meta name="twitter:creator" content="@VConnect360" />

      {/* Article specific tags */}
      {type === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
        </>
      )}

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}

      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#059669" />
      <meta name="msapplication-navbutton-color" content="#059669" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    </Helmet>
  );
};

export default SEO;