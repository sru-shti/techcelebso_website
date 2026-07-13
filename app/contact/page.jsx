"use client";

import React, { useState } from "react";
import { MessageSquare, Settings, Mic, MapPin, ChevronDown, ArrowRight, Briefcase } from "lucide-react";

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(-1);
  const [focusedField, setFocusedField] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    jobTitle: "",
    email: "",
    message: ""
  });

  const faqs = [
    { q: "How quickly will your team respond to my inquiry?", a: "Our dedicated support architects aim to respond to all general and technical inquiries within 2-4 business hours during our global operating times." },
    { q: "Can I request a custom enterprise solution?", a: "Absolutely. We specialize in custom multi-cloud delivery and Salesforce strategies. Please select 'Technical Support' or mention 'Enterprise Architect' in your message so we can route you to the correct senior team." },
    { q: "Where are your headquarters located?", a: "We operate a massive global network, but our foundational roots and primary executive hub are located in our modern campus in India." }
  ];

  const handleFocus = (field) => setFocusedField(field);
  const handleBlur = () => setFocusedField("");
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const FloatingInput = ({ label, name, type = "text" }) => {
    const isFocused = focusedField === name;
    const hasValue = formData[name].length > 0;
    const isActive = isFocused || hasValue;

    return (
      <div className="relative w-full">
        <label 
          htmlFor={name}
          className={`absolute left-4 transition-all duration-300 pointer-events-none ${
            isActive 
              ? "-top-2.5 text-xs bg-white dark:bg-[#1C2541] px-1 text-[#3A86FF] dark:text-[#00F5D4] font-bold tracking-wide z-10" 
              : "top-3.5 text-sm text-gray-400 dark:text-gray-500 z-10"
          }`}
        >
          {label}
        </label>
        <input 
          type={type}
          id={name}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          onFocus={() => handleFocus(name)}
          onBlur={handleBlur}
          className={`relative w-full bg-transparent dark:bg-[#1C2541] border ${isFocused ? 'border-[#3A86FF] dark:border-[#00F5D4] shadow-[0_0_10px_rgba(58,134,255,0.1)] dark:shadow-[0_0_10px_rgba(0,245,212,0.1)]' : 'border-[#E2E8F0] dark:border-[#2D3A54]'} text-[#0B132B] dark:text-white rounded-sm px-4 py-3 focus:outline-none transition-all duration-300 z-0`}
          required
        />
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-white dark:bg-[#0B132B] transition-colors duration-300 pb-20">
      {/* Interactive Hero Section */}
      <section className="relative w-full pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F4F7FA] to-white dark:from-[#0B132B] dark:to-[#1C2541] -z-20"></div>
        
        {/* Glassmorphism blur orbs */}
        <div className="absolute left-[-10%] top-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-[#3A86FF]/10 to-[#70EEFF]/10 dark:from-[#3A86FF]/10 dark:to-[#00F5D4]/5 blur-[100px] -z-10 pointer-events-none"></div>
        <div className="absolute right-[-10%] bottom-[-20%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-bl from-[#3A86FF]/10 to-[#70EEFF]/10 dark:from-[#3A86FF]/10 dark:to-[#00F5D4]/10 blur-[120px] -z-10 pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-700">
            <span className="inline-block px-4 py-1.5 rounded-sm bg-[#3A86FF]/10 dark:bg-[#00F5D4]/10 text-[#3A86FF] dark:text-[#00F5D4] text-sm font-bold tracking-wide mb-6 w-fit shadow-sm border border-[#3A86FF]/20 dark:border-[#00F5D4]/20">
              Let's Connect
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#0B132B] dark:text-white mb-6 leading-[1.1] tracking-tight">
              We'd love to <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3A86FF] to-[#70EEFF] dark:from-[#00F5D4] dark:to-[#3A86FF]">hear from you!</span>
            </h1>
            <p className="text-lg text-[#0B132B]/50 dark:text-white/40 mb-10 max-w-xl leading-relaxed">
              Whether you're looking for an enterprise architecture consultation, exploring our multi-cloud capabilities, or just want to say hi, our team is ready to respond.
            </p>
            
            {/* Career Toggle Block */}
            <a href="#careers" className="group flex items-center justify-between p-5 rounded-sm bg-white/60 dark:bg-[#1C2541]/60 backdrop-blur-md border border-[#E2E8F0] dark:border-[#2D3A54] hover:bg-[#F4F7FA] dark:hover:bg-[#1C2541] hover:border-[#3A86FF]/30 dark:hover:border-[#00F5D4]/30 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer max-w-md">
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#3A86FF]/10 dark:bg-[#00F5D4]/10 flex items-center justify-center text-[#3A86FF] dark:text-[#00F5D4] group-hover:scale-110 transition-transform">
                     <Briefcase size={20} />
                  </div>
                  <div className="flex flex-col">
                     <span className="text-sm font-semibold text-[#0B132B] dark:text-white">Looking for a new career?</span>
                     <span className="text-xs text-[#0B132B]/50 dark:text-white/40">View job openings</span>
                  </div>
               </div>
               <ArrowRight size={20} className="text-[#0B132B]/30 dark:text-white/30 group-hover:text-[#3A86FF] dark:group-hover:text-[#00F5D4] group-hover:translate-x-1 transition-all" />
            </a>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right-12 duration-1000 delay-200">
             <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm shadow-2xl border-4 border-white/50 dark:border-[#1C2541] backdrop-blur-sm z-10 bg-[#F4F7FA] dark:bg-[#0B132B] flex items-center justify-center group cursor-pointer">
                <img src="/images/celebso_logo.png" alt="Dashboard Connection" className="w-3/4 h-auto object-contain p-10 dark:brightness-0 dark:invert opacity-20 group-hover:opacity-40 transition-opacity duration-700 mix-blend-multiply dark:mix-blend-normal" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-8 text-white">
                   <div className="font-bold text-2xl mb-1 tracking-tight">Global Headquarters</div>
                   <div className="flex items-center gap-2 text-sm font-medium text-gray-200"><MapPin size={16} /> Technology Campus, India</div>
                </div>
             </div>
             {/* Decorative Elements */}
             <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[radial-gradient(circle,rgba(58,134,255,0.2)_2px,transparent_2px)] dark:bg-[radial-gradient(circle,rgba(0,245,212,0.2)_2px,transparent_2px)] bg-[length:16px_16px] rounded-full z-0"></div>
          </div>
        </div>
      </section>

      {/* Multi-Step or Grid Contact Section */}
      <section className="max-w-[1400px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column (Connection Cards) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
             <div className="group bg-white dark:bg-[#1C2541] p-6 rounded-sm border border-[#E2E8F0] dark:border-[#2D3A54] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F4F7FA] to-transparent dark:from-[#3A86FF]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 flex gap-4">
                  <div className="w-12 h-12 rounded-sm bg-[#3A86FF]/10 dark:bg-[#00F5D4]/10 flex items-center justify-center text-[#3A86FF] dark:text-[#00F5D4] shrink-0">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0B132B] dark:text-white mb-1">General Inquiries</h3>
                    <p className="text-sm text-[#0B132B]/50 dark:text-white/40 leading-relaxed">Reach out for business collaborations, enterprise quotes, or general platform questions.</p>
                  </div>
                </div>
             </div>

             <div className="group bg-white dark:bg-[#1C2541] p-6 rounded-sm border border-[#E2E8F0] dark:border-[#2D3A54] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#F4F7FA] to-transparent dark:from-[#3A86FF]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 flex gap-4">
                  <div className="w-12 h-12 rounded-sm bg-[#3A86FF]/10 dark:bg-[#00F5D4]/10 flex items-center justify-center text-[#3A86FF] dark:text-[#00F5D4] shrink-0">
                    <Settings size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0B132B] dark:text-white mb-1">Technical Support</h3>
                    <p className="text-sm text-[#0B132B]/50 dark:text-white/40 leading-relaxed">Get dedicated help from our 400+ certified engineers for your ongoing deployments.</p>
                  </div>
                </div>
             </div>

             <div className="group bg-white dark:bg-[#1e293b] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent dark:from-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-blue-900/40 flex items-center justify-center text-[#ea580c] dark:text-blue-400 shrink-0">
                    <Mic size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0B132B] dark:text-white mb-1">Media Relations</h3>
                    <p className="text-sm text-[#0B132B]/50 dark:text-white/40 leading-relaxed">Contact our PR team for press kits, event coverage, or speaking engagements.</p>
                  </div>
                </div>
             </div>
          </div>

          {/* Right Column (Form Workspace) */}
          <div className="lg:col-span-8">
            <div className="bg-white/80 dark:bg-[#1C2541]/80 backdrop-blur-xl p-8 md:p-12 rounded-sm border border-[#E2E8F0] dark:border-[#2D3A54] shadow-2xl relative overflow-hidden">
               {/* Ambient Glow */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#3A86FF] dark:bg-[#00F5D4] opacity-[0.03] dark:opacity-[0.05] blur-[80px] pointer-events-none"></div>

               <h2 className="text-2xl md:text-3xl font-bold text-[#0B132B] dark:text-white mb-8">Send a Direct Message</h2>
               
               <form className="flex flex-col gap-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FloatingInput label="Full Name" name="fullName" />
                    <FloatingInput label="Email Address" name="email" type="email" />
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FloatingInput label="Company" name="company" />
                    <FloatingInput label="Job Title" name="jobTitle" />
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone Input with Prefix */}
                    <div className="flex border border-[#E2E8F0] dark:border-[#2D3A54] rounded-sm overflow-hidden focus-within:border-[#3A86FF] dark:focus-within:border-[#00F5D4] focus-within:shadow-[0_0_10px_rgba(58,134,255,0.1)] dark:focus-within:shadow-[0_0_10px_rgba(0,245,212,0.1)] transition-all duration-300">
                       <div className="flex items-center justify-center px-4 bg-[#F4F7FA] dark:bg-[#1C2541] border-r border-[#E2E8F0] dark:border-[#2D3A54] text-[#0B132B]/50 dark:text-white/50 text-sm font-medium shrink-0">
                         <span className="flex items-center gap-1 cursor-pointer">US (+1) <ChevronDown size={14}/></span>
                       </div>
                       <input 
                          type="tel"
                          placeholder="Phone Number"
                          className="flex-1 w-full bg-white dark:bg-[#1C2541] text-[#0B132B] dark:text-white px-4 py-3 focus:outline-none placeholder-[#0B132B]/30 dark:placeholder-white/30"
                       />
                    </div>

                    {/* Country Selector */}
                    <div className="relative w-full">
                       <select defaultValue="" className="w-full bg-white dark:bg-[#1C2541] border border-[#E2E8F0] dark:border-[#2D3A54] text-[#0B132B] dark:text-white rounded-sm px-4 py-3 appearance-none focus:outline-none focus:border-[#3A86FF] dark:focus:border-[#00F5D4] focus:shadow-[0_0_10px_rgba(58,134,255,0.1)] transition-all duration-300 text-[15px] font-medium">
                          <option value="" disabled className="text-gray-400">Select Country</option>
                          <option value="us">United States</option>
                          <option value="uk">United Kingdom</option>
                          <option value="in">India</option>
                          <option value="au">Australia</option>
                          <option value="other">Other</option>
                       </select>
                       <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                    </div>
                 </div>

                 <div className="relative w-full mt-2">
                    <label 
                      htmlFor="message"
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === 'message' || formData.message.length > 0
                          ? "-top-2.5 text-xs bg-white dark:bg-[#1C2541] px-1 text-[#3A86FF] dark:text-[#00F5D4] font-bold tracking-wide z-10" 
                          : "top-4 text-sm text-gray-400 dark:text-gray-500 z-10"
                      }`}
                    >
                      Your Message
                    </label>
                    <textarea 
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus('message')}
                      onBlur={handleBlur}
                      className={`relative w-full bg-transparent dark:bg-[#1C2541] border ${focusedField === 'message' ? 'border-[#3A86FF] dark:border-[#00F5D4] shadow-[0_0_10px_rgba(58,134,255,0.1)] dark:shadow-[0_0_10px_rgba(0,245,212,0.1)]' : 'border-[#E2E8F0] dark:border-[#2D3A54]'} text-[#0B132B] dark:text-white rounded-sm px-4 py-4 focus:outline-none transition-all duration-300 resize-none z-0`}
                      required
                    ></textarea>
                 </div>

                 <button type="submit" className="group w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#3A86FF] to-[#70EEFF] dark:from-[#3A86FF] dark:to-[#00F5D4] text-white dark:text-[#0B132B] font-bold text-lg py-4 rounded-sm shadow-lg hover:shadow-[#3A86FF]/30 dark:hover:shadow-[#00F5D4]/30 transition-all duration-300 transform hover:-translate-y-1 mt-4">
                    Send Message
                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                 </button>
               </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Block */}
      <section className="max-w-[800px] mx-auto px-8 py-20">
        <div className="text-center mb-12">
           <h2 className="text-3xl font-bold text-[#0B132B] dark:text-white mb-4">Standard Contact Questions</h2>
           <p className="text-[#0B132B]/50 dark:text-white/40">Everything you need to know about our communication protocols.</p>
        </div>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white dark:bg-[#1C2541] rounded-sm shadow-sm border border-[#E2E8F0] dark:border-[#2D3A54] overflow-hidden">
              <button 
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none hover:bg-[#F4F7FA] dark:hover:bg-[#0B132B]/50 transition-colors"
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
