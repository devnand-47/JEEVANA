import Image from "next/image";
import { Leader } from "@/data/leadership";
import ScrollReveal from "./ScrollReveal";

export default function LeadershipCard({ leader, reversed = false }: { leader: Leader, reversed?: boolean }) {
  return (
    <div className={`flex flex-col ${reversed ? "md:flex-row-reverse" : "md:flex-row"} gap-12 items-center mb-24`}>
      <ScrollReveal width="100%">
        <div className="relative w-full max-w-sm mx-auto aspect-square group">
          {/* Architectural decorative rings */}
          <div className="absolute inset-0 rounded-full border border-jeevana-lime/30 scale-105 group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-0 rounded-full border border-jeevana-leaf/20 scale-110 group-hover:scale-[1.15] transition-transform duration-1000 delay-100" />
          
          {/* Circular Image Container */}
          <div className="relative w-full h-full rounded-full overflow-hidden bg-jeevana-green border-4 border-white shadow-xl shadow-jeevana-dark/10">
            <Image 
              src={leader.image} 
              alt={leader.name} 
              fill 
              className="object-cover object-top hover:scale-105 transition-transform duration-700" 
            />
          </div>
          
          {/* Leaf-inspired decorative shape */}
          <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-jeevana-lime rounded-tl-full rounded-br-full opacity-80" />
        </div>
      </ScrollReveal>
      
      <div className="flex-1">
        <ScrollReveal>
          <h3 className="font-display text-3xl font-bold text-jeevana-dark mb-2 tracking-wide">{leader.name}</h3>
          <p className="text-jeevana-green font-medium tracking-widest text-sm uppercase mb-6">{leader.title}</p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <div className="space-y-4 text-gray-600 mb-8">
            {leader.bio.map((p, i) => (
              <p key={i} className="leading-relaxed">{p}</p>
            ))}
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.3}>
          <div className="bg-white p-6 border-l-2 border-jeevana-lime shadow-sm">
            <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-jeevana-dark mb-4">
              Key Exposure & Expertise
            </h4>
            <ul className="space-y-2">
              {leader.highlights.map((h, i) => (
                <li key={i} className="text-sm text-gray-600 flex items-start">
                  <span className="text-jeevana-leaf mr-2 mt-0.5">▪</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
