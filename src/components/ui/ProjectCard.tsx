import { Project } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { ArrowRight } from "lucide-react";

export default function ProjectCard({ project, index }: { project: Project, index: number }) {
  return (
    <ScrollReveal delay={(index % 3) * 0.1}>
      <Link href={`/projects/${project.id}`} className="block group">
        <div className="flex items-baseline mb-4 gap-4">
          <span className="font-display text-jeevana-lime font-bold text-lg">{String(index + 1).padStart(2, '0')}</span>
          <span className="text-gray-400 text-xs tracking-[0.2em] uppercase font-bold">{project.category}</span>
        </div>
        
        <div className="relative aspect-[4/5] w-full overflow-hidden mb-6 bg-jeevana-dark">
          <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-[1.03] transition-transform duration-700 opacity-80 group-hover:opacity-100" 
          />
        </div>
        
        <h3 className="font-display text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-6 tracking-widest text-xs uppercase">{project.location}</p>
        
        <div className="flex items-center text-jeevana-lime font-medium text-xs tracking-[0.2em] uppercase">
          VIEW PROJECT <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
        </div>
      </Link>
    </ScrollReveal>
  );
}
