import { useState } from 'react';
import emailjs from '@emailjs/browser';

// Configura estos valores desde tu cuenta de EmailJS (emailjs.com):
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

type FormInput = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  country: string;
  message: string;
};

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data: FormInput) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.firstName,
          from_email: data.email,
          message: data.message,
        },
        EMAILJS_PUBLIC_KEY,
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    onSubmit: handleSubmit,
  };
};
