import type { Metadata } from "next";
import ProgrammesClient from "./ProgrammesClient";

export const metadata: Metadata = {
  title: "Public Programmes | Jeevana Builders",
  description: "Documenting moments of participation, community engagement and public initiatives connected with the journey of Jeevana.",
};

export default function ProgrammesPage() {
  return <ProgrammesClient />;
}
