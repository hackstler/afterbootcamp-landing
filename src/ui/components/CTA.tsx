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
  const { isModalOpen, handleOpenModal, handleCloseModal, handleSubmit } = useContactForm();

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 px-4 py-8 text-center">
        <h2 className="text-[#0d0f1c] text-[22px] font-bold leading-tight tracking-[-0.015em]">
          {title}
        </h2>
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            onClick={handleOpenModal}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#4768fa] text-[#f8f9fc] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#3a56d4] transition-colors"
          >
            <span className="truncate">{primaryButtonText}</span>
          </button>
          <button
            onClick={handleOpenModal}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 border border-[#4768fa] text-[#4768fa] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#4768fa] hover:text-[#f8f9fc] transition-colors"
          >
            <span className="truncate">{secondaryButtonText}</span>
          </button>
        </div>
      </div>

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