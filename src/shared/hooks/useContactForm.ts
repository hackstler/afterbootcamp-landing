import { useState } from 'react';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  country: string;
  message: string;
};

export const useContactForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmit = async (data: FormData) => {
    try {
      // Aquí iría la lógica para enviar el formulario
      // Por ejemplo, una llamada a una API
      console.log('Form data:', data);
      
      // Simulamos un envío exitoso
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Cerrar el modal después del envío exitoso
      handleCloseModal();
      
      // Aquí podrías mostrar una notificación de éxito
      alert('¡Gracias por contactarnos! Te responderemos pronto.');
    } catch (error) {
      console.error('Error submitting form:', error);
      // Aquí podrías mostrar una notificación de error
      alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
      throw error;
    }
  };

  return {
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    handleSubmit
  };
}; 