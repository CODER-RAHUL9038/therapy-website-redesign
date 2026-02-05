"use client";

import { useState } from "react";
import Image from "next/image";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do you offer in-person therapy?",
      answer:
        "Yes. I offer in-person therapy from my Santa Monica office, as well as secure telehealth sessions for adults in California.",
    },
    {
      question: "What issues do you specialize in?",
      answer:
        "I work with adults experiencing anxiety, panic, trauma, burnout, and chronic stress.",
    },
    {
      question: "What is your approach to therapy?",
      answer:
        "My approach is warm, collaborative, and grounded, integrating CBT, EMDR, mindfulness-based, and body-oriented techniques.",
    },
  ];

  return (
    <section className="mt-32 w-full bg-[#EEECE6]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 px-10 lg:px-20 items-start py-18 md:py-24">
        {/* LEFT IMAGE */}
        <div className=" flex justify-center ">
          <div className=" max-w-[1400px]   overflow-hidden rounded-t-full">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/3a7e28f0-28fd-47cd-9857-6c415afed795/myxa69-APKZU4NJcgs-unsplash.jpg?format=2500w"
              alt="Calm floral detail"
              width={550}
              height={700}
              className="object-cover max-w-[150px] max-h-[300px]  md:max-w-[400px]  md:max-h-[550px]  lg:max-w-[475px] lg:max-h-[600px]   "
            />
          </div>
        </div>

        {/* RIGHT FAQ CONTENT */}
        <div>
          <h2 className=" text-4xl md:mt-5 lg:mt-12 lg:text-5xl font-serif font-light mb-12 text-[#1F2D2B]">
            FAQs
          </h2>

          <div className="border-t border-[#1E3D3A] mb-5" />

          <div className="space-y-8">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index}>
                  {/* Question */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="
                      w-full
                      flex
                      gap-4
                      text-2xl
                      font-serif
                      font-light
                      text-left
                      text-[#1F2D2B]
                    "
                  >
                    <span className="text-4xl">{isOpen ? "-" : "+"}</span>
                    <span>{faq.question}</span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-700 ease-in-out ${
                      isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="mt-4 ml-12 text-lg leading-relaxed max-w-lg text-[#5F7370]">
                      {faq.answer}
                    </p>
                  </div>

                  <div className="border-t border-[#1E3D3A] mt-5" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
