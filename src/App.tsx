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
    <section id="inicio" className="relative">
      <div className="relative z-10">
        <Hero
          title="¿Y ahora qué?"
          subtitle="Si te sientes perdido después de terminar tu formación, no estás solo. Aquí empieza tu carrera de verdad."
          buttonText="Reserva una sesión gratuita"
        />
      </div>
    </section>

    <section id="programa" className="relative">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-[#0d0f1c] text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.015em] mb-8 text-center">
          Conoce a tu mentor
        </h2>
        <Mentor mentor={MENTOR} />
      </div>

      <div className="mt-16 sm:mt-24">
        <h2 className="text-[#0d0f1c] text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.015em] mb-8 text-center">
          Programa de Mentoría
        </h2>
        <ProgramSteps steps={PROGRAM_STEPS} />
      </div>
    </section>

    <section id="servicios" className="relative">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-[#0d0f1c] text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.015em] mb-8 text-center">
          Servicios Ofrecidos
        </h2>
        <Services services={SERVICES} />
      </div>
    </section>

    <section id="testimonios" className="relative">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-[#0d0f1c] text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.015em] mb-8 text-center">
          Testimonios
        </h2>
        <Testimonials testimonials={TESTIMONIALS} />
      </div>
    </section>

    <section className="relative">
      <div className="max-w-3xl mx-auto">
        <CTA
          title="¡Da el siguiente paso en tu carrera!"
          primaryButtonText="Reserva una sesión gratuita"
          secondaryButtonText="Empieza tu roadmap hoy"
        />
      </div>
    </section>
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
