import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fc] antialiased" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <Navigation />
      <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="space-y-16 sm:space-y-24">
          {children}
        </div>
      </main>
      <Footer copyright="© 2024 afterbootcamp.es. Todos los derechos reservados." />
    </div>
  );
}; 