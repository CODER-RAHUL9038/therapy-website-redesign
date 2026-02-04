"use client";

import Hero from "@/components/Hero";
import FulfillingLife from "@/components/FulfillingLife";
import Specialities from "@/components/Specialities";
import AloneSupport from "@/components/AloneSupport";
import AboutLilac from "@/components/AboutLilac";
import FaqSection from "@/components/FaqSection";
import ProfessionalBackground from "@/components/ProfessionalBackground";
import GetStarted from "@/components/GetStarted";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <>
        <Hero />
        <FulfillingLife />
        <Specialities />
        <AloneSupport />
        <AboutLilac />
        <FaqSection />
        <ProfessionalBackground />
        <GetStarted />
        <Footer />
      </>
    </main>
  );
}
