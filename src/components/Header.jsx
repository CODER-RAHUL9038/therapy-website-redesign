"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className=" bg-[#DDEBEC] relative z-50">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between py-4 ">
            {/* Hamburger / Close Button (Mobile) */}
            <button
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="sm:hidden text-[#163A3C] ml-5 text-3xl"
            >
              {open ? "✕" : "☰"}
            </button>

            {/* Logo on mobile */}
            <div className=" text-xl font-serif sm:text-2xl lg:text-3xl font-semibold text-[#163A3C] mr-6">
              Lilac Template
            </div>

            {/*  Navigation hidden on small screen */}
            <nav className="hidden sm:flex  gap-6 lg:gap-8 text-base lg:text-xl">
              <a
                className="text-[#163A3C] font-serif hover:text-[#2F6F73]"
                href="#"
              >
                Blog
              </a>
              <a
                className="text-[#163A3C] font-serif hover:text-[#2F6F73]"
                href="#"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}

      <div
        className={`fixed inset-0 bg-[#DDEBEC] z-40 flex flex-col items-center justify-center gap-15 text-5xl  sm:hidden  transition-all duration-700 ease-in-out ${
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
