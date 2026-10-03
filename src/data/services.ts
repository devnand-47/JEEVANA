import { DraftingCompass, HardHat, Hammer, Briefcase, Shovel, Home } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription?: string;
  icon: LucideIcon;
  image: string;
}

export const servicesData: Service[] = [
  {
    id: "civil-building",
    title: "CIVIL & BUILDING CONSTRUCTION",
    shortDescription: "From structural execution to finishing.",
    icon: HardHat,
    image: "/project_commercial.jpg"
  },
  {
    id: "interior-finishing",
    title: "INTERIOR & FINISHING",
    shortDescription: "Premium material detailing and spaces.",
    icon: Home,
    image: "/project_interior.jpg"
  },
  {
    id: "landscaping",
    title: "LANDSCAPING & OUTDOOR",
    shortDescription: "Tropical, structured exterior environments.",
    icon: Shovel,
    image: "/project_landscape.jpg"
  },
  {
    id: "residential-commercial",
    title: "RESIDENTIAL & COMMERCIAL",
    shortDescription: "Scalable solutions for all sectors.",
    icon: Hammer,
    image: "/project_residential.jpg"
  },
  {
    id: "project-management",
    title: "PROJECT MANAGEMENT",
    shortDescription: "End-to-end execution and delivery.",
    icon: Briefcase,
    image: "/project_hospitality.jpg"
  },
  {
    id: "design-engineering",
    title: "DESIGN & ENGINEERING",
    shortDescription: "Integrated planning and structural design.",
    icon: DraftingCompass,
    image: "/project_commercial.jpg"
  }
];
