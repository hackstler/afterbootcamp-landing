import type { NavigationItem } from '../../shared/types';
import { NAVIGATION_ITEMS } from '../../shared/constants/data';
import { ContactModal } from './ContactModal';
import { useContactForm } from '../../shared/hooks/useContactForm';
import { Link, useLocation, useNavigate } from 'react-router-dom';

type NavigationProps = {
  items?: NavigationItem[];
};

export const Navigation = ({ items = NAVIGATION_ITEMS }: NavigationProps) => {
  const { isModalOpen, handleOpenModal, handleCloseModal, handleSubmit } = useContactForm();
  const location = useLocation();
  const navigate = useNavigate();

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
  };

  return (
    <>
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e6e9f4] px-10 py-3">
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
        <div className="flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-9">
            {items.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={(e) => handleNavigationClick(e, item.href)}
                className={`text-[#0d0f1c] text-sm font-medium leading-normal hover:text-[#4768fa] transition-colors ${
                  location.pathname === '/' && item.href === '#' ? 'text-[#4768fa]' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <button
            onClick={handleOpenModal}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#4768fa] text-[#f8f9fc] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#3a56d4] transition-colors"
          >
            <span className="truncate">Reserva una sesión gratuita</span>
          </button>
        </div>
      </header>

      <ContactModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        title="Solicita Información sobre Mentorías"
        subtitle="Completa el formulario para recibir más información sobre nuestras opciones personalizadas."
      />
    </>
  );
}; 