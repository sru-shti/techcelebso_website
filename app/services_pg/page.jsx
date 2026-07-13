"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { servicesData, generateSlug } from "../../data/services";

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState(-1);

  const faqs = [
    {
      q: "How do you scope a new enterprise implementation project?",
      a: "We begin with a comprehensive technical discovery phase, assessing your current architecture, defining clear KPIs, and providing a detailed roadmap before any development begins."
    },
    {
      q: "Can you augment our existing internal engineering team?",
      a: "Absolutely. We offer flexible engagement models, including dedicated pods that integrate directly with your internal sprints, Slack channels, and version control systems."
    },
    {
      q: "What is your approach to security and compliance?",
      a: "Security is built into our CI/CD pipelines from day one. We adhere to SOC2, HIPAA, and GDPR standards, conducting regular automated and manual penetration testing."
    }
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-[#0B132B] transition-colors duration-300 pb-20">
      
      {/* Dynamic Hero Section */}
      <section className="relative w-full pt-32 pb-20 overflow-hidden border-b border-[#E2E8F0] dark:border-[#1C2541]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3A86FF]/5 to-white dark:from-[#3A86FF]/5 dark:to-[#0B132B] -z-10"></div>
        <div className="max-w-[1400px] mx-auto px-8 flex flex-col items-center text-center">
          <span className="inline-block px-4 py-1.5 rounded-sm bg-[#3A86FF]/10 dark:bg-[#00F5D4]/10 text-[#3A86FF] dark:text-[#00F5D4] text-sm font-bold tracking-wide mb-6 shadow-sm border border-[#3A86FF]/20 dark:border-[#00F5D4]/20 uppercase">
            Global Capabilities
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-[#0B132B] dark:text-white mb-6 tracking-tight leading-[1.1] font-[family-name:var(--font-heading)]">
            Engineering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3A86FF] to-[#70EEFF] dark:from-[#00F5D4] dark:to-[#3A86FF]">Future.</span>
          </h1>
          <p className="text-xl text-[#0B132B]/50 dark:text-white/40 max-w-2xl leading-relaxed">
            From hyper-scalable cloud infrastructure to cutting-edge generative AI models, explore our comprehensive suite of enterprise-grade technology services.
          </p>
        </div>
      </section>

      {/* Mega-Grid Directory Architecture */}
      <section className="max-w-[1400px] mx-auto px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {servicesData.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div 
                key={idx} 
                className="group bg-white dark:bg-[#1C2541] rounded-sm p-8 border border-[#E2E8F0] dark:border-[#2D3A54] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col"
              >
                {/* Ambient Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F4F7FA] to-transparent dark:from-[#3A86FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                {/* Category Header */}
                <div className="relative z-10 flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-sm bg-[#3A86FF]/10 dark:bg-[#00F5D4]/10 flex items-center justify-center text-[#3A86FF] dark:text-[#00F5D4] shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} />
                  </div>
                  <h2 className="text-xl font-bold text-[#0B132B] dark:text-white tracking-tight leading-tight">
                    {category.category}
                  </h2>
                </div>

                {/* Sub-Services Links */}
                <div className="relative z-10 flex flex-col gap-1">
                  {category.items.map((item, i) => (
                    <Link 
                      key={i} 
                      href={`/services_pg/${generateSlug(item)}`}
                      className="group/link flex items-center py-2 text-sm font-medium text-[#0B132B]/70 dark:text-white/70 hover:text-[#3A86FF] dark:hover:text-[#00F5D4] transition-colors relative overflow-hidden"
                    >
                      <span className="relative z-10">{item}</span>
                      <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all duration-300 ml-1 text-[#3A86FF] dark:text-[#00F5D4]" />
                      
                      {/* Microscopic bottom sliding border */}
                      <span className="absolute bottom-1 left-0 w-full h-[1px] bg-[#3A86FF] dark:bg-[#00F5D4] -translate-x-full group-hover/link:translate-x-0 transition-transform duration-500 ease-out"></span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Universal FAQ Accordion */}
      <section className="max-w-[800px] mx-auto px-8 py-20 bg-[#F4F7FA] dark:bg-[#1C2541] rounded-sm border border-[#E2E8F0] dark:border-[#2D3A54] shadow-sm mb-20">
        <div className="text-center mb-12">
           <h2 className="text-3xl font-bold text-[#0B132B] dark:text-white mb-4 font-[family-name:var(--font-heading)]">Frequently Asked Questions</h2>
           <p className="text-[#0B132B]/50 dark:text-white/40">Everything you need to know about partnering with Antellay.</p>
        </div>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white dark:bg-[#0B132B] rounded-sm shadow-sm border border-[#E2E8F0] dark:border-[#2D3A54] overflow-hidden">
              <button 
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none hover:bg-[#F4F7FA] dark:hover:bg-[#1C2541] transition-colors"
              >
                <span className="font-semibold text-[#0B132B] dark:text-white pr-4">
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-sm bg-[#3A86FF]/10 dark:bg-[#00F5D4]/10 flex items-center justify-center text-[#3A86FF] dark:text-[#00F5D4] shrink-0 transition-transform duration-300 ${openFaq === index ? "rotate-45" : ""}`}>
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </div>
              </button>
              <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="text-[#0B132B]/70 dark:text-white/70 leading-relaxed border-t border-[#E2E8F0] dark:border-[#2D3A54] pt-4">
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
