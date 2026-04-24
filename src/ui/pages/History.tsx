import { MainLayout } from '../layouts/MainLayout';
import { History as HistoryComponent } from '../components/History';
import { Marquee } from '../components/Marquee';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ContactModal } from '../components/ContactModal';
import { useState } from 'react';

export const History = () => {
  const [modal, setModal] = useState(false);

  return (
    <MainLayout>
      <Marquee />
      <Navigation onCta={() => setModal(true)} />
      <HistoryComponent onCta={() => setModal(true)} />
      <Footer />
      <ContactModal open={modal} onClose={() => setModal(false)} />
    </MainLayout>
  );
};
