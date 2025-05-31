import { SocialLinks } from './SocialLinks';

type FooterProps = {
  copyright: string;
};

export const Footer = ({ copyright }: FooterProps) => {
  return (
    <footer className="flex flex-col items-center gap-4 border-t border-solid border-t-[#e6e9f4] px-4 py-6 text-center">
      <SocialLinks />
      <p className="text-[#47579e] text-sm font-normal leading-normal">{copyright}</p>
    </footer>
  );
}; 