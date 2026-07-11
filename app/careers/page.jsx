"use client";

import React, { useState, useEffect } from "react";
import { Play, Search, MapPin, CheckCircle2, Heart, Zap, Users, GraduationCap, Briefcase } from "lucide-react";
import Link from "next/link";

export default function CareersPage() {
  // 1. Dynamic Core Values Carousel State
  const coreValues = ["We Code for People", "We Design for People", "We Create for People"];
  const coreImages = [
    "/images/celebso_logo.png", // Placeholder
    "/images/event/big_picture_img.webp",
    "/images/event/collaboration/Retail Brands.webp"
  ];
  const [activeValue, setActiveValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % coreValues.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [coreValues.length]);

  // 2. Orbital Navigator State
  const [activeOrbitNode, setActiveOrbitNode] = useState(0);
  const orbitNodes = [
    { title: "Cultivate Wellbeing", icon: <Heart size={24}/>, desc: "We prioritize your physical and mental health above all. Full benefits, wellness stipends, and ergonomic setups." },
    { title: "Competitive Perks", icon: <Zap size={24}/>, desc: "Top-tier compensation, massive equity pools, performance bonuses, and unlimited PTO." },
    { title: "Open Collaboration", icon: <Users size={24}/>, desc: "A flat hierarchy where the best ideas always win, regardless of who proposes them." },
    { title: "Career Progression", icon: <GraduationCap size={24}/>, desc: "Dedicated budgets for certifications, continuous learning, and structured growth tracks." },
    { title: "Innovation", icon: <Briefcase size={24}/>, desc: "Work on the cutting edge of AI, cloud architecture, and enterprise digital transformation." },
  ];

  // 3. Job Board State
  const [activeTab, setActiveTab] = useState("View All");
  const [searchQuery, setSearchQuery] = useState("");
  const tabs = ["View All", "Engineering", "Marketing", "Sales", "Design"];
  const jobs = [
    { title: "Senior AI Architect", dept: "Engineering", type: "Remote", loc: "Global", exp: "8+ Years" },
    { title: "Full Stack Next.js Dev", dept: "Engineering", type: "Full-Time", loc: "India", exp: "3-5 Years" },
    { title: "Growth Marketing Lead", dept: "Marketing", type: "Hybrid", loc: "US", exp: "5+ Years" },
    { title: "Enterprise Sales Exec", dept: "Sales", type: "Remote", loc: "Europe", exp: "4-7 Years" },
    { title: "UX/UI Designer", dept: "Design", type: "Full-Time", loc: "India", exp: "2-4 Years" },
    { title: "DevOps Engineer", dept: "Engineering", type: "Full-Time", loc: "Remote", exp: "3+ Years" }
  ];
  
  const filteredJobs = jobs.filter(job => 
    (activeTab === "View All" || job.dept === activeTab) &&
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // FAQ State
  const [openFaq, setOpenFaq] = useState(-1);
  const faqs = [
    { q: "What does the interview process look like?", a: "Typically 3 rounds: A casual culture fit, a technical deep dive, and a final chat with a founder." },
    { q: "Do you support remote work?", a: "Yes, we are a remote-first company with regional hubs for those who prefer an office." },
    { q: "What kind of hardware do you provide?", a: "Every new hire receives a maxed-out MacBook Pro and a generous home office stipend." },
    { q: "Are there opportunities for internal mobility?", a: "Absolutely. We encourage lateral moves and support continuous learning." },
    { q: "How do I apply?", a: "Simply click on any open role in the dashboard above and submit your portfolio/resume." }
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-[#020617] transition-colors duration-300">
      
      {/* 1. Hero Header & Dynamic Core Values Carousel */}
      <section className="relative w-full pt-32 pb-24 overflow-hidden border-b border-gray-100 dark:border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-white dark:from-blue-900/10 dark:to-[#020617] -z-10"></div>
        <div className="max-w-[1400px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex flex-col z-10">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 transition-all duration-500 leading-none">
              {coreValues[activeValue].split(" ").map((word, i) => (
                 <span key={i} className={word === "People" ? "text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] to-amber-500 dark:from-blue-400 dark:to-cyan-400" : ""}>
                   {word}{" "}
                 </span>
              ))}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-lg mt-4 mb-8">
               Join a team of visionaries, builders, and creators. We are constantly pushing the boundaries of what is possible in the cloud space.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#openings" className="bg-[#ea580c] dark:bg-blue-600 hover:bg-[#c2410c] dark:hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-orange-500/30 dark:hover:shadow-blue-500/30 transform hover:-translate-y-1">
                View Openings
              </a>
              <Link href="/about" className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white px-8 py-4 rounded-full font-bold transition-colors">
                Learn About Us
              </Link>
            </div>
          </div>

          {/* Circular Clipping Frame */}
          <div className="relative w-full aspect-square max-w-[500px] mx-auto z-10">
             <div className="absolute inset-0 rounded-full border border-gray-200 dark:border-gray-700 overflow-hidden shadow-2xl bg-white dark:bg-slate-800">
                {coreImages.map((img, i) => (
                  <img 
                    key={i} 
                    src={img} 
                    alt="Culture" 
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === activeValue ? 'opacity-100 z-10' : 'opacity-0 z-0'} ${i === 0 ? 'p-10 dark:invert dark:brightness-0 opacity-20 object-contain' : ''}`}
                  />
                ))}
             </div>
             {/* Decorative orbit ring */}
             <div className="absolute -inset-8 border border-orange-200/50 dark:border-blue-500/30 rounded-full animate-[spin_30s_linear_infinite] pointer-events-none"></div>
             <div className="absolute -inset-16 border border-gray-100 dark:border-gray-800 rounded-full animate-[spin_45s_linear_infinite_reverse] pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* 2. The Orbital Orbit Perks Navigator */}
      <section className="py-32 bg-slate-50 dark:bg-[#0f172a] relative overflow-hidden">
         <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Life at CelebsoX</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">Everything you need to do the best work of your life.</p>
         </div>

         {/* Height allocated for orbit mobile/desktop */}
         <div className="relative w-full max-w-[600px] lg:max-w-[800px] h-[400px] lg:h-[700px] mx-auto flex items-center justify-center mt-10">
            
            {/* The Central Hub */}
            <div className="relative z-20 w-64 h-64 lg:w-96 lg:h-96 bg-white dark:bg-[#1e293b] rounded-full shadow-2xl border border-gray-100 dark:border-gray-800 flex flex-col items-center justify-center p-6 lg:p-12 text-center transition-all duration-500 transform hover:scale-105">
               <div className="text-[#ea580c] dark:text-blue-400 mb-4 scale-110 lg:scale-150 transition-transform">
                 {orbitNodes[activeOrbitNode].icon}
               </div>
               <h3 className="text-xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">{orbitNodes[activeOrbitNode].title}</h3>
               <p className="text-xs lg:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mt-2">{orbitNodes[activeOrbitNode].desc}</p>
            </div>

            {/* Orbit Ring Container */}
            <div 
              className="absolute inset-0 lg:inset-10 border border-gray-300 border-dashed dark:border-gray-700 rounded-full transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]" 
              style={{ transform: `rotate(${activeOrbitNode * (360 / orbitNodes.length)}deg)`}}
            >
               {/* Nodes */}
               {orbitNodes.map((node, i) => {
                 const angle = (i * (360 / orbitNodes.length)) * (Math.PI / 180);
                 // Dynamically calculate radius based on CSS - this uses percentage or viewport logic, but inline styles need pixels. We'll use a responsive trick.
                 // For desktop lg:inset-10 is used, radius ~ 350px. For mobile inset-0, radius ~ 200px.
                 // To avoid complex window math in Next.js SSR, we'll use CSS calc for positioning.
                 return (
                   <button 
                     key={i}
                     onClick={() => setActiveOrbitNode(i)}
                     className={`absolute top-1/2 left-1/2 w-12 h-12 lg:w-16 lg:h-16 -ml-6 -mt-6 lg:-ml-8 lg:-mt-8 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${activeOrbitNode === i ? 'bg-[#ea580c] dark:bg-blue-600 text-white scale-125 z-30 ring-4 ring-orange-100 dark:ring-blue-900' : 'bg-white dark:bg-slate-800 text-slate-400 dark:text-slate-500 hover:bg-orange-50 dark:hover:bg-blue-900/30 hover:text-[#ea580c] dark:hover:text-blue-400 border border-gray-200 dark:border-gray-700 z-10'}`}
                     style={{ 
                        transform: `rotate(${-angle}rad) translateX(50vw) rotate(${angle}rad) rotate(${-activeOrbitNode * (360 / orbitNodes.length)}deg)`, // Fallback
                        // More robust CSS transform using percentages:
                        left: `${50 + 50 * Math.cos(angle)}%`,
                        top: `${50 + 50 * Math.sin(angle)}%`,
                        transform: `rotate(${-activeOrbitNode * (360 / orbitNodes.length)}deg)` 
                     }}
                     aria-label={node.title}
                   >
                     {/* We counter-rotate the icon so it stays upright */}
                     <div style={{ transform: `rotate(${-activeOrbitNode * (360 / orbitNodes.length) * -1}deg)` }}>
                       {node.icon}
                     </div>
                   </button>
                 );
               })}
            </div>
         </div>
      </section>

      {/* 3. Current Openings Dashboard with Live Filter Tabs */}
      <section id="openings" className="py-32 max-w-[1400px] mx-auto px-8">
         <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-8">
            <div>
               <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Current Openings</h2>
               <p className="text-slate-600 dark:text-slate-400 text-lg">Find your next big adventure.</p>
            </div>
            
            <div className="relative w-full md:w-96">
               <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
               <input 
                 type="text" 
                 placeholder="Search jobs by title..." 
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
                 className="w-full bg-slate-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-700 text-slate-900 dark:text-white rounded-full pl-14 pr-6 py-4 focus:outline-none focus:border-[#ea580c] dark:focus:border-blue-500 transition-colors shadow-sm"
               />
            </div>
         </div>

         {/* Tabs */}
         <div className="flex flex-wrap gap-3 mb-12 border-b border-gray-200 dark:border-gray-800 pb-6">
            {tabs.map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === tab ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md scale-105' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
              >
                {tab}
              </button>
            ))}
         </div>

         {/* Job Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredJobs.length > 0 ? filteredJobs.map((job, i) => (
               <div key={i} className="group bg-white dark:bg-[#1e293b] rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden cursor-pointer">
                  {/* Gradient Indicator Border */}
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#ea580c] to-amber-400 dark:from-blue-500 dark:to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="flex justify-between items-start mb-6">
                     <div className="bg-orange-50 dark:bg-blue-900/30 text-[#ea580c] dark:text-blue-400 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                       {job.dept}
                     </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 group-hover:text-[#ea580c] dark:group-hover:text-blue-400 transition-colors">{job.title}</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm text-slate-500 dark:text-slate-400 mb-8">
                     <div className="flex items-center gap-2 font-medium"><Briefcase size={16} className="text-gray-400"/> {job.type}</div>
                     <div className="flex items-center gap-2 font-medium"><MapPin size={16} className="text-gray-400"/> {job.loc}</div>
                     <div className="flex items-center gap-2 font-medium"><CheckCircle2 size={16} className="text-gray-400"/> {job.exp}</div>
                  </div>
                  <div className="pt-6 border-t border-gray-100 dark:border-gray-700 flex justify-end">
                     <span className="text-[#ea580c] dark:text-blue-400 font-bold group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-2">Apply Now <span className="text-xl">→</span></span>
                  </div>
               </div>
            )) : (
               <div className="col-span-full text-center py-32 text-slate-500 text-lg">No jobs found matching your criteria. Try adjusting your filters.</div>
            )}
         </div>
      </section>

      {/* 4 & 5. Humans of CelebsoX & Scattered Gallery */}
      <section className="py-32 bg-slate-50 dark:bg-[#0f172a] overflow-hidden relative">
         <div className="max-w-[1400px] mx-auto px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 text-center">Our Daily Vibe</h2>
            <p className="text-center text-slate-600 dark:text-slate-400 mb-20 text-lg">A sneak peek into the life, culture, and chaos of building the future.</p>
            
            {/* Scattered Scrapbook */}
            <div className="relative w-full h-[600px] flex items-center justify-center perspective-[1000px]">
               {/* Image 1 */}
               <div className="absolute z-10 hover:z-50 -rotate-6 hover:rotate-0 hover:scale-110 transition-all duration-500 shadow-xl border-8 border-white dark:border-slate-800 rounded-lg overflow-hidden w-64 h-56 md:w-80 md:h-64 left-[5%] top-[10%] bg-slate-200 group">
                  <img src="/images/event/big_picture_img.webp" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Vibe 1"/>
               </div>
               
               {/* Image 2 */}
               <div className="absolute z-20 hover:z-50 rotate-3 hover:rotate-0 hover:scale-110 transition-all duration-500 shadow-xl border-8 border-white dark:border-slate-800 rounded-lg overflow-hidden w-72 h-64 md:w-96 md:h-72 right-[5%] top-[5%] bg-slate-200 group">
                  <img src="/images/event/collaboration/Retail Brands.webp" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Vibe 2"/>
               </div>
               
               {/* Image 3 (Video Mask/Thumbnail) */}
               <div className="absolute z-30 hover:z-50 -rotate-2 hover:rotate-0 hover:scale-110 transition-all duration-500 shadow-2xl border-8 border-white dark:border-slate-800 rounded-lg overflow-hidden w-80 h-72 md:w-[450px] md:h-80 left-[50%] -translate-x-1/2 top-[20%] bg-slate-900 group cursor-pointer">
                  <img src="/images/celebso_logo.png" className="w-full h-full object-contain p-8 opacity-40 group-hover:opacity-20 transition-all" alt="Video Thumb"/>
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#ea580c]/80 dark:group-hover:bg-blue-600/80 transition-all duration-300 shadow-2xl">
                        <Play size={36} className="text-white fill-white ml-2" />
                     </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white text-center font-bold">Watch The Untold Stories</div>
               </div>
               
               {/* Image 4 */}
               <div className="absolute z-10 hover:z-50 rotate-12 hover:rotate-0 hover:scale-110 transition-all duration-500 shadow-xl border-8 border-white dark:border-slate-800 rounded-lg overflow-hidden w-56 h-56 md:w-72 md:h-72 left-[15%] bottom-[5%] bg-slate-200 group">
                  <img src="/images/event/collaboration/re-Architecting Enterprise Agility.webp" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Vibe 4"/>
               </div>
               
               {/* Image 5 */}
               <div className="absolute z-20 hover:z-50 -rotate-12 hover:rotate-0 hover:scale-110 transition-all duration-500 shadow-xl border-8 border-white dark:border-slate-800 rounded-lg overflow-hidden w-64 h-56 md:w-80 md:h-64 right-[15%] bottom-[10%] bg-slate-200 group">
                  <img src="/images/event/big_picture_img.webp" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Vibe 5"/>
               </div>
            </div>
         </div>
      </section>

      {/* 6. Giant Text Video Mask Section */}
      <section className="relative w-full h-[50vh] md:h-[70vh] bg-white dark:bg-[#020617] flex items-center justify-center overflow-hidden border-y border-gray-100 dark:border-gray-900 pointer-events-none">
         <h2 
           className="text-[20vw] md:text-[18vw] font-black tracking-tighter text-transparent bg-clip-text leading-none select-none z-10 px-4 text-center w-full"
           style={{
             backgroundImage: "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2000')", // Placeholder high-tech texture acting as a pseudo-video
             backgroundSize: "cover",
             backgroundPosition: "center",
             WebkitBackgroundClip: "text",
             WebkitTextFillColor: "transparent"
           }}
         >
            CELEBSOX
         </h2>
         <div className="absolute bottom-10 right-10 text-xs md:text-sm font-bold text-slate-400 dark:text-slate-600 uppercase tracking-[0.5em] z-20">
            Design for People
         </div>
      </section>

      {/* 7. Proactive FAQ Accordion */}
      <section className="max-w-[900px] mx-auto px-8 py-32">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Recruitment FAQ</h2>
           <p className="text-slate-500 dark:text-slate-400 text-lg">Everything you need to know about joining our mission.</p>
        </div>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white dark:bg-[#1e293b] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
              <button 
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <span className="font-bold text-lg text-slate-800 dark:text-white pr-4">
                  {faq.q}
                </span>
                <div className={`w-10 h-10 rounded-full bg-orange-100 dark:bg-blue-900/40 flex items-center justify-center text-[#ea580c] dark:text-blue-400 shrink-0 transition-transform duration-300 shadow-inner ${openFaq === index ? "rotate-45" : ""}`}>
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </div>
              </button>
              <div className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg border-t border-gray-100 dark:border-gray-800 pt-6">
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
