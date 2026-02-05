"use client";

export default function Footer() {
  return (
    <footer className="bg-[#EEECE6] pt-16 text-[#1F2D2B] ">
      {/* Top footer content */}
      <div className="max-w-7xl    px-2 text-center grid grid-cols-1 md:grid-cols-[3fr_1fr_1fr] gap-x-20 gap-y-10">
        {/* Left */}
        <div className=" md:ml-10 lg:text-left ">
          <h3 className=" text-xl lg:text-3xl font-serif font-medium">
            Dr. Maya Reynolds, PsyD <br /> Licensed Clinical Psychologist
          </h3>

          <p className="mt-4 text-lg leading-relaxed text-[#5F7370]">
            123th Street 45 W <br />
            Santa Monica, CA 90401
          </p>

          <p className="mt-4 text-lg leading-relaxed underline underline-offset-4 text-[#5F7370]">
            contact@drmayareynolds.com <br />
            (310) 555-4827
          </p>
        </div>

        {/* Middle */}
        <div>
          <h3 className="text-xl lg:text-3xl font-serif font-medium">Hours</h3>

          <p className="mt-4 text-lg leading-relaxed text-[#5F7370]">
            Monday - Friday <br />
            10am - 6pm
          </p>
        </div>

        {/* Right */}
        <div>
          <h3 className="text-xl lg:text-3xl font-serif font-medium">Find</h3>

          <ul className="mt-4 space-y-2 text-lg underline underline-offset-4 text-[#5F7370]">
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
      <div className="bg-[#E3E0D9] mt-20 py-10">
        <div className="text-center text-lg space-x-5 underline underline-offset-4 text-[#1E3D3A]">
          <a href="#">Privacy & Cookies Policy</a> 
          <a href="#">Good Faith Estimate</a>
          <a href="#">Website Terms & Conditions</a>
          <a href="#">Disclaimer</a>
        </div>

        {/* Credits */}
        <p className="mt-6 text-center text-base text-[#5F7370]">
          Website Template Credits:{" "}
          <a href="#" className="underline underline-offset-4 text-[#1E3D3A]">
            Go Bloom Creative
          </a>
        </p>

        {/* Copyright */}
        <p className="mt-6 text-center text-sm md:text-base text-[#1E3D3A]">
          © 2024 Dr. Maya Reynolds, PsyD. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
