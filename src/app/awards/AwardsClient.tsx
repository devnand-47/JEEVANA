"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { awardsData } from "@/data/awards";

export default function AwardsClient() {
  const [selectedAward, setSelectedAward] = useState<typeof awardsData[0] | null>(null);

  // Close lightbox on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedAward(null);
    };
    if (selectedAward) {
      window.addEventListener("keydown", handleKeyDown);
      // Prevent scrolling on body when lightbox is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedAward]);

  return (
    <div className="bg-white min-h-screen relative font-sans text-jeevana-dark">
      {/* Architectural Grid Lines Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute left-6 md:left-12 lg:left-24 top-0 bottom-0 w-px bg-jeevana-dark/5" />
        <div className="absolute right-6 md:right-12 lg:right-24 top-0 bottom-0 w-px bg-jeevana-dark/5" />
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-jeevana-dark/5" />
      </div>

      {/* HERO SECTION */}
      <section className="relative z-10 pt-32 pb-16 md:pt-48 md:pb-32 px-6 md:px-12 lg:px-24 max-w-[1500px] mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-12">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <p className="font-sans text-[10px] md:text-[11px] font-semibold tracking-[0.14em] uppercase text-jeevana-dark mb-6 md:mb-8">
                AWARDS / RECOGNITION
              </p>
              <h1 
                className="font-display font-bold uppercase text-jeevana-dark mb-8 md:mb-12 text-[clamp(2.8rem,13vw,5rem)] md:text-[clamp(3.4rem,7vw,7rem)] leading-[0.95] tracking-[-0.035em]"
              >
                AWARDS<br />&<br />APPRECIATIONS
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="text-gray-600 text-[15px] md:text-[17px] font-normal max-w-[480px] leading-[1.65] text-balance"
            >
              Moments of recognition that mark important milestones in the journey of Jeevana.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            className="md:pt-4"
          >
            <p className="text-[10px] md:text-[11px] font-medium tracking-[0.12em] opacity-60 uppercase text-gray-500 [writing-mode:horizontal-tb] md:[writing-mode:vertical-rl] md:rotate-180">
              RECOGNITION ARCHIVE <span className="mx-2 md:my-2">—</span> 2022 — PRESENT
            </p>
          </motion.div>
        </div>
      </section>

      {/* AWARDS LIST */}
      <section className="relative z-10 pb-32">
        <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col gap-32 md:gap-48 lg:gap-64">
            
            {awardsData.map((award, index) => {
              // Award 01 (index 0): image right -> flex-row-reverse
              // Award 02 (index 1): image left -> flex-row
              // Award 03 (index 2): image right -> flex-row-reverse
              const isImageRight = index % 2 === 0;
              
              return (
                <motion.article 
                  key={award.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px 0px" }}
                  className="w-full"
                >
                  {/* Mobile Number (always on top) */}
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1, ease: "easeOut" } }
                    }}
                    className="lg:hidden mb-6"
                  >
                    <span className="text-xs font-bold tracking-[0.2em] text-gray-400">
                      {award.number}
                    </span>
                  </motion.div>
                  
                  <div className={`flex flex-col ${isImageRight ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>
                    
                    {/* IMAGE CONTAINER (5-7 cols equivalent) */}
                    <div className="w-full lg:w-7/12">
                      <div 
                        className="group relative cursor-pointer overflow-hidden border border-gray-100 p-2 bg-white"
                        onClick={() => setSelectedAward(award)}
                        aria-label={`View larger image of ${award.title}`}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setSelectedAward(award);
                          }
                        }}
                      >
                        <motion.div 
                          variants={{
                            hidden: { clipPath: "inset(10% 0 0 0)" },
                            visible: { clipPath: "inset(0% 0 0 0)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                          }}
                          className="relative aspect-[4/3] md:aspect-[3/2] lg:aspect-[16/10] w-full overflow-hidden bg-gray-100"
                        >
                          <motion.div
                            variants={{
                              hidden: { scale: 1.1, y: 20 },
                              visible: { scale: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                            }}
                            className="w-full h-full"
                          >
                            <Image
                              src={award.image}
                              alt={award.title}
                              fill
                              sizes="(max-width: 1024px) 100vw, 60vw"
                              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                              priority={index === 0}
                            />
                          </motion.div>
                        </motion.div>
                        
                        {/* Hover Label Desktop */}
                        <div className="hidden lg:flex absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none items-center bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-jeevana-dark mr-2">VIEW MOMENT</span>
                          <ArrowRight className="w-3 h-3 text-jeevana-dark transform transition-transform duration-500 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>

                    {/* TEXT CONTAINER (4-5 cols equivalent) */}
                    <div className="w-full lg:w-5/12 flex flex-col">
                      <div className="flex gap-8 lg:gap-12">
                        {/* Desktop Number (side) */}
                        <motion.div 
                          variants={{
                            hidden: { opacity: 0, x: -15 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.1, ease: "easeOut" } }
                          }}
                          className="hidden lg:block pt-3"
                        >
                          <span className="text-sm font-bold tracking-[0.2em] text-gray-300">
                            {award.number}
                          </span>
                        </motion.div>

                        <div className="flex flex-col">
                          <motion.h2 
                            variants={{
                              hidden: { opacity: 0, y: 15 },
                              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, ease: "easeOut" } }
                            }}
                            className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-jeevana-dark leading-[1.1] tracking-tight uppercase mb-6"
                          >
                            {award.title}
                          </motion.h2>
                          
                          <motion.p 
                            variants={{
                              hidden: { opacity: 0, y: 15 },
                              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3, ease: "easeOut" } }
                            }}
                            className="text-gray-600 text-lg leading-relaxed text-balance"
                          >
                            {award.description}
                          </motion.p>
                        </div>
                      </div>
                    </div>

                  </div>
                </motion.article>
              );
            })}

          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="relative z-10 py-32 bg-jeevana-dark text-white border-t border-jeevana-dark">
        <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px 0px" }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
            }}
            className="flex flex-col items-center text-center max-w-3xl mx-auto"
          >
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-jeevana-lime mb-8">
              KEEP BUILDING
            </p>
            <h2 className="font-display font-bold text-5xl md:text-7xl mb-12 tracking-tight">
              Creating the Future.
            </h2>
            <Link 
              href="/contact" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-white text-jeevana-dark text-sm font-bold tracking-[0.15em] uppercase hover:bg-jeevana-lime hover:text-jeevana-dark transition-colors duration-300"
            >
              START A PROJECT 
              <ArrowRight className="ml-3 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedAward && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-jeevana-dark/95 backdrop-blur-sm p-4 md:p-12"
            onClick={() => setSelectedAward(null)}
          >
            <button 
              className="absolute top-6 right-6 md:top-12 md:right-12 text-white/70 hover:text-white transition-colors p-2 z-50"
              onClick={() => setSelectedAward(null)}
              aria-label="Close fullscreen image"
            >
              <X className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-6xl aspect-[4/3] md:aspect-[16/9] shadow-2xl mb-8"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedAward.image}
                alt={selectedAward.title}
                fill
                sizes="100vw"
                className="object-contain"
                quality={100}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-6xl text-center md:text-left px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white uppercase tracking-tight mb-3">{selectedAward.title}</h3>
              <p className="text-white/80 text-base md:text-lg max-w-3xl leading-relaxed">{selectedAward.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
