"use client";

import Hero from "@/components/Hero";
import TherapyOverview from "@/components/TherapyOverview";
import AreasOfFocus from "@/components/AreasOfFocus";
import SupportSection from "@/components/SupportSection";
import AboutDrMaya from "@/components/AboutDrMaya";
import FaqSection from "@/components/FaqSection";
import ProfessionalBackground from "@/components/ProfessionalBackground";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import OurOffice from "@/components/OurOffice";

export default function Home() {
  return (
    <main className="min-h-screen">
      <>
        <Hero />
        <TherapyOverview />
        <AreasOfFocus />
        <SupportSection />
        <AboutDrMaya />
        <OurOffice />
        <FaqSection />
        <ProfessionalBackground />
        <CallToAction />
        <Footer />
      </>
    </main>
  );
}
