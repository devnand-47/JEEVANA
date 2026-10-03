import { Service } from "@/data/services";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ service, index }: { service: Service, index: number }) {
  return (
    <ScrollReveal delay={(index % 3) * 0.1}>
      <Link href="/services" className="block group h-full">
        <div className="bg-white border border-gray-100 hover:border-jeevana-lime hover:shadow-2xl hover:shadow-jeevana-dark/5 transition-all duration-500 h-full overflow-hidden flex flex-col">
          <div className="relative h-64 w-full bg-gray-100 overflow-hidden">
            <Image 
              src={service.image} 
              alt={service.title} 
              fill 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-[1.03] transition-transform duration-700 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-jeevana-dark/20 group-hover:bg-transparent transition-colors duration-500" />
            <div className="absolute top-4 right-4 w-12 h-12 bg-white flex items-center justify-center rounded-full text-jeevana-green shadow-sm">
              <service.icon className="w-5 h-5" />
            </div>
          </div>
          
          <div className="p-8 flex flex-col flex-grow">
            <h3 className="font-display text-xl font-bold mb-3 text-jeevana-dark tracking-tight leading-snug uppercase">
              {service.title}
            </h3>
            <p className="text-sm text-gray-500 mb-8 leading-relaxed">
              {service.shortDescription}
            </p>
            <div className="flex items-center text-jeevana-green text-xs font-bold tracking-[0.2em] uppercase mt-auto">
              VIEW SERVICE <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform text-jeevana-lime" />
            </div>
          </div>
        </div>
      </Link>
    </ScrollReveal>
  );
}
