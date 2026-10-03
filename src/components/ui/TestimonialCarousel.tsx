"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  project: string;
  location: string;
  image?: string;
}

const placeholderTestimonials: Testimonial[] = [];

export default function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' }, [
    Autoplay({ delay: 6000, stopOnInteraction: true, stopOnMouseEnter: true })
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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

  if (placeholderTestimonials.length === 0) {
    return (
      <div className="w-full py-24 bg-gray-50 flex items-center justify-center text-center">
        <div className="max-w-md px-6">
          <Quote className="w-8 h-8 text-jeevana-lime/50 mx-auto mb-4" />
          <h3 className="font-display text-2xl font-bold text-jeevana-dark mb-2">CLIENT EXPERIENCES</h3>
          <p className="text-gray-500">No client reviews published yet. Please check back later for client experiences and testimonials.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
        <h2 className="h2 text-jeevana-dark">CLIENT<br />EXPERIENCES.</h2>
        <div className="flex gap-4">
          <button 
            onClick={scrollPrev} 
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-jeevana-dark hover:text-white hover:border-jeevana-dark transition-colors focus:outline-none focus:ring-2 focus:ring-jeevana-lime"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={scrollNext} 
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-jeevana-dark hover:text-white hover:border-jeevana-dark transition-colors focus:outline-none focus:ring-2 focus:ring-jeevana-lime"
            aria-label="Next testimonial"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex -ml-4 md:-ml-6">
          {placeholderTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex-[0_0_90%] md:flex-[0_0_60%] lg:flex-[0_0_50%] min-w-0 pl-4 md:pl-6">
              <div className="bg-white p-8 md:p-12 border border-gray-100 h-full flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <Quote className="w-8 h-8 text-jeevana-lime mb-6" />
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10 flex-grow font-serif italic">"{testimonial.quote}"</p>
                
                <div className="flex items-center gap-4 mt-auto">
                  {testimonial.image ? (
                    <div className="w-12 h-12 rounded-full overflow-hidden relative bg-gray-100">
                      <Image src={testimonial.image} alt={testimonial.clientName} fill sizes="48px" className="object-cover" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-jeevana-dark flex items-center justify-center text-white font-display font-bold">
                      {testimonial.clientName.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h4 className="font-bold text-jeevana-dark">{testimonial.clientName}</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{testimonial.project}, {testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
