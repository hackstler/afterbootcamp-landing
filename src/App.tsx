import { useState } from 'react';
import { SEO } from './ui/components/SEO';
import { MainLayout } from './ui/layouts/MainLayout';
import { Marquee } from './ui/components/Marquee';
import { Navigation } from './ui/components/Navigation';
import { Hero } from './ui/components/Hero';
import { Manifesto } from './ui/components/Manifesto';
import { Villains } from './ui/components/Villains';
import { Problem } from './ui/components/Problem';
import { Method } from './ui/components/Method';
import { Projects } from './ui/components/Projects';
import { Stack } from './ui/components/Stack';
import { Mentor } from './ui/components/Mentor';
import { Testimonials } from './ui/components/Testimonials';
import { FAQ } from './ui/components/FAQ';
import { Final } from './ui/components/CTA';
import { Footer } from './ui/components/Footer';
import { ContactModal } from './ui/components/ContactModal';
import { PrivacyPolicy } from './ui/pages/PrivacyPolicy';
import { History } from './ui/pages/History';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const MainContent = () => {
  const [modal, setModal] = useState(false);

  return (
    <MainLayout>
      <Marquee />
      <Navigation onCta={() => setModal(true)} />
      <Hero onCta={() => setModal(true)} />
      <Manifesto />
      <Villains />
      <Problem />
      <Method />
      <Projects />
      <Stack />
      <Mentor />
      <Testimonials />
      <FAQ />
      <Final onCta={() => setModal(true)} />
      <Footer />
      <ContactModal open={modal} onClose={() => setModal(false)} />
    </MainLayout>
  );
};

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
