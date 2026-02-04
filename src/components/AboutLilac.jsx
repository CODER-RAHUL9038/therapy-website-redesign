"use client";

import Image from "next/image";

export default function AboutLilac() {
  return (
    <section className="w-full bg-[#ede8df]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center px-10 pt-24 pb-40 lg:px-20">
        {/* LEFT: TEXT */}
        <div className="max-w-xl">
          <h2 className="text-4xl font-light">
            Hi, I’m Dr. Maya Reynolds, PsyD
          </h2>

          <p className="mt-8 text-base leading-relaxed">
            I’m a licensed clinical psychologist based in Santa Monica,
            California. I work with adults who feel overwhelmed by anxiety,
            chronic stress, or the lingering effects of past experiences—even
            when they appear high-functioning on the outside. My approach is
            warm, collaborative, and grounded, integrating evidence-based
            methods such as CBT, EMDR, mindfulness-based practices, and
            body-oriented techniques.
          </p>

          <a
            href="#"
            className="
              inline-block
              mt-12
              ml-0 lg:ml-40
              border
              border-slate-700
              px-8
              py-4
              text-sm
              tracking-wide
              transition-all duration-700 ease-in-out
              hover:bg-[#243a1a]
              hover:text-white
            "
          >
            LET&apos;S CHAT →
          </a>
        </div>

        {/* RIGHT: IMAGE COMPOSITION */}
        <div className="relative flex justify-center">
          {/* Large arched image */}
          <div className="overflow-hidden rounded-t-full">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9a77a6f2-1c50-4582-a5c1-5ec0dc2e94e8/daiga-ellaby-Ct6LBZHaOSc-unsplash.jpg?format=2500w"
              alt="Lilac bouquet"
              width={400}
              height={600}
              className="object-cover"
            />
          </div>

          {/* Small circular overlay */}
          <div className="absolute bottom-0 right-0  translate-x-1/6 translate-y-1/4  w-[280px] h-[280px] rounded-full overflow-hidden">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9f889e1b-ba2b-4a6d-92e9-767dd3db67ae/lilac+template+white+lilac.jpeg?format=2500w"
              alt="Lilac brand detail"
             fill
              
              className=" object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
