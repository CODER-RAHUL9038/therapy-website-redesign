"use client";

import { useState } from "react";

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
    <section className="bg-[#ede8df] mt-24 py-24">
      <div className="grid grid-cols-[1fr_minmax(0,750px)_1fr]">
        <div className="col-start-2 px-6">
          <h2 className="text-4xl text-center font-light">
            My Professional Background
          </h2>

          {/* Divider */}
          <div className="border-t mt-10"></div>

          {/* Accordion */}
          <div className="mt-2">
            {backgroundItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index} className="pt-4">
                  {index !== 0 && <div className="border-t mb-5"></div>}

                  {/* Title row */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="w-full flex justify-between items-center text-xl font-medium text-left"
                  >
                    <span>{item.title}</span>
                    <span className="text-2xl">{isOpen ? "−" : "+"}</span>
                  </button>

                  {/* Content */}
                  <div
                    className={`overflow-hidden transition-all duration-700 ease-in-out ${
                      isOpen ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-base font-light leading-relaxed max-w-xl ml-16 pb-4">
                      {item.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="border-t mt-4"></div>
        </div>
      </div>
    </section>
  );
}
