"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { projectsData } from '@/data/projects';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectLightbox from './ProjectLightbox';

export default function ProjectShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // We map the exact project names the user requested to the data
  // But we use the existing projectsData for IDs, gallery, etc.
  const customTitles = [
    "Modern Kerala Residence",
    "Blue Nile Resort Project, Meppadi",
    "Riyas Residence @ Edavarad - Perambra",
    "Mr Gopal - Hilite Residence, Calicut",
    "Teashop @ Perambra",
    "Mr Jamsal Residence @ Eravattoor - Perambra"
  ];
  
  const customAreas = [
    "",
    "Total Area: 10,000 sqft",
    "",
    "",
    "Client: Mr Sajid",
    ""
  ];

  const project = projectsData[currentIndex];
  const displayTitle = customTitles[currentIndex] || project.title;
  const displayArea = customAreas[currentIndex] || project.area;

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  const images = [];
  if (project.image) images.push(project.image);
  if (project.gallery) images.push(...project.gallery);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 30 : -30,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 30 : -30,
      opacity: 0
    })
  };

  return (
    <section className="relative w-full py-16 md:py-24 bg-[#F5F4EF] text-[#00443A] overflow-hidden min-h-[850px]">
      <div className="w-[92vw] max-w-[1500px] mx-auto relative z-10 flex flex-col">
        
        {/* TOP HEADER */}
        <div className="flex justify-between items-end pb-4 border-b border-[#00443A]/20 mb-8">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase">
              PROJECTS
            </span>
            <span className="text-[10px] md:text-[11px] font-medium tracking-[0.1em] uppercase opacity-60">
              SELECTED WORK
            </span>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="text-[10px] md:text-[11px] font-bold tracking-[0.15em] opacity-80">
              {String(currentIndex + 1).padStart(2, '0')} / {String(projectsData.length).padStart(2, '0')}
            </span>
            <div className="flex gap-4">
              <button 
                onClick={handlePrev} 
                className="text-[#00443A] hover:text-[#C8E600] transition-colors"
                aria-label="Previous project"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={handleNext} 
                className="text-[#00443A] hover:text-[#C8E600] transition-colors"
                aria-label="Next project"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* MAIN FEATURE */}
        <div className="relative w-full overflow-hidden" style={{ minHeight: '300px' }}>
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full flex flex-col"
            >
              <div 
                className="relative w-full group cursor-pointer"
                onClick={() => {
                  if (project.image) setLightboxOpen(true);
                }}
              >
                {/* IMAGE CONTAINER */}
                <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-[560px] lg:h-[650px] overflow-hidden">
                  {project.image ? (
                    <Image 
                      src={project.image} 
                      alt={displayTitle} 
                      fill 
                      sizes="(max-width: 768px) 92vw, 1500px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#003F36] flex flex-col items-center justify-center text-white">
                      <span className="font-display text-lg tracking-[0.2em] font-medium opacity-90 text-center">
                        PHOTOGRAPHS<br />COMING SOON
                      </span>
                    </div>
                  )}

                  {/* DESKTOP OVERLAY (Inside Image) */}
                  <div className="hidden md:flex absolute inset-x-0 bottom-0 pt-32 pb-8 px-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none items-end justify-between">
                    <div className="text-white flex flex-col max-w-2xl pointer-events-auto">
                      <span className="font-display text-[#C8E600] text-sm md:text-base font-bold mb-3">
                        {String(currentIndex + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-display text-[32px] md:text-[42px] font-bold leading-tight mb-3">
                        {displayTitle}
                      </h3>
                      {displayArea && (
                        <p className="text-[11px] md:text-[13px] uppercase tracking-wider font-medium opacity-90 mb-5">
                          {displayArea}
                        </p>
                      )}
                      <button 
                        className="flex items-center text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase hover:text-[#C8E600] transition-colors w-fit"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (project.image) setLightboxOpen(true);
                        }}
                      >
                        VIEW PROJECT <ArrowRight className="ml-2 w-3 h-3" />
                      </button>
                    </div>

                    <div className="text-white text-[11px] font-bold tracking-[0.2em] pointer-events-auto">
                      {String(currentIndex + 1).padStart(2, '0')} / {String(projectsData.length).padStart(2, '0')}
                    </div>
                  </div>
                </div>
              </div>

              {/* MOBILE INFORMATION (Outside Image) */}
              <div className="flex md:hidden flex-col mt-6 mb-2">
                <span className="font-display text-[#C8E600] text-sm font-bold mb-2">
                  {String(currentIndex + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-[28px] font-bold text-[#00443A] leading-tight mb-3">
                  {displayTitle}
                </h3>
                {displayArea && (
                  <p className="text-[11px] uppercase tracking-wider font-medium text-[#00443A] opacity-80 mb-5">
                    {displayArea}
                  </p>
                )}
                <button 
                  className="flex items-center text-[11px] font-bold tracking-[0.2em] text-[#00443A] uppercase"
                  onClick={() => {
                    if (project.image) setLightboxOpen(true);
                  }}
                >
                  VIEW PROJECT <ArrowRight className="ml-2 w-3 h-3" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* PROJECT NAVIGATION INDEX */}
        <div className="mt-12 md:mt-16 mb-8 w-full border-t border-[#00443A]/10 pt-6">
          <ul className="flex flex-col md:flex-row flex-wrap md:flex-nowrap gap-4 md:gap-6 lg:gap-8 justify-between">
            {customTitles.map((title, i) => {
              const isActive = currentIndex === i;
              // Clean title for nav: remove the "@ location" part if it exists for brevity, or keep full
              const shortTitle = title.split(' @')[0].split(',')[0]; 
              
              return (
                <li key={i} className="flex-1">
                  <button
                    onClick={() => {
                      setDirection(i > currentIndex ? 1 : -1);
                      setCurrentIndex(i);
                    }}
                    className={`text-left w-full transition-all group flex flex-row md:flex-col items-baseline md:items-start gap-3 md:gap-1 ${
                      isActive ? "opacity-100" : "opacity-40 hover:opacity-80"
                    }`}
                  >
                    <span className={`font-display text-[12px] md:text-[14px] font-bold ${isActive ? "text-[#C8E600]" : "text-[#00443A]"}`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className={`text-[11px] md:text-[12px] font-medium leading-tight ${isActive ? "text-[#00443A]" : "text-[#00443A]"}`}>
                      {shortTitle}
                    </span>
                    {isActive && (
                      <div className="hidden md:block w-full h-[2px] bg-[#C8E600] mt-3" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <ProjectLightbox 
        images={images}
        title={displayTitle}
        location={project.location}
        isOpen={lightboxOpen}
        initialIndex={0}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
}
