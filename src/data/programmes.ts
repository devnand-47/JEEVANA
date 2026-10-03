export interface Programme {
  id: string;
  title: string;
  location: string;
  year: string;
  description: string;
  image?: string;
}

export const programmesData: Programme[] = [
  {
    id: "prog-1",
    title: "Madhyamam Velicham",
    location: "Nochad HSS",
    year: "2022",
    description: "Community educational initiative supporting student development and learning infrastructure at Nochad Higher Secondary School.",
    image: "/owner.jpeg"
  },
  {
    id: "prog-2",
    title: "Lahari Mukhtha",
    location: "Chalikkara",
    year: "2022",
    description: "Anti-drug awareness campaign and community welfare program conducted in Chalikkara to promote a healthy and safe environment for the youth.",
    image: "/owner.jpeg"
  }
];
