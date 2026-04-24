import { useState } from 'react';
import { FAQ_ITEMS } from '../../shared/constants/data';
import { SectionHead } from './SectionHead';

export const FAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="sec alt2" id="faq">
      <div className="container">
        <SectionHead
          number="09"
          total="09"
          meta="FAQ"
          title='Lo que preguntan <em>sin el pitch.</em>'
        />
        <div className="faq-wrap">
          {FAQ_ITEMS.map((f, i) => (
            <div
              key={i}
              className="faq-item"
              data-open={open === i}
              onClick={() => setOpen(open === i ? -1 : i)}
            >
              <div className="faq-q">
                <span>
                  <span className="faq-q-pre">Q·{String(i + 1).padStart(2, '0')}</span>
                  <span className="faq-q-txt">{f.question}</span>
                </span>
                <span className="faq-sign">+</span>
              </div>
              <div className="faq-a">
                <p>{f.answer}</p>
                {f.sergio && <div className="sergio">"{f.sergio}"</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
