import React from 'react';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => (
  <div>
    <div className="grain" />
    <div className="scan" />
    {children}
  </div>
);
