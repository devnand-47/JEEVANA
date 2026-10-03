import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { servicesData } from "@/data/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Jeevana Builders, Contractors & Designers",
  description: "Explore our comprehensive construction solutions including civil works, structural engineering, interior finishing, remodeling, and project management.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="pt-32 pb-20 bg-jeevana-dark text-white relative">
        <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <SectionHeading 
            title="OUR EXPERTISE"
            subtitle="Comprehensive Solutions"
            centered
            light
          />
        </div>
      </div>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
