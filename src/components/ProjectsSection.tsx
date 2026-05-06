import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { LiveProjectButton } from './ui/LiveProjectButton';

const projects = [
  {
    num: "01",
    client: "Risk Management",
    name: "Critical Shopee Alert System",
    desc: "We had a near-miss where a fake product report on Shopee was almost forgotten, which would have closed our shop. To prevent this, I used AI to build an N8N workflow that monitors BigQuery and pushes real-time critical alerts directly to our staff's Lark messenger.",
    link: "https://github.com/NgNgGiaHuy/portfolio-github/tree/main/N8N",
    images: {
      col1_1: "/proj1.png",
      col1_2: "/proj1.png",
      col2: "/proj1.png"
    }
  },
  {
    num: "02",
    client: "Data Infrastructure",
    name: "Zero-Touch ETL Bot",
    desc: "Every day I spent 1 hour manually downloading data, running Jupyter Notebooks, and querying SQL to update our dashboards. I prompted Antigravity to write a Python Bot on GCP. Now, I just type 'run data' in Lark, and the bot runs everything autonomously.",
    link: "https://github.com/NgNgGiaHuy/portfolio-github/tree/main/Daily%20task%20load%20data",
    images: {
      col1_1: "/proj2.png",
      col1_2: "/proj2.png",
      col2: "/proj2.png"
    }
  },
  {
    num: "03",
    client: "Warehouse Operations",
    name: "Inventory App & PDF Parser",
    desc: "Warehouse staff were drowning in complex processes to create export codes. I used AI to help me build a Next.js app and Python pipeline that automatically parses B2B PDFs. Staff reported they couldn't finish their jobs without this tool.",
    link: "https://github.com/NgNgGiaHuy/portfolio-github/tree/main/Inventory%20Manage",
    images: {
      col1_1: "/proj3.png",
      col1_2: "/proj3.png",
      col2: "/proj3.png"
    }
  },
  {
    num: "04",
    client: "AI Integration",
    name: "Text-to-SQL AI Assistant",
    desc: "Staff constantly asked me to run SQL queries. I connected Antigravity to BigQuery and created specific skills so staff can now simply chat with the AI in natural language to get their data answers instantly, bypassing manual requests entirely.",
    link: "https://github.com/NgNgGiaHuy/portfolio-github/tree/main/Bigquerry%20all",
    images: {
      col1_1: "/proj4.png",
      col1_2: "/proj4.png",
      col2: "/proj4.png"
    }
  }
];

interface CardProps {
  project: typeof projects[0];
  index: number;
  progress: any;
  range: number[];
  targetScale: number;
}

const Card: React.FC<CardProps> = ({ project, index, progress, range, targetScale }) => {
  const containerRef = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div ref={containerRef} className="h-[85vh] flex items-center justify-center sticky top-24 md:top-32 w-full max-w-6xl mx-auto px-5 sm:px-8 md:px-10">
      <motion.div 
        style={{ scale, top: `${index * 28}px` }} 
        className="relative w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-6 sm:gap-8 overflow-hidden"
      >
        
        {/* Top Row */}
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="flex items-start sm:items-center gap-6">
            <span className="font-black text-[clamp(3rem,8vw,100px)] text-[#D7E2EA] leading-none shrink-0">
              {project.num}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm mb-1">{project.client}</span>
              <h3 className="text-[#D7E2EA] uppercase font-medium text-xl sm:text-3xl md:text-4xl">{project.name}</h3>
              {project.desc && <p className="text-[#D7E2EA]/70 mt-2 max-w-2xl font-light text-sm sm:text-base leading-relaxed hidden sm:block">{project.desc}</p>}
            </div>
          </div>
          <div className="shrink-0 mt-4 sm:mt-0 flex items-start">
            <LiveProjectButton href={project.link} />
          </div>
        </div>
        
        {/* Mobile Description */}
        {project.desc && <p className="text-[#D7E2EA]/70 max-w-2xl font-light text-sm leading-relaxed sm:hidden block">{project.desc}</p>}

        {/* Bottom Row - Image Grid */}
        <div className="flex flex-col sm:flex-row gap-4 h-full min-h-[300px]">
          <div className="w-full sm:w-[40%] flex flex-col gap-4">
            <img 
              src={project.images.col1_1} 
              alt="Project detail 1" 
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img 
              src={project.images.col1_2} 
              alt="Project detail 2" 
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] flex-1 min-h-[160px]"
            />
          </div>
          <div className="w-full sm:w-[60%]">
            <img 
              src={project.images.col2} 
              alt="Project main" 
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] min-h-[300px]"
            />
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section id="projects" ref={containerRef} className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative pt-12 sm:pt-16 md:pt-20 pb-40">
      
      <h2 className="hero-heading relative z-20 font-black uppercase text-center mb-10 sm:mb-16 md:mb-20 text-[clamp(3rem,12vw,160px)] leading-none">
        Projects
      </h2>

      <div className="relative">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - 1 - i) * 0.03;
          return (
            <Card 
              key={i} 
              index={i} 
              project={project} 
              progress={scrollYProgress} 
              range={[i * (1/projects.length), 1]} 
              targetScale={targetScale} 
            />
          );
        })}
      </div>

    </section>
  );
};
