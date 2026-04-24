import { VILLAINS } from '../../shared/constants/data';

export const Villains = () => (
  <section className="vill" id="villanos">
    <div className="container">
      <div className="vill-head">
        <div>
          <span className="eyebrow" style={{ color: '#a8a090' }}>
            <span className="dot" />
            § 02 · Fauna del sector
          </span>
          <h2>
            Contra quién <em>nos definimos.</em>
          </h2>
        </div>
        <div className="meta">
          Si te vendiste alguna de estas — tranqui, todos hemos caído. Solo
          queremos que no vuelva a pasar.
        </div>
      </div>
      <div className="vill-grid">
        {VILLAINS.map((v, i) => (
          <div key={i} className="vill-card">
            <div className="num">
              BOSS · {String(i + 1).padStart(2, '0')}
            </div>
            <div className="kind">{v.kind}</div>
            <h4>{v.title}</h4>
            <p>{v.description}</p>
            <div className="quote">{v.quote}</div>
          </div>
        ))}
      </div>
      <div className="vill-punch">
        Darle un <strong>AK-47</strong> a un mono no lo convierte en soldado.{' '}
        <em>Sí, puede apretar el gatillo y disparar</em> — pero no sabe cuándo
        usarla, cómo usarla y, lo más importante, cuándo no usarla. Eso se
        aprende con años de entrenamiento y operaciones reales. Lo mismo pasa con
        la IA: gente que hace dos años vendía cursos de fotografía, que{' '}
        <em>nunca ha diseñado ni puesto un software en producción</em>, ahora te
        dice que puedes montar un SaaS con tres prompts. Saber disparar no te
        hace soldado. <strong>Saber promptear no te hace ingeniero.</strong>
      </div>
    </div>
  </section>
);
