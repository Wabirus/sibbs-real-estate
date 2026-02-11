"use client";

import Link from "next/link";

export default function Header() {
  return (
    <>
      {/* Top Contact Bar */}
      <div className="fixed top-0 w-full z-50 bg-gradient-to-r from-[#1a2473] via-primary to-[#3d4db7] border-b-2 border-gold text-white py-2.5 px-4">
        <div className="max-w-6xl mx-auto flex justify-center items-center gap-8">
          <div className="flex items-center gap-2 hover:opacity-85 transition-opacity">
            <span className="flex items-center justify-center w-6 h-6 bg-white/15 rounded-full text-xs">
              <i className="fas fa-phone-alt"></i>
            </span>
            <a href="tel:+254700000000" className="font-medium text-sm">
              +254 700 000 000
            </a>
          </div>
          <div className="w-px h-5 bg-white/30"></div>
          <div className="flex items-center gap-2 hover:opacity-85 transition-opacity">
            <span className="flex items-center justify-center w-6 h-6 bg-white/15 rounded-full text-xs">
              <i className="fas fa-envelope"></i>
            </span>
            <a href="mailto:info@sibbs.co.ke" className="font-medium text-sm">
              info@sibbs.co.ke
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-11 w-full z-40 bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="#home" className="flex items-center gap-2">
              <span className="text-xl font-bold font-montserrat text-primary">
                SIBBS
              </span>
            </Link>
            <ul className="hidden md:flex list-none gap-8">
              {[
                { href: "#home", label: "Home" },
                { href: "#properties", label: "Properties" },
                { href: "#about", label: "About Us" },
                { href: "#services", label: "Services" },
                { href: "#contact", label: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-gray-700 font-medium hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
