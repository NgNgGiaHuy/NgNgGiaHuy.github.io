import React from 'react';
import { FadeIn } from './ui/FadeIn';

const services = [
  {
    num: "01",
    name: "Agentic Workflow Automation",
    desc: "Using AI Agents to automatically generate and deploy complex N8N workflows via natural language, eliminating manual drag-and-drop."
  },
  {
    num: "02",
    name: "MCP Data Integration",
    desc: "Deploying Model Context Protocol (MCP) servers to allow AI Agents to natively understand and map complex Lark Base schemas to BigQuery."
  },
  {
    num: "03",
    name: "Zero-Touch ETL Bots",
    desc: "Engineering autonomous Python bots on GCP that allow non-technical staff to trigger daily pipelines via simple chat commands."
  },
  {
    num: "04",
    name: "Full-Stack AI Coding",
    desc: "Orchestrating AI to rapidly code Next.js web apps and Python pdfplumber pipelines, slashing warehouse B2B processing times to seconds."
  },
  {
    num: "05",
    name: "Data Arch & Auditing",
    desc: "Building BigQuery Data Marts and performing complex In/Out inventory reconciliations to proactively detect and prevent financial loss."
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="expertise" className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 flex flex-col items-center">
      
      <FadeIn delay={0} y={40}>
        <h2 className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28 text-[clamp(3rem,12vw,160px)] leading-none">
          Expertise
        </h2>
      </FadeIn>

      <div className="w-full max-w-5xl flex flex-col">
        {services.map((service, i) => (
          <FadeIn 
            key={service.num} 
            delay={i * 0.1} 
            className="flex flex-col md:flex-row items-start md:items-center py-8 sm:py-10 md:py-12 border-b border-[#0c0c0c]/15 last:border-0"
          >
            <div className="font-black text-[clamp(3rem,10vw,140px)] leading-none md:w-[30%]">
              {service.num}
            </div>
            <div className="flex flex-col mt-4 md:mt-0 md:w-[70%] md:pl-10">
              <h3 className="font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)] mb-2">
                {service.name}
              </h3>
              <p className="font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-60">
                {service.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
      
    </section>
  );
};
