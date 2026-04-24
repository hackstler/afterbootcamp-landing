import { TESTIMONIALS } from '../../shared/constants/data';
import { SectionHead } from './SectionHead';

export const Testimonials = () => (
  <section className="sec" id="testimonios">
    <div className="container">
      <SectionHead
        number="08"
        total="09"
        meta="Voces"
        title='Pasaron por aquí. <em>Salieron con código.</em>'
      />
      <div className="t-grid">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="t-card">
            <div className="t-stars">★★★★★</div>
            <p className="t-q">"{t.quote}"</p>
            <div className="t-auth">
              <div className="t-av">{t.initials}</div>
              <div>
                <div className="t-name">{t.name}</div>
                <div className="t-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
