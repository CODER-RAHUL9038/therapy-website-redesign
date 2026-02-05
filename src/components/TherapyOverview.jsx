"use client";

import Image from "next/image";

export default function TherapyOverview() {
  return (
    <section className="bg-[#EEECE6]">
      <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
        {/* LEFT PANEL */}
        <div className=" flex flex-col order-2 md:order-1">
          {/* Text content */}
          <div className="px-8 pt-8 lg:px-16 py-12  lg:py-16 flex-1">
            <h2 className="text-3xl md:text-[35px] lg:text-4xl font-semibold font-serif text-[#1F2D2B] leading-snug">
              Therapy for Anxiety, Trauma, and Burnout
            </h2>

            <p className="mt-10  max-w-lg text-lg text-[#5F7370] font-sans">
              Many of the people I work with are thoughtful, capable, and driven
              — yet internally feel exhausted by constant worry, tension, or
              emotional pressure.
            </p>

            <p className="mt-8  max-w-lg text-lg text-[#5F7370]">
              Therapy can help you slow down, understand what your nervous
              system is responding to, and develop more sustainable ways of
              living and working.
            </p>
          </div>

          <div className="border-t border-slate-900">
            <a
              href="#"
              className="
                block
                py-4
                text-center
                text-sm
                tracking-wide
                text-[#1F2D2B]
                transition-all
                duration-700
                ease-in-out
                hover:bg-[#243a1a]
                hover:text-white
                font-serif 
                tracking-widest
              "
            >
              GET IN TOUCH →
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full max-h-[320px] md:max-h-[575px] order-1 md:order-2">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/87fa2310-36df-4a24-a9e9-1b74df73f150/tanya-trukyr-ornZV1YJNNo-unsplash.jpg?format=2500w"
            alt="Calm lifestyle"
            width={1200}
            height={575}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
