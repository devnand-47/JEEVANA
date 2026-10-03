"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { projectsData, ProjectCategory } from "@/data/projects";

const filters: ("ALL" | ProjectCategory | "ONGOING" | "COMPLETED")[] = [
  "ALL",
  "RESIDENTIAL",
  "COMMERCIAL",
  "HOSPITALITY",
  "INTERIORS",
  "LANDSCAPE",
  "ONGOING",
  "COMPLETED"
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === "ALL") return true;
    if (activeFilter === "ONGOING") return project.status === "ONGOING";
    if (activeFilter === "COMPLETED") return project.status === "COMPLETED";
    return project.category === activeFilter;
  });

  return (
    <>
      <div className="pt-32 pb-20 bg-jeevana-dark text-white relative">
        <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <SectionHeading 
            title="OUR PORTFOLIO"
            subtitle="Featured Projects"
            centered
            light
          />
        </div>
      </div>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 text-xs tracking-widest uppercase transition-all border ${
                  activeFilter === filter 
                    ? "bg-jeevana-green border-jeevana-green text-white" 
                    : "bg-transparent border-gray-300 text-gray-500 hover:border-jeevana-accent hover:text-jeevana-dark"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))
            ) : (
              <div className="col-span-full text-center py-20 text-gray-500">
                <p>More projects in this category will be updated soon.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
