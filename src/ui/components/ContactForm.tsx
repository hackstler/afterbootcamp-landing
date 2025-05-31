import { useForm } from 'react-hook-form';
import type { FormData } from '../../shared/types';

type ContactFormProps = {
  onSubmit: (data: FormData) => Promise<void>;
  isSubmitting?: boolean;
};

export const ContactForm = ({ onSubmit, isSubmitting = false }: ContactFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();

  const onFormSubmit = async (data: FormData) => {
    try {
      await onSubmit(data);
      reset();
    } catch {
      // El error ya se maneja en el hook useContactForm
    }
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-[#0d0f1c]">
            Nombre
          </label>
          <input
            type="text"
            id="firstName"
            {...register('firstName', { required: 'El nombre es requerido' })}
            className="mt-1 block w-full rounded-md border border-[#e6e9f4] px-3 py-2 text-[#0d0f1c] text-sm shadow-sm focus:border-[#4768fa] focus:outline-none focus:ring-1 focus:ring-[#4768fa] disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          />
          {errors.firstName && (
            <p className="mt-1 text-xs text-[#ef4444] sm:text-sm">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-[#0d0f1c]">
            Apellidos
          </label>
          <input
            type="text"
            id="lastName"
            {...register('lastName', { required: 'Los apellidos son requeridos' })}
            className="mt-1 block w-full rounded-md border border-[#e6e9f4] px-3 py-2 text-[#0d0f1c] text-sm shadow-sm focus:border-[#4768fa] focus:outline-none focus:ring-1 focus:ring-[#4768fa] disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          />
          {errors.lastName && (
            <p className="mt-1 text-xs text-[#ef4444] sm:text-sm">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#0d0f1c]">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register('email', {
            required: 'El email es requerido',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Email inválido'
            }
          })}
          className="mt-1 block w-full rounded-md border border-[#e6e9f4] px-3 py-2 text-[#0d0f1c] text-sm shadow-sm focus:border-[#4768fa] focus:outline-none focus:ring-1 focus:ring-[#4768fa] disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-[#ef4444] sm:text-sm">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-[#0d0f1c]">
          Teléfono
        </label>
        <input
          type="tel"
          id="phoneNumber"
          {...register('phoneNumber', {
            required: 'El teléfono es requerido',
            pattern: {
              value: /^\+?[0-9\s-]{9,}$/,
              message: 'Teléfono inválido'
            }
          })}
          className="mt-1 block w-full rounded-md border border-[#e6e9f4] px-3 py-2 text-[#0d0f1c] text-sm shadow-sm focus:border-[#4768fa] focus:outline-none focus:ring-1 focus:ring-[#4768fa] disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        />
        {errors.phoneNumber && (
          <p className="mt-1 text-xs text-[#ef4444] sm:text-sm">{errors.phoneNumber.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="country" className="block text-sm font-medium text-[#0d0f1c]">
          País
        </label>
        <input
          type="text"
          id="country"
          {...register('country', { required: 'El país es requerido' })}
          className="mt-1 block w-full rounded-md border border-[#e6e9f4] px-3 py-2 text-[#0d0f1c] text-sm shadow-sm focus:border-[#4768fa] focus:outline-none focus:ring-1 focus:ring-[#4768fa] disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        />
        {errors.country && (
          <p className="mt-1 text-xs text-[#ef4444] sm:text-sm">{errors.country.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#0d0f1c]">
          Mensaje
        </label>
        <textarea
          id="message"
          rows={4}
          {...register('message', { required: 'El mensaje es requerido' })}
          className="mt-1 block w-full rounded-md border border-[#e6e9f4] px-3 py-2 text-[#0d0f1c] text-sm shadow-sm focus:border-[#4768fa] focus:outline-none focus:ring-1 focus:ring-[#4768fa] disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-[#ef4444] sm:text-sm">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-4 flex w-full justify-center rounded-md bg-[#4768fa] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#3a56d4] focus:outline-none focus:ring-2 focus:ring-[#4768fa] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
      </button>
    </form>
  );
}; 