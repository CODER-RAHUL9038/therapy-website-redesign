"use client";

export default function Header() {
  return (
    <header className="w-full">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between py-6">
          
          {/* Logo / Brand */}
          <div className="text-base font-medium">
            Lilac Template
          </div>

          {/* Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="flex gap-6 text-sm"
          >
            <a
              href="#"
              className="hover:underline focus:outline-none focus-visible:underline"
            >
              Blog
            </a>
            <a
              href="#"
              className="hover:underline focus:outline-none focus-visible:underline"
            >
              Contact
            </a>
          </nav>

        </div>
      </div>
    </header>
  );
}
