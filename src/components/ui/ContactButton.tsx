import React, { useState } from 'react';
import { ContactModal } from './ContactModal';

export const ContactButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-full text-white font-medium uppercase tracking-widest px-5 py-2.5 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-[10px] sm:text-sm md:text-base transition-transform hover:scale-105"
        style={{
          background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
          boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
          outline: '2px solid white',
          outlineOffset: '-3px'
        }}
      >
        Contact Me
      </button>
      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
