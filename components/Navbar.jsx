"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <header className="navbar w-full flex items-center justify-between px-8 py-4 bg-white dark:bg-[#120f26] border-b border-gray-100 dark:border-gray-800 z-50 transition-colors duration-300">
      <div className="logo flex-shrink-0">
        <Link href="/">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">CelebsoX.</h1>
        </Link>
      </div>
      <nav className="nav-links flex flex-1 justify-center items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">
        <Link href="/about" className={`hover:text-black dark:hover:text-white transition-colors ${pathname === '/about' ? 'text-black dark:text-white font-semibold' : ''}`}>About</Link>
        <Link href="/services_pg" className={`hover:text-black dark:hover:text-white transition-colors ${pathname === '/services_pg' ? 'text-black dark:text-white font-semibold' : ''}`}>Services</Link>
        <Link href="/industries" className={`hover:text-black dark:hover:text-white transition-colors ${pathname === '/industries' ? 'text-black dark:text-white font-semibold' : ''}`}>Industries</Link>
        <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Products</Link>
        <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Resources</Link>
        <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Events</Link>
        <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Careers</Link>
        <Link href="#" className="hover:text-black dark:hover:text-white transition-colors">Contact Us</Link>
      </nav>
      <div className="flex-shrink-0 flex items-center gap-4">
        {mounted && (
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-slate-700 dark:text-slate-300" aria-label="Toggle Theme">
            {theme === "dark" ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            )}
          </button>
        )}
        <Link href="#contact" className="px-5 py-2 border border-gray-300 dark:border-gray-600 rounded hover:border-black dark:hover:border-white transition-colors text-sm font-medium text-slate-800 dark:text-white">
          Get a Free Consultation
        </Link>
      </div>
    </header>
  );
}
