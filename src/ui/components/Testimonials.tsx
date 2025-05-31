import type { Testimonial } from '../../shared/types';

type TestimonialsProps = {
  testimonials: Testimonial[];
};

export const Testimonials = ({ testimonials }: TestimonialsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial) => (
        <div 
          key={testimonial.id} 
          className="flex flex-col gap-4 rounded-xl border border-[#ced3e9] bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-4">
            <div
              className="size-16 rounded-full bg-cover bg-center flex-shrink-0"
              style={{ backgroundImage: `url("${testimonial.image}")` }}
            />
            <div>
              <h3 className="text-[#0d0f1c] text-lg font-bold leading-tight">
                {testimonial.name}
              </h3>
              <p className="text-[#47579e] text-sm font-normal leading-normal">
                {testimonial.role}
              </p>
            </div>
          </div>
          <p className="text-[#47579e] text-base leading-relaxed">
            {testimonial.quote}
          </p>
        </div>
      ))}
    </div>
  );
}; 