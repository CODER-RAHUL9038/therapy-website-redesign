"use client";

import { useState } from "react";

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
    <section className="mt-32 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 px-10 lg:px-20 items-start">
        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <div className="overflow-hidden rounded-t-full">
            <img
              src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/3a7e28f0-28fd-47cd-9857-6c415afed795/myxa69-APKZU4NJcgs-unsplash.jpg?format=2500w"
              alt="Decorative flowers"
              className="w-full max-w-[420px] h-[580px] object-cover mx-auto"
            />
          </div>
        </div>

        {/* RIGHT FAQ CONTENT */}
        <div className="mt-20">
          <h2 className="text-3xl font-light mb-12">FAQs</h2>

          <div className="space-y-8">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index}>
                  {/* Question */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center gap-4 text-xl font-light text-left"
                  >
                    <span className="text-2xl">{isOpen ? "−" : "+"}</span>
                    <span>{faq.question}</span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-700 ease-in-out ${
                      isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="mt-4 ml-8 text-base leading-relaxed max-w-lg">
                      {faq.answer}
                    </p>
                  </div>

                  <div className="border-t mt-6" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
