"use client";

import { useState } from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
import ScrollReveal from "./ScrollReveal";
import ProjectLightbox from "./ProjectLightbox";

export default function ProjectGalleryClient({ project }: { project: Project }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const images: string[] = [];
  if (project.image) images.push(project.image);
  if (project.gallery) images.push(...project.gallery);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  if (images.length === 0) return null;

  return (
    <>
      <section className="py-24 bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold text-jeevana-dark mb-12">PROJECT GALLERY</h2>
          </ScrollReveal>
          
          <div className="flex flex-col lg:flex-row gap-6">
            {/* MAIN IMAGE - Left Side (Dominant) */}
            {project.image && (
              <ScrollReveal delay={0.1}>
                <div 
                  className={`relative w-full ${project.gallery && project.gallery.length > 0 ? 'lg:w-2/3' : 'lg:w-full'} bg-white border border-gray-200/60 rounded-sm shadow-sm p-2 md:p-5 cursor-pointer group flex items-center justify-center`} 
                  style={{ minHeight: '60vh' }}
                  onClick={() => openLightbox(0)}
                >
                  <div className="relative w-full h-full overflow-hidden bg-gray-50/50">
                    <Image 
                      src={project.image} 
                      alt={`${project.title} - Main Feature`} 
                      fill 
                      sizes="(max-width: 1024px) 100vw, 66vw"
                      className="object-contain p-2 group-hover:scale-[1.02] transition-transform duration-500 ease-out" 
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-400 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex items-center text-white font-medium tracking-[0.15em] uppercase text-xs border border-white/40 px-6 py-2.5 bg-black/40 backdrop-blur-md rounded-sm hover:bg-black/60 transition-colors duration-300 shadow-xl group/btn">
                        VIEW GALLERY
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* SUPPORTING IMAGES - Right Side (Stacked) */}
            {project.gallery && project.gallery.length > 0 && (
              <div className={`w-full ${project.image ? 'lg:w-1/3' : 'lg:w-full'} flex flex-col gap-6`}>
                {project.gallery.slice(0, 2).map((image, index) => {
                  const globalIndex = project.image ? index + 1 : index;
                  return (
                    <ScrollReveal key={index} delay={0.2 + (index * 0.1)}>
                      <div 
                        className="relative w-full flex-1 bg-white border border-gray-200/60 rounded-sm shadow-sm p-2 md:p-4 cursor-pointer group flex items-center justify-center min-h-[35vh]"
                        onClick={() => openLightbox(globalIndex)}
                      >
                        <div className="relative w-full h-full overflow-hidden bg-gray-50/50">
                          <Image 
                            src={image} 
                            alt={`${project.title} - Gallery Image ${index + 1}`} 
                            fill 
                            sizes="(max-width: 1024px) 100vw, 33vw"
                            className="object-contain p-2 group-hover:scale-[1.02] transition-transform duration-500 ease-out" 
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-400 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <div className="flex items-center text-white font-medium tracking-[0.15em] uppercase text-[10px] border border-white/40 px-4 py-2 bg-black/40 backdrop-blur-md rounded-sm hover:bg-black/60 transition-colors duration-300 shadow-xl group/btn">
                              EXPAND
                            </div>
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            )}
          </div>

          {/* ADDITIONAL IMAGES - Grid below */}
          {project.gallery && project.gallery.length > 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {project.gallery.slice(2).map((image, index) => {
                const globalIndex = project.image ? index + 3 : index + 2;
                return (
                  <ScrollReveal key={index + 2} delay={(index % 3) * 0.1}>
                    <div 
                      className="relative aspect-[4/3] w-full bg-white border border-gray-200/60 rounded-sm shadow-sm p-2 md:p-4 cursor-pointer group flex items-center justify-center"
                      onClick={() => openLightbox(globalIndex)}
                    >
                      <div className="relative w-full h-full overflow-hidden bg-gray-50/50">
                        <Image 
                          src={image} 
                          alt={`${project.title} - Gallery Image ${index + 3}`} 
                          fill 
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-contain p-2 group-hover:scale-[1.02] transition-transform duration-500 ease-out" 
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-400 flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <div className="flex items-center text-white font-medium tracking-[0.15em] uppercase text-[10px] border border-white/40 px-4 py-2 bg-black/40 backdrop-blur-md rounded-sm hover:bg-black/60 transition-colors duration-300 shadow-xl group/btn">
                            EXPAND
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <ProjectLightbox 
        images={images}
        title={project.title}
        location={project.location}
        isOpen={lightboxOpen}
        initialIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
