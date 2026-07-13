"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";
import { servicesData, generateSlug } from "../data/services";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme, mounted } = useTheme();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setIsServicesOpen(false);
  }, [pathname]);

  const linkClass = (path) =>
    `hover:text-[#3A86FF] dark:hover:text-[#00F5D4] transition-colors duration-200 ${
      pathname === path ? "text-[#3A86FF] dark:text-[#00F5D4] font-semibold" : ""
    }`;

  return (
    <header className="navbar w-full flex items-center justify-between px-8 py-4 bg-white dark:bg-[#0B132B] border-b border-[#E2E8F0] dark:border-[#1C2541] z-50 transition-colors duration-300">
      <div className="logo flex-shrink-0">
        <Link href="/" className="flex items-center">
          <img src="/images/Antellay_logo.jpeg" alt="Antellay Logo" className="h-16 w-auto mix-blend-multiply dark:invert dark:mix-blend-screen" />
        </Link>
      </div>
      <nav className="nav-links flex flex-1 justify-center items-center gap-6 text-sm font-medium text-[#0B132B]/70 dark:text-white/60">
        <Link href="/about" className={linkClass("/about")}>About</Link>
        
        {/* Services Mega Menu */}
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setIsServicesOpen(!isServicesOpen)}
            className={`flex items-center gap-1 hover:text-[#3A86FF] dark:hover:text-[#00F5D4] transition-colors focus:outline-none ${pathname.startsWith('/services_pg') ? 'text-[#3A86FF] dark:text-[#00F5D4] font-semibold' : ''}`}
          >
            Services <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
          
          <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 z-50 ${isServicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"}`}>
            <div className="bg-white dark:bg-[#1C2541] border border-[#E2E8F0] dark:border-[#2D3A54] shadow-2xl rounded-sm p-6 md:p-8 w-[90vw] md:w-[900px] max-w-[1200px] max-h-[80vh] overflow-y-auto flex flex-col">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
                {servicesData.map((category, idx) => {
                  const Icon = category.icon;
                  return (
                    <div key={idx} className="flex flex-col">
                      <div className="flex items-center gap-2 mb-4 text-[#3A86FF] dark:text-[#00F5D4]">
                        <Icon size={18} />
                        <h4 className="font-bold text-sm text-[#0B132B] dark:text-white">{category.category}</h4>
                      </div>
                      <div className="flex flex-col gap-2">
                        {category.items.slice(0, 5).map((item, i) => (
                          <Link 
                            key={i} 
                            href={`/services_pg/${generateSlug(item)}`} 
                            className="text-xs text-[#0B132B]/70 dark:text-white/60 hover:text-[#3A86FF] dark:hover:text-[#00F5D4] transition-colors relative group/link inline-block w-fit"
                          >
                            {item}
                          </Link>
                        ))}
                        {category.items.length > 5 && (
                           <Link href="/services_pg" className="text-xs font-semibold text-[#3A86FF] dark:text-[#00F5D4] mt-1 hover:underline">View all →</Link>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="w-full bg-[#F4F7FA] dark:bg-[#0B132B] p-4 mt-8 rounded-sm border border-[#E2E8F0] dark:border-[#2D3A54] flex justify-between items-center">
                 <div>
                    <h4 className="font-bold text-[#0B132B] dark:text-white text-sm">Not sure what you need?</h4>
                    <p className="text-xs text-[#0B132B]/60 dark:text-white/50 mt-1">Talk to our solutions architects today.</p>
                 </div>
                 <Link href="/contact" className="px-4 py-2 bg-[#3A86FF] dark:bg-[#00F5D4] text-white dark:text-[#0B132B] text-xs font-bold rounded-sm hover:opacity-90 transition-opacity">
                    Book a Free Consultation
                 </Link>
              </div>
            </div>
          </div>
        </div>
        <Link href="/industries" className={linkClass("/industries")}>Industries</Link>
        <Link href="#" className="hover:text-[#3A86FF] dark:hover:text-[#00F5D4] transition-colors">Products</Link>
        <Link href="#" className="hover:text-[#3A86FF] dark:hover:text-[#00F5D4] transition-colors">Resources</Link>
        <div className="relative group">
          <Link href="/events" className={`flex items-center gap-1 hover:text-[#3A86FF] dark:hover:text-[#00F5D4] transition-colors ${pathname === '/events' ? 'text-[#3A86FF] dark:text-[#00F5D4] font-semibold' : ''}`}>
            Events <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-180 transition-transform"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </Link>
          <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
            <div className="bg-white dark:bg-[#1C2541] border border-[#E2E8F0] dark:border-[#2D3A54] shadow-xl rounded-sm p-2 w-56 flex flex-col">
              <Link href="/events?tab=footprints" className="px-4 py-2 text-sm text-[#0B132B]/70 dark:text-white/70 hover:bg-[#F4F7FA] dark:hover:bg-[#0B132B] hover:text-[#3A86FF] dark:hover:text-[#00F5D4] rounded-sm transition-colors">
                Events Footprints
              </Link>
              <Link href="/events?tab=collaborations" className="px-4 py-2 text-sm text-[#0B132B]/70 dark:text-white/70 hover:bg-[#F4F7FA] dark:hover:bg-[#0B132B] hover:text-[#3A86FF] dark:hover:text-[#00F5D4] rounded-sm transition-colors">
                Collaborations
              </Link>
            </div>
          </div>
        </div>
        <Link href="/careers" className={linkClass("/careers")}>Careers</Link>
        <Link href="/contact" className={linkClass("/contact")}>Contact Us</Link>
      </nav>
      <div className="flex-shrink-0 flex items-center gap-4">
        {mounted && (
          <button onClick={toggleTheme} className="p-2 rounded-sm hover:bg-[#F4F7FA] dark:hover:bg-[#1C2541] transition-colors text-[#0B132B] dark:text-white/80" aria-label="Toggle Theme">
            {theme === "dark" ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            )}
          </button>
        )}
        <Link href="/contact" className="group relative overflow-hidden px-5 py-2 border border-[#E2E8F0] dark:border-[#2D3A54] rounded-sm text-sm font-semibold text-[#0B132B] dark:text-white hover:border-[#3A86FF] dark:hover:border-[#00F5D4] transition-all duration-300">
          <span className="relative z-10 group-hover:text-[#3A86FF] dark:group-hover:text-[#00F5D4] transition-colors">Get a Free Consultation</span>
        </Link>
      </div>
    </header>
  );
}
