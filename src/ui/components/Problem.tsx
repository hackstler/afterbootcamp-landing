import { PROBLEMS } from '../../shared/constants/data';
import { SectionHead } from './SectionHead';

export const Problem = () => (
  <section className="sec alt" id="problema">
    <div className="container">
      <SectionHead
        number="03"
        total="09"
        meta="Diagnóstico"
        title='El mercado cambió. <em>Tu CV no.</em>'
        lead="En 2026 las ofertas piden cosas que no te enseñaron: orquestar agentes, montar RAG, meter LLMs en producto. Sin humo: aquí te ponemos al día, con código real."
      />
      <div className="prob-grid">
        {PROBLEMS.map((p, i) => (
          <div key={i} className="prob">
            <div className="tag">{p.tag}</div>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
