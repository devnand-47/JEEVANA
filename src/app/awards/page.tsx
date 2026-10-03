import type { Metadata } from "next";
import AwardsClient from "./AwardsClient";

export const metadata: Metadata = {
  title: "Awards & Appreciations | Jeevana Builders",
  description: "Recognition and memorable moments from the journey of Jeevana Builders, Contractors & Designers.",
};

export default function AwardsPage() {
  return <AwardsClient />;
}
