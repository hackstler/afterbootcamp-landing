import React from 'react';
import type { Testimonial } from '../../shared/types';

type TestimonialsProps = {
  testimonials: Testimonial[];
};

export const Testimonials = ({ testimonials }: TestimonialsProps) => {
  return (
    <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex items-stretch p-4 gap-3">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
              style={{ backgroundImage: `url("${testimonial.image}")` }}
            />
            <div>
              <p className="text-[#0d0f1c] text-base font-medium leading-normal">{testimonial.quote}</p>
              <p className="text-[#47579e] text-sm font-normal leading-normal">
                {testimonial.name}, {testimonial.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 