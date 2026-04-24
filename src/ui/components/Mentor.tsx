import { useState } from 'react';
import { MENTOR } from '../../shared/constants/data';
import { SectionHead } from './SectionHead';

export const Mentor = () => {
  const [imgOk, setImgOk] = useState(true);

  return (
    <section className="sec alt" id="mentor">
      <div className="container">
        <SectionHead
          number="07"
          total="09"
          meta="El operador"
          title='Tu mentor. <em>No un gurú.</em>'
        />
        <div className="mentor">
          <div className="m-photo-card">
            <div className="m-photo-wrap">
              {imgOk ? (
                <img
                  src={MENTOR.photo}
                  alt={MENTOR.name}
                  onError={() => setImgOk(false)}
                />
              ) : (
                <div className="m-fallback">SP</div>
              )}
            </div>
            <div className="m-photo-caption">
              <span>CAM_01 · GIJÓN</span>
              <span className="rec">REC</span>
            </div>
          </div>
          <div className="m-info">
            <div className="pre">El mentor</div>
            <h3>
              {MENTOR.name.split(' ')[0]}{' '}
              <em>{MENTOR.name.split(' ').slice(1).join(' ')}</em>
            </h3>
            <div className="m-role">{MENTOR.role}</div>
            <div className="m-bio">
              {MENTOR.bio.map((p, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </div>
            <div className="m-creds">
              {MENTOR.creds.map((c, i) => (
                <div key={i} className="cred">{c}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
