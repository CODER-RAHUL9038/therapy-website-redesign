"use client";

import { useState } from "react";
import Image from "next/image";
import FadeUp from "@/components/FadeUp";

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
    <section className="w-full bg-[#F1F6F4] py-18 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 px-10 lg:px-20 items-start">

        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <div className="max-w-[1400px] overflow-hidden rounded-t-full">
            <FadeUp delay={150}>
              <div>
                <Image
                  src="https://plus.unsplash.com/premium_photo-1676654936036-7ed09cdc48a1?w=2000&auto=format&fit=crop&q=60"
                  alt="Calm floral detail"
                  width={900}
                  height={1600}
                  className="object-cover max-w-[180px] max-h-[300px] md:max-w-[400px] md:max-h-[550px] lg:max-w-[475px] lg:max-h-[600px]"
                />
              </div>
            </FadeUp>
          </div>
        </div>

        {/* RIGHT FAQ CONTENT */}
        <div>
          <FadeUp>
            <h2 className="text-4xl md:mt-5 lg:mt-12 lg:text-5xl font-serif font-light mb-12 text-[#1F2D2B]">
              FAQs
            </h2>
          </FadeUp>

          <FadeUp delay={150}>
            <div className="border-t border-[#1E3D3A] mb-5" />
          </FadeUp>

          {/* FAQ list (NO individually faded) */}
          <FadeUp delay={300}>
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
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
