import { PROJECTS } from '../../shared/constants/data';
import { SectionHead } from './SectionHead';

export const Projects = () => (
  <section className="sec alt" id="proyectos">
    <div className="container">
      <SectionHead
        number="05"
        total="09"
        meta="Builds"
        title='Proyectos reales. <em>Código que va a producción.</em>'
        lead="Esto no es un tutorial de YouTube. Son sistemas que hemos construido para clientes reales, con usuarios reales y problemas que no vienen en el README."
      />
      <div className="proj-grid">
        {PROJECTS.map((p, i) => (
          <div key={i} className={`proj ${p.big ? 'big' : ''}`}>
            <div className="num">
              {String(i + 1).padStart(2, '0')}/{String(PROJECTS.length).padStart(2, '0')}
            </div>
            <div className="kind">{p.kind}</div>
            <h4>{p.title}</h4>
            <p>{p.description}</p>
            <div className="proj-tech">
              {p.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
