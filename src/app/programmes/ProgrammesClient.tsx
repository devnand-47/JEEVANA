"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { programmes } from "@/data/programmes";

export default function ProgrammesClient() {
  const [selectedProgramme, setSelectedProgramme] = useState<typeof programmes[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Close lightbox on escape key, navigate on arrows
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProgramme(null);
      if (selectedProgramme && selectedProgramme.images.length > 1) {
        if (e.key === "ArrowRight") {
          setCurrentImageIndex((prev) => (prev === selectedProgramme.images.length - 1 ? 0 : prev + 1));
        }
        if (e.key === "ArrowLeft") {
          setCurrentImageIndex((prev) => (prev === 0 ? selectedProgramme.images.length - 1 : prev - 1));
        }
      }
    };
    if (selectedProgramme) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedProgramme]);

  const openLightbox = (programme: typeof programmes[0], index: number) => {
    setSelectedProgramme(programme);
    setCurrentImageIndex(index);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProgramme) {
      setCurrentImageIndex((prev) => (prev === selectedProgramme.images.length - 1 ? 0 : prev + 1));
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProgramme) {
      setCurrentImageIndex((prev) => (prev === 0 ? selectedProgramme.images.length - 1 : prev - 1));
    }
  };

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
                COMMUNITY / ENGAGEMENT
              </p>
              <h1 className="font-display font-bold uppercase text-jeevana-dark mb-8 md:mb-12 text-[clamp(2.8rem,11vw,5rem)] md:text-[clamp(3.4rem,6vw,7rem)] leading-[0.95] tracking-[-0.035em]">
                PUBLIC<br />PROGRAMMES
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="text-gray-600 text-[15px] md:text-[17px] font-normal max-w-[480px] leading-[1.65] text-balance"
            >
              Documenting moments of participation, community engagement and public initiatives connected with the journey of Jeevana.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            className="md:pt-4"
          >
            <p className="text-[10px] md:text-[11px] font-medium tracking-[0.12em] opacity-60 uppercase text-gray-500 [writing-mode:horizontal-tb] md:[writing-mode:vertical-rl] md:rotate-180">
              PROGRAMME ARCHIVE <span className="mx-2 md:my-2">—</span> PUBLIC ENGAGEMENT
            </p>
          </motion.div>
        </div>
      </section>

      {/* PROGRAMMES LIST */}
      <section className="relative z-10 pb-32">
        <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col gap-32 md:gap-48 lg:gap-64">
            
            {programmes.map((programme, index) => {
              const isImageRight = index % 2 === 0;
              const hasMultipleImages = programme.images.length > 1;
              const primaryImage = programme.images[0];
              const secondaryImages = programme.images.slice(1, 5); // Show up to 4 small images
              
              return (
                <motion.article 
                  key={programme.id}
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
                      {programme.number}
                    </span>
                  </motion.div>
                  
                  <div className={`flex flex-col ${isImageRight ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-start gap-12 lg:gap-24`}>
                    
                    {/* IMAGE GALLERY CONTAINER */}
                    <div className="w-full lg:w-7/12 flex flex-col gap-4">
                      {/* Primary Image */}
                      <div 
                        className="group relative cursor-pointer overflow-hidden border border-gray-100 p-2 bg-white"
                        onClick={() => openLightbox(programme, 0)}
                        aria-label={`View primary image of ${programme.title}`}
                        role="button"
                        tabIndex={0}
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
                              src={primaryImage}
                              alt={programme.title}
                              fill
                              sizes="(max-width: 1024px) 100vw, 60vw"
                              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                              priority={index === 0}
                            />
                          </motion.div>
                        </motion.div>
                        
                        {/* Hover Label Desktop */}
                        <div className="hidden lg:flex absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none items-center bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-jeevana-dark mr-2">VIEW GALLERY</span>
                          <ArrowRight className="w-3 h-3 text-jeevana-dark transform transition-transform duration-500 group-hover:translate-x-1" />
                        </div>
                      </div>

                      {/* Secondary Images */}
                      {hasMultipleImages && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {secondaryImages.map((img, i) => (
                            <div 
                              key={i} 
                              className="relative aspect-square overflow-hidden border border-gray-100 p-1 bg-white cursor-pointer group"
                              onClick={() => openLightbox(programme, i + 1)}
                            >
                              <div className="relative w-full h-full overflow-hidden bg-gray-100">
                                <Image
                                  src={img}
                                  alt={`${programme.title} detail ${i + 1}`}
                                  fill
                                  sizes="(max-width: 768px) 50vw, 15vw"
                                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                              </div>
                            </div>
                          ))}
                          {programme.images.length > 5 && (
                            <div 
                              className="relative aspect-square overflow-hidden border border-gray-100 p-1 bg-white cursor-pointer group flex items-center justify-center bg-gray-50"
                              onClick={() => openLightbox(programme, 5)}
                            >
                              <span className="text-sm font-semibold text-gray-500 group-hover:text-jeevana-dark transition-colors">
                                +{programme.images.length - 5}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* TEXT CONTAINER */}
                    <div className="w-full lg:w-5/12 flex flex-col pt-4 lg:pt-12">
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
                            {programme.number}
                          </span>
                        </motion.div>

                        <div className="flex flex-col">
                          <motion.div
                            variants={{
                              hidden: { opacity: 0, y: 15 },
                              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.15, ease: "easeOut" } }
                            }}
                            className="flex flex-wrap items-center gap-4 mb-4 text-[11px] font-semibold tracking-[0.15em] uppercase text-gray-500"
                          >
                            <span>{programme.category}</span>
                            {(programme.year || programme.location) && <span className="w-1 h-1 rounded-full bg-gray-300" />}
                            {programme.year && <span>{programme.year}</span>}
                            {programme.year && programme.location && <span>—</span>}
                            {programme.location && <span>{programme.location}</span>}
                          </motion.div>

                          <motion.h2 
                            variants={{
                              hidden: { opacity: 0, y: 15 },
                              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, ease: "easeOut" } }
                            }}
                            className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-jeevana-dark leading-[1.1] tracking-tight uppercase mb-6"
                          >
                            {programme.title}
                          </motion.h2>
                          
                          <motion.p 
                            variants={{
                              hidden: { opacity: 0, y: 15 },
                              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3, ease: "easeOut" } }
                            }}
                            className="text-gray-600 text-lg leading-relaxed text-balance"
                          >
                            {programme.description}
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
              COMMUNITY MATTERS
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
        {selectedProgramme && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-jeevana-dark/95 backdrop-blur-sm p-0 md:p-12"
            onClick={() => setSelectedProgramme(null)}
          >
            {/* Top Bar for Mobile/Desktop */}
            <div className="absolute top-0 left-0 right-0 p-4 md:p-8 flex justify-between items-start z-50 bg-gradient-to-b from-black/50 to-transparent">
              <div className="text-white">
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-70 mb-1">
                  {currentImageIndex + 1} / {selectedProgramme.images.length}
                </p>
                <h3 className="font-display font-bold text-lg md:text-2xl uppercase tracking-tight max-w-[80vw] truncate">
                  {selectedProgramme.title}
                </h3>
              </div>
              <button 
                className="text-white/70 hover:text-white transition-colors p-2"
                onClick={() => setSelectedProgramme(null)}
                aria-label="Close fullscreen image"
              >
                <X className="w-6 h-6 md:w-10 md:h-10" strokeWidth={1} />
              </button>
            </div>

            {/* Navigation Buttons */}
            {selectedProgramme.images.length > 1 && (
              <>
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white/50 hover:text-white p-2 transition-colors hidden md:block"
                  onClick={prevImage}
                >
                  <ChevronLeft className="w-12 h-12" strokeWidth={1} />
                </button>
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white/50 hover:text-white p-2 transition-colors hidden md:block"
                  onClick={nextImage}
                >
                  <ChevronRight className="w-12 h-12" strokeWidth={1} />
                </button>
              </>
            )}
            
            {/* Image Container with Swipe Area for Mobile */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full md:max-w-7xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
              // Simple swipe implementation
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = offset.x;
                if (swipe < -50) {
                  setCurrentImageIndex((prev) => (prev === selectedProgramme.images.length - 1 ? 0 : prev + 1));
                } else if (swipe > 50) {
                  setCurrentImageIndex((prev) => (prev === 0 ? selectedProgramme.images.length - 1 : prev - 1));
                }
              }}
            >
              <div className="relative w-full h-full px-4 pt-24 pb-20 md:p-0">
                <Image
                  key={currentImageIndex}
                  src={selectedProgramme.images[currentImageIndex]}
                  alt={`${selectedProgramme.title} - Image ${currentImageIndex + 1}`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  quality={100}
                />
              </div>

              {/* Mobile Swipe Indicators */}
              {selectedProgramme.images.length > 1 && (
                <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 md:hidden">
                  {selectedProgramme.images.map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-1 rounded-full transition-all ${i === currentImageIndex ? 'w-6 bg-white' : 'w-2 bg-white/30'}`} 
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
