"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectLightboxProps {
  images: string[];
  title: string;
  location?: string;
  isOpen: boolean;
  initialIndex: number;
  onClose: () => void;
}

export default function ProjectLightbox({ images, title, location, isOpen, initialIndex, onClose }: ProjectLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Sync state if it opens with a new index
  useEffect(() => {
    if (isOpen) setCurrentIndex(initialIndex);
  }, [isOpen, initialIndex]);

  const closeLightbox = useCallback(() => {
    onClose();
  }, [onClose]);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, nextImage, prevImage, closeLightbox]);

  // Touch swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) prevImage(); // swiped right -> prev image
    if (diff < -50) nextImage(); // swiped left -> next image
    setTouchStart(null);
  };

  if (images.length === 0) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-md"
        >
          {/* Header Controls */}
          <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start z-10">
            <div className="text-white/80 pointer-events-none drop-shadow-md">
              <h3 className="font-display text-xl uppercase tracking-widest mb-1">{title}</h3>
              <p className="text-xs uppercase tracking-widest text-white/50">{location}</p>
            </div>
            <button 
              onClick={closeLightbox}
              className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close image viewer"
            >
              <X size={32} />
            </button>
          </div>

          {/* Main Image Area */}
          <div 
            className="flex-1 relative w-full flex items-center justify-center touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {images.length > 1 && (
              <button 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 md:left-8 z-10 text-white/50 hover:text-white p-3 rounded-full hover:bg-white/10 transition-all hidden md:block"
                aria-label="Previous image"
              >
                <ChevronLeft size={48} />
              </button>
            )}
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full max-h-[80vh]"
              >
                <Image
                  src={images[currentIndex]}
                  alt={`${title} - Image ${currentIndex + 1}`}
                  fill
                  sizes="100vw"
                  className="object-contain drop-shadow-2xl p-4 md:p-12"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {images.length > 1 && (
              <button 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 md:right-8 z-10 text-white/50 hover:text-white p-3 rounded-full hover:bg-white/10 transition-all hidden md:block"
                aria-label="Next image"
              >
                <ChevronRight size={48} />
              </button>
            )}
          </div>

          {/* Footer & Thumbnails */}
          <div className="w-full pb-8 pt-4 px-6 flex flex-col items-center justify-center z-10">
            <div className="text-white/70 text-sm tracking-widest mb-6 font-medium">
              {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
            </div>
            
            {images.length > 1 && (
              <div className="flex gap-2 md:gap-3 overflow-x-auto max-w-full px-4 pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative w-16 h-12 md:w-20 md:h-16 flex-shrink-0 rounded-sm overflow-hidden transition-all duration-300 ${
                      idx === currentIndex 
                        ? 'ring-2 ring-white opacity-100 scale-105' 
                        : 'opacity-40 hover:opacity-100'
                    }`}
                    aria-label={`View image ${idx + 1}`}
                  >
                    <Image 
                      src={img} 
                      alt="Thumbnail" 
                      fill 
                      sizes="80px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
