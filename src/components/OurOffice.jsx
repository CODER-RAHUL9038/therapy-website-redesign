"use client";

import Image from "next/image";
import FadeUp from "@/components/FadeUp";

export default function OurOffice() {
  return (
    <section className="bg-[#F1F6F4] py-28">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Heading */}
        <div className="max-w-xl mx-auto mb-16">
          
          <FadeUp>
            <h2 className="text-4xl text-center font-serif font-light text-[#1F2D2B]">
              Our Office
            </h2>
          </FadeUp>

          <FadeUp delay={150}>
            <p className="mt-6 text-lg leading-relaxed text-[#5F7370]">
              My Santa Monica office is designed to feel calm, private, and
              grounding—a space where you can slow down and focus on what
              you&apos;re experiencing without feeling rushed or observed.
            </p>
          </FadeUp>

          <FadeUp delay={300}>
            <p className="mt-4 text-lg leading-relaxed text-[#5F7370]">
              Sessions take place in a quiet, thoughtfully arranged environment
              with natural light and a sense of ease. I offer both in-person
              sessions at my Santa Monica office and secure telehealth options for
              adults throughout California.
            </p>
          </FadeUp>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <div className="overflow-hidden rounded-xl">
            <FadeUp delay={150}>
              <div className="w-full h-full">
                <Image
                  src="/images/office1.jpeg"
                  alt="Therapy office interior"
                  width={500}
                  height={350}
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeUp>
          </div>

          <div className="overflow-hidden rounded-xl">
            <FadeUp delay={300}>
              <div className="w-full h-full">
                <Image
                  src="/images/office2.jpeg"
                  alt="Calm counseling space"
                  width={500}
                  height={350}
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
}
