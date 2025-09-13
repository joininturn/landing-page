import Hook from "@/components/Hook";
import Navigation from "@/components/Navigation";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";

export const metadata: Metadata = {
  title: "Inturn Landing",
  description: "Inturn is a platform for high school students to find internships at small or startup companies. Helping start ups find the talent they need to grow, and helping student gain experience in the field.",
  keywords: ["internships", "high school", "startups", "small business", "students", "career", "experience", "high school internships", "student curated"],
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <Hook />
      <AboutSection />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}
