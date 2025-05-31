import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Switch } from '@headlessui/react';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  country: string;
  message: string;
};

type ContactFormProps = {
  onSubmit: (data: FormData) => Promise<void>;
};

export const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();

  const handleFormSubmit = async (data: FormData) => {
    if (!agreed) return;
    setIsSubmitting(true);
    try {
      await onSubmit(data);
      reset();
      if (window.gtag) {
        window.gtag('event', 'submit_form', {
          event_category: 'Contact',
          event_label: 'Submit Contact Form',
          value: 1
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-[#0d0f1c] mb-1">
            Nombre
          </label>
          <input
            type="text"
            id="firstName"
            {...register('firstName', { required: 'Nombre es requerido' })}
            className="w-full rounded-lg border border-[#e6e9f4] px-4 py-2 text-[#0d0f1c] focus:border-[#4768fa] focus:ring-2 focus:ring-[#4768fa] focus:ring-opacity-20"
            placeholder="Tu nombre"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-[#0d0f1c] mb-1">
            Apellido
          </label>
          <input
            type="text"
            id="lastName"
            {...register('lastName', { required: 'Apellido es requerido' })}
            className="w-full rounded-lg border border-[#e6e9f4] px-4 py-2 text-[#0d0f1c] focus:border-[#4768fa] focus:ring-2 focus:ring-[#4768fa] focus:ring-opacity-20"
            placeholder="Tu apellido"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#0d0f1c] mb-1">
          Correo Electrónico
        </label>
        <input
          type="email"
          id="email"
          {...register('email', { 
            required: 'Correo electrónico es requerido',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Correo electrónico inválido'
            }
          })}
          className="w-full rounded-lg border border-[#e6e9f4] px-4 py-2 text-[#0d0f1c] focus:border-[#4768fa] focus:ring-2 focus:ring-[#4768fa] focus:ring-opacity-20"
          placeholder="tu@email.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-[#0d0f1c] mb-1">
          Teléfono
        </label>
        <div className="relative">
          <select
            {...register('country')}
            className="absolute left-0 top-0 h-full rounded-l-lg border border-r-0 border-[#e6e9f4] bg-transparent px-3 text-[#0d0f1c]"
          >
            <option value="ES">ES</option>
            <option value="LATAM">LATAM</option>
          </select>
          <input
            type="tel"
            id="phoneNumber"
            {...register('phoneNumber', { required: 'Teléfono es requerido' })}
            className="w-full rounded-lg border border-[#e6e9f4] pl-20 pr-4 py-2 text-[#0d0f1c] focus:border-[#4768fa] focus:ring-2 focus:ring-[#4768fa] focus:ring-opacity-20"
            placeholder="Tu número de teléfono"
          />
        </div>
        {errors.phoneNumber && (
          <p className="mt-1 text-sm text-red-600">{errors.phoneNumber.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#0d0f1c] mb-1">
          Mensaje
        </label>
        <textarea
          id="message"
          rows={4}
          {...register('message', { required: 'Mensaje es requerido' })}
          className="w-full rounded-lg border border-[#e6e9f4] px-4 py-2 text-[#0d0f1c] focus:border-[#4768fa] focus:ring-2 focus:ring-[#4768fa] focus:ring-opacity-20"
          placeholder="Cuéntanos un poco sobre ti y tus objetivos"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <div className="flex items-center gap-3">
        <Switch
          checked={agreed}
          onChange={setAgreed}
          className={`${
            agreed ? 'bg-[#4768fa]' : 'bg-[#e6e9f4]'
          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#4768fa] focus:ring-opacity-20`}
        >
          <span className="sr-only">Aceptar políticas</span>
          <span
            className={`${
              agreed ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
          />
        </Switch>
        <span className="text-sm text-[#0d0f1c]">
          Acepto la{' '}
          <a
            href="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4768fa] hover:text-[#3a56d4] font-medium"
            onClick={(e) => {
              e.preventDefault();
              window.open('/privacy-policy', '_blank');
            }}
          >
            política de privacidad
          </a>
        </span>
      </div>

      <button
        type="submit"
        disabled={!agreed || isSubmitting}
        className="w-full rounded-full bg-[#4768fa] px-6 py-3 text-sm font-bold text-white hover:bg-[#3a56d4] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
      </button>
    </form>
  );
}; 