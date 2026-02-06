"use client";

import { useState, useEffect } from "react";
import FadeUp from "@/components/FadeUp";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // ignore tiny scroll jitters
      if (Math.abs(currentScrollY - lastScrollY) < 10) return;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scrolling down
        setShowHeader(false);
      } else {
        // scrolling up
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Header */}
      <header
        className={`
          bg-[#DDEBEC]
          fixed top-0 left-0 w-full z-50
          transition-transform duration-500 ease-in-out
          ${showHeader ? "translate-y-0" : "-translate-y-full"}
          lg:static lg:translate-y-0
        `}
      >
        <FadeUp delay={150}>
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="flex items-center justify-between py-4">

              {/* Hamburger */}
              <button
                aria-label="Toggle menu"
                aria-expanded={open}
                onClick={() => setOpen(!open)}
                className="lg:hidden text-[#163A3C] ml-5 text-3xl"
              >
                {open ? "✕" : "☰"}
              </button>

              {/* Logo */}
              <div className="text-xl font-serif sm:text-2xl lg:text-3xl font-semibold text-[#163A3C] mr-6">
                Dr. Maya Reynolds
              </div>

              {/* Desktop Nav */}
              <nav className="hidden lg:flex gap-6 lg:gap-8 text-base lg:text-xl">
                <a className="text-[#163A3C] font-serif hover:text-[#2F6F73]" href="#">
                  Blog
                </a>
                <a className="text-[#163A3C] font-serif hover:text-[#2F6F73]" href="#">
                  Contact
                </a>
              </nav>

            </div>
          </div>
        </FadeUp>
      </header>

      {/* Spacer for fixed mobile header */}
      <div className="h-16 lg:h-0" />

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#DDEBEC] z-40 flex flex-col items-center justify-center gap-15 text-5xl lg:hidden transition-all duration-700 ease-in-out ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <a href="#" className="text-[#163A3C] hover:text-[#2F6F73]">
          Blog
        </a>
        <a href="#" className="text-[#163A3C] hover:text-[#2F6F73]">
          Contact
        </a>
      </div>
    </>
  );
}
