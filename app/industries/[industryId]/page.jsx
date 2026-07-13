import { getIndustryBySlug } from "../../../data/industries";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, CheckCircle2, ArrowRight } from "lucide-react";

export default function IndustryPage({ params }) {
  const industry = getIndustryBySlug(params.industryId);

  if (!industry) {
    notFound();
  }

  const { title, category, Icon } = industry;

  return (
    <main className="min-h-screen bg-white dark:bg-[#0B132B] text-[#0B132B] dark:text-white transition-colors duration-300 font-sans pb-32">
      
      {/* Breadcrumb & Intro */}
      <div className="w-full bg-[#F4F7FA] dark:bg-[#060B19] border-b border-[#E2E8F0] dark:border-[#1C2541] pt-32 pb-16 transition-colors duration-300">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-20">
          
          <nav className="flex items-center gap-2 text-sm text-[#0B132B]/60 dark:text-white/50 mb-12 font-medium">
            <Link href="/" className="hover:text-[#3A86FF] dark:hover:text-[#00F5D4] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/industries" className="hover:text-[#3A86FF] dark:hover:text-[#00F5D4] transition-colors">Industries</Link>
            <ChevronRight size={14} />
            <span className="text-[#3A86FF] dark:text-[#00F5D4]">{title}</span>
          </nav>

          <div className="flex items-center gap-4 mb-6">
             <div className="p-4 bg-white dark:bg-[#111827] border border-[#E2E8F0] dark:border-[#1F2937] rounded-sm text-[#3A86FF] dark:text-[#00F5D4] shadow-sm">
               <Icon size={32} strokeWidth={1.5} />
             </div>
             <span className="text-sm font-bold tracking-widest uppercase text-[#3A86FF] dark:text-[#00F5D4]">{category}</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight font-heading max-w-4xl leading-tight">
            Advanced AI & Technology Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3A86FF] to-[#00F5D4] dark:from-[#00F5D4] dark:to-[#3A86FF]">{title}</span>
          </h1>
          
        </div>
      </div>

      {/* Split Content Layout */}
      <div className="max-w-[1400px] mx-auto px-8 lg:px-20 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
          
          {/* Left Text Column */}
          <div className="flex flex-col gap-8">
             <h2 className="text-2xl font-bold font-heading">Transforming the {category} Ecosystem</h2>
             <p className="text-lg text-[#0B132B]/70 dark:text-white/70 leading-relaxed">
               Antellay provides cutting-edge digital infrastructure and intelligent AI implementations specifically engineered for the {title.toLowerCase()} sector. By merging elite engineering with deep domain expertise, we optimize operational pipelines, enhance data-driven decision making, and establish robust architectures designed for hyper-scalability.
             </p>
             
             <ul className="flex flex-col gap-4 mt-4">
                {['Architectural Modernization & Scalability', 'Advanced Predictive Analytics', 'Automated Workflow Pipelines', 'Enterprise Grade Security & Compliance'].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-[#3A86FF] dark:text-[#00F5D4] shrink-0 mt-0.5" />
                    <span className="text-[#0B132B]/80 dark:text-white/80">{benefit}</span>
                  </li>
                ))}
             </ul>

             <div className="mt-8 pt-8 border-t border-[#E2E8F0] dark:border-[#1C2541]">
                <h3 className="text-xl font-bold mb-4 font-heading">Ready to Innovate?</h3>
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-[#0B132B] dark:bg-white text-white dark:text-[#0B132B] font-bold rounded-sm hover:opacity-90 transition-opacity gap-2 group">
                   Consult our {title} Experts
                   <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
             </div>
          </div>

          {/* Right Media Placeholder */}
          <div className="relative w-full aspect-[4/3] bg-[#F8FAFC] dark:bg-[#111827] border border-[#E2E8F0] dark:border-[#1F2937] rounded-sm overflow-hidden flex flex-col items-center justify-center p-8 group">
             {/* Asymmetric geometric glow */}
             <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#3A86FF]/10 dark:bg-[#00F5D4]/10 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
             <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#70EEFF]/10 dark:bg-[#3A86FF]/10 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
             
             <div className="relative z-10 flex flex-col items-center text-center opacity-40 group-hover:opacity-60 transition-opacity">
                <Icon size={64} className="mb-4" strokeWidth={1} />
                <p className="font-bold tracking-widest text-sm mb-2">{title.toUpperCase()} ASSETS</p>
                <p className="text-xs max-w-[250px]">Placeholder container ready for carousel, interactive dashboard, or high-fidelity video embed.</p>
             </div>
          </div>

        </div>
      </div>

    </main>
  );
}
