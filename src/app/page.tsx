import Hook from "@/components/Hook";
import Navigation from "@/components/Navigation";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";

export const metadata: Metadata = {
  title: "Inturn Landing",
  description: "Inturn is a platform for high school students to find internships at small or startup companies. Helping start ups find the talent they need to grow, and helping student gain experience in the field.",
  keywords: ["internships", "high school", "startups", "small business", "students", "career", "experience", "high school internships", "student curated"],
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <div className="absolute inset-0 w-full h-screen overflow-hidden z-0 flex items-center justify-center">
        <InteractiveGridPattern 
          className="!static md:[mask-image:radial-gradient(circle_500px_at_50%_50%,white_10%,transparent_100%)] [mask-image:radial-gradient(circle_300px_at_50%_50%,white_50%,transparent_100%)] border border-gray-400/30" 
          squares={[32, 24]}
        />
      </div>
      <Hook />
      <AboutSection />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}
