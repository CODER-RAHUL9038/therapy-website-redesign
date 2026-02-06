"use client";

import Image from "next/image";
import FadeUp from "@/components/FadeUp";

export default function SupportSection() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full md:max-h-[650px]">

        {/* LEFT IMAGE */}
        <div className="w-full max-h-[300px] md:max-h-[900px] lg:max-h-[800px] overflow-hidden">
          
            <Image
              src="https://images.unsplash.com/photo-1604881991720-f91add269bed?w=2000&auto=format&fit=crop&q=60"
              alt="Calm reflective moment"
              width={900}
              height={1600}
              className="w-full h-full object-cover"
            />
          
        </div>

        {/* RIGHT TEXT PANEL */}
        <div className="flex flex-col bg-[#DDEBEC]">

          {/* Text content */}
          <div className="flex-1 px-10 lg:px-16 py-16 md:py-27 lg:py-25 max-w-xl">

            <FadeUp>
              <h2 className="text-4xl font-serif font-light text-[#1F2D2B]">
                You don&apos;t have to do this all alone.
              </h2>
            </FadeUp>

            <FadeUp delay={150}>
              <p className="mt-6 text-lg text-[#5F7370]">
                If any of the following feel familiar, therapy can offer support.
              </p>
            </FadeUp>

            <FadeUp delay={300}>
              <ul className="mt-6 ml-5 space-y-3 list-disc list-inside text-lg text-[#5F7370]">
                <li>Persistent anxiety or overthinking</li>
                <li>Difficulty sleeping or relaxing</li>
                <li>Emotional exhaustion or burnout</li>
                <li>Lingering effects of past experiences</li>
                <li>Always feeling tense or guarded</li>
              </ul>
            </FadeUp>

            <FadeUp delay={450}>
              <p className="mt-8 text-lg text-[#5F7370]">
                Therapy can be a space to slow down, feel more regulated, and
                begin relating to yourself with greater ease over time.
              </p>
            </FadeUp>

          </div>

          {/* CTA STRIP */}
          <FadeUp delay={600}>
            <div className="border-t border-[#1E3D3A]">
              <a
                href="#"
                className="
                  block
                  py-6
                  text-center
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
                WORK WITH ME →
              </a>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
