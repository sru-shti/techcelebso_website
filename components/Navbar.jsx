"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="navbar w-full flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100 z-50">
      <div className="logo flex-shrink-0">
        <Link href="/">
          <img src="/images/celebso_logo.png" alt="Celebso Logo" className="h-8 w-auto cursor-pointer" />
        </Link>
      </div>
      <nav className="nav-links flex flex-1 justify-center items-center gap-6 text-sm font-medium text-gray-700">
        <Link href="/about" className={`hover:text-black transition-colors ${pathname === '/about' ? 'text-black font-semibold' : ''}`}>About</Link>
        <Link href="/services_pg" className={`hover:text-black transition-colors ${pathname === '/services_pg' ? 'text-black font-semibold' : ''}`}>Services</Link>
        <Link href="/industries" className={`hover:text-black transition-colors ${pathname === '/industries' ? 'text-black font-semibold' : ''}`}>Industries</Link>
        <Link href="#" className="hover:text-black transition-colors">Products</Link>
        <Link href="#" className="hover:text-black transition-colors">Resources</Link>
        <Link href="#" className="hover:text-black transition-colors">Events</Link>
        <Link href="#" className="hover:text-black transition-colors">Careers</Link>
        <Link href="#" className="hover:text-black transition-colors">Contact Us</Link>
      </nav>
      <div className="flex-shrink-0">
        <Link href="#contact" className="px-5 py-2 border border-gray-300 rounded hover:border-black transition-colors text-sm font-medium">
          Get a Free Consultation
        </Link>
      </div>
    </header>
  );
}
