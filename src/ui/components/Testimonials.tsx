import type { Testimonial } from '../../shared/types/index';

type TestimonialsProps = {
  testimonials: Testimonial[];
};

export const Testimonials = ({ testimonials }: TestimonialsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial) => (
        <div 
          key={testimonial.id} 
          className="flex flex-col gap-6 rounded-xl border border-[#ced2e9] bg-[#f8f9fc] p-6 hover:border-[#607afb] transition-colors"
        >
          <div className="flex items-center gap-4">
            <div
              className="size-20 rounded-full bg-cover bg-center flex-shrink-0 ring-2 ring-[#607afb] ring-offset-2"
              style={{ backgroundImage: `url('${testimonial.image}')` }}
            />
            <div>
              <h3 className="text-[#0d0f1c] text-lg font-bold leading-tight tracking-[-0.015em]">
                {testimonial.name}
              </h3>
              <p className="text-[#47569e] text-base font-normal leading-normal">
                {testimonial.role}
              </p>
            </div>
          </div>
          <p className="text-[#47569e] text-base font-medium leading-relaxed">
            {testimonial.quote}
          </p>
        </div>
      ))}
    </div>
  );
}; 