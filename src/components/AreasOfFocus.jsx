import Image from "next/image";

export default function AreasOfFocus() {
  return (
    <section className="mt-28 bg-[#EEECE6]">
      <div className="max-w-[1400px] mx-auto px-8 py-20">

        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-serif font-light text-center text-[#1F2D2B]">
          Areas of Focus
        </h2>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="border border-[#1E3D3A] bg-white p-5 flex flex-col max-h-[500px]">
            <div className="flex-1">
              <h3 className="text-xl font-serif font-light text-[#1F2D2B]">
                Anxiety & Panic Therapy
              </h3>
              <p className="mt-4 text-base text-[#5F7370]">
                Support for chronic anxiety, panic symptoms, and constant
                overthinking using evidence-based approaches such as CBT and
                mindfulness-based practices.
              </p>
            </div>

            <div className="mt-5 flex justify-center">
              <div className="w-64 h-64 md:w-48 md:h-48 lg:w-60 lg:h-60">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/166607b6-21a7-4e30-8c74-9c911c9f33fb/milles-studio-GU-Q4-SQFTg-unsplash.jpg?format=1500w"
                  alt="Anxiety therapy"
                  width={256}
                  height={256}
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border border-[#1E3D3A] bg-white p-5 flex flex-col max-h-[500px]">
            <div className="flex-1">
              <h3 className="text-xl font-serif font-light text-[#1F2D2B]">
                Trauma & EMDR Therapy
              </h3>
              <p className="mt-4 text-base text-[#5F7370]">
                Carefully paced trauma therapy for single-incident and complex
                trauma, focused on safety, stabilization, and nervous system
                regulation.
              </p>
            </div>

            <div className="mt-5 flex justify-center">
              <div className="w-64 h-64 md:w-48 md:h-48 lg:w-60 lg:h-60">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/f53aed66-5bd9-43e0-b00b-3a3537fed68d/ori-song-LPbKfdQJS2E-unsplash.jpg?format=1000w"
                  alt="Trauma therapy"
                  width={256}
                  height={256}
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="border border-[#1E3D3A] bg-white p-5 flex flex-col max-h-[500px]">
            <div className="flex-1">
              <h3 className="text-xl font-serif font-light text-[#1F2D2B]">
                Burnout & Chronic Stress Therapy
              </h3>
              <p className="mt-4 text-base text-[#5F7370]">
                Therapy for adults experiencing burnout, chronic stress, and
                emotional exhaustion, especially after long periods of pushing
                through pressure.
              </p>
            </div>

            <div className="mt-5 flex justify-center">
              <div className="w-64 h-64 md:w-48 md:h-48 lg:w-60 lg:h-60">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/515651b9-4001-47ae-8ca1-2a6ff8f2bef0/ivana-cajina--wn1PECo5-U-unsplash.jpg?format=1000w"
                  alt="Burnout therapy"
                  width={256}
                  height={256}
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
