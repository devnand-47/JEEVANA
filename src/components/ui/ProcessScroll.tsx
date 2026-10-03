"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const steps = [
  { 
    id: "01", 
    title: "UNDERSTAND", 
    desc: "We begin by understanding your vision, requirements, site conditions and project objectives.",
    image: "/project_commercial.jpg"
  },
  { 
    id: "02", 
    title: "PLAN", 
    desc: "Meticulous planning establishes scope, feasibility, estimates, drawings and project coordination.",
    image: "/project_residential.jpg"
  },
  { 
    id: "03", 
    title: "DESIGN", 
    desc: "Architectural, structural, interior and exterior decisions are developed into a coherent project vision.",
    image: "/project_interior.jpg"
  },
  { 
    id: "04", 
    title: "EXECUTE", 
    desc: "Site execution focuses on coordination, workmanship, quality control, materials and progress.",
    image: "/project_landscape.jpg"
  },
  { 
    id: "05", 
    title: "DELIVER", 
    desc: "Every project moves toward completion with attention to finishing, quality, coordination and handover.",
    image: "/project_hospitality.jpg"
  },
];

export default function ProcessScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (isMobile) return;
    
    // We want the 5 steps to take up the first 85% of the scroll.
    // The last 15% is reserved for the final CTA transition.
    const usableProgress = Math.min(latest / 0.85, 1);
    
    // Map usable progress to a step index (0 to 4)
    let stepIndex = Math.floor(usableProgress * steps.length);
    if (stepIndex >= steps.length) stepIndex = steps.length - 1;
    
    if (stepIndex !== activeStep) {
      setActiveStep(stepIndex);
    }
  });

  // Fade out the main content and fade in the CTA in the last 15% of scroll
  const ctaOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
  const mainOpacity = useTransform(scrollYProgress, [0.85, 0.9], [1, 0]);
  const ctaPointerEvents = useTransform(scrollYProgress, (latest) => latest > 0.9 ? "auto" : "none") as any;

  // --- MOBILE RENDER ---
  if (isMobile) {
    return (
      <section className="bg-white py-20 px-6">
        <div className="mb-12">
          <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-jeevana-green font-bold mb-4 block">
            The Jeevana Way
          </span>
          <h2 className="font-display font-bold text-jeevana-dark leading-none tracking-tight text-5xl mb-6">
            HOW WE<br />BUILD.
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            From the first conversation to final handover, every Jeevana project follows a considered path — combining planning, design, engineering and execution.
          </p>
          <div className="w-full h-[1px] bg-jeevana-green/20"></div>
        </div>

        <div className="space-y-16">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col">
              <div className="flex items-baseline mb-4">
                <span className="font-sans text-sm font-bold text-jeevana-lime mr-4">{step.id}</span>
                <h3 className="font-display text-2xl font-bold text-jeevana-dark uppercase">{step.title}</h3>
              </div>
              
              <div className="relative w-full aspect-[4/3] mb-4 bg-gray-100 overflow-hidden border border-gray-200">
                <Image 
                  src={step.image} 
                  alt={step.title} 
                  fill 
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-jeevana-dark p-8 border-l-4 border-jeevana-lime">
          <h3 className="font-display text-3xl font-bold text-white mb-6 uppercase leading-tight">
            FROM DRAWING<br />TO REALITY.
          </h3>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-6 py-4 bg-jeevana-lime text-jeevana-dark font-bold tracking-[0.1em] text-xs uppercase"
          >
            START A PROJECT <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    );
  }

  // --- DESKTOP RENDER ---
  return (
    <section ref={containerRef} className="relative h-[300vh] bg-white">
      {/* Sticky Presentation Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex bg-white">
        
        {/* Subtle Architectural Blueprint Background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]" aria-hidden="true">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line x1="38%" y1="0" x2="38%" y2="100%" stroke="#025346" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="0" y1="20%" x2="100%" y2="20%" stroke="#025346" strokeWidth="1" />
            <line x1="0" y1="85%" x2="100%" y2="85%" stroke="#025346" strokeWidth="1" />
          </svg>
        </div>

        {/* Main Content Area (Fades out for final CTA) */}
        <motion.div 
          className="w-full h-full flex absolute inset-0 z-10"
          style={{ opacity: mainOpacity }}
        >
          {/* LEFT COLUMN: 38% */}
          <div className="w-[38%] h-full flex flex-col justify-between py-12 px-12 xl:px-20 border-r border-gray-100 bg-white/95">
            
            {/* Left Top: Heading */}
            <div>
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-jeevana-green font-bold mb-6 block">
                The Jeevana Way
              </span>
              <h2 className="font-display font-bold text-jeevana-dark leading-[0.9] tracking-tighter" style={{ fontSize: 'clamp(3.5rem, 6vw, 7rem)' }}>
                HOW WE<br />BUILD.
              </h2>
              <p className="mt-6 text-gray-600 max-w-sm text-sm leading-relaxed">
                From the first conversation to final handover, every Jeevana project follows a considered path — combining planning, design, engineering and execution.
              </p>
              <div className="mt-8 font-sans text-[10px] tracking-[0.2em] text-gray-400 uppercase">
                01—05 / PROJECT JOURNEY
              </div>
            </div>

            {/* Left Bottom/Middle: Process Navigation */}
            <div className="mb-12">
              <div className="flex flex-col space-y-4">
                {steps.map((step, index) => {
                  const isActive = activeStep === index;
                  return (
                    <div key={step.id} className="relative pl-6">
                      {/* Active Indicator */}
                      {isActive && (
                        <motion.div 
                          layoutId="activeIndicator"
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-jeevana-lime"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      
                      <div className="flex items-center space-x-4">
                        <span className={`font-mono text-xs font-bold transition-colors duration-300 ${isActive ? 'text-jeevana-green' : 'text-gray-300'}`}>
                          {step.id}
                        </span>
                        <span className={`font-display font-bold text-xl uppercase transition-colors duration-300 ${isActive ? 'text-jeevana-dark' : 'text-gray-300'}`}>
                          {step.title}
                        </span>
                      </div>
                      
                      {/* Accordion style description for active step */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="text-sm text-gray-600 mt-3 pr-4 leading-relaxed">
                              {step.desc}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Bottom spacer for layout balance */}
            <div className="h-4"></div>
          </div>

          {/* RIGHT COLUMN: 62% */}
          <div className="w-[62%] h-full flex flex-col justify-between py-12 px-12 xl:px-20 bg-[#f9fafb]">
            
            <div className="flex-grow flex items-center justify-center relative w-full h-full max-h-[70vh]">
              {/* Visual Panel */}
              <div className="relative w-full h-full border border-gray-200 bg-white p-2 md:p-4 shadow-sm flex flex-col">
                <div className="relative w-full h-full flex-grow overflow-hidden bg-gray-100">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, clipPath: 'inset(100% 0 0 0)' }}
                      animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, clipPath: 'inset(0 0 0 0)' }}
                      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, clipPath: 'inset(0 0 100% 0)' }}
                      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }} // power3.out equivalent
                      className="absolute inset-0"
                    >
                      <Image 
                        src={steps[activeStep].image} 
                        alt={steps[activeStep].title} 
                        fill 
                        sizes="(max-width: 1024px) 100vw, 62vw"
                        className="object-cover"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
                
                {/* Technical Label at Bottom of Panel */}
                <div className="pt-3 pb-1 flex justify-between items-center px-1">
                  <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-500 font-bold">
                    CONCEPTUAL VISUALIZATION
                  </span>
                  <span className="font-mono text-[10px] text-gray-400">
                    {steps[activeStep].id} / {new Date().getFullYear()}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Technical Strip */}
            <div className="mt-8 flex justify-between items-center border-t border-gray-200 pt-6">
              {['PLANNING', 'DESIGN', 'ENGINEERING', 'EXECUTION', 'HANDOVER'].map((item, i) => (
                <span key={i} className="font-mono text-[9px] md:text-[10px] tracking-[0.2em] text-gray-400 uppercase">
                  {item}
                </span>
              ))}
            </div>

          </div>
        </motion.div>

        {/* Final CTA Overlay (Fades in for last 15% of scroll) */}
        <motion.div 
          className="absolute inset-0 bg-jeevana-dark flex flex-col items-center justify-center p-12 z-20"
          style={{ opacity: ctaOpacity, pointerEvents: ctaPointerEvents }}
        >
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-12 tracking-tighter leading-[0.9]">
              FROM DRAWING<br />TO REALITY.
            </h3>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-10 py-5 bg-jeevana-lime text-jeevana-dark font-bold tracking-[0.2em] text-sm hover:bg-white transition-colors"
            >
              START A PROJECT <ArrowRight className="ml-3 w-5 h-5" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
