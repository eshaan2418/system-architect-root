import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import LeadershipSection from "@/components/LeadershipSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import FadeIn from "@/components/FadeIn";

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <HeroSection />
      <FadeIn><ExperienceSection /></FadeIn>
      <FadeIn><LeadershipSection /></FadeIn>
      <FadeIn><ProjectsSection /></FadeIn>
      <FadeIn><EducationSection /></FadeIn>
      <FadeIn><ContactSection /></FadeIn>
    </div>
  );
};

export default Index;
