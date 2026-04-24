import { useState, useEffect } from 'react';
import { useContactForm } from '../../shared/hooks/useContactForm';

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
};

export const ContactModal = ({ open, onClose }: ContactModalProps) => {
  const { onSubmit, isSubmitting } = useContactForm();
  const [sent, setSent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!open) setSent(false);
  }, [open]);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await onSubmit({
        firstName: name,
        lastName: '',
        email,
        phoneNumber: '',
        country: '',
        message,
      });
      setSent(true);
    } catch {
      // onSubmit handles its own errors
    }
  };

  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <div>
            <div className="pre">Nueva sesión</div>
            <h3>
              Sesión <em>0€</em> · sin humo
            </h3>
          </div>
          <button className="modal-close" onClick={onClose}>
            ✕
          </button>
        </div>
        {sent ? (
          <div>
            <div className="pre" style={{ color: 'var(--color-green)' }}>
              Recibido, bro ✓
            </div>
            <h3 style={{ margin: '0.4rem 0 1rem', fontSize: 22 }}>
              Te escribo en 24h.
            </h3>
            <p style={{ fontSize: 14, color: 'var(--color-ink-2)' }}>
              Mientras, échale un ojo al stack. Si tienes GitHub, mándalo en el
              mensaje — así llego a la sesión con deberes hechos.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <label>Nombre</label>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-row">
              <label>Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-row">
              <label>¿Dónde estás hoy?</label>
              <textarea
                rows={3}
                placeholder="ex-bootcamp, 2 años backend, senior perdido, picando para mí…"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn"
              disabled={isSubmitting}
              style={{
                width: '100%',
                justifyContent: 'center',
                boxShadow: '4px 4px 0 var(--color-ink)',
              }}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}{' '}
              <span className="ar">→</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
