import { STACK } from '../../shared/constants/data';
import { SectionHead } from './SectionHead';

export const Stack = () => (
  <section className="sec" id="stack">
    <div className="container">
      <SectionHead
        number="06"
        total="09"
        meta="Loadout"
        title='El stack. <em>Lo que se usa hoy.</em>'
        lead="No vas a aprender 40 frameworks. Vas a dominar los que pagan — y saber cuándo NO usar IA (que a veces es la respuesta correcta)."
      />
      <div className="stack-grid">
        {STACK.map((c, i) => (
          <div key={i} className="stk">
            <div className="l">{c.label}</div>
            <div className="n">{c.name}</div>
            <div className="i">{c.info}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
