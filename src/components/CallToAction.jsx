"use client";

export default function CallToAction() {
  return (
    <section className="bg-[#1E3D3A] px-10 py-28 text-center">
      
      <h2 className="text-4xl font-serif font-light text-white">
        Begin Therapy in Santa Monica or Online
      </h2>

      <p className="mt-10 max-w-xl mx-auto text-xl leading-relaxed text-white">
        If you&apos;re feeling ready to explore therapy, this can be a space to
        slow down, feel supported, and begin making sense of what you&apos;re
        experiencing. I&apos;d be happy to connect and see whether working
        together feels like a good fit.
      </p>

      <a
        href="#"
        className="
          inline-block
          mt-12
          border
          border-white
          px-10
          py-4
          text-sm
          tracking-wide
          font-serif
          text-white
          transition-all
          duration-700
          ease-in-out
          hover:bg-white
          hover:text-[#1E3D3A]
        "
      >
        REQUEST A CONSULTATION →
      </a>
    </section>
  );
}
