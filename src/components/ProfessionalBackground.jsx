"use client";

import { useState } from "react";
import FadeUp from "@/components/FadeUp";

export default function ProfessionalBackground() {
  const [openIndex, setOpenIndex] = useState(null);

  const backgroundItems = [
    {
      title: "Education",
      content:
        "Doctor of Psychology (PsyD) in Clinical Psychology, with advanced training in evidence-based and trauma-informed care.",
    },
    {
      title: "Licensure",
      content:
        "Licensed Clinical Psychologist based in Santa Monica, California.",
    },
    {
      title: "Clinical Approach",
      content:
        "Integrates CBT, EMDR, mindfulness-based, and body-oriented techniques with a focus on safety, regulation, and collaboration.",
    },
  ];

  return (
    <section className="bg-[#EEECE6] py-24">
      <div className="grid grid-cols-[1fr_minmax(0,750px)_1fr]">
        <div className="col-start-2 px-6">

          {/* Heading */}
          <FadeUp>
            <h2 className="text-4xl lg:text-5xl text-center font-serif font-light text-[#1F2D2B]">
              My Professional Background
            </h2>
          </FadeUp>

          {/* Divider */}
          <FadeUp delay={150}>
            <div className="border-t border-[#1E3D3A] mt-10"></div>
          </FadeUp>

          {/* Accordion (fade once, not per item) */}
          <FadeUp delay={300}>
            <div className="mt-2">
              {backgroundItems.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div key={index} className="pt-4">
                    {index !== 0 && (
                      <div className="border-t border-[#1E3D3A] mb-5"></div>
                    )}

                    {/* Title row */}
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="
                        w-full
                        flex
                        justify-between
                        items-center
                        text-2xl
                        font-serif
                        font-light
                        text-left
                        text-[#1F2D2B]
                      "
                    >
                      <span>{item.title}</span>
                      <span className="text-4xl">{isOpen ? "-" : "+"}</span>
                    </button>

                    {/* Content */}
                    <div
                      className={`overflow-hidden transition-all duration-700 ease-in-out ${
                        isOpen ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-lg leading-relaxed max-w-xl ml-12 pb-4 text-[#5F7370]">
                        {item.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeUp>

          <FadeUp delay={450}>
            <div className="border-t border-[#1E3D3A] mt-4"></div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
