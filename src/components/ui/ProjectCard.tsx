"use client";

import { useState } from "react";
import { Project } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { ArrowRight } from "lucide-react";
import ProjectLightbox from "./ProjectLightbox";

export default function ProjectCard({ project, index }: { project: Project, index: number }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const images: string[] = [];
  if (project.image) images.push(project.image);
  if (project.gallery) images.push(...project.gallery);

  return (
    <>
      <ScrollReveal delay={(index % 3) * 0.1}>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start group">
          
          {/* TEXT CONTENT - 35-40% */}
          <div className="w-full md:w-[40%] lg:w-[35%] flex flex-col pt-2 md:pt-10">
            <Link href={`/projects/${project.id}`} className="block">
              <div className="flex items-baseline mb-6 gap-6">
                <span className="font-display text-jeevana-dark font-bold text-2xl lg:text-3xl opacity-90">{String(index + 1).padStart(2, '0')}</span>
                <span className="text-gray-400 text-[10px] tracking-[0.25em] uppercase font-bold">{project.category}</span>
              </div>
              
              <h3 className="font-display text-3xl lg:text-4xl font-bold text-jeevana-dark mb-10 leading-tight group-hover:text-jeevana-green transition-colors">{project.title}</h3>
              
              <div className="space-y-5 mb-12">
                <div>
                  <p className="text-[10px] tracking-[0.15em] text-gray-400 uppercase mb-1">Type</p>
                  <p className="text-sm font-medium text-jeevana-dark uppercase tracking-wider">{project.category}</p>
                </div>
                
                {project.area && (
                  <div>
                    <p className="text-[10px] tracking-[0.15em] text-gray-400 uppercase mb-1">Area</p>
                    <p className="text-sm font-medium text-jeevana-dark uppercase tracking-wider">{project.area}</p>
                  </div>
                )}
                
                {project.location && (
                  <div>
                    <p className="text-[10px] tracking-[0.15em] text-gray-400 uppercase mb-1">Location</p>
                    <p className="text-sm font-medium text-jeevana-dark uppercase tracking-wider">{project.location}</p>
                  </div>
                )}
              </div>
              
              <div className="flex items-center text-jeevana-lime font-bold text-xs tracking-[0.2em] uppercase mt-auto group/cta">
                VIEW PROJECT <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-2" />
              </div>
            </Link>
          </div>
          
          {/* IMAGE - 60-65% */}
          <div className="w-full md:w-[60%] lg:w-[65%]">
            <div 
              className={`relative w-full overflow-hidden bg-white flex items-center justify-center border border-gray-200/60 rounded-sm shadow-sm p-2 md:p-5 ${project.image ? 'cursor-pointer' : ''}`} 
              style={{ aspectRatio: '16/10' }}
              onClick={() => {
                if (project.image) {
                  setLightboxOpen(true);
                }
              }}
            >
              {project.image ? (
                <div className="relative w-full h-full overflow-hidden bg-gray-50/50">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 65vw"
                    className="object-contain p-2 group-hover:scale-[1.02] transition-transform duration-500 ease-out" 
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-400 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex items-center text-white font-medium tracking-[0.15em] uppercase text-xs border border-white/40 px-6 py-2.5 bg-black/40 backdrop-blur-md rounded-sm hover:bg-black/60 transition-colors duration-300 shadow-xl group/btn">
                      VIEW GALLERY <ArrowRight className="ml-2 w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </div>
                  </div>
                  {images.length > 0 && (
                    <div className="absolute bottom-3 right-4 md:bottom-4 md:right-5 bg-black/30 backdrop-blur-md text-white/90 px-3 py-1 text-[10px] tracking-widest uppercase font-medium rounded-sm border border-white/10 z-10">
                      01 / {String(images.length).padStart(2, '0')}
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-center p-8 bg-gray-50/80 w-full h-full border border-gray-100 border-dashed">
                  <span className="text-jeevana-dark font-display text-4xl mb-4 opacity-5">{String(index + 1).padStart(2, '0')}</span>
                  <span className="text-gray-400 text-xs tracking-widest uppercase font-medium">Images Coming Soon</span>
                </div>
              )}
            </div>
          </div>
          
        </div>
      </ScrollReveal>

      <ProjectLightbox 
        images={images}
        title={project.title}
        location={project.location}
        isOpen={lightboxOpen}
        initialIndex={0}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
