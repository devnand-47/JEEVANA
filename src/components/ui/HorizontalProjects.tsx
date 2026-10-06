"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { projectsData } from '@/data/projects';

export default function HorizontalProjects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'center',
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full overflow-hidden bg-jeevana-dark py-16 md:py-24 text-white">
      <div className="absolute inset-0 bg-grid-dark opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 mb-12 relative z-10 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <span className="text-jeevana-lime text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Selected Works</span>
          <h2 className="h2 text-white">PROJECT<br />SHOWCASE.</h2>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={scrollPrev} 
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-jeevana-dark hover:border-white transition-colors focus:outline-none focus:ring-2 focus:ring-jeevana-lime"
            aria-label="Previous project"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={scrollNext} 
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-jeevana-dark hover:border-white transition-colors focus:outline-none focus:ring-2 focus:ring-jeevana-lime"
            aria-label="Next project"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden cursor-grab active:cursor-grabbing relative z-10" ref={emblaRef}>
        <div className="flex">
          {projectsData.map((project, index) => {
            const isActive = index === selectedIndex;
            return (
              <div 
                key={project.id} 
                className="flex-[0_0_85%] md:flex-[0_0_60%] lg:flex-[0_0_45%] min-w-0 pl-6 transition-all duration-700 ease-out"
                style={{
                  opacity: isActive ? 1 : 0.4,
                  transform: isActive ? 'scale(1)' : 'scale(0.95)'
                }}
              >
                <Link href={`/projects/${project.id}`} className="block group relative">
                  <div className="relative aspect-[4/5] md:aspect-square w-full overflow-hidden bg-gray-900 mb-6 flex flex-col items-center justify-center">
                    {project.image ? (
                      <>
                        <Image 
                          src={project.image} 
                          alt={project.title} 
                          fill 
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                          className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                        />
                        <div className="absolute top-4 left-4 bg-jeevana-lime text-jeevana-dark text-[10px] font-bold tracking-widest uppercase px-3 py-1 shadow-sm">
                          Conceptual Visualization
                        </div>
                      </>
                    ) : (
                      <span className="text-gray-500 text-xs tracking-widest uppercase font-medium">Coming Soon</span>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-baseline mb-2 gap-3">
                        <span className="font-display text-jeevana-lime font-bold text-sm">{String(index + 1).padStart(2, '0')}</span>
                        <span className="text-gray-400 text-xs tracking-[0.2em] uppercase font-bold">{project.category}</span>
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-jeevana-lime transition-colors">{project.title}</h3>
                      <p className="text-gray-400 text-sm tracking-widest uppercase">{project.location}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-jeevana-lime group-hover:border-jeevana-lime group-hover:text-jeevana-dark transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
