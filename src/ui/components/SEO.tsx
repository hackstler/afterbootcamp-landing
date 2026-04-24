import { useEffect } from 'react';

const GA_TRACKING_ID = 'G-LMZ1RWB8J4';

export const SEO = () => {
  const title = 'After Bootcamp — Mentoría y Formación IA para Desarrolladores';
  const description = 'Mentoría personalizada y formación en inteligencia artificial para desarrolladores. Proyectos reales con IA, workshops prácticos y acompañamiento para impulsar tu carrera tech en 2026.';
  const image = 'https://storage.googleapis.com/afterbootcamp/openart-image_Zssjbb-I_1716376231201_raw.png';
  const url = 'https://www.afterbootcamp.es';

  useEffect(() => {
    document.title = title;

    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: 'mentoría desarrolladores, formación IA, inteligencia artificial programadores, carrera software IA, after bootcamp, mentoría tech, workshops IA, proyectos IA, sistemas multiagente, automatización IA, desarrollo web, fullstack, backend, frontend, devops, junior developer, formación tecnología 2026' },
      { name: 'author', content: 'After Bootcamp' },
      { name: 'robots', content: 'index, follow' },
      { name: 'language', content: 'Spanish' },
      { name: 'revisit-after', content: '7 days' },
      { name: 'theme-color', content: '#5b4cdb' },

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
      { name: 'twitter:image:alt', content: 'After Bootcamp — Mentoría y Formación IA para Desarrolladores' },
    ];

    const elements: HTMLMetaElement[] = [];
    metaTags.forEach(({ name, content, property }) => {
      const meta = document.createElement('meta');
      if (name) meta.setAttribute('name', name);
      if (property) meta.setAttribute('property', property);
      if (content) meta.setAttribute('content', content);
      document.head.appendChild(meta);
      elements.push(meta);
    });

    // JSON-LD Structured Data
    const jsonLd = document.createElement('script');
    jsonLd.type = 'application/ld+json';
    jsonLd.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      name: 'After Bootcamp',
      url,
      description,
      logo: image,
      sameAs: [
        'https://www.linkedin.com/in/sergio-hackstler/',
        'https://www.instagram.com/sergiohackstler/',
        'https://www.youtube.com/@afterbootcamp',
      ],
      founder: {
        '@type': 'Person',
        name: 'Sergio Pérez',
        jobTitle: 'Senior Developer & DevOps Engineer',
      },
      areaServed: { '@type': 'Country', name: 'Spain' },
      serviceType: ['Mentoría para Desarrolladores', 'Formación en IA', 'Workshops de IA Aplicada'],
    });
    document.head.appendChild(jsonLd);

    return () => {
      elements.forEach((el) => el.remove());
      jsonLd.remove();
    };
  }, []);

  // Google Analytics
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
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

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
      gtag('config', '${GA_TRACKING_ID}', { page_path: window.location.pathname });
    `;
    document.head.appendChild(scriptGAInit);

    return () => {
      scriptGA.remove();
      scriptGAInit.remove();
    };
  }, []);

  return null;
};
