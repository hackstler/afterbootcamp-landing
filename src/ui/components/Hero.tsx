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
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%), url('https://storage.googleapis.com/afterbootcamp/image%20(1).png')`,
            backgroundPosition: 'center 40%',
            backgroundSize: 'cover',
            filter: 'blur(2px)'
          }}
        />
        <div className="flex min-h-[480px] flex-col gap-8 items-start justify-end px-4 pb-12 sm:px-10">
          <div className="flex flex-col gap-4 text-left max-w-2xl">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl sm:font-black sm:leading-tight sm:tracking-[-0.033em]">
              {title}
            </h1>
            <h2 className="text-white text-base font-normal leading-relaxed sm:text-lg sm:font-normal sm:leading-relaxed">
              {subtitle}
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 sm:h-14 sm:px-8 bg-[#607afb] text-[#f8f9fc] text-base font-bold leading-normal tracking-[0.015em] sm:text-lg sm:font-bold sm:leading-normal sm:tracking-[0.015em] hover:bg-[#47569e] transition-colors"
          >
            <span className="truncate">{buttonText}</span>
          </button>
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