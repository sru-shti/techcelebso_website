"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const faqs = [
  { q: "Who are the founders of Antellay?", a: "Antellay was founded in a modest residential basement by visionary enterprise architects Shrey Sharma and Vishwajeet Srivastava in 2018. Since then, we have grown into a global provider with over 400+ certified engineers." },
  { q: "What is your core expertise?", a: "We specialize in multi-cloud delivery, enterprise CRM strategy implementation, custom automation workflows, and we are a proud Salesforce Crest (Gold) consulting partner." },
  { q: "Can I attend future events virtually?", a: "Yes, all our global footprints and collaborations offer hybrid attendance options, allowing our worldwide community to tune in live." },
  { q: "How can my company collaborate with Antellay?", a: "You can schedule a free consultation through our portal, and our architect team will evaluate the synergy for technological partnerships." }
];

const pastEvents = [
  { id: 1, title: "Antellay Founders Meet-Up (Jaipur)", date: "September 26", img: "/images/event/event_footprint/founders_meetup_jaipur.jpg", action: "View Highlights" },
  { id: 2, title: "Jaipur Startup Valley Meetup", date: "Recent Event", img: "/images/event/event_footprint/celebso_vally.jpg", action: "Read Recap" },
  { id: 3, title: "Mewar Startup - Investor Connect", date: "October 8, 2025", img: "/images/event/event_footprint/Mewar Startup.jpg", action: "Register Now" }
];

function FootprintsView() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] md:min-h-[600px] h-auto md:h-[600px] py-24 md:py-0 overflow-hidden bg-[#F4F7FA] dark:bg-[#0B132B] flex items-center border-b border-[#E2E8F0] dark:border-[#1C2541] transition-colors">
        <div className="max-w-[1400px] mx-auto w-full px-8 lg:px-20 z-10 flex flex-col md:flex-row items-center justify-between h-full">
          <div className="max-w-xl">
            <h1 className="text-5xl lg:text-6xl font-light text-slate-800 dark:text-white mb-6 leading-tight">
              Industry Solutions We Offer
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
              Founded in 2018 by Shrey Sharma & Vishwajeet Srivastava, our 400+ engineers lead the frontier of enterprise architecture and multi-cloud delivery.
            </p>
            <button className="px-8 py-4 bg-[#3A86FF] text-white rounded-sm font-medium hover:bg-[#2563EB] transition-colors shadow-lg">
              Schedule a free consultation
            </button>
          </div>
        </div>
        
        <div className="hidden md:block absolute top-0 right-0 w-[45%] h-full z-0 bg-[#F4F7FA] dark:bg-[#1C2541]" style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)" }}>
           <img src="/images/events/footprints/hero_engineer.png" alt="Engineer" className="w-full h-full object-cover object-top opacity-90 mix-blend-multiply dark:mix-blend-normal" />
        </div>
      </section>

      {/* Past Events Listing */}
      <section className="py-24 max-w-[1200px] mx-auto px-8">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 border-b border-gray-200 dark:border-gray-800 pb-4">Highlights and Key Takeaways from Past Events</h2>
        <div className="flex flex-col gap-6">
          {pastEvents.map((evt) => (
            <div key={evt.id} className="group flex flex-col md:flex-row items-center gap-8 p-4 rounded-sm hover:bg-[#F4F7FA] dark:hover:bg-[#1C2541]/50 transition-colors border border-transparent hover:border-[#E2E8F0] dark:hover:border-[#2D3A54] cursor-pointer">
              <div className="w-full md:w-64 aspect-[4/3] rounded-sm overflow-hidden bg-[#F4F7FA] dark:bg-[#1C2541] flex-shrink-0">
                <img src={evt.img} alt={evt.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#3A86FF] dark:text-[#00F5D4] mb-3 uppercase tracking-wider">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  {evt.date}
                </div>
                <h3 className="text-2xl font-bold text-[#0B132B] dark:text-white mb-4 group-hover:text-[#3A86FF] dark:group-hover:text-[#00F5D4] transition-colors">{evt.title}</h3>
                <div className="flex items-center gap-2 text-[#3A86FF] dark:text-[#00F5D4] font-medium">
                  {evt.action} <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#F4F7FA] dark:bg-[#0B132B] transition-colors duration-300">
        <div className="max-w-[800px] mx-auto px-8">
          <h2 className="text-4xl font-light text-center text-slate-900 dark:text-white mb-16">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-[#1C2541] rounded-sm shadow-sm border border-[#E2E8F0] dark:border-[#2D3A54] overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-semibold text-slate-800 dark:text-white pr-4 flex items-center gap-3">
                    <span className="text-[#3A86FF] dark:text-[#00F5D4] text-xl font-black shrink-0">Q.</span> 
                    {faq.q}
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-[#3A86FF] dark:text-[#00F5D4] transition-transform ${openFaq === index ? "rotate-45" : ""}`}><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed pl-8 border-l-2 border-[#3A86FF]/20 dark:border-[#00F5D4]/30">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function CollaborationsView() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Collaborative Hero View */}
      <section className="relative w-full h-[550px] overflow-hidden bg-[#0a0a0a] flex items-center border-b border-gray-800">
        <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-amber-600 via-orange-600 to-cyan-500 opacity-40 blur-3xl z-0 pointer-events-none mix-blend-screen"></div>
        
        <div className="max-w-[1400px] mx-auto w-full px-8 lg:px-20 z-10 flex flex-col md:flex-row items-center justify-between h-full">
          <div className="max-w-xl z-20">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              The Antellay<br/>Collaboration
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light">
              Pioneering revolutionary tech ecosystems with Salesforce Crest Gold prestige and a massive global network.
            </p>
          </div>
          <div className="hidden md:block relative z-10 w-[500px] aspect-square rounded-sm overflow-hidden border border-white/10 shadow-2xl shadow-[#3A86FF]/20 backdrop-blur-sm">
             <img src="/images/event/big_picture_img.webp" alt="Collaboration" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Feature Panel Grid */}
      <section className="py-24 max-w-[1200px] mx-auto px-8">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-[#1C2541] border border-[#E2E8F0] dark:border-[#2D3A54] rounded-sm overflow-hidden shadow-lg group">
               <div className="h-64 overflow-hidden bg-slate-200 dark:bg-slate-800 relative">
                  <img src="/images/event/collaboration/re-Architecting Enterprise Agility.webp" alt="Heroku Tour" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-[#3A86FF] dark:text-[#00F5D4]">Global Tour</div>
               </div>
               <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Re-Architecting Enterprise Agility: Inside the Heroku Advantage</h3>
                  <p className="text-slate-500 dark:text-slate-400 mb-6">Explore how our architects leverage Heroku to deploy custom automation workflows and scale applications globally.</p>
                  <span className="text-sm font-semibold text-gray-400">October 24, 2026</span>
               </div>
            </div>
            <div className="bg-white dark:bg-[#1C2541] border border-[#E2E8F0] dark:border-[#2D3A54] rounded-sm overflow-hidden shadow-lg group">
               <div className="h-64 overflow-hidden bg-slate-200 dark:bg-slate-800 relative">
                  <img src="/images/event/collaboration/Retail Brands.webp" alt="Retail Brands" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-[#3A86FF] dark:text-[#00F5D4]">Industry Deep Dive</div>
               </div>
               <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">How Retail Brands Are Reinventing Customer Journeys</h3>
                  <p className="text-slate-500 dark:text-slate-400 mb-6">Discover loyalty program modernization using enterprise CRM strategy implementation and data analytics.</p>
                  <span className="text-sm font-semibold text-gray-400">November 12, 2026</span>
               </div>
            </div>
         </div>
      </section>

      {/* Work Portfolio Data Callouts */}
      <section className="bg-[#F4F7FA] dark:bg-[#0B132B] py-24 border-y border-[#E2E8F0] dark:border-[#1C2541]">
         <div className="max-w-[1400px] mx-auto px-8 flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 w-full">
               <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12">Measurable Operational Impact</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="bg-white dark:bg-[#1C2541] p-6 rounded-sm border border-[#E2E8F0] dark:border-[#2D3A54] shadow-sm border-l-4 border-l-orange-500">
                    <div className="text-4xl font-black text-[#3A86FF] dark:text-[#00F5D4] mb-2">86%</div>
                    <div className="text-slate-600 dark:text-slate-300 font-medium">Extension in user adoption reached</div>
                 </div>
                 <div className="bg-white dark:bg-[#1C2541] p-6 rounded-sm border border-[#E2E8F0] dark:border-[#2D3A54] shadow-sm border-l-4 border-l-amber-500">
                    <div className="text-4xl font-black text-[#3A86FF] dark:text-[#00F5D4] mb-2">78%</div>
                    <div className="text-slate-600 dark:text-slate-300 font-medium">Increased Customer satisfaction</div>
                 </div>
                 <div className="bg-white dark:bg-[#1C2541] p-6 rounded-sm border border-[#E2E8F0] dark:border-[#2D3A54] shadow-sm border-l-4 border-l-cyan-500">
                    <div className="text-4xl font-black text-[#3A86FF] dark:text-[#00F5D4] mb-2">51%</div>
                    <div className="text-slate-600 dark:text-slate-300 font-medium">Deduction in business cost</div>
                 </div>
                 <div className="bg-white dark:bg-[#1C2541] p-6 rounded-sm border border-[#E2E8F0] dark:border-[#2D3A54] shadow-sm border-l-4 border-l-yellow-500">
                    <div className="text-4xl font-black text-[#3A86FF] dark:text-[#00F5D4] mb-2">64%</div>
                    <div className="text-slate-600 dark:text-slate-300 font-medium">Increase in ROI globally</div>
                 </div>
               </div>
            </div>
            <div className="flex-1 w-full">
               <div className="aspect-[16/10] rounded-sm overflow-hidden shadow-2xl relative">
                  <img src="/images/events/collaborations/corporate_handshake.jpg" alt="Corporate Handshake" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white font-semibold text-lg">Trusted by global enterprise leaders.</div>
               </div>
            </div>
         </div>
      </section>

      {/* Subscription Capture Box */}
      <section className="py-24 max-w-[800px] mx-auto px-8 relative">
        <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5 pointer-events-none bg-[url('/images/events/collaborations/newsletter_leaf.jpg')] bg-cover bg-center rounded-3xl"></div>
        <div className="relative z-10 bg-white dark:bg-[#1C2541] rounded-sm shadow-2xl p-10 md:p-16 border border-[#E2E8F0] dark:border-[#2D3A54] text-center">
           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Subscribe to our Blogs & Newsletters</h2>
           <p className="text-slate-500 dark:text-slate-400 mb-10">Stay updated on our latest collaborations, tech insights, and global footprint events.</p>
           
           <form className="flex flex-col gap-4 max-w-md mx-auto">
             <input type="text" placeholder="Full Name" className="w-full bg-slate-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 text-slate-900 dark:text-white rounded-sm px-4 py-3 focus:outline-none focus:border-[#000000] dark:focus:border-[#FFFFFF] transition-colors" required />
             <input type="email" placeholder="Email Address" className="w-full bg-slate-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 text-slate-900 dark:text-white rounded-sm px-4 py-3 focus:outline-none focus:border-[#000000] dark:focus:border-[#FFFFFF] transition-colors" required />
             <button type="submit" className="w-full mt-4 bg-gradient-to-r from-[#000000] to-[#333333] hover:from-[#333333] hover:to-[#000000] text-white font-bold py-4 rounded-sm shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
               Subscribe Now
             </button>
           </form>
        </div>
      </section>
    </div>
  );
}

function EventsContent() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("footprints");
  
  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "collaborations" || tab === "footprints") {
      setActiveTab(tab);
    }
  }, [searchParams]);

  return (
    <main className="min-h-screen bg-white dark:bg-[#0B132B] transition-colors duration-300">
       {/* Tab Switcher */}
       <div className="w-full border-b border-[#E2E8F0] dark:border-[#1C2541] bg-[#F4F7FA] dark:bg-[#0B132B] sticky top-0 z-40">
         <div className="max-w-[1400px] mx-auto px-8 flex gap-8">
            <button 
              onClick={() => setActiveTab("footprints")}
              className={`py-4 font-semibold text-sm transition-colors border-b-2 ${activeTab === 'footprints' ? 'border-[#3A86FF] dark:border-[#00F5D4] text-[#3A86FF] dark:text-[#00F5D4]' : 'border-transparent text-gray-500 hover:text-[#0B132B] dark:hover:text-white'}`}
            >
              Events Footprints
            </button>
            <button 
              onClick={() => setActiveTab("collaborations")}
              className={`py-4 font-semibold text-sm transition-colors border-b-2 ${activeTab === 'collaborations' ? 'border-[#3A86FF] dark:border-[#00F5D4] text-[#3A86FF] dark:text-[#00F5D4]' : 'border-transparent text-gray-500 hover:text-[#0B132B] dark:hover:text-white'}`}
            >
              Collaborations
            </button>
         </div>
       </div>

       {/* Dynamic Content */}
       <div className="relative min-h-[800px]">
         {activeTab === "footprints" ? <FootprintsView /> : <CollaborationsView />}
       </div>
    </main>
  );
}

export default function EventsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white dark:bg-[#0B132B]" />}>
      <EventsContent />
    </Suspense>
  );
}
