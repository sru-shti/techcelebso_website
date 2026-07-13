import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "../../../data/services";
import { ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";

export default function ServiceTemplatePage({ params }) {
  const service = getServiceBySlug(params.serviceId);

  // If the slug doesn't match any known service, return a 404
  if (!service) {
    notFound();
  }

  const { title, category, Icon } = service;

  return (
    <main className="min-h-screen bg-white dark:bg-[#0B132B] transition-colors duration-300 pb-20">
      
      {/* Breadcrumb & Hero */}
      <section className="relative w-full pt-32 pb-24 overflow-hidden border-b border-[#E2E8F0] dark:border-[#1C2541]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3A86FF]/5 to-white dark:from-[#3A86FF]/5 dark:to-[#0B132B] -z-10"></div>
        <div className="max-w-[1400px] mx-auto px-8">
          
          <div className="flex items-center gap-2 text-sm text-[#0B132B]/50 dark:text-white/40 mb-8 font-medium">
            <Link href="/services_pg" className="hover:text-[#3A86FF] dark:hover:text-[#00F5D4] transition-colors">Services</Link>
            <ChevronRight size={14} />
            <span>{category}</span>
            <ChevronRight size={14} />
            <span className="text-[#3A86FF] dark:text-[#00F5D4]">{title}</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:items-end justify-between">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6 text-[#3A86FF] dark:text-[#00F5D4]">
                <Icon size={32} />
                <span className="font-bold tracking-wider uppercase text-sm">{category}</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-[#0B132B] dark:text-white leading-[1.1] tracking-tight font-[family-name:var(--font-heading)]">
                {title}
              </h1>
            </div>
            
            <div className="flex shrink-0">
               <Link href="/contact" className="group flex items-center gap-2 bg-[#0B132B] dark:bg-white text-white dark:text-[#0B132B] px-8 py-4 rounded-sm font-bold transition-all shadow-lg hover:shadow-[#3A86FF]/30 dark:hover:shadow-[#00F5D4]/30 hover:-translate-y-1">
                 Consult an Expert
                 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Split Narrative Block */}
      <section className="max-w-[1400px] mx-auto px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left: Text Narrative Structure */}
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold text-[#0B132B] dark:text-white leading-tight font-[family-name:var(--font-heading)]">
              Transforming <span className="text-[#3A86FF] dark:text-[#00F5D4]">{category}</span> architecture with precision.
            </h2>
            <p className="text-lg text-[#0B132B]/60 dark:text-white/60 leading-relaxed">
              Our {title} capabilities are designed for modern enterprises looking to scale efficiently. We leverage industry-leading frameworks and a robust CI/CD pipeline to ensure that your infrastructure is future-proof, secure, and fully optimized for performance.
            </p>
            <p className="text-lg text-[#0B132B]/60 dark:text-white/60 leading-relaxed">
              By partnering with Antellay, you gain access to a dedicated pod of elite engineers who integrate directly with your teams. We focus on transparency, rapid iteration, and delivering measurable ROI on every technical initiative.
            </p>
            
            <div className="pt-8 mt-4 border-t border-[#E2E8F0] dark:border-[#2D3A54]">
               <h3 className="text-xl font-bold text-[#0B132B] dark:text-white mb-6">Key Capabilities</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {[
                   "Scalable Architecture Design", 
                   "Seamless API Integrations", 
                   "End-to-End Security Audits", 
                   "Continuous Deployment",
                   "Real-time Monitoring",
                   "Custom Workflow Automation"
                 ].map((cap, i) => (
                   <div key={i} className="flex items-center gap-3 text-[#0B132B] dark:text-white font-medium">
                     <div className="text-[#3A86FF] dark:text-[#00F5D4]">
                       <CheckCircle2 size={20} />
                     </div>
                     {cap}
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* Right: Media Expansion Placeholder */}
          <div className="relative w-full aspect-square md:aspect-video lg:aspect-square bg-[#F4F7FA] dark:bg-[#1C2541] rounded-sm border border-[#E2E8F0] dark:border-[#2D3A54] overflow-hidden flex items-center justify-center group shadow-2xl">
             {/* Asymmetric geometric decorative elements */}
             <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#3A86FF]/10 dark:bg-[#00F5D4]/10 rounded-full blur-[60px] pointer-events-none"></div>
             <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#70EEFF]/10 dark:bg-[#3A86FF]/10 rounded-full blur-[60px] pointer-events-none"></div>
             
             {/* Placeholder Content for future media */}
             <div className="text-center p-8 relative z-10">
                <div className="w-20 h-20 mx-auto rounded-sm bg-white dark:bg-[#0B132B] border border-[#E2E8F0] dark:border-[#2D3A54] shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 text-[#3A86FF] dark:text-[#00F5D4]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </div>
                <h3 className="text-xl font-bold text-[#0B132B] dark:text-white mb-2">Media Showcase Area</h3>
                <p className="text-sm text-[#0B132B]/50 dark:text-white/40 max-w-sm mx-auto">
                  Pop in your high-performance video embedded players or asymmetric image assets here.
                </p>
             </div>
             
             {/* Grid overlay */}
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#2D3A54_1px,transparent_1px),linear-gradient(to_bottom,#2D3A54_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
          </div>

        </div>
      </section>

    </main>
  );
}
