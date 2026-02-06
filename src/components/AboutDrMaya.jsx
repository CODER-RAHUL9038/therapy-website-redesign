"use client";

import Image from "next/image";
import FadeUp from "@/components/FadeUp";

export default function AboutDrMaya() {
  return (
    <section className="w-full py-15 lg:py-20 bg-[#EEECE6]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-10 md:py-30 lg:pt-24 lg:px-20">

        {/* LEFT: TEXT */}
        <div className="max-w-xl order-2 md:order-1">
          
          <FadeUp>
            <h2 className="text-4xl font-serif font-light mt-10 md:mt-16 text-[#1F2D2B]">
              Hi, I&apos;m Dr. Maya Reynolds, PsyD
            </h2>
          </FadeUp>

          <FadeUp delay={150}>
            <p className="mt-8 text-lg leading-relaxed text-[#5F7370]">
              I&apos;m a licensed clinical psychologist based in Santa Monica,
              California. I work with adults who feel overwhelmed by anxiety,
              chronic stress, or the lingering effects of past experiences—even
              when they appear high-functioning on the outside. My approach is
              warm, collaborative, and grounded, integrating evidence-based
              methods such as CBT, EMDR, mindfulness-based practices, and
              body-oriented techniques.
            </p>
          </FadeUp>

          <FadeUp delay={300}>
            <a
              href="#"
              className="
                inline-block
                lg:mt-12
                mt-10
                md:mt-10
                ml-20 md:ml-30 lg:ml-40
                border
                border-[#1E3D3A]
                px-8
                py-4
                text-sm
                tracking-wide
                font-serif
                text-[#1E3D3A]
                transition-all
                duration-700
                ease-in-out
                hover:bg-[#1E3D3A]
                hover:text-white
              "
            >
              LET&apos;S CHAT →
            </a>
          </FadeUp>
        </div>

        {/* RIGHT: IMAGE COMPOSITION */}
        <div className="relative flex justify-center mx-auto order-1 md:order-2 max-w-[180px] md:max-w-[400px] lg:max-w-[550px]">

          {/* Large arched image */}
          <div className="overflow-hidden rounded-t-full">
            <FadeUp delay={150}>
              <div>
                <Image
                  src="/images/Dr. Maya Reynolds.png"
                  alt="Dr. Maya Reynolds"
                  width={400}
                  height={600}
                  className="object-cover"
                />
              </div>
            </FadeUp>
          </div>

          {/* Small circular overlay */}
          <div className="absolute bottom-0 right-0 translate-x-1/6 translate-y-1/4 w-[150px] h-[150px] md:w-[180px] md:h-[180px] lg:w-[280px] lg:h-[280px] rounded-full overflow-hidden">
            <FadeUp delay={300}>
              <div className="w-full h-full">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9f889e1b-ba2b-4a6d-92e9-767dd3db67ae/lilac+template+white+lilac.jpeg?format=2500w"
                  alt="Soft brand detail"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
}
