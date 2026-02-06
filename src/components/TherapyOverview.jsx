"use client";

import Image from "next/image";
import FadeUp from "@/components/FadeUp";
export default function TherapyOverview() {
  return (
    <section className="bg-[#F1F6F4] overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* LEFT PANEL */}
        <div className=" flex flex-col order-2 md:order-1">
          {/* Text content */}
          <div className="px-8 pt-8 lg:px-16 py-12  lg:py-16 flex-1">
            <FadeUp>
              <h2 className="text-3xl md:text-[35px] lg:text-4xl font-semibold font-serif text-[#1F2D2B] leading-snug">
                Therapy for Anxiety, Trauma, and Burnout
              </h2>
            </FadeUp>

            <FadeUp delay={150}>
              <p className="mt-10  max-w-lg text-lg text-[#5F7370] font-sans">
                Many of the people I work with are thoughtful, capable, and
                driven — yet internally feel exhausted by constant worry,
                tension, or emotional pressure.
              </p>
            </FadeUp>

            <FadeUp delay={300}>
              <p className="mt-8  max-w-lg text-lg text-[#5F7370]">
                Therapy can help you slow down, understand what your nervous
                system is responding to, and develop more sustainable ways of
                living and working.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={400}>
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
          </FadeUp>
        </div>

        {/* RIGHT IMAGE */}

        <div className="w-full max-h-[320px] md:max-h-[575px] order-1 md:order-2">
          <Image
            src="https://images.unsplash.com/photo-1582815162692-f344c8c32377?w=2000&auto=format&fit=crop&q=60"
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
