"use client";

import Image from "next/image";
import FadeUp from "@/components/FadeUp";
export default function Hero() {
  return (
    <section className="pt-5 pb-35 bg-[#DDEBEC]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-24">
          {/* IMAGE */}
          <div className="flex justify-center order-1 lg:order-none">
            <FadeUp delay={150}>
              <div className="overflow-hidden rounded-t-full w-full max-w-[200px] sm:max-w-[420px] lg:max-w-[420px]">
                <Image
                  src="https://images.unsplash.com/photo-1614251944909-11aaa27d6b11?w=2000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1pbmltYWwlMjBjb3Vuc2VsaW5nJTIwb2ZmaWNlJTIwbmV1dHJhbCUyMHRvbmVzfGVufDB8MXwwfHx8MA%3D%3D"
                  alt="Calm therapy office interior"
                  width={620}
                  height={900}
                  priority
                  className="w-full h-auto object-cover"
                />
              </div>
            </FadeUp>
          </div>

          {/* TEXT */}
          <div className="text-center  lg:text-left order-2">
            <FadeUp delay={100}>
              <h1 className="text-[24px]  sm:text-4xl md:text-[40px]  lg:text-5xl font-semibold font-serif font-light leading-snug ">
                Anxiety & Trauma Therapy for Adults in Santa Monica, CA
              </h1>
            </FadeUp>
            <FadeUp delay={300}>
              {" "}
              <p className="mt-5 text-lg px-2 sm:text-base md:text-lg text-[#5F7370] mx-auto    ">
                In-person and online therapy for adults who feel overwhelmed,
                stuck in overthinking, or emotionally on edge — even when life
                looks “fine” on the outside.
              </p>
            </FadeUp>
            <FadeUp delay={300}>
              {" "}
              <a
                href="#"
                className="
                inline-block
                mt-8 sm:mt-5
                border
                border-[#1E3D3A]
                px-6 sm:px-8
                py-3 sm:py-4
                text-sm
                tracking-wide
                text-[#1E3D3A]
                transition-all
                duration-300
                ease-in-out
                hover:bg-[#243a1a]
                font-semibold
                hover:text-white
                font-serif 
              "
              >
                SCHEDULE A CONSULTATION →
              </a>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
