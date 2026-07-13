"use client";

import React from "react";
import Link from "next/link";

const SocialIcon = ({ type }) => {
  switch (type) {
    case "facebook":
      return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
    case "twitter":
      return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>;
    case "instagram":
      return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
    case "linkedin":
      return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
    case "youtube":
      return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>;
    default:
      return null;
  }
};

export default function Footer() {
  return (
    <footer className="bg-[#0B132B] text-white pt-20 pb-8 w-full z-10 relative">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-20">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Column 1: Brand & Newsletter */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-8">
               <span className="text-3xl font-black tracking-tight font-[family-name:var(--font-heading)] text-white select-none">
                 <span className="text-[#00F5D4]">Λ</span>NTELLAY
               </span>
            </Link>
            
            <div className="bg-[#1C2541] p-6 rounded-sm mb-8 border border-[#2D3A54]">
              <h3 className="font-semibold text-lg mb-4">Subscribe To Our Newsletter for latest business insights!</h3>
              <form className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <input type="text" placeholder="Name *" className="bg-transparent border-b border-[#2D3A54] pb-2 flex-1 focus:outline-none focus:border-[#00F5D4] text-sm transition-colors" required />
                  <input type="email" placeholder="Email *" className="bg-transparent border-b border-[#2D3A54] pb-2 flex-1 focus:outline-none focus:border-[#00F5D4] text-sm transition-colors" required />
                </div>
                <button type="submit" className="w-full mt-2 py-3 border border-[#2D3A54] hover:bg-[#00F5D4] hover:text-[#0B132B] hover:border-[#00F5D4] transition-all duration-300 rounded-sm text-sm font-semibold">
                  Sign Up
                </button>
              </form>
            </div>
            
            <div className="flex items-center gap-4 text-[#2D3A54]">
              <a href="#" className="hover:text-[#00F5D4] transition-colors duration-200"><SocialIcon type="facebook" /></a>
              <a href="#" className="hover:text-[#00F5D4] transition-colors duration-200"><SocialIcon type="twitter" /></a>
              <a href="#" className="hover:text-[#00F5D4] transition-colors duration-200"><SocialIcon type="instagram" /></a>
              <a href="#" className="hover:text-[#00F5D4] transition-colors duration-200"><SocialIcon type="linkedin" /></a>
              <a href="#" className="hover:text-[#00F5D4] transition-colors duration-200"><SocialIcon type="youtube" /></a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-xl font-medium mb-6 text-white/60 font-[family-name:var(--font-heading)]">Services</h3>
            <ul className="flex flex-col gap-4 text-sm text-white/40">
              <li><Link href="#" className="hover:text-[#00F5D4] transition-colors flex items-center justify-between group">Salesforce <span className="text-white/20 group-hover:text-[#00F5D4] transition-colors">›</span></Link></li>
              <li><Link href="#" className="hover:text-[#00F5D4] transition-colors flex items-center justify-between group">Cloud <span className="text-white/20 group-hover:text-[#00F5D4] transition-colors">›</span></Link></li>
              <li><Link href="#" className="hover:text-[#00F5D4] transition-colors flex items-center justify-between group">AWS <span className="text-white/20 group-hover:text-[#00F5D4] transition-colors">›</span></Link></li>
              <li><Link href="#" className="hover:text-[#00F5D4] transition-colors flex items-center justify-between group">GCP <span className="text-white/20 group-hover:text-[#00F5D4] transition-colors">›</span></Link></li>
              <li><Link href="#" className="hover:text-[#00F5D4] transition-colors flex items-center justify-between group">ServiceNow <span className="text-white/20 group-hover:text-[#00F5D4] transition-colors">›</span></Link></li>
              <li><Link href="#" className="hover:text-[#00F5D4] transition-colors flex items-center justify-between group">Additional <span className="text-white/20 group-hover:text-[#00F5D4] transition-colors">›</span></Link></li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h3 className="text-xl font-medium mb-6 text-white/60 font-[family-name:var(--font-heading)]">Products</h3>
            <ul className="flex flex-col gap-4 text-sm text-white/40">
              <li><Link href="#" className="hover:text-[#00F5D4] transition-colors">ChargeOn</Link></li>
              <li><Link href="#" className="hover:text-[#00F5D4] transition-colors">Easy Incentivizer</Link></li>
            </ul>
          </div>

          {/* Column 4: Resources & Instagram */}
          <div>
            <h3 className="text-xl font-medium mb-6 text-white/60 font-[family-name:var(--font-heading)]">Resources</h3>
            <ul className="flex flex-col gap-4 text-sm text-white/40 mb-8">
              <li><Link href="#" className="hover:text-[#00F5D4] transition-colors">Blogs</Link></li>
              <li><Link href="#" className="hover:text-[#00F5D4] transition-colors">Webinar</Link></li>
              <li><Link href="#" className="hover:text-[#00F5D4] transition-colors">Customer Success Story</Link></li>
              <li><Link href="#" className="hover:text-[#00F5D4] transition-colors">Case Studies</Link></li>
              <li><Link href="#" className="hover:text-[#00F5D4] transition-colors">Podcast</Link></li>
              <li><Link href="#" className="hover:text-[#00F5D4] transition-colors">Press Release</Link></li>
              <li><Link href="#" className="hover:text-[#00F5D4] transition-colors">ROI Calculator</Link></li>
            </ul>
            
            <h3 className="text-lg font-medium mb-4 text-white/60 font-[family-name:var(--font-heading)]">Instagram</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                "/images/instagram_page/OIP.webp",
                "/images/instagram_page/download (1).webp",
                "/images/instagram_page/download.webp",
                "/images/instagram_page/th.webp"
              ].map((imgSrc, i) => (
                <div key={i} className="aspect-square bg-[#1C2541] rounded-sm overflow-hidden border border-[#2D3A54]">
                  <img src={imgSrc} alt="Instagram Post" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Base Bar */}
        <div className="border-t border-[#1C2541] pt-8 mt-12 flex flex-col lg:flex-row items-center justify-between gap-6 text-xs text-white/30">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p>©2026 Antellay Technologies Pvt. Ltd. All Rights Reserved</p>
            <p>ISO 27001:2022 Certified</p>
            <Link href="#" className="hover:text-[#00F5D4] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#00F5D4] transition-colors">Terms & Conditions</Link>
          </div>
          <div className="flex items-center gap-4">
             {/* Placeholders for partner badges */}
             <div className="px-3 py-1 bg-[#00F5D4]/10 text-[#00F5D4] border border-[#00F5D4]/20 rounded-sm font-bold tracking-wider">DMCA PROTECTED</div>
             <div className="w-10 h-10 bg-[#3A86FF]/10 rounded-sm flex items-center justify-center border border-[#3A86FF]/20">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3A86FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
