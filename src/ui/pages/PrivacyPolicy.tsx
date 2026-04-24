import { MainLayout } from '../layouts/MainLayout';
import { Marquee } from '../components/Marquee';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ContactModal } from '../components/ContactModal';
import { useState } from 'react';

export const PrivacyPolicy = () => {
  const [modal, setModal] = useState(false);

  return (
    <MainLayout>
      <Marquee />
      <Navigation onCta={() => setModal(true)} />
      <section className="sec">
        <div className="container" style={{ maxWidth: 800 }}>
          <h1 style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            letterSpacing: '-0.03em',
            marginBottom: '2rem',
          }}>
            Política de Privacidad
          </h1>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: 'var(--color-ink-3)', marginBottom: '2rem' }}>
            Última actualización: 20/04/2026
          </p>

          {[
            { title: '1. Información que Recopilamos', content: 'Recopilamos la siguiente información personal cuando usted llena nuestro formulario de contacto: nombre, correo electrónico y situación profesional actual.' },
            { title: '2. Cómo Utilizamos su Información', content: 'Usamos la información para comunicarnos con usted en relación a nuestras formaciones y mentorías, enviarle información relevante y mejorar nuestro servicio.' },
            { title: '3. Divulgación de su Información', content: 'No vendemos, comercializamos ni transferimos a terceros su información personal, a menos que le notifiquemos con antelación.' },
            { title: '4. Seguridad de su Información', content: 'Implementamos medidas de seguridad para mantener la seguridad de su información personal, incluyendo métodos de encriptación y seguridad de datos.' },
            { title: '5. Derechos del Usuario', content: 'Usted tiene derechos de acceso, corrección, eliminación y oposición al procesamiento de sus datos personales.' },
            { title: '6. Cookies', content: 'Utilizamos cookies para mejorar su experiencia en nuestro sitio web.' },
            { title: '7. Cambios en Nuestra Política', content: 'Podemos actualizar nuestra Política de Privacidad periódicamente. Le notificaremos cualquier cambio publicando la nueva versión en esta página.' },
            { title: '8. Contacto', content: 'Si tiene alguna pregunta, puede contactarnos a través de: sergio@afterbootcamp.es' },
          ].map((section, i) => (
            <div key={i} style={{ marginBottom: '2rem' }}>
              <h2 style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: 19,
                letterSpacing: '-0.02em',
                marginBottom: '0.6rem',
              }}>
                {section.title}
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--color-ink-2)' }}>
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
      <ContactModal open={modal} onClose={() => setModal(false)} />
    </MainLayout>
  );
};
