"use client";

import React, { useState } from "react";
import Link from "next/link";

import { industriesData, generateSlug as generateIndustrySlug } from "../../data/industries";
import { ArrowRight } from "lucide-react";

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#3A86FF] dark:text-[#00F5D4]"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
);

const MinusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0B132B] dark:text-[#00F5D4]"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
);

const faqs = [
  { q: "Why Should I Choose Antellay for Building Industry-Specific Solutions?", a: "With a strong foundation of forward-thinking, our goal is to provide your business with the most appropriate, up-to-date, and beneficial technology in your industry that you can benefit from. The organizational structure of Antellay is composed of consultants, architects, and developers who leverage industry-specific knowledge to offer bespoke technology-driven solutions that improve productivity, and reduce costs for long-term growth—interested in testing out our expertise serving your industry for free? Let's schedule a consultation as soon as possible." },
  { q: "How Can I Initiate Digital Transformation Journey With Antellay?", a: "You can initiate your digital transformation journey by reaching out to us for a free consultation. Our team will assess your current systems, understand your business objectives, and create a tailored roadmap that aligns with your industry standards." },
  { q: "Who Will be My Point of Contact If I Choose to Work With Antellay?", a: "You will be assigned a dedicated Account Manager and a Lead Solutions Architect. They will ensure seamless communication, provide regular project updates, and act as your primary points of contact throughout our engagement." },
  { q: "Can You Upgrade My Legacy On-Premises System to Cloud?", a: "Absolutely. We specialize in legacy system modernization and seamless cloud migrations (AWS, GCP, Azure, Salesforce). We ensure zero data loss and minimal downtime during the transition." },
  { q: "What If I Want to Request a Product Improvement in the Future?", a: "We believe in long-term partnerships. After initial deployment, we offer ongoing support and maintenance packages. You can easily request product improvements, scalability updates, or new feature additions at any time." }
];

export default function Industries() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="min-h-screen bg-white dark:bg-[#0B132B] text-[#0B132B] dark:text-white transition-colors duration-300 font-sans">
      
      {/* Cyber Executive Hero Section */}
      <section className="relative w-full py-24 md:py-32 overflow-hidden bg-[#F8FAFC] dark:bg-[#060B19] flex items-center border-b border-[#E2E8F0] dark:border-[#1C2541] transition-colors duration-300">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-[1200px] h-full flex justify-center pointer-events-none z-0">
          <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#3A86FF]/20 dark:via-[#00F5D4]/10 to-transparent"></div>
          <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#3A86FF]/20 dark:via-[#00F5D4]/10 to-transparent ml-[300px]"></div>
          <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#3A86FF]/20 dark:via-[#00F5D4]/10 to-transparent mr-[300px]"></div>
        </div>
        
        <div className="max-w-[1400px] mx-auto w-full px-8 lg:px-20 z-10 text-center">
          <div className="inline-block px-4 py-1.5 rounded-sm bg-white dark:bg-[#1C2541] border border-[#E2E8F0] dark:border-[#2D3A54] text-xs font-bold tracking-wider text-[#3A86FF] dark:text-[#00F5D4] mb-8">
            DOMAIN EXPERTISE
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight font-heading">
            Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3A86FF] to-[#00F5D4] dark:from-[#00F5D4] dark:to-[#3A86FF]">Transform</span>
          </h1>
          <p className="text-lg lg:text-xl text-[#0B132B]/70 dark:text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
            Architecting intelligent solutions across 24 global domains. We merge deep industry logic with elite engineering.
          </p>
        </div>
      </section>

      {/* Industries Matrix */}
      <section className="py-24 max-w-[1400px] mx-auto px-8 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {industriesData.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div key={index} className="group relative bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-[#1F2937] p-8 rounded-sm hover:border-[#3A86FF] dark:hover:border-[#00F5D4] transition-all duration-300 hover:shadow-2xl hover:shadow-[#3A86FF]/10 dark:hover:shadow-[#00F5D4]/10 overflow-hidden flex flex-col h-full">
                {/* Background glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#3A86FF]/10 to-transparent dark:from-[#00F5D4]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-full pointer-events-none"></div>
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-[#F4F7FA] dark:bg-[#1C2541] rounded-sm text-[#3A86FF] dark:text-[#00F5D4] group-hover:bg-[#3A86FF] group-hover:text-white dark:group-hover:bg-[#00F5D4] dark:group-hover:text-[#0B132B] transition-colors duration-300">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold font-heading">{industry.category}</h3>
                </div>
                
                <div className="flex flex-col gap-3 mt-2 flex-grow">
                  {industry.items.map((sub, idx) => (
                    <Link 
                      key={idx} 
                      href={`/industries/${generateIndustrySlug(sub)}`}
                      className="group/link flex items-center gap-2 text-[15px] text-[#0B132B]/70 dark:text-white/70 hover:text-[#3A86FF] dark:hover:text-[#00F5D4] transition-all duration-300"
                    >
                      <ArrowRight size={14} className="opacity-0 -ml-4 group-hover/link:opacity-100 group-hover/link:ml-0 transition-all duration-300" />
                      <span className="group-hover/link:translate-x-1 transition-transform duration-300">{sub}</span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 max-w-[900px] mx-auto px-8 border-t border-gray-100 dark:border-gray-800">
        <h2 className="text-4xl font-light text-slate-800 dark:text-white mb-12 text-center transition-colors">Frequently Asked Questions</h2>
        
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-200 dark:border-gray-800 pb-4 transition-colors">
              <button 
                className="w-full flex items-center gap-4 text-left py-4 focus:outline-none"
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
              >
                <span className="flex-shrink-0 mt-1">
                  {openFaq === idx ? <MinusIcon /> : <PlusIcon />}
                </span>
                <span className="text-lg font-medium text-slate-700 dark:text-gray-200 transition-colors">
                  {faq.q}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out pl-10 pr-4 ${openFaq === idx ? "max-h-[500px] opacity-100 mb-4" : "max-h-0 opacity-0"}`}
              >
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed transition-colors text-[15px]">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
