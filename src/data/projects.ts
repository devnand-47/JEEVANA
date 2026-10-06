export type ProjectCategory = "RESIDENTIAL" | "COMMERCIAL" | "HOSPITALITY" | "INTERIORS" | "LANDSCAPE";

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image?: string;
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
  client?: string;
}

export const projectsData: Project[] = [
  {
    id: "project1",
    title: "Modern Kerala Residence",
    category: "RESIDENTIAL",
    description: "A premium contemporary Kerala villa concept.",
    status: "ONGOING"
  },
  {
    id: "project2",
    title: "Blue Nile Resort Project, Meppadi",
    category: "HOSPITALITY",
    description: "Premium resort project in Meppadi.",
    area: "10,000 sqft",
    image: "/images/projects/project2/p2image1.jpeg",
    status: "COMPLETED",
    gallery: [
      "/images/projects/project2/p2image2.jpeg",
      "/images/projects/project2/p2image3.jpeg",
      "/images/projects/project2/p2image4.jpeg",
      "/images/projects/project2/p2image5.jpeg"
    ]
  },
  {
    id: "project3",
    title: "Riyas Residence @ Edavarad - Perambra",
    category: "RESIDENTIAL",
    description: "Residential project at Edavarad, Perambra.",
    image: "/images/projects/project3/p3image1.jpeg",
    status: "COMPLETED",
    gallery: [
      "/images/projects/project3/p3image2.jpeg"
    ]
  },
  {
    id: "project4",
    title: "Mr Gopal - Hilite Residence, Calicut",
    category: "RESIDENTIAL",
    description: "Residence project at Hilite, Calicut.",
    image: "/images/projects/project4/p4image1.jpeg",
    status: "COMPLETED",
    gallery: [
      "/images/projects/project4/p4image2.jpeg"
    ]
  },
  {
    id: "project5",
    title: "Teashop @ Perambra",
    category: "COMMERCIAL",
    description: "Commercial teashop project located in Perambra.",
    client: "Mr Sajid",
    image: "/images/projects/project5/p5image1.jpeg",
    status: "COMPLETED",
    gallery: [
      "/images/projects/project5/p5image2.jpeg",
      "/images/projects/project5/p5image3.jpeg"
    ]
  },
  {
    id: "project6",
    title: "Mr Jamsal Residence @ Eravattoor - Perambra",
    category: "RESIDENTIAL",
    description: "Residential project at Eravattoor, Perambra.",
    image: "/images/projects/project6/p6image1.jpeg",
    status: "COMPLETED",
    gallery: [
      "/images/projects/project6/p6image2.jpeg"
    ]
  }
];
