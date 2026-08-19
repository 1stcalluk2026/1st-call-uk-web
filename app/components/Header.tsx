"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import DownloadAppButton from "./DownloadAppButton";
import { PORTAL_ORIGIN } from "../lib/app-download";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About" },
  { href: "/our-services", label: "Services" },
  { href: "/our-work", label: "Our Work" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isStudio = pathname?.startsWith("/studio");
  if (isStudio) return null;

  return (
    <header className="sticky top-0 z-50 text-white shadow-lg">
      {/* GROUP BAR — matches Immigration / Financial / Group */}
      <div className="overflow-x-hidden bg-[#233a86]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex justify-end gap-2">
          <DownloadAppButton source="web" />
          <Link
            href={`${PORTAL_ORIGIN}/unlock?service=web`}
            className="inline-flex items-center rounded-full bg-white/10 text-white border border-white/30 px-4 py-1.5 text-xs font-medium hover:bg-white/20 transition-all duration-200"
          >
            Client portal
          </Link>
          <Link
            href="https://www.1stcalluk.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-white text-[#233a86] border border-white/30 px-4 py-1.5 text-xs font-medium shadow-sm hover:bg-white/90 transition-all duration-200"
          >
            1st Call UK Group
          </Link>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="overflow-x-hidden bg-[#2d459c] py-3 md:py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6">
          <Link href="/" className="block shrink-0">
            <div className="relative h-[72px] w-[220px] overflow-hidden rounded-xl border border-white/40 bg-white shadow-md md:h-[80px] md:w-[240px]">
              <Image
                src="/1st-call-uk-web-logo2.png"
                alt="1st Call UK Web & Digital Logo — go to homepage"
                fill
                priority
                className="object-cover p-2"
              />
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm xl:text-base font-medium whitespace-nowrap">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;

              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative group transition duration-300 ${
                    isActive ? "text-[#f5c23c]" : "text-white"
                  } hover:text-[#f5c23c]`}
                >
                  {label}
                  <span
                    className={`absolute left-0 -bottom-1 h-[3px] bg-[#f5c23c] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden flex flex-col items-center justify-center space-y-1"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={`block h-0.5 w-7 bg-white transform transition ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-7 bg-white transition ${menuOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`block h-0.5 w-7 bg-white transform transition ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`lg:hidden absolute left-0 right-0 w-full bg-[#2d459c] shadow-lg transition-[max-height,opacity] duration-300 overflow-hidden ${menuOpen ? "max-h-[640px] opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="flex flex-col px-6 py-5 space-y-4 text-base font-medium">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="hover:text-[#f5c23c]" onClick={() => setMenuOpen(false)}>
              {label}
            </Link>
          ))}
          <DownloadAppButton source="web" placement="nav" />
          <div className="flex gap-3 pt-2">
            <a href="tel:+441158450000" className="bg-[#f5c23c] text-[#2d459c] font-bold py-2 px-4 rounded-lg shadow hover:bg-white transition" onClick={() => setMenuOpen(false)}>📞 Call</a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@1stcalluk.com" target="_blank" rel="noopener noreferrer" className="bg-[#f5c23c] text-[#2d459c] font-bold py-2 px-4 rounded-lg shadow hover:bg-white transition" onClick={() => setMenuOpen(false)}>✉ Email</a>
          </div>
        </nav>
      </div>
    </header>
  );
}