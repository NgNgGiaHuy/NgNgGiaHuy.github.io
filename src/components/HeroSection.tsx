import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { ContactButton } from './ui/ContactButton';
import { Magnet } from './ui/Magnet';

export const HeroSection: React.FC = () => {
  return (
    <section className="h-screen flex flex-col relative overflow-x-clip px-6 md:px-10">
      
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav" className="flex justify-between items-center pt-6 md:pt-8 z-20">
        {['About', 'Expertise', 'Projects', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
          >
            {item}
          </a>
        ))}
      </FadeIn>

      {/* Hero Heading */}
      <div className="flex-1 flex flex-col justify-center overflow-hidden z-0 pointer-events-none">
        <FadeIn delay={0.15} y={40} className="w-full">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5">
            Hi, i&apos;m huy
          </h1>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 z-20">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]" style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}>
            a data analyst & automation builder using AI to turn fragmented data into autonomous systems.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      {/* Hero Portrait */}
      <FadeIn delay={0.6} y={30} className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto">
        <Magnet padding={150} strength={3}>
          <img 
            src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png" 
            alt="Jack 3D Portrait"
            className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] object-contain"
          />
        </Magnet>
      </FadeIn>

    </section>
  );
};
