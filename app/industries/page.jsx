"use client";

import React, { useState } from "react";
import Link from "next/link";

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-800 dark:text-blue-400"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
);

const MinusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-800 dark:text-blue-400"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
);

const industriesData = [
  { id: 1, title: "Financial Services", description: "With customer expectations continuing to change, financial institutions are under pressure to tailor their services to resonate with their customers. Bringing digital transformation to financial services will result in improved operational efficiency by automating manual tasks and integrating data into a central place.", image: "/images/industries/Financial Services.jpg" },
  { id: 2, title: "Insurance", description: "The insurance industry is navigating a shifting landscape characterized by changing customer expectations and digital disruption. We help insurers streamline claims processing, enhance customer engagement through personalized digital portals, and leverage predictive analytics for better risk assessment.", image: "/images/industries/insurance.jpg" },
  { id: 3, title: "Retail & Consumer Goods", description: "In the rapidly evolving retail landscape, maintaining brand loyalty requires seamless omnichannel experiences. Our solutions enable retailers to integrate online and offline touchpoints, optimize supply chain operations, and utilize customer data to deliver highly personalized shopping experiences.", image: "/images/industries/retail_consumer_goods.jpg" },
  { id: 4, title: "Media & Communication", description: "Media organizations face the constant challenge of delivering personalized content while managing vast digital assets. We empower media and communication companies to build resilient digital infrastructures, monetize digital content effectively, and engage audiences through targeted multi-channel distribution.", image: "/images/industries/Media & Communication.jpg" },
  { id: 5, title: "Technology", description: "Technology companies must innovate at breakneck speeds while scaling operations efficiently. We partner with tech firms to optimize their internal systems, implement robust DevOps practices, and build scalable cloud architectures that support rapid product iteration and deployment.", image: "/images/industries/Technology.jpg" },
  { id: 6, title: "Professional Services", description: "As the professional services industry evolves, there is a never-ending onslaught of challenges relating to customer acquisition and retention. We help you build a connected team, ensuring smooth collaboration, establishing 360-degree views of clients, and enabling personalized communication.", image: "/images/industries/Professional Services.jpg" },
  { id: 7, title: "Energy & Utilities", description: "The energy sector is undergoing a massive shift towards sustainability and smart grid technologies. Our digital solutions help utility companies modernize their infrastructure, optimize field service operations, and provide transparent digital interfaces for their consumers.", image: "/images/industries/Energy & Utilities.jpg" },
  { id: 8, title: "E-Commerce", description: "E-commerce businesses need scalable, high-performing platforms to handle massive transaction volumes. We build custom B2B and B2C commerce solutions that integrate seamlessly with inventory management systems, ensuring a flawless customer journey from product discovery to checkout.", image: "/images/industries/E-Commerce.jpg" },
  { id: 9, title: "Manufacturing", description: "Modern manufacturing relies on intelligent systems and data-driven insights. We assist manufacturers in implementing Industry 4.0 solutions, automating supply chain tracking, and building dealer management portals that improve operational visibility and efficiency.", image: "/images/industries/Manufacturing.jpg" },
  { id: 10, title: "Healthcare & Life Sciences", description: "Healthcare providers must balance patient care with strict regulatory compliance and data security. We deliver secure, HIPAA-compliant patient management systems, telehealth platforms, and automated workflow solutions that allow healthcare professionals to focus on saving lives.", image: "/images/industries/Healthcare & Life Sciences.jpg" },
  { id: 11, title: "Logistics & Transportation", description: "In the world of logistics, timing and visibility are everything. Our enterprise solutions provide real-time tracking, optimize fleet management routes, and automate complex freight operations to ensure goods are delivered efficiently and on schedule.", image: "/images/industries/Logistics & Transportation.jpg" },
  { id: 12, title: "Non-profit", description: "Non-profit organizations need efficient ways to manage donors, volunteers, and campaigns. We help non-profits implement powerful CRM solutions that automate donor outreach, track fundraising goals in real-time, and maximize their impact in the communities they serve.", image: "/images/industries/Non-profit.jpg" },
  { id: 13, title: "Real Estate", description: "Real estate professionals require tools that streamline property management and client communication. Our digital solutions provide immersive property showcasing, automate lease management, and connect agents with potential buyers through unified CRM platforms.", image: "/images/industries/Real Estate.jpg" },
  { id: 14, title: "Education", description: "The education sector is increasingly relying on digital platforms for distance learning and administration. We build comprehensive student information systems, virtual classrooms, and alumni engagement portals that foster a connected and interactive learning environment.", image: "/images/industries/Education.jpg" }
];

const faqs = [
  { q: "Why Should I Choose CelebsoX for Building Industry-Specific Solutions?", a: "With a strong foundation of forward-thinking, our goal is to provide your business with the most appropriate, up-to-date, and beneficial technology in your industry that you can benefit from. The organizational structure of CelebsoX is composed of consultants, architects, and developers who leverage industry-specific knowledge to offer bespoke technology-driven solutions that improve productivity, and reduce costs for long-term growth—interested in testing out our expertise serving your industry for free? Let's schedule a consultation as soon as possible." },
  { q: "How Can I Initiate Digital Transformation Journey With CelebsoX?", a: "You can initiate your digital transformation journey by reaching out to us for a free consultation. Our team will assess your current systems, understand your business objectives, and create a tailored roadmap that aligns with your industry standards." },
  { q: "Who Will be My Point of Contact If I Choose to Work With CelebsoX?", a: "You will be assigned a dedicated Account Manager and a Lead Solutions Architect. They will ensure seamless communication, provide regular project updates, and act as your primary points of contact throughout our engagement." },
  { q: "Can You Upgrade My Legacy On-Premises System to Cloud?", a: "Absolutely. We specialize in legacy system modernization and seamless cloud migrations (AWS, GCP, Azure, Salesforce). We ensure zero data loss and minimal downtime during the transition." },
  { q: "What If I Want to Request a Product Improvement in the Future?", a: "We believe in long-term partnerships. After initial deployment, we offer ongoing support and maintenance packages. You can easily request product improvements, scalability updates, or new feature additions at any time." }
];

export default function Industries() {
  const [openFaq, setOpenFaq] = useState(0); // first open by default

  return (
    <main className="min-h-screen bg-white dark:bg-[#0b1221] transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative w-full h-[600px] overflow-hidden bg-white dark:bg-[#0b1221] flex items-center border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
        <div className="absolute left-10 md:left-20 top-20 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-yellow-300 via-pink-400 to-purple-400 dark:from-blue-600 dark:via-purple-600 dark:to-indigo-800 opacity-60 blur-3xl z-0 pointer-events-none transition-colors duration-500"></div>
        
        <div className="max-w-[1400px] mx-auto w-full px-8 lg:px-20 z-10 flex flex-col md:flex-row items-center justify-between h-full">
          <div className="max-w-xl pt-20 md:pt-0">
            <h1 className="text-5xl lg:text-6xl font-light text-slate-800 dark:text-white mb-6 leading-tight transition-colors">Industry Solutions We Offer</h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed transition-colors">
              Utilizing industry-specific knowledge, we're on the verge of triggering a new paradigm of changing business models and processes making them more customer-centric!
            </p>
            <button className="px-8 py-4 border border-gray-200 dark:border-gray-700 rounded-md text-slate-700 dark:text-white font-medium hover:border-slate-800 dark:hover:border-white transition-colors bg-white dark:bg-transparent shadow-sm">
              Schedule a free consultation
            </button>
          </div>
        </div>
        
        <div className="absolute top-0 right-0 w-1/2 h-full z-0 clip-diagonal hidden lg:block bg-slate-100 dark:bg-slate-800">
           <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        </div>
      </section>

      {/* Industries List */}
      <section className="py-24 max-w-[1200px] mx-auto px-8">
        <div className="flex flex-col gap-32">
          {industriesData.map((industry, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={industry.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}>
                
                {/* Text Content */}
                <div className="flex-1 w-full">
                  <h2 className="text-3xl font-light text-slate-800 dark:text-white mb-6 transition-colors">{industry.title}</h2>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-[15px] transition-colors">
                    {industry.description}
                  </p>
                </div>

                {/* Image Placeholder */}
                <div className="flex-1 w-full">
                  <div className="w-full aspect-[16/9] bg-slate-100 dark:bg-slate-800 rounded shadow-sm overflow-hidden relative transition-colors duration-300 border border-gray-100 dark:border-gray-800">
                     <img src={industry.image} alt={industry.title} className="w-full h-full object-cover" />
                  </div>
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
