import { useEffect } from 'react';

const GA_TRACKING_ID = 'G-LMZ1RWB8J4';

type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  twitterUsername?: string;
};

export const SEO = ({
  title = 'After Bootcamp - Mentoría para Desarrolladores',
  description = 'Impulsa tu carrera como desarrollador con mentoría personalizada. Aprende de expertos y alcanza el siguiente nivel en tu carrera tech.',
  image = 'https://storage.googleapis.com/afterbootcamp/openart-image_Zssjbb-I_1716376231201_raw.png',
  url = 'https://www.afterbootcamp.es',
  twitterUsername = '@afterbootcamp'
}: SEOProps) => {
  useEffect(() => {
    const handleRouteChange = () => {
      if (window.gtag) {
        window.gtag('config', GA_TRACKING_ID, {
          page_path: window.location.pathname,
        });
      }
    };

    handleRouteChange();

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const metaTags = [
    { name: 'description', content: description },
    { name: 'keywords', content: 'bootcamp, mentoría, desarrollo software, devops, after bootcamp, afterbootcamp, afterbootcamp.es, seniority, developer, software engineer, software architect, tech lead, cto, carrera tech, desarrollo profesional, crecimiento profesional, mentoría técnica, programación, coding, desarrollo web, frontend, backend, fullstack' },
    { name: 'author', content: 'After Bootcamp' },
    { name: 'robots', content: 'index, follow' },
    { name: 'language', content: 'Spanish' },
    { name: 'revisit-after', content: '7 days' },
    { name: 'theme-color', content: '#4768fa' },

    // Open Graph
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: image },
    { property: 'og:url', content: url },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'After Bootcamp' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:locale', content: 'es_ES' },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:domain', content: 'afterbootcamp.es' },
    { name: 'twitter:url', content: url },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image },
    { name: 'twitter:image:alt', content: 'After Bootcamp Logo' },
    { name: 'twitter:site', content: twitterUsername },
    { name: 'twitter:creator', content: twitterUsername },

    // LinkedIn
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: image },
    { property: 'og:url', content: url },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'After Bootcamp' },

    // Canonical URL
    { rel: 'canonical', href: url }
  ];

  useEffect(() => {
    metaTags.forEach(({ name, content, property, rel }) => {
      const meta = document.createElement('meta');
      if (name) meta.setAttribute('name', name);
      if (property) meta.setAttribute('property', property);
      if (rel) meta.setAttribute('rel', rel);
      if (content) meta.setAttribute('content', content);
      document.head.appendChild(meta);
    });

    return () => {
      metaTags.forEach(({ name, property, rel }) => {
        const meta = document.querySelector(`meta[${name ? 'name' : property ? 'property' : 'rel'}="${name || property || rel}"]`);
        if (meta) meta.remove();
      });
    };
  }, [metaTags]);

  useEffect(() => {
    const scriptGA = document.createElement('script');
    scriptGA.async = true;
    scriptGA.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(scriptGA);

    const scriptGAInit = document.createElement('script');
    scriptGAInit.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}', {
        page_path: window.location.pathname,
      });
    `;
    document.head.appendChild(scriptGAInit);

    return () => {
      scriptGA.remove();
      scriptGAInit.remove();
    };
  }, []);

  return null;
}; 