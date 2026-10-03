"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { servicesData } from '@/data/services';
import ServiceCard from './ServiceCard';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HorizontalServices() {
  const targetRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Map scroll progress to horizontal translation
  // If reduced motion is preferred, we don't translate horizontally and instead rely on native overflow-x scroll
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-gray-50 border-t border-gray-200">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
          <h2 className="h2 text-jeevana-dark">WHAT<br />WE DO.</h2>
          <Link href="/services" className="inline-flex items-center text-sm font-bold tracking-widest text-gray-500 hover:text-jeevana-dark transition-colors group">
            <span className="border-b border-transparent group-hover:border-jeevana-dark pb-1 transition-all">ALL SERVICES</span>
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Native scroll wrapper for mobile / reduced motion, animated for desktop */}
        <div className={`w-full ${shouldReduceMotion ? 'overflow-x-auto snap-x snap-mandatory' : ''}`}>
          <motion.div 
            style={{ x: shouldReduceMotion ? 0 : x }} 
            className="flex gap-6 px-6 container mx-auto w-[max-content]"
          >
            {servicesData.map((service, index) => (
              <div 
                key={service.id} 
                className={`w-[85vw] md:w-[45vw] lg:w-[30vw] flex-shrink-0 ${shouldReduceMotion ? 'snap-center' : ''}`}
              >
                <ServiceCard service={service} index={index} />
              </div>
            ))}
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
