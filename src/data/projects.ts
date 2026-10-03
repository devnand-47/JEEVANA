export type ProjectCategory = "RESIDENTIAL" | "COMMERCIAL" | "HOSPITALITY" | "INTERIORS" | "LANDSCAPE";

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  status: "COMPLETED" | "ONGOING";
  location?: string;
  area?: string;
  year?: string;
  design?: string;
  execution?: string;
  interior?: string;
  landscape?: string;
  technicalInfo?: string;
  gallery?: string[];
}

export const projectsData: Project[] = [
  {
    id: "residential-concept",
    title: "Modern Kerala Residence",
    category: "RESIDENTIAL",
    description: "A premium contemporary Kerala villa concept featuring natural stone, expansive windows, and tropical landscaping.",
    image: "/project_residential.jpg",
    status: "COMPLETED",
    location: "CONCEPTUAL VISUALIZATION"
  },
  {
    id: "commercial-concept",
    title: "Contemporary Commercial Space",
    category: "COMMERCIAL",
    description: "A modern commercial building designed with glass and concrete, providing premium workspace in a tropical environment.",
    image: "/project_commercial.jpg",
    status: "COMPLETED",
    location: "CONCEPTUAL VISUALIZATION"
  },
  {
    id: "hospitality-concept",
    title: "Tropical Resort Concept",
    category: "HOSPITALITY",
    description: "An eco-friendly Kerala resort visualization integrating natural materials with water and landscape elements.",
    image: "/project_hospitality.jpg",
    status: "COMPLETED",
    location: "CONCEPTUAL VISUALIZATION"
  },
  {
    id: "interior-concept",
    title: "Premium Interior Design",
    category: "INTERIORS",
    description: "A warm and elegant interior space utilizing natural wood, stone accents, and optimized daylighting.",
    image: "/project_interior.jpg",
    status: "COMPLETED",
    location: "CONCEPTUAL VISUALIZATION"
  },
  {
    id: "landscape-concept",
    title: "Architectural Landscaping",
    category: "LANDSCAPE",
    description: "A lush, structured tropical landscape layout enhancing a modern architectural footprint.",
    image: "/project_landscape.jpg",
    status: "COMPLETED",
    location: "CONCEPTUAL VISUALIZATION"
  }
];
