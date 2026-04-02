"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="animate-navbar fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-50">
      <div className="bg-stone-50/80 backdrop-blur-lg shadow-xl border border-stone-200/20 rounded-full px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-xl md:text-2xl font-bold text-emerald-900 whitespace-nowrap"
        >
          Jean du Jardinage
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`animate-underline font-serif text-base tracking-tight transition-colors ${
                  isActive
                    ? "text-emerald-900 font-bold border-b-2 border-emerald-800"
                    : "text-emerald-800/70 hover:text-emerald-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="animate-press hidden md:block bg-secondary text-on-secondary px-6 py-2.5 rounded-full font-medium hover:opacity-90 transition-opacity text-sm whitespace-nowrap"
        >
          Réserver une consultation
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-emerald-900 transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-emerald-900 transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-emerald-900 transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="animate-mobile-menu md:hidden mt-2 bg-stone-50/95 backdrop-blur-lg rounded-2xl shadow-xl border border-stone-200/20 p-6 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`font-serif text-lg transition-colors ${
                  isActive
                    ? "text-emerald-900 font-bold"
                    : "text-emerald-800/70 hover:text-emerald-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="animate-press bg-secondary text-on-secondary px-6 py-3 rounded-full font-medium text-center text-sm mt-2"
          >
            Réserver une consultation
          </Link>
        </div>
      )}
    </nav>
  );
}
