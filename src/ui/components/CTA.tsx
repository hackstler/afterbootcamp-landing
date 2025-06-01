import { ContactModal } from './ContactModal';
import { useContactForm } from '../../shared/hooks/useContactForm';

type CTAProps = {
  title: string;
  primaryButtonText: string;
  secondaryButtonText: string;
};

export const CTA = ({
  title,
  primaryButtonText,
  secondaryButtonText
}: CTAProps) => {
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
      <div className="flex flex-col items-center justify-center gap-6 px-4 py-12 text-center sm:py-16">
        <h2 className="text-[#0d0f1c] text-2xl font-bold leading-tight tracking-[-0.015em] sm:text-3xl max-w-[600px]">
          {title}
        </h2>
        <div className="flex flex-col gap-4 w-full sm:w-auto sm:flex-row">
          <button
            onClick={() => setIsOpen(true)}
            className="w-full sm:w-auto flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-[#4768fa] text-[#f8f9fc] text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#3a56d4] transition-colors"
          >
            <span className="truncate">{primaryButtonText}</span>
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className="w-full sm:w-auto flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 border-2 border-[#4768fa] text-[#4768fa] text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#4768fa] hover:text-[#f8f9fc] transition-colors"
          >
            <span className="truncate">{secondaryButtonText}</span>
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