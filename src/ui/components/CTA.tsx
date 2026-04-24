type FinalProps = {
  onCta: () => void;
};

export const Final = ({ onCta }: FinalProps) => (
  <section className="final">
    <div className="container">
      <div className="final-grid">
        <div>
          <span className="eyebrow" style={{ color: '#ff99bb' }}>
            <span className="dot" />
            § Next step · deja de darle vueltas
          </span>
          <h2>
            Deja de enviar CVs.
            <br />
            <em>Empieza a enviar código</em> que la gente quiera copiar.
          </h2>
          <p>
            Primera sesión gratis. 45 minutos. Hablamos de dónde estás, dónde quieres
            llegar y si esto tiene sentido para ti. Sin pitch, sin paquete cerrado, sin
            presión.{' '}
            <strong style={{ color: '#ffd23f' }}>
              Si no encajamos, te lo digo y cada uno a su casa.
            </strong>
          </p>
        </div>
        <div className="final-card">
          <div className="lbl">Primera sesión</div>
          <div className="price">0€</div>
          <div className="hint">45 min · diagnóstico honesto · sin compromiso</div>
          <button className="btn" onClick={onCta}>
            Reservar ahora <span className="ar">→</span>
          </button>
          <div className="bullets">
            <div>Revisión de tu perfil y código</div>
            <div>Roadmap escrito, adaptado a ti</div>
            <div>Te digo si encajas — o no</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
