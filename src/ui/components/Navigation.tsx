import { useState } from 'react';
import { NAVIGATION_ITEMS } from '../../shared/constants/data';
import { Link, useLocation, useNavigate } from 'react-router-dom';

type NavigationProps = {
  onCta: () => void;
};

export const Navigation = ({ onCta }: NavigationProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      if (location.pathname !== '/') {
        navigate(`/${href}`);
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileOpen(false);
  };

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="brand" style={{ textDecoration: 'none' }}>
          <div className="brand-stamp">AB</div>
          <div className="brand-n">
            after<em>/</em>bootcamp
            <small>mentoría · código · criterio</small>
          </div>
        </Link>
        <div className="nav-links">
          {NAVIGATION_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>
        <button className="nav-cta nav-cta-desktop" onClick={onCta}>
          Sesión 0€ →
        </button>
        <button
          className="nav-burger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>
      {mobileOpen && (
        <div className="nav-mobile">
          {NAVIGATION_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <button
            className="btn"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => { onCta(); setMobileOpen(false); }}
          >
            Sesión 0€ <span className="ar">→</span>
          </button>
        </div>
      )}
    </nav>
  );
};
