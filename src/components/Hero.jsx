"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="mt-16">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14 lg:gap-24">
          {/* LEFT: IMAGE */}
          <div className="flex justify-center">
            <div className="overflow-hidden rounded-t-full w-full max-w-[520px] lg:max-w-[720px]">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/08197a74-c045-4a19-a7c9-0f85c1032bc4/daiga-ellaby-M2P08N9zi2k-unsplash.jpg?format=2500w"
                alt="Flowers in bloom"
                width={720}
                height={900}
                priority
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* RIGHT: TEXT */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-light leading-tight">
              Anxiety & Trauma Therapy for Adults in Santa Monica, CA
            </h1>

            <p className="mt-6 text-base">
              In-person and online therapy for adults who feel overwhelmed,
              stuck in overthinking, or emotionally on edge — even when life
              looks “fine” on the outside.
            </p>

            <a
              href="#"
              className="
                inline-block
                mt-10
                border
                px-8
                py-4
                text-sm
                tracking-wide
                transition-all
                duration-700
                ease-in-out
                hover:bg-[#243a1a]
                hover:text-white
              "
            >
              Schedule a Consultation →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
