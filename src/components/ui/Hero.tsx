"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import Image from "next/image";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  
  useEffect(() => {
    if (shouldReduceMotion) return;

    const ctx = gsap.context(() => {
      // Mouse Parallax for Desktop
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 15;
        const yPos = (clientY / window.innerHeight - 0.5) * 15;
        
        gsap.to(".parallax-bg", { x: xPos, y: yPos, duration: 1, ease: "power2.out" });
        gsap.to(".parallax-fg", { x: -xPos * 0.5, y: -yPos * 0.5, duration: 1, ease: "power2.out" });
      };

      // Scroll Parallax
      const handleScroll = () => {
        const scrollY = window.scrollY;
        gsap.to(".hero-arch", { y: scrollY * 0.2, ease: "none", duration: 0 });
      };
      
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("scroll", handleScroll);
      
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("scroll", handleScroll);
      };
    }, container); // Scope to container

    return () => ctx.revert(); // Cleanup GSAP context on unmount
  }, [shouldReduceMotion]);

  const drawVariant: any = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        pathLength: { duration: 1, ease: "easeOut" },
        opacity: { duration: 0.2 }
      }
    }
  };

  const getTransition = (delay: number) => ({
    duration: shouldReduceMotion ? 0 : 0.4,
    delay: shouldReduceMotion ? 0 : delay,
    ease: "easeOut" as const
  });

  return (
    <section ref={container} className="relative min-h-[90svh] w-full overflow-hidden bg-jeevana-green flex items-center justify-center pt-24 pb-16">
      
      {/* Cinematic Image Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image 
          src="/hero_architecture.jpg" 
          alt="Jeevana Architecture Visualization" 
          fill 
          sizes="100vw"
          className="object-cover opacity-40 mix-blend-luminosity parallax-bg scale-110"
          priority
        />
        <div className="absolute inset-0 bg-jeevana-green/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-jeevana-green via-jeevana-green/50 to-transparent" />
      </div>

      {/* Architectural Line-Art Animation */}
      <div className="hero-arch absolute bottom-0 left-0 w-full h-[65%] z-10 flex items-end justify-center pointer-events-none opacity-50 parallax-fg">
        <svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMax meet" className="w-full h-full max-w-7xl">
          <motion.g
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          >
            {/* Base line */}
            <motion.line x1="0" y1="590" x2="1000" y2="590" stroke="#BCD530" strokeWidth="2" variants={drawVariant} />
            
            {/* Building 1 - Left */}
            <motion.rect x="150" y="300" width="200" height="290" fill="none" stroke="#61BB46" strokeWidth="1.5" variants={drawVariant} />
            <motion.path d="M150,350 L350,350 M150,400 L350,400 M150,450 L350,450 M150,500 L350,500 M150,550 L350,550" stroke="#BCD530" strokeWidth="0.5" variants={drawVariant} />
            <motion.line x1="250" y1="300" x2="250" y2="590" stroke="#BCD530" strokeWidth="0.5" variants={drawVariant} />

            {/* Building 2 - Center Main */}
            <motion.rect x="380" y="150" width="280" height="440" fill="none" stroke="#BCD530" strokeWidth="2" variants={drawVariant} />
            <motion.path d="M380,200 L660,200 M380,250 L660,250 M380,300 L660,300 M380,350 L660,350 M380,400 L660,400 M380,450 L660,450 M380,500 L660,500 M380,550 L660,550" stroke="#61BB46" strokeWidth="1" variants={drawVariant} />
            <motion.line x1="520" y1="150" x2="520" y2="590" stroke="#61BB46" strokeWidth="1" variants={drawVariant} />
            <motion.rect x="420" y="80" width="200" height="70" fill="none" stroke="#BCD530" strokeWidth="1.5" variants={drawVariant} />

            {/* Building 3 - Right */}
            <motion.rect x="690" y="250" width="180" height="340" fill="none" stroke="#61BB46" strokeWidth="1.5" variants={drawVariant} />
            <motion.path d="M690,300 L870,300 M690,350 L870,350 M690,400 L870,400 M690,450 L870,450 M690,500 L870,500 M690,550 L870,550" stroke="#BCD530" strokeWidth="0.5" variants={drawVariant} />
            
            <motion.circle cx="520" cy="250" r="40" fill="none" stroke="#BCD530" strokeWidth="1" variants={drawVariant} />
            <motion.path d="M100,500 L200,400 M800,300 L950,150" stroke="#61BB46" strokeWidth="1" strokeDasharray="5,5" variants={drawVariant} />
          </motion.g>
        </svg>
      </div>
      
      {/* Subtle Lime Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-jeevana-lime/10 blur-[100px] z-0 pointer-events-none" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 text-white flex flex-col items-center text-center mt-[-5%]">
        
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={getTransition(0.4)}
          className="relative h-12 md:h-16 w-48 md:w-64 mb-6"
        >
          <Image 
            src="/logo.png" 
            alt="Jeevana Builders, Contractors & Designers" 
            fill 
            sizes="(max-width: 768px) 192px, 256px"
            className="object-contain object-center opacity-90 brightness-0 invert" 
          />
        </motion.div>
        
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { y: "100%" }}
            animate={{ y: 0, opacity: 1 }}
            transition={getTransition(0.6)}
            className="h1 text-white"
          >
            CREATING<br />THE FUTURE
          </motion.h1>
        </div>
        
        <motion.p
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={getTransition(0.9)}
          className="font-sans text-lg md:text-xl text-white/80 mb-10 max-w-2xl text-balance"
        >
          Building spaces with purpose, precision and permanence.
        </motion.p>
        
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={getTransition(1.1)}
          className="flex flex-col sm:flex-row gap-4 md:gap-6"
        >
          <Link href="/projects" className="px-8 py-4 bg-jeevana-lime text-jeevana-dark font-medium tracking-widest hover:bg-white hover:-translate-y-0.5 active:translate-y-0 transition-all text-sm">
            EXPLORE PROJECTS
          </Link>
          <Link href="/contact" className="px-8 py-4 border border-white/30 hover:border-white hover:bg-white/10 backdrop-blur-sm hover:-translate-y-0.5 active:translate-y-0 transition-all tracking-widest text-sm text-white">
            START A PROJECT
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
