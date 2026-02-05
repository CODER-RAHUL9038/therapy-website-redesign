"use client";

import Image from "next/image";

export default function SupportSection() {
  return (
    <section className="mt-20 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full md:max-h-[650px] ">

        {/* LEFT IMAGE */}
        <div className="w-full">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/a77b422e-33ac-47b2-825f-293d33884041/valeriia-miller-5jR4rAMs5tk-unsplash+%281%29.jpg?format=2500w"
            alt="Calm reflective moment"
            width={1200}
            height={650}
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT TEXT PANEL */}
        <div className=" flex flex-col bg-[#DDEBEC]">

          {/* Text content */}
          <div className="flex-1 px-10 lg:px-16 py-16 md:py-27 lg:py-12 max-w-xl ">
            <h2 className="text-4xl font-serif font-light text-[#1F2D2B]">
              You don&apos;t have to do this all alone.
            </h2>

            <p className="mt-6 text-lg text-[#5F7370]">
              If any of the following feel familiar, therapy can offer support.
            </p>

            <ul className="mt-6 ml-5 space-y-3 list-disc list-inside text-lg text-[#5F7370]">
              <li>Persistent anxiety or overthinking</li>
              <li>Difficulty sleeping or relaxing</li>
              <li>Emotional exhaustion or burnout</li>
              <li>Lingering effects of past experiences</li>
              <li>Always feeling tense or guarded</li>
            </ul>

            <p className="mt-8 text-lg text-[#5F7370]">
              Therapy can be a space to slow down, feel more regulated, and
              begin relating to yourself with greater ease over time.
            </p>
          </div>

          {/* CTA STRIP */}
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
        </div>

      </div>
    </section>
  );
}
