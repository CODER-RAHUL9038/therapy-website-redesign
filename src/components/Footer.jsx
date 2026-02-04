"use client";

export default function Footer() {
  return (
    <footer className="bg-[#f7f3ec] pt-16 text-[#243a1a]">
      {/* Top footer content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[4fr_1fr_1fr] gap-x-20 gap-y-12">
        {/* Left */}
        <div className="ml-0 md:ml-10">
          <h3 className="text-xl font-medium">
            Dr. Maya Reynolds, PsyD <br /> Licensed Clinical Psychologist
          </h3>

          <p className="mt-4 text-sm leading-relaxed">
            123th Street 45 W <br />
            Santa Monica, CA 90401
          </p>

          <p className="mt-4 text-sm leading-relaxed underline underline-offset-4">
            contact@drmayareynolds.com <br />
            (310) 555-4827
          </p>
        </div>

        {/* Middle */}
        <div>
          <h3 className="text-xl font-medium">Hours</h3>

          <p className="mt-4 text-sm leading-relaxed">
            Monday - Friday <br />
            10am - 6pm
          </p>
        </div>

        {/* Right */}
        <div>
          <h3 className="text-xl font-medium">Find</h3>

          <ul className="mt-4 space-y-2 text-sm underline underline-offset-4">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom links section */}
      <div className="bg-[#E5E0DA] mt-20 py-10">
        <div className="text-center text-sm space-x-4 underline underline-offset-4">
          <a href="#">Privacy & Cookies Policy</a>
          <a href="#">Good Faith Estimate</a>
          <a href="#">Website Terms & Conditions</a>
          <a href="#">Disclaimer</a>
        </div>

        {/* Credits */}
        <p className="mt-6 text-center text-sm">
          Website Template Credits:{" "}
          <a href="#" className="underline underline-offset-4">
            Go Bloom Creative
          </a>
        </p>

        {/* Copyright */}
        <p className="mt-6 text-center text-sm">
          © 2024 Dr. Maya Reynolds, PsyD. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
