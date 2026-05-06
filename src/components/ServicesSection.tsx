import React from 'react';
import { FadeIn } from './ui/FadeIn';

const services = [
  {
    num: "01",
    name: "Agentic Workflow Automation",
    desc: "Orchestrating complex n8n workflows via AI (text-to-build) to deploy real-time alerting systems across all eCommerce channels."
  },
  {
    num: "02",
    name: "AI-Driven Data Architecture",
    desc: "Designing AI Agents with BigQuery MCP integration, enabling Text-to-SQL capabilities so non-technical users can query databases naturally."
  },
  {
    num: "03",
    name: "Zero-Touch ETL Pipelines",
    desc: "Building end-to-end Python ELT pipelines on GCP triggered directly via Lark Chat bots—reducing reporting time from hours to 5 minutes."
  },
  {
    num: "04",
    name: "B2B & Warehouse Systems",
    desc: "Engineering Python OCR parsers (pdfplumber) and full-stack Next.js apps to automate B2B order logic and eliminate warehouse coding errors."
  },
  {
    num: "05",
    name: "High-Impact Data Auditing",
    desc: "Designing strict BigQuery Data Marts and reconciliation logic that directly trace inventory discrepancies, actively preventing financial loss."
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
