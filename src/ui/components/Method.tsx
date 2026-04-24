import { METHOD } from '../../shared/constants/data';
import { SectionHead } from './SectionHead';

export const Method = () => (
  <section className="sec" id="metodo">
    <div className="container">
      <SectionHead
        number="04"
        total="09"
        meta="Método"
        title='Tres fases. <em>Cero humo.</em>'
        lead="Método claro, adaptado a dónde estás hoy. Ni masterclass de 8h ni 'hazlo tú con esta PDF de 120 páginas'."
      />
      <div className="method">
        {METHOD.map((s, i) => (
          <div key={i} className="step">
            <div className="step-head">
              <div className="step-n">{s.number}</div>
              <div className="step-time">{s.time}</div>
            </div>
            <h4>{s.title}</h4>
            <p>{s.description}</p>
            <div className="step-tags">
              {s.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
