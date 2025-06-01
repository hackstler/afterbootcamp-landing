import { useContactForm } from '../../shared/hooks/useContactForm';
import { ContactModal } from './ContactModal';

type HeroProps = {
  title: string;
  subtitle: string;
  buttonText: string;
};

export const Hero = ({ title, subtitle, buttonText }: HeroProps) => {
  const { 
    isOpen, 
    setIsOpen, 
    onSubmit,
    isSubmitting,
    notification,
    clearNotification
  } = useContactForm();

  return (
    <>
      <div className="relative isolate overflow-hidden rounded-xl">
        <div 
          className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.7) 100%), url('https://storage.googleapis.com/afterbootcamp/image%20(1).png')`,
            backgroundPosition: 'center 40%',
            backgroundSize: 'cover',
            filter: 'blur(2px)'
          }}
        />
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-6xl">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90 drop-shadow-md sm:text-xl">
              {subtitle}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                onClick={() => setIsOpen(true)}
                className="rounded-full bg-[#4768fa] px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-[#3a56d4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4768fa] sm:text-lg"
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
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