export interface AwardData {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
}

export const awardsData: AwardData[] = [
  {
    id: "01",
    number: "01",
    title: "Historic Kaipram Juma Masjid Inauguration Ceremony",
    description: "A proud moment from the historic Kaipram Juma Masjid inauguration ceremony.",
    image: "/images/awards/Awards 1.jpeg",
  },
  {
    id: "02",
    number: "02",
    title: "Young Entrepreneur Award 2022",
    description: "Received the Young Entrepreneur Award 2022 at Hilite Business Park from Gopakumar Sir.",
    image: "/images/awards/Awards 2.jpeg",
  },
  {
    id: "03",
    number: "03",
    title: "A Proud Moment of Our Journey at Vythiri Resort",
    description: "A memorable moment from the journey at Vythiri Resort.",
    image: "/images/awards/Awards 3.jpeg",
  }
];
