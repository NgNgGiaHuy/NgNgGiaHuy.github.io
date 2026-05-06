import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { AnimatedText } from './ui/AnimatedText';
import { ContactButton } from './ui/ContactButton';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden">
      
      {/* Decorative Images */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%]">
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" 
          alt="Moon Icon"
          className="w-[120px] sm:w-[160px] md:w-[210px]"
        />
      </FadeIn>

      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]">
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" 
          alt="3D Object"
          className="w-[100px] sm:w-[140px] md:w-[180px]"
        />
      </FadeIn>

      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%]">
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" 
          alt="Lego Icon"
          className="w-[120px] sm:w-[160px] md:w-[210px]"
        />
      </FadeIn>

      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]">
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" 
          alt="3D Group"
          className="w-[130px] sm:w-[170px] md:w-[220px]"
        />
      </FadeIn>

      {/* Content */}
      <div className="flex flex-col items-center text-center z-10 w-full max-w-4xl">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
            About me
          </h2>
        </FadeIn>

        <div className="mt-10 sm:mt-14 md:mt-16 w-full max-w-[560px]">
          <FadeIn delay={0.2} y={20}>
            <p className="text-[#D7E2EA] font-medium leading-relaxed text-[clamp(1rem,2vw,1.35rem)]">
              I am a Data Analyst who believes analyzing data is only half the job. The real value comes from building systems that automate the analysis. While I don't write thousands of lines of code from scratch, I know exactly how to map out a business problem and use AI Agents (Antigravity) to build the code, servers, and workflows needed to fix it. I don't just build dashboards—I leverage AI to orchestrate enterprise-grade automations that save hundreds of manual hours.
            </p>
          </FadeIn>
        </div>

        <div className="mt-16 sm:mt-20 md:mt-24">
          <ContactButton />
        </div>
      </div>
    </section>
  );
};
