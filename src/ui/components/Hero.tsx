import { HeroTerminal } from './HeroTerminal';
import { HERO_STRIP_ITEMS } from '../../shared/constants/data';

type HeroProps = {
  onCta: () => void;
};

export const Hero = ({ onCta }: HeroProps) => {
  const stripItems = [...HERO_STRIP_ITEMS, ...HERO_STRIP_ITEMS];

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="pre">
                <span className="stamp stamp-pink"><span>●</span> PROGRAMA 1:1</span>
                <span className="stamp">GIJÓN / REMOTO</span>
                <span className="stamp stamp-yellow">NUEVAS PLAZAS</span>
              </div>
              <h1>
                <span>Mentoría 1:1</span>
                <span className="line2">para devs que</span>
                <span className="line3">
                  quieren{' '}
                  <span className="glitch" data-t="dominar IA">
                    dominar IA
                  </span>
                </span>
              </h1>
              <p className="hero-sub">
                <s>Masterclass de 8h</s>. <s>Cursos de YouTube</s>. <s>Gurús de LinkedIn</s>.{' '}
                <span className="hl">
                  Sesiones 1:1 con un dev que sigue enviando a producción
                </span>
                , proyectos reales con IA y un plan adaptado a dónde estás hoy.{' '}
                <em>De dev a dev.</em>
              </p>
              <div className="hero-ctas">
                <button className="btn" onClick={onCta}>
                  Reservar sesión 0€ <span className="ar">→</span>
                </button>
                <a className="btn btn-ghost" href="#metodo">
                  Ver método <span className="ar">↓</span>
                </a>
              </div>
              <div className="hero-meta">
                <span><strong>7</strong> años en el sector</span>
                <span><strong>1:1</strong> siempre</span>
                <span><strong>0€</strong> primera sesión</span>
                <span><strong>45min</strong> diagnóstico honesto</span>
              </div>
            </div>
            <div>
              <HeroTerminal />
            </div>
          </div>
        </div>
      </div>
      <div className="hero-strip">
        <div className="hero-strip-inner">
          {stripItems.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
};
