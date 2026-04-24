import { Final } from './CTA';

type HistoryProps = {
  onCta: () => void;
};

export const History = ({ onCta }: HistoryProps) => {
  return (
    <div>
      {/* Hero banner */}
      <section className="sec" style={{ background: 'var(--color-ink)', color: 'var(--color-paper)' }}>
        <div className="container">
          <span className="eyebrow" style={{ color: '#a8a090' }}>
            <span className="dot" />
            La historia
          </span>
          <h1 style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 800,
            fontSize: 'clamp(2.4rem, 5vw, 4rem)',
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            margin: '0.75rem 0 0',
          }}>
            De trabajar en un cine a<br />
            <em style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontWeight: 500,
              color: 'var(--color-pink)',
            }}>
              construir productos con IA.
            </em>
          </h1>
        </div>
      </section>

      <section className="sec">
        <div className="container" style={{ maxWidth: 800 }}>
          {/* Photo */}
          <div style={{ marginBottom: '3rem', border: '2px solid var(--color-ink)', boxShadow: '6px 6px 0 var(--color-pink)' }}>
            <img
              src="https://storage.googleapis.com/afterbootcamp/IMG_4229.JPG"
              alt="Sergio en oficina"
              style={{ width: '100%', height: 320, objectFit: 'cover', display: 'block', filter: 'grayscale(0.4) contrast(1.05) sepia(0.12)' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {[
              { title: 'El Comienzo', text: 'Soy Sergio y aunque no cuento con formación reglada, soy un desarrollador de software y DevOps apasionado. Hace unos años, me encontraba trabajando en un cine. Llevaba dos años en ese empleo, pero sentía que no era mi destino. Fue entonces cuando encontré una oportunidad que cambiaría mi vida: un bootcamp de programación.' },
              { title: 'El Desafío del Bootcamp', text: 'Había estado coqueteando con la programación por un tiempo, pero nunca me había sumergido por completo. Fue un proceso duro e intenso, pero también fue una etapa de gran crecimiento personal. La programación se convirtió en un antes y un después en mi vida.' },
              { title: 'Encontrando Mentores', text: 'En el bootcamp, conocí a mis futuros socios. Me proporcionaron una guía constante y validación en cada paso. He tenido la suerte de contar con varios mentores a lo largo de mi carrera, y a todos ellos les estoy profundamente agradecido. Sin su ayuda, no sería posible hoy estar aquí.' },
              { title: 'Expandiendo Horizontes', text: 'Un desarrollador no puede limitarse solo a programar. Necesita tener una visión 360 de la tecnología. Hice otro bootcamp mientras trabajaba como DevOps y seguí formándome con la llegada de la IA. Después de cuatro años programando, monté una empresa de consultoría y llevo más de 2 años construyendo productos con inteligencia artificial.' },
              { title: 'El Compromiso con el Futuro', text: 'El mundo tech es complejo y la IA lo ha acelerado todo. He decidido dar la oportunidad que me dieron a mí. Quiero compartir los conocimientos necesarios para que otros puedan evolucionar en sus carreras tech y dominar las herramientas de IA que están transformando la industria. Juntos, podemos lograr que tu carrera despegue.' },
            ].map((section, i) => (
              <div key={i}>
                <h2 style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 800,
                  fontSize: 22,
                  letterSpacing: '-0.02em',
                  marginBottom: '0.6rem',
                }}>
                  {section.title}
                </h2>
                <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--color-ink-2)' }}>
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Final onCta={onCta} />
    </div>
  );
};
