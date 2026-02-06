"use client";

import Image from "next/image";
import FadeUp from "@/components/FadeUp";

export default function AreasOfFocus() {
  return (
    <section className="bg-[#EEECE6]">
      <div className="max-w-[1400px] mx-auto px-8 py-25">

        {/* Section Heading */}
        <FadeUp>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-center text-[#1F2D2B]">
            Areas of Focus
          </h2>
        </FadeUp>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="border border-[#1E3D3A] bg-[#F1F6F4] p-5 flex flex-col max-h-[500px]">
            <FadeUp delay={150}>
              <div className="flex-1">
                <h3 className="text-xl font-serif font-light text-[#1F2D2B]">
                  Anxiety & Panic Therapy
                </h3>
                <p className="mt-4 text-base text-[#5F7370]">
                  Support for chronic anxiety, panic symptoms, and constant
                  overthinking using evidence-based approaches such as CBT and
                  mindfulness-based practices.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={300}>
              <div className="mt-5 flex justify-center">
                <div className="w-64 h-64 md:w-48 md:h-48 lg:w-60 lg:h-60">
                  <Image
                    src="https://media.istockphoto.com/id/1279147114/photo/get-hands-on-in-getting-mentally-fit-again.webp?a=1&b=1&s=612x612&w=0&k=20&c=BJDcaicdfbYPFRg9fyv60cQ_weD7M0AioZEZFEc6aqI="
                    alt="Anxiety therapy"
                    width={256}
                    height={256}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Card 2 */}
          <div className="border border-[#1E3D3A] bg-[#F1F6F4] p-5 flex flex-col max-h-[500px]">
            <FadeUp delay={200}>
              <div className="flex-1">
                <h3 className="text-xl font-serif font-light text-[#1F2D2B]">
                  Trauma & EMDR Therapy
                </h3>
                <p className="mt-4 text-base text-[#5F7370]">
                  Carefully paced trauma therapy for single-incident and complex
                  trauma, focused on safety, stabilization, and nervous system
                  regulation.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={350}>
              <div className="mt-5 flex justify-center">
                <div className="w-64 h-64 md:w-48 md:h-48 lg:w-60 lg:h-60">
                  <Image
                    src="https://plus.unsplash.com/premium_photo-1672292536199-7a4cf2b78318?w=600&auto=format&fit=crop&q=60"
                    alt="Trauma therapy"
                    width={256}
                    height={256}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Card 3 */}
          <div className="border border-[#1E3D3A] bg-[#F1F6F4] p-5 flex flex-col max-h-[500px]">
            <FadeUp delay={250}>
              <div className="flex-1">
                <h3 className="text-xl font-serif font-light text-[#1F2D2B]">
                  Burnout & Chronic Stress Therapy
                </h3>
                <p className="mt-4 text-base text-[#5F7370]">
                  Therapy for adults experiencing burnout, chronic stress, and
                  emotional exhaustion, especially after long periods of pushing
                  through pressure.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={400}>
              <div className="mt-5 flex justify-center">
                <div className="w-64 h-64 md:w-48 md:h-48 lg:w-60 lg:h-60">
                  <Image
                    src="https://images.unsplash.com/photo-1743100899087-945f2f9ff428?w=600&auto=format&fit=crop&q=60"
                    alt="Burnout therapy"
                    width={256}
                    height={256}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
              </div>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
}
