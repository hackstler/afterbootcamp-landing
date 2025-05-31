import React from 'react';
import { MainLayout } from './ui/layouts/MainLayout';
import { Hero } from './ui/components/Hero';
import { Mentor } from './ui/components/Mentor';
import { ProgramSteps } from './ui/components/ProgramSteps';
import { Services } from './ui/components/Services';
import { Testimonials } from './ui/components/Testimonials';
import { CTA } from './ui/components/CTA';
import { MENTOR, PROGRAM_STEPS, SERVICES, TESTIMONIALS } from './shared/constants/data';

export const App = () => {
  return (
    <MainLayout>
      <Hero
        title="¿Y ahora qué?"
        subtitle="Si te sientes perdido después de terminar tu formación, no estás solo. Aquí empieza tu carrera de verdad."
        buttonText="Reserva una sesión gratuita"
      />
      <h2 className="text-[#0d0f1c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Conoce a tu mentor
      </h2>
      <Mentor mentor={MENTOR} />
      <h2 className="text-[#0d0f1c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Programa de Mentoría
      </h2>
      <ProgramSteps steps={PROGRAM_STEPS} />
      <h2 className="text-[#0d0f1c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Servicios Ofrecidos
      </h2>
      <Services services={SERVICES} />
      <h2 className="text-[#0d0f1c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Testimonios
      </h2>
      <Testimonials testimonials={TESTIMONIALS} />
      <CTA
        title="¡Da el siguiente paso en tu carrera!"
        primaryButtonText="Reserva una sesión gratuita"
        secondaryButtonText="Empieza tu roadmap hoy"
      />
    </MainLayout>
  );
};
