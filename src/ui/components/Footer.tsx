import React from 'react';

type FooterProps = {
  copyright: string;
};

export const Footer = ({ copyright }: FooterProps) => {
  return (
    <footer className="flex justify-center">
      <div className="flex max-w-[960px] flex-1 flex-col">
        <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
          <p className="text-[#47579e] text-base font-normal leading-normal">{copyright}</p>
        </footer>
      </div>
    </footer>
  );
}; 