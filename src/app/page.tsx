import Navigation from "@/components/Navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inturn Landing",
  description: "Inturn is a platform for high school students to find internships at small or startup companies. Helping start ups find the talent they need to grow, and helping student gain experience in the field.",
}

export default function Home() {
  return (
    <>
      <Navigation />
    </>
  );
}
