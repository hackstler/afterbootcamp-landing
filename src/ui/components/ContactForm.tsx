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
      // Error handled in useContactForm hook
    }
  };

  const inputClass = "mt-1.5 block w-full rounded-radius-lg border border-border px-3.5 py-2.5 text-text-primary text-sm bg-bg focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all";
  const labelClass = "block text-sm font-medium text-text-primary";
  const errorClass = "mt-1 text-xs text-error font-medium";

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={labelClass}>Nombre</label>
          <input
            type="text"
            id="firstName"
            {...register('firstName', { required: 'El nombre es requerido' })}
            className={inputClass}
            disabled={isSubmitting}
          />
          {errors.firstName && <p className={errorClass}>{errors.firstName.message}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>Apellidos</label>
          <input
            type="text"
            id="lastName"
            {...register('lastName', { required: 'Los apellidos son requeridos' })}
            className={inputClass}
            disabled={isSubmitting}
          />
          {errors.lastName && <p className={errorClass}>{errors.lastName.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>Email</label>
        <input
          type="email"
          id="email"
          {...register('email', {
            required: 'El email es requerido',
            pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Email inválido' }
          })}
          className={inputClass}
          disabled={isSubmitting}
        />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="phoneNumber" className={labelClass}>Teléfono</label>
        <input
          type="tel"
          id="phoneNumber"
          {...register('phoneNumber', {
            required: 'El teléfono es requerido',
            pattern: { value: /^\+?[0-9\s-]{9,}$/, message: 'Teléfono inválido' }
          })}
          className={inputClass}
          disabled={isSubmitting}
        />
        {errors.phoneNumber && <p className={errorClass}>{errors.phoneNumber.message}</p>}
      </div>

      <div>
        <label htmlFor="country" className={labelClass}>País</label>
        <input
          type="text"
          id="country"
          {...register('country', { required: 'El país es requerido' })}
          className={inputClass}
          disabled={isSubmitting}
        />
        {errors.country && <p className={errorClass}>{errors.country.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Cuéntanos tu situación</label>
        <textarea
          id="message"
          rows={3}
          {...register('message', { required: 'El mensaje es requerido' })}
          className={inputClass}
          disabled={isSubmitting}
          placeholder="¿Qué has estudiado? ¿En qué punto estás? ¿Qué buscas?"
        />
        {errors.message && <p className={errorClass}>{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 w-full rounded-radius-lg bg-brand px-4 py-3 text-sm font-bold text-white hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer btn-shimmer"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
      </button>
    </form>
  );
};
