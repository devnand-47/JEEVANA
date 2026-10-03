import Hero from "@/components/ui/Hero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Marquee from "@/components/ui/Marquee";
import HorizontalProjects from "@/components/ui/HorizontalProjects";
import HorizontalServices from "@/components/ui/HorizontalServices";
import ProcessScroll from "@/components/ui/ProcessScroll";
import TestimonialCarousel from "@/components/ui/TestimonialCarousel";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projectsData } from "@/data/projects";

export default function Home() {
  const capabilities = [
    "ENGINEERING", "DESIGN", "CONSTRUCTION", "INTERIORS", "LANDSCAPING", "PROJECT MANAGEMENT"
  ];

  const trustTicker = [
    "QUALITY", "PRECISION", "PROFESSIONALISM", "ENGINEERING", "DESIGN", "EXECUTION", "SUSTAINABILITY"
  ];

  const marqueeProjects = projectsData.slice(0, 6);

  return (
    <main className="bg-background">
      {/* 01 HERO */}
      <Hero />
      
      {/* 02 CAPABILITY MARQUEE */}
      <div className="bg-jeevana-dark text-white border-y border-white/10 py-4">
        <Marquee 
          items={capabilities.map((item, i) => (
            <span key={i} className="font-display font-bold text-sm tracking-[0.3em] px-12 opacity-70">
              {item}
            </span>
          ))}
        />
      </div>
      
      {/* 03 ABOUT JEEVANA */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left Image (Asymmetric Image Reveal) */}
            <ScrollReveal>
              <div className="relative aspect-square w-full md:aspect-[4/3] lg:aspect-square overflow-hidden bg-jeevana-dark group">
                <Image 
                  src="/project_residential.jpg" 
                  alt="Jeevana Architecture" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover opacity-90 scale-105 group-hover:scale-100 transition-transform duration-[2000ms]" 
                />
                {/* Architectural Accent */}
                <div className="absolute bottom-0 left-0 w-24 h-24 border-t-2 border-r-2 border-jeevana-lime bg-white flex items-center justify-center p-4">
                  <ArrowUpRight className="w-8 h-8 text-jeevana-dark" />
                </div>
                {/* Reveal mask animation handled by CSS/ScrollReveal */}
              </div>
            </ScrollReveal>
            
            {/* Right Content */}
            <ScrollReveal delay={0.2}>
              <div className="flex flex-col items-start">
                <span className="font-sans text-xs tracking-[0.2em] uppercase text-gray-500 font-bold mb-6">About Jeevana</span>
                <h2 className="h2 text-jeevana-dark mb-6">BUILDING<br />WITH PURPOSE.</h2>
                <p className="text-gray-600 mb-8 max-w-md text-lg">
                  We are a Kerala-based construction and contracting company committed to quality, functionality, and lasting value. We blend traditional craftsmanship with modern engineering to create spaces that endure.
                </p>
                <Link href="/about" className="inline-flex items-center text-sm font-bold tracking-widest text-jeevana-dark hover:text-jeevana-green group transition-colors">
                  <span className="border-b-2 border-transparent group-hover:border-jeevana-green pb-1 transition-all">DISCOVER JEEVANA</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 04 PROJECT SHOWCASE */}
      <HorizontalProjects />

      {/* 05 INFINITE PROJECT MARQUEE */}
      <div className="bg-jeevana-dark py-8 border-t border-white/5 overflow-hidden">
        <Marquee 
          reverse
          className="py-4"
          itemClassName="px-4"
          items={marqueeProjects.map((p) => (
            <div key={p.id} className="relative w-64 h-40 md:w-80 md:h-52 bg-gray-900 group overflow-hidden">
              <Image 
                src={p.image} 
                alt={p.title} 
                fill 
                sizes="(max-width: 768px) 256px, 320px"
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100" 
              />
            </div>
          ))}
        />
      </div>

      {/* 06 THE JEEVANA WAY */}
      <ProcessScroll />

      {/* 07 SERVICES */}
      <HorizontalServices />

      {/* 08 LEADERSHIP */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal centered>
            <div className="text-center mb-16 md:mb-24">
              <span className="font-sans text-xs tracking-[0.2em] uppercase text-jeevana-green font-bold mb-6 block">Leadership</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-jeevana-dark">
                THE PEOPLE BEHIND JEEVANA
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="group flex flex-col items-center text-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8 rounded-full overflow-hidden">
                  <div className="absolute -inset-4 border-2 border-transparent group-hover:border-jeevana-lime rounded-full scale-90 group-hover:scale-100 transition-all duration-700 opacity-0 group-hover:opacity-100 z-10 pointer-events-none" />
                  <Image 
                    src="/owner.jpeg" 
                    alt="Eng. Muhammed Shahim E.S." 
                    fill 
                    sizes="(max-width: 768px) 256px, 320px"
                    className="object-cover transition-all duration-700 group-hover:scale-[1.03]" 
                    style={{ filter: "none", WebkitFilter: "none", mixBlendMode: "normal", opacity: 1 }}
                  />
                </div>
                <div className="overflow-hidden">
                  <h4 className="font-display font-bold text-2xl text-jeevana-dark transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">ENG. MUHAMMED SHAHIM E.S.</h4>
                </div>
                <p className="text-sm text-gray-500 uppercase tracking-widest mt-2">Managing Partner & CEO</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="group flex flex-col items-center text-center pt-0 md:pt-24">
                <div className="relative w-64 h-64 md:w-80 md:h-80 mb-8 rounded-full overflow-hidden bg-gray-100">
                  <div className="absolute -inset-4 border-2 border-transparent group-hover:border-jeevana-lime rounded-full scale-90 group-hover:scale-100 transition-all duration-700 opacity-0 group-hover:opacity-100 z-10 pointer-events-none" />
                  <Image 
                    src="/Shafeeh-E-S.jpeg" 
                    alt="Er. Shafeeh E S — Executive Partner & Operations Head" 
                    fill 
                    sizes="(max-width: 768px) 256px, 320px"
                    className="object-cover transition-all duration-700 group-hover:scale-[1.03]" 
                    style={{ filter: "none", WebkitFilter: "none", mixBlendMode: "normal", opacity: 1 }}
                  />
                </div>
                <div className="overflow-hidden">
                  <h4 className="font-display font-bold text-2xl text-jeevana-dark transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">SHAFEEH E S</h4>
                </div>
                <p className="text-sm text-gray-500 uppercase tracking-widest mt-2">Executive Partner & Operations Head</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 09 CLIENT REVIEWS */}
      <TestimonialCarousel />

      {/* 10 TRUST / CAPABILITY TICKER */}
      <div className="bg-jeevana-green text-jeevana-lime py-6">
        <Marquee 
          items={trustTicker.map((item, i) => (
            <span key={i} className="font-display font-bold text-xl md:text-2xl tracking-widest px-12">
              {item}
            </span>
          ))}
        />
      </div>

      {/* 11 SUSTAINABILITY */}
      <section className="relative py-32 md:py-48 bg-jeevana-dark overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-[url('/project_landscape.jpg')] bg-cover bg-center opacity-20 mix-blend-luminosity scale-105" />
        <div className="absolute inset-0 bg-jeevana-dark/80" />
        <div className="relative z-10 container mx-auto px-6">
          <ScrollReveal centered>
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-jeevana-lime font-bold mb-6 block">Building Responsibly</span>
            <h2 className="font-display text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-none">
              ECO-FRIENDLY<br />ZERO-WASTE<br />CONSTRUCTION
            </h2>
          </ScrollReveal>
        </div>
      </section>

      {/* 12 PUBLIC PROGRAMMES / 13 AWARDS - Temporarily Disabled pending content */}
      {/* 
      <section className="py-24 bg-gray-50">... 
      */}

      {/* 14 FINAL CTA */}
      <section className="py-32 md:py-48 bg-white relative overflow-hidden text-center group">
        <div className="absolute inset-0 bg-jeevana-green/5 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-1000 ease-in-out pointer-events-none" />
        
        <ScrollReveal centered>
          <span className="font-sans text-xs tracking-[0.2em] uppercase text-gray-500 font-bold mb-6 block">Have a project in mind?</span>
          <h2 className="font-display text-5xl md:text-8xl font-bold text-jeevana-dark mb-12 tracking-tighter leading-[0.9]">
            LET'S CREATE<br />WHAT COMES NEXT.
          </h2>
          <Link href="/contact" className="inline-flex items-center px-10 py-5 bg-jeevana-dark text-white font-bold tracking-widest text-sm hover:bg-jeevana-lime hover:text-jeevana-dark transition-colors relative z-10 overflow-hidden shadow-xl">
            <span className="relative z-10 flex items-center">
              START A PROJECT <ArrowRight className="ml-2 w-4 h-4" />
            </span>
          </Link>
        </ScrollReveal>
      </section>
    </main>
  );
}
