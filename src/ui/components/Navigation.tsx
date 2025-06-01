import type { NavigationItem } from '../../shared/types/index';
import { NAVIGATION_ITEMS } from '../../shared/constants/data';
import { ContactModal } from './ContactModal';
import { useContactForm } from '../../shared/hooks/useContactForm';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

type NavigationProps = {
  items?: NavigationItem[];
};

export const Navigation = ({ items = NAVIGATION_ITEMS }: NavigationProps) => {
  const { 
    isOpen, 
    setIsOpen, 
    onSubmit,
    isSubmitting,
    notification,
    clearNotification
  } = useContactForm();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigationClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      if (location.pathname !== '/') {
        navigate(`/${href}`);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white">
        <div className="flex items-center justify-between border-b border-solid border-b-[#ced2e9] px-4 py-3 sm:px-10">
          <div className="flex items-center gap-4 text-[#0d0f1c]">
            <Link to="/" className="flex items-center gap-4">
              <div className="size-8">
                <img 
                  src="https://storage.googleapis.com/afterbootcamp/openart-image_Zssjbb-I_1716376231201_raw.png" 
                  alt="After Bootcamp Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-[#0d0f1c] text-lg font-bold leading-tight tracking-[-0.015em]">AfterBootcamp</h2>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              {items.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={(e) => handleNavigationClick(e, item.href)}
                  className={`text-[#0d0f1c] text-sm font-medium leading-normal hover:text-[#607afb] transition-colors ${
                    location.pathname === '/' && item.href === '#' ? 'text-[#607afb]' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <button
              onClick={() => setIsOpen(true)}
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#607afb] text-[#f8f9fc] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#47569e] transition-colors"
            >
              <span className="truncate">Reserva una sesión gratuita</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#0d0f1c] hover:text-[#607afb] transition-colors"
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b border-solid border-b-[#ced2e9] bg-white">
            <nav className="flex flex-col px-4 py-2">
              {items.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={(e) => handleNavigationClick(e, item.href)}
                  className={`py-3 text-[#0d0f1c] text-sm font-medium leading-normal hover:text-[#607afb] transition-colors ${
                    location.pathname === '/' && item.href === '#' ? 'text-[#607afb]' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="my-3 flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#607afb] text-[#f8f9fc] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#47569e] transition-colors"
              >
                <span className="truncate">Reserva una sesión gratuita</span>
              </button>
            </nav>
          </div>
        )}
      </header>

      <ContactModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={onSubmit}
        title="Solicita Información sobre Mentorías"
        subtitle="Completa el formulario para recibir más información sobre nuestras opciones personalizadas."
        isSubmitting={isSubmitting}
        notification={notification}
        onClearNotification={clearNotification}
      />
    </>
  );
}; 