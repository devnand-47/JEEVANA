import { notFound } from "next/navigation";
import Image from "next/image";
import { projectsData } from "@/data/projects";
import ScrollReveal from "@/components/ui/ScrollReveal";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] w-full bg-jeevana-dark flex items-end pb-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            className="object-cover opacity-60 mix-blend-overlay" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-jeevana-dark via-jeevana-dark/50 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-white">
          <ScrollReveal>
            <div className="flex gap-4 mb-6">
              <span className="px-4 py-1.5 bg-jeevana-green backdrop-blur-md text-white text-xs tracking-widest font-medium uppercase">
                {project.category}
              </span>
              <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md text-white text-xs tracking-widest font-medium uppercase border border-white/20">
                {project.status}
              </span>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight max-w-4xl text-balance">
              {project.title}
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-gray-300 flex items-center tracking-widest uppercase text-sm">
              <span className="text-jeevana-accent mr-3">LOCATION:</span> {project.location}
              {project.year && (
                <>
                  <span className="mx-4 text-gray-600">|</span>
                  <span className="text-jeevana-accent mr-3">YEAR:</span> {project.year}
                </>
              )}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Overview */}
            <div className="lg:col-span-8">
              <ScrollReveal>
                <h2 className="font-display text-3xl font-bold text-jeevana-dark mb-8">PROJECT OVERVIEW</h2>
                <div className="prose prose-lg text-gray-600 max-w-none">
                  <p className="lead text-xl text-gray-800 mb-8">{project.description}</p>
                </div>
              </ScrollReveal>

              {/* Technical Specifications */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.design && (
                  <ScrollReveal>
                    <div className="p-8 bg-gray-50 border-t-2 border-jeevana-accent">
                      <h4 className="font-sans text-xs tracking-widest text-gray-400 uppercase mb-2">Design Focus</h4>
                      <p className="font-medium text-jeevana-dark">{project.design}</p>
                    </div>
                  </ScrollReveal>
                )}
                {project.execution && (
                  <ScrollReveal delay={0.1}>
                    <div className="p-8 bg-gray-50 border-t-2 border-jeevana-green">
                      <h4 className="font-sans text-xs tracking-widest text-gray-400 uppercase mb-2">Execution</h4>
                      <p className="font-medium text-jeevana-dark">{project.execution}</p>
                    </div>
                  </ScrollReveal>
                )}
                {project.interior && (
                  <ScrollReveal delay={0.2}>
                    <div className="p-8 bg-gray-50 border-t-2 border-jeevana-dark">
                      <h4 className="font-sans text-xs tracking-widest text-gray-400 uppercase mb-2">Interior</h4>
                      <p className="font-medium text-jeevana-dark">{project.interior}</p>
                    </div>
                  </ScrollReveal>
                )}
                {project.landscape && (
                  <ScrollReveal delay={0.3}>
                    <div className="p-8 bg-gray-50 border-t-2 border-gray-300">
                      <h4 className="font-sans text-xs tracking-widest text-gray-400 uppercase mb-2">Landscape</h4>
                      <p className="font-medium text-jeevana-dark">{project.landscape}</p>
                    </div>
                  </ScrollReveal>
                )}
              </div>
              
              {project.technicalInfo && (
                <ScrollReveal delay={0.4}>
                  <div className="mt-8 p-8 bg-jeevana-dark text-white">
                    <h4 className="font-sans text-xs tracking-widest text-jeevana-accent uppercase mb-2">Technical Information</h4>
                    <p className="font-medium">{project.technicalInfo}</p>
                  </div>
                </ScrollReveal>
              )}
            </div>
            
            {/* Sidebar / Quick Info */}
            <div className="lg:col-span-4">
              <ScrollReveal>
                <div className="bg-gray-50 p-10 border border-gray-200">
                  <h3 className="font-display text-xl font-bold text-jeevana-dark mb-8">PROJECT FACTS</h3>
                  <ul className="space-y-6">
                    <li className="pb-6 border-b border-gray-200">
                      <p className="text-xs tracking-widest text-gray-400 uppercase mb-1">Client / Owner</p>
                      <p className="font-medium text-jeevana-dark">Private</p>
                    </li>
                    <li className="pb-6 border-b border-gray-200">
                      <p className="text-xs tracking-widest text-gray-400 uppercase mb-1">Contractor</p>
                      <p className="font-medium text-jeevana-dark">Jeevana Builders</p>
                    </li>
                    <li>
                      <p className="text-xs tracking-widest text-gray-400 uppercase mb-1">Status</p>
                      <p className="font-medium text-jeevana-dark">{project.status}</p>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-24 bg-gray-100">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <h2 className="font-display text-3xl font-bold text-jeevana-dark mb-12">GALLERY</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((image, index) => (
                <ScrollReveal key={index} delay={(index % 2) * 0.1}>
                  <div className="relative aspect-video w-full overflow-hidden bg-gray-300">
                    <Image 
                      src={image} 
                      alt={`${project.title} gallery image ${index + 1}`} 
                      fill 
                      className="object-cover hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
