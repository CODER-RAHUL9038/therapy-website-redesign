"use client";

import Image from "next/image";

export default function FulfillingLife() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-5">
        {/* LEFT PANEL */}
        <div className="bg-[#ede8df] flex flex-col">
          {/* Text content */}
          <div className="px-10 lg:px-16 pt-32 flex-1">
            <h2 className="text-4xl font-light">
              Therapy for Anxiety, Trauma, and Burnout
            </h2>

            <p className="mt-8 text-base max-w-lg">
              Many of the people I work with are thoughtful, capable, and driven
              — yet internally feel exhausted by constant worry, tension, or
              emotional pressure.
            </p>

            <p className="mt-4 text-base max-w-lg">
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
            py-5
            text-center
            text-sm
            tracking-wide
            transition-all duration-700 ease-in-out
            hover:bg-[#243a1a]
            hover:text-white
          "
            >
              GET IN TOUCH →
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full h-[575px]">
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
