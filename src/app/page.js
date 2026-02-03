"use client";

import { useState } from "react";

export default function Home() {
  const [openIndex, setOpenIndex] = useState(0);
  const [openBgIndex, setOpenBgIndex] = useState(0);

  // For Faqs
  const faqs = [
    {
      question: "Do you take insurance?",
      answer: "Answer goes here.",
    },
    {
      question: "What are your rates?",
      answer: "Answer goes here.",
    },
    {
      question: "Do you have any openings?",
      answer: "Answer goes here.",
    },
  ];

  // For professional Background
  const backgroundItems = [
    {
      title: "Education",
      content:
        "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
    },
    {
      title: "Licensure",
      content: "Licensed Clinical Psychologist (PsyD), State of California.",
    },
    {
      title: "Certifications",
      content:
        "Certified in CBT, EMDR, and mindfulness-based therapeutic approaches.",
    },
  ];

  return (
    <main className="min-h-screen">
      <div>
        {/* Header */}
        <header className="flex items-center justify-between py-6  px-4 sm:px-6 lg:px-10">
          <div className="text-base font-medium">Lilac Template</div>

          <nav className="flex gap-6 text-sm ">
            <a href="#" className="hover:underline">
              Blog
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </nav>
        </header>
        {/* Hero */}
        <section className="mt-16">
          <div className="max-w-8xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
              {/* Left: Image */}
              <div className="overflow-hidden rounded-t-[300px]">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/08197a74-c045-4a19-a7c9-0f85c1032bc4/daiga-ellaby-M2P08N9zi2k-unsplash.jpg?format=2500w"
                  alt="Flowers"
                  className="w-full h-[700px] object-cover"
                />
              </div>

              {/* Right: Text */}
              <div className="text-center">
                <h1 className="text-5xl font-light  leading-tight">
                  Live your life <br />
                  in full bloom
                </h1>

                <p className="mt-6 text-base">
                  Therapy for Adults in Minneapolis, MN.
                </p>

                <a
                  href="#"
                  className="inline-block mt-10 border px-8 py-4 text-sm"
                >
                  CONNECT WITH ME →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Live a fulfilling life */}
        <section className="mt-5">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* LEFT PANEL */}
            <div className="bg-[#ede8df] flex flex-col">
              {/* Text content */}
              <div className="px-10 lg:px-16 pt-32 flex-1">
                <h2 className="text-4xl font-light">Live a fulfilling life.</h2>

                <p className="mt-8 text-base max-w-lg">
                  Life can be challenging—especially when you're trying to
                  balance your personal and professional life.
                </p>

                <p className="mt-4 text-base max-w-lg">
                  It's easy to feel like you're alone in facing these
                  challenges, but I want you to know that I'm here to help.
                </p>
              </div>

              {/* CTA STRIP — inside left panel */}
              <div className="border-t border-slate-900">
                <a
                  href="#"
                  className="
                    block
                    py-5
                    text-center
                    text-sm
                    tracking-wide
                    transition-colors
                    hover:bg-[#243a1a]
                    hover:text-white
                  "
                >
                  GET IN TOUCH →
                </a>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div>
              <img
                src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/87fa2310-36df-4a24-a9e9-1b74df73f150/tanya-trukyr-ornZV1YJNNo-unsplash.jpg?format=2500w"
                alt="Calm lifestyle"
                className="w-full h-[575] object-cover"
              />
            </div>
          </div>
        </section>

        {/* My Specialties */}
        <section className="mt-28">
          <div className="max-w-8xl mx-auto px-8">
            <h2 className="text-5xl font-light text-center">My Specialties</h2>

            {/* Cards */}
            <div className="mt-15 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="border border-slate-900 bg-[#ede8df] p-5 flex flex-col h-full">
                <div className="flex-1">
                  <h2 className="text-xl font-light">Self-Esteem</h2>
                  <p className="mt-4 text-base">
                    Building a strong sense of self-worth is key to living a
                    fulfilled life. Let&apos;s work together to bolster your
                    self-esteem.
                  </p>
                </div>

                <div className="mt-12 flex justify-center">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/166607b6-21a7-4e30-8c74-9c911c9f33fb/milles-studio-GU-Q4-SQFTg-unsplash.jpg?format=1500w"
                    alt="Self esteem"
                    className="w-64 h-64 rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Card 2 */}
              <div className="border border-slate-900 bg-[#ede8df] p-5 flex flex-col h-full">
                <div className="flex-1">
                  <h2 className="text-xl font-light">Relationships</h2>
                  <p className="mt-4 text-base">
                    Navigating relationships can be complex. I&apos;m here to
                    guide you through these complexities to help you form
                    healthier connections.
                  </p>
                </div>
                <div className="mt-12 flex justify-center">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/f53aed66-5bd9-43e0-b00b-3a3537fed68d/ori-song-LPbKfdQJS2E-unsplash.jpg?format=1000w"
                    alt="Relationships"
                    className="w-64 h-64  rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Card 3 */}
              <div className="border border-slate-900 bg-[#ede8df] p-5 flex flex-col h-full">
                <div className="flex-1">
                  <h2 className="text-xl font-light">Burnout</h2>
                  <p className="mt-4 text-base">
                    Feeling overwhelmed by your career is more common than you
                    think. Together, we&apos;ll identify strategies to manage
                    and prevent burnout.
                  </p>
                </div>

                <div className="mt-12 flex justify-center">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/515651b9-4001-47ae-8ca1-2a6ff8f2bef0/ivana-cajina--wn1PECo5-U-unsplash.jpg?format=1000w"
                    alt="Burnout"
                    className="w-64 h-64  rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* You don’t have to do this all alone */}
        <section className="mt-19 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
            {/* LEFT: IMAGE */}
            <div>
              <img
                src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/a77b422e-33ac-47b2-825f-293d33884041/valeriia-miller-5jR4rAMs5tk-unsplash+%281%29.jpg?format=2500w"
                alt="Calm reflective moment"
                className="w-full h-full object-cover"
              />
            </div>

            {/* RIGHT: TEXT PANEL */}
            <div className="bg-[#d6d4de] flex flex-col">
              {/* Text content */}
              <div className="flex-1 px-10 lg:px-16 py-16 max-w-xl">
                <h2 className="text-4xl font-light">
                  You don&apos;t have to do this all alone.
                </h2>

                <p className="mt-6 text-base">
                  If you are facing any of these, there&apos;s hope:
                </p>

                <ul className="mt-6 space-y-3 list-disc list-inside text-base">
                  <li>Persistent feelings of sadness or hopelessness</li>
                  <li>Trouble focusing or making decisions</li>
                  <li>Difficulty maintaining relationships</li>
                  <li>Feeling constantly exhausted or unmotivated</li>
                  <li>A pervasive sense of being overwhelmed</li>
                </ul>

                <p className="mt-8 text-base">
                  With empathy and guidance, we&apos;ll work together to
                  navigate the challenges life throws your way.
                </p>
              </div>

              {/* CTA STRIP (same behavior as before) */}
              <div className="border-t border-slate-400">
                <a
                  href="#"
                  className="
                  block
                  py-6
                  text-center
                  text-sm
                  tracking-wide
                  transition-colors
                  hover:bg-[#243a1a]
                  hover:text-white
                "
                >
                  WORK WITH ME →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Hi, I’m Lilac */}
        <section className=" w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center px-10 pt-25 pb-40 lg:px-20 bg-[#ede8df]">
            {/* LEFT: TEXT */}
            <div className="max-w-xl">
              <h2 className="text-4xl font-light">Hi, I&apos;m Lilac.</h2>

              <p className="mt-8 text-base leading-relaxed">
                I&apos;m committed to providing a safe and supportive
                environment where we can explore your thoughts, feelings, and
                behaviors. With empathy and guidance, we&apos;ll work together
                to navigate the challenges life throws your way.
              </p>

              <a
                href="#"
                className="
                inline-block
                mt-12
                ml-50
                border
                border-slate-700
                px-8
                py-4
                text-sm
                tracking-wide
                transition-colors
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
                <img
                  src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9a77a6f2-1c50-4582-a5c1-5ec0dc2e94e8/daiga-ellaby-Ct6LBZHaOSc-unsplash.jpg?format=2500w"
                  alt="Lilac bouquet"
                  className="w-[400px] h-[600px] object-cover"
                />
              </div>

              {/* Small circular overlay */}
              <div className="absolute bottom-0 right-0 translate-x-1/6 translate-y-1/4">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9f889e1b-ba2b-4a6d-92e9-767dd3db67ae/lilac+template+white+lilac.jpeg?format=2500w"
                  className="w-70 h-70 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-32 w-full mb-32">
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

            {/* RIGHT FAQ */}
            <div className="mt-20">
              <h2 className="text-3xl font-light mb-12">FAQs</h2>

              <div className="space-y-8">
                {faqs.map((faq, index) => {
                  const isOpen = openIndex === index;

                  return (
                    <div key={index}>
                      {/* Question */}

                      <button
                        onClick={() =>
                          setOpenIndex(openIndex === index ? null : index)
                        }
                        className="w-full flex items-center gap-4 text-xl font-light text-left"
                      >
                        <span className="text-2xl">{isOpen ? "-" : "+"}</span>
                        <span>{faq.question}</span>
                      </button>

                      {/* Answer */}
                      {isOpen && (
                        <p className="mt-4 ml-8 text-base max-w-lg">
                          {faq.answer}
                        </p>
                      )}

                      <div className="border-t mt-6" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Professional Background  Section*/}
        <section className="bg-[#ede8df]  py-20">
          <div className="max-w-3xl  mx-auto px-6">
            <h2 className="text-4xl text-center font-light">
              My Professional Background
            </h2>
            <div className="border-t mt-10"></div>

            {/* Accordion */}
            <div className="space-y-6">
              {backgroundItems.map((item, index) => {
                const isOpen = openBgIndex === index;

                return (
                  <div key={index}>
                    {/* Title Row */}
                    <button >{backgroundItems.title}</button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
