import { Dialog } from '@headlessui/react';
import { ContactForm } from './ContactForm';
import { Notification } from './Notification';
import type { FormData } from '../../shared/types';

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: FormData) => Promise<void>;
  title: string;
  subtitle: string;
  isSubmitting?: boolean;
  notification: { type: 'success' | 'error' | 'info'; message: string; } | null;
  onClearNotification: () => void;
};

export const ContactModal = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  subtitle,
  isSubmitting = false,
  notification,
  onClearNotification
}: ContactModalProps) => {
  return (
    <>
      <Dialog 
        open={isOpen} 
        onClose={onClose} 
        as="div" 
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-[#0d0f1c]/25" aria-hidden="true" />

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-4 text-left align-middle shadow-xl transition-all sm:p-6">
              <Dialog.Title
                as="h3"
                className="text-[#0d0f1c] text-lg font-bold leading-tight tracking-[-0.015em] sm:text-xl"
              >
                {title}
              </Dialog.Title>
              <Dialog.Description
                as="p"
                className="mt-2 text-[#47579e] text-sm font-normal leading-normal"
              >
                {subtitle}
              </Dialog.Description>

              <div className="mt-4">
                <ContactForm onSubmit={onSubmit} isSubmitting={isSubmitting} />
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>

      {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
          onClose={onClearNotification}
        />
      )}
    </>
  );
}; 