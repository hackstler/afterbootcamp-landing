import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#f8f9fc] group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <Navigation />
        <div className="flex flex-1 justify-center">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {children}
          </div>
        </div>
        <Footer copyright="© 2024 afterbootcamp.es. Todos los derechos reservados." />
      </div>
    </div>
  );
}; 