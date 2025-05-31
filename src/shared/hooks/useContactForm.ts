import { useState } from 'react';
import type { FormData } from '../types';

type Notification = {
  type: 'success' | 'error';
  message: string;
};

export const useContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<Notification | null>(null);

  const handleSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }

      setNotification({
        type: 'success',
        message: '¡Gracias por contactarnos! Te enviaremos un email de confirmación.',
      });
      setIsOpen(false);
    } catch {
      setNotification({
        type: 'error',
        message: 'Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearNotification = () => setNotification(null);

  return {
    isOpen,
    setIsOpen,
    isSubmitting,
    notification,
    clearNotification,
    onSubmit: handleSubmit,
  };
}; 