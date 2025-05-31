import { SEO } from './ui/components/SEO';
import { MainLayout } from './ui/layouts/MainLayout';
import { Hero } from './ui/components/Hero';
import { Mentor } from './ui/components/Mentor';
import { ProgramSteps } from './ui/components/ProgramSteps';
import { Services } from './ui/components/Services';
import { Testimonials } from './ui/components/Testimonials';
import { CTA } from './ui/components/CTA';
import { PrivacyPolicy } from './ui/pages/PrivacyPolicy';
import { History } from './ui/pages/History';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MENTOR, PROGRAM_STEPS, SERVICES, TESTIMONIALS } from './shared/constants/data';

const MainContent = () => (
  <MainLayout>
    <section id="inicio">
      <Hero
        title="¿Y ahora qué?"
        subtitle="Si te sientes perdido después de terminar tu formación, no estás solo. Aquí empieza tu carrera de verdad."
        buttonText="Reserva una sesión gratuita"
      />
    </section>
    <section id="programa">
      <h2 className="text-[#0d0f1c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Conoce a tu mentor
      </h2>
      <Mentor mentor={MENTOR} />
      <h2 className="text-[#0d0f1c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Programa de Mentoría
      </h2>
      <ProgramSteps steps={PROGRAM_STEPS} />
    </section>
    <section id="servicios">
      <h2 className="text-[#0d0f1c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Servicios Ofrecidos
      </h2>
      <Services services={SERVICES} />
    </section>
    <section id="testimonios">
      <h2 className="text-[#0d0f1c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Testimonios
      </h2>
      <Testimonials testimonials={TESTIMONIALS} />
    </section>
    <CTA
      title="¡Da el siguiente paso en tu carrera!"
      primaryButtonText="Reserva una sesión gratuita"
      secondaryButtonText="Empieza tu roadmap hoy"
    />
  </MainLayout>
);

export const App = () => {
  return (
    <Router>
      <SEO />
      <Routes>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/historia" element={<History />} />
        <Route path="/" element={<MainContent />} />
      </Routes>
    </Router>
  );
};
