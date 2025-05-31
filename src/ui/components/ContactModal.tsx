import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ContactForm } from './ContactForm';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  country: string;
  message: string;
};

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: FormData) => Promise<void>;
  title?: string;
  subtitle?: string;
};

export const ContactModal = ({
  isOpen,
  onClose,
  onSubmit,
  title = 'Solicita Información sobre Mentorías',
  subtitle = 'Completa el formulario para recibir más información sobre nuestras opciones personalizadas.'
}: ContactModalProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-[22px] font-bold leading-tight tracking-[-0.015em] text-[#0d0f1c]"
                >
                  {title}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-base text-[#0d0f1c]">
                    {subtitle}
                  </p>
                </div>

                <div className="mt-6">
                  <ContactForm onSubmit={onSubmit} />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}; 