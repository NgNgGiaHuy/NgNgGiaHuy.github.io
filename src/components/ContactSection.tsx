import React from 'react';
import { FadeIn } from './ui/FadeIn';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-[#D7E2EA] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-20 relative z-20 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 flex flex-col items-center text-center">
      <FadeIn delay={0} y={40}>
        <h2 className="font-black uppercase mb-8 sm:mb-12 text-[clamp(2.5rem,8vw,100px)] leading-none tracking-tight max-w-4xl">
          Let's contact me
        </h2>
      </FadeIn>

      <FadeIn delay={0.2} y={20} className="flex flex-col gap-6 mt-8">
        <a 
          href="tel:0909156607" 
          className="font-medium text-[clamp(1.2rem,3vw,2rem)] hover:opacity-70 transition-opacity border-b-2 border-[#0C0C0C]/30 hover:border-[#0C0C0C] pb-1"
        >
          0909156607
        </a>
        <a 
          href="mailto:nguyenngocgiahuy77@gmail.com" 
          className="font-medium text-[clamp(1.2rem,3vw,2rem)] hover:opacity-70 transition-opacity border-b-2 border-[#0C0C0C]/30 hover:border-[#0C0C0C] pb-1"
        >
          nguyenngocgiahuy77@gmail.com
        </a>
        <a 
          href="https://github.com/NgNgGiaHuy" 
          target="_blank"
          rel="noreferrer"
          className="font-medium text-[clamp(1.2rem,3vw,2rem)] hover:opacity-70 transition-opacity border-b-2 border-[#0C0C0C]/30 hover:border-[#0C0C0C] pb-1"
        >
          github.com/NgNgGiaHuy
        </a>
      </FadeIn>
      
      <FadeIn delay={0.4} y={20} className="mt-20 sm:mt-32 opacity-60 text-sm font-medium uppercase tracking-widest">
        © 2026 Nguyen Ngoc Gia Huy. All rights reserved.
      </FadeIn>
    </section>
  );
};
