import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Jeevana Builders, Contractors & Designers",
  description: "Learn about our engineering philosophy, quality, innovation, sustainability, and the leadership behind Jeevana Builders.",
};

export default function AboutPage() {
  return (
    <main>
      {/* 01 ABOUT HERO */}
      <div className="pt-32 pb-20 bg-jeevana-dark text-white relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/blueprint.png')] opacity-10 mix-blend-overlay" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <SectionHeading 
            title="OUR STORY"
            subtitle="About Jeevana"
            centered
            light
          />
        </div>
      </div>

      {/* 02 COMPANY STORY */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-4xl">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-jeevana-dark mb-12 text-center text-balance leading-tight">
              WE DON'T JUST BUILD STRUCTURES.<br/>WE CREATE WHAT COMES NEXT.
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="prose prose-lg mx-auto text-gray-600 font-sans leading-relaxed">
              <p className="mb-6">
                At Jeevana Builders, Contractors & Designers, our engineering philosophy is built on the pillars of quality, innovation, sustainability, and professional execution. We believe that every project is a landmark that shapes the future of communities and environments.
              </p>
              <p className="mb-6">
                From meticulous planning to the final finishing touches, our team is dedicated to delivering excellence. Our approach integrates cutting-edge construction technologies with deep-rooted architectural traditions, resulting in spaces that are not only structurally sound but also aesthetically enduring.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 03 THE JEEVANA WAY */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <SectionHeading 
            title="THE JEEVANA WAY"
            subtitle="Our Philosophy"
            centered
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {["Quality", "Precision", "Professionalism", "Lasting Value"].map((val, idx) => (
              <ScrollReveal key={val} delay={idx * 0.1} centered>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full border-2 border-jeevana-lime text-jeevana-green flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-jeevana-dark uppercase">{val}</h4>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 ENGINEERING + DESIGN CAPABILITIES */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 text-center">
          <SectionHeading 
            title="DESIGN + ENGINEERING"
            subtitle="Capabilities"
            centered
          />
          <ScrollReveal delay={0.2} centered>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-8 mb-16">
              Our holistic approach covers every phase of the project lifecycle. By unifying design and engineering, we ensure that architectural vision meets structural reality without compromise.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8 max-w-4xl mx-auto text-left">
            {[
              { t: "Structural Engineering", d: "Robust frameworks designed for longevity." },
              { t: "Architectural Design", d: "Aesthetic spaces rooted in Kerala traditions." },
              { t: "Interior & Finishing", d: "Premium materials and flawless execution." },
              { t: "Project Management", d: "Seamless coordination and timely delivery." },
              { t: "Landscape Architecture", d: "Harmonizing structures with the environment." },
              { t: "Quality Assurance", d: "Rigorous standards at every stage." },
            ].map((cap, idx) => (
              <ScrollReveal key={idx} delay={0.1 * idx}>
                <h4 className="font-display font-bold text-xl text-jeevana-dark mb-2">{cap.t}</h4>
                <p className="text-sm text-gray-500">{cap.d}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 05 LEADERSHIP — TWO PEOPLE ONLY */}
      <section className="py-32 bg-jeevana-dark text-white relative overflow-hidden">
        {/* Subtle decorative ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-jeevana-lime/10 rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-jeevana-lime/5 rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-24">
            <p className="text-jeevana-lime tracking-[0.2em] uppercase text-sm font-bold mb-4">Leadership</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tight text-white mb-4 uppercase">
              The People<br />Behind Jeevana
            </h2>
            <div className="w-24 h-1 bg-jeevana-lime" />
          </div>

          <div className="space-y-32">
            {/* Profile 01: Er. Shahim E S */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-24">
              <div className="lg:w-1/3 w-full">
                <ScrollReveal>
                  <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
                    {/* Asymmetric Lime Ring */}
                    <div className="absolute -inset-4 border border-jeevana-lime/40 rounded-t-full rounded-b-xl translate-x-4 translate-y-4" />
                    <div className="relative w-full h-full overflow-hidden rounded-t-full rounded-b-xl bg-gray-800">
                      <Image src="/owner.jpeg" alt="Er. Shahim E S" fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition-transform duration-700 hover:scale-[1.02]" style={{ filter: "none", WebkitFilter: "none", mixBlendMode: "normal", opacity: 1 }} />
                    </div>
                  </div>
                </ScrollReveal>
              </div>
              
              <div className="lg:w-2/3 w-full lg:pt-8 flex flex-col items-start text-left">
                <ScrollReveal delay={0.2}>
                  <div className="w-full">
                  <h3 className="font-display text-4xl md:text-5xl font-bold mb-2 uppercase">ER. SHAHIM E S</h3>
                  <p className="text-jeevana-lime tracking-[0.2em] uppercase text-sm font-bold mb-6">Managing Partner & CEO</p>
                  
                  {/* Credential */}
                  <div className="inline-block border border-white/20 px-4 py-3 mb-10 bg-white/5">
                    <p className="text-[10px] uppercase tracking-widest text-white/60 mb-1">Former Member</p>
                    <p className="text-xs font-semibold tracking-wider text-white">Saudi Council of Engineers (SCE)</p>
                  </div>
                  
                  <div className="prose prose-lg prose-invert opacity-90 mb-12 max-w-[680px]">
                    <p className="text-[16px] md:text-[18px] leading-[1.75] mb-6 text-white/90">
                      Er. Shahim E S is a B.Tech graduate with over 15 years of experience in the construction industry, with professional exposure across India and abroad.
                    </p>
                    <p className="text-[16px] md:text-[18px] leading-[1.75] mb-6 text-white/90">
                      He has contributed to major international projects in Saudi Arabia and Qatar, including King Abdulaziz International Airport, Jeddah; Kingdom Tower, Jeddah; Abraj Kudai Project, Jeddah; and Sidra Hospital, Doha, Qatar.
                    </p>
                    <p className="text-[16px] md:text-[18px] leading-[1.75] mb-6 text-white/90">
                      He is a Former Member of the Saudi Council of Engineers (SCE), reflecting his professional association with the engineering sector in Saudi Arabia.
                    </p>
                    <p className="text-[16px] md:text-[18px] leading-[1.75] mb-6 text-white/90">
                      After gaining extensive international experience, he returned to India and established Jeevana Builders, Contractors & Designers, with a vision to deliver quality construction, innovative design solutions, modern construction practices, and professional project management.
                    </p>
                    <p className="text-[16px] md:text-[18px] leading-[1.75] text-white/90">
                      As Managing Partner & CEO, he focuses on quality, reliability, client satisfaction, and the continuous growth of Jeevana, guided by the brand philosophy: <span className="text-jeevana-lime italic font-semibold">“Creating the Future.”</span>
                    </p>
                  </div>

                  {/* Shahim Experience Highlight */}
                  <div className="border-t border-white/10 pt-10 max-w-[680px]">
                    <p className="text-[11px] text-white/50 uppercase tracking-[0.2em] font-bold mb-6">
                      Shahim E S — Professional Experience
                    </p>
                    <h4 className="text-jeevana-lime text-lg font-display uppercase tracking-widest mb-6">Professional Exposure</h4>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-white font-bold text-sm uppercase tracking-wider mb-4">Saudi Arabia</p>
                        <ul className="space-y-3">
                          <li className="text-white/70 text-sm flex items-start">
                            <span className="text-jeevana-lime mr-2 mt-0.5">•</span> 
                            King Abdulaziz International Airport — Jeddah
                          </li>
                          <li className="text-white/70 text-sm flex items-start">
                            <span className="text-jeevana-lime mr-2 mt-0.5">•</span> 
                            Kingdom Tower — Jeddah
                          </li>
                          <li className="text-white/70 text-sm flex items-start">
                            <span className="text-jeevana-lime mr-2 mt-0.5">•</span> 
                            Abraj Kudai Project — Jeddah
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm uppercase tracking-wider mb-4">Qatar</p>
                        <ul className="space-y-3">
                          <li className="text-white/70 text-sm flex items-start">
                            <span className="text-jeevana-lime mr-2 mt-0.5">•</span> 
                            Sidra Hospital — Doha
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* Profile 02: Shafeeh E S */}
            <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start gap-12 lg:gap-24">
              <div className="lg:w-1/3 w-full">
                <ScrollReveal>
                  <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
                    {/* Asymmetric Lime Ring */}
                    <div className="absolute -inset-4 border border-jeevana-lime/40 rounded-t-full rounded-b-xl -translate-x-4 translate-y-4" />
                    <div className="relative w-full h-full overflow-hidden rounded-t-full rounded-b-xl bg-gray-800">
                      <Image src="/Shafeeh-E-S.jpeg" alt="Er. Shafeeh E S — Executive Partner & Operations Head" fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition-transform duration-700 hover:scale-[1.02]" style={{ filter: "none", WebkitFilter: "none", mixBlendMode: "normal", opacity: 1 }} />
                    </div>
                  </div>
                </ScrollReveal>
              </div>
              
              <div className="lg:w-2/3 w-full lg:pt-8 flex flex-col items-start lg:items-end text-left lg:text-right">
                <ScrollReveal delay={0.2}>
                  <div className="w-full">
                  <h3 className="font-display text-4xl md:text-5xl font-bold mb-2 uppercase">SHAFEEH E S</h3>
                  <p className="text-jeevana-lime tracking-[0.2em] uppercase text-sm font-bold mb-6">Executive Partner & Operations Head</p>
                  
                  {/* Credential */}
                  <div className="inline-block border border-white/20 px-4 py-3 mb-10 bg-white/5 text-left lg:text-right">
                    <p className="text-[10px] uppercase tracking-widest text-white/60 mb-1">Registered Engineer</p>
                    <p className="text-xs font-semibold tracking-wider text-white">Department of Urban Affairs, Government of Kerala</p>
                  </div>
                  
                  <div className="prose prose-lg prose-invert opacity-90 max-w-[680px] ml-0 lg:ml-auto text-left lg:text-right">
                    <p className="text-[16px] md:text-[18px] leading-[1.75] mb-6 text-white/90">
                      Shafeeh E S, Executive Partner & Operations Head at Jeevana Builders, Contractors & Designers, is a professionally qualified Civil Engineer with extensive hands-on experience in the Indian construction industry.
                    </p>
                    <p className="text-[16px] md:text-[18px] leading-[1.75] mb-6 text-white/90">
                      He is also a Registered Engineer with the Department of Urban Affairs, Government of Kerala.
                    </p>
                    <p className="text-[16px] md:text-[18px] leading-[1.75] mb-6 text-white/90">
                      With experience in high-rise buildings, residential projects, and diverse construction developments, he brings strong practical knowledge of site execution, construction methodologies, project coordination, quality management, and workforce management.
                    </p>
                    <p className="text-[16px] md:text-[18px] leading-[1.75] mb-6 text-white/90">
                      As Executive Partner & Operations Head, Shafeeh oversees the company’s day-to-day operations, project coordination, site execution, workforce management, quality control, and operational efficiency.
                    </p>
                    <p className="text-[16px] md:text-[18px] leading-[1.75] mb-6 text-white/90">
                      His technical expertise, disciplined approach, and hands-on leadership enable him to effectively coordinate teams and address on-site challenges, contributing to the smooth and efficient execution of Jeevana’s projects.
                    </p>
                    <p className="text-[16px] md:text-[18px] leading-[1.75] text-white/90">
                      At Jeevana, he is committed to maintaining technical precision, quality, efficiency, and client satisfaction across every project.
                    </p>
                  </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07 SUSTAINABILITY */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <SectionHeading 
            title="SUSTAINABILITY"
            subtitle="Building For Tomorrow"
            centered
          />
          <ScrollReveal delay={0.2} centered>
            <p className="text-xl text-gray-600 mt-8 leading-relaxed">
              Sustainability is at the core of our operations. We are committed to eco-friendly practices and zero-waste construction wherever possible, ensuring that our progress today does not compromise tomorrow.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 08 START A PROJECT CTA */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal centered>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-jeevana-dark mb-8">
              READY TO BUILD?
            </h2>
            <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-jeevana-lime text-jeevana-dark font-medium tracking-widest text-sm hover:bg-jeevana-dark hover:text-white transition-all uppercase">
              START A PROJECT <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
