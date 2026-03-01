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
    <div className="relative min-h-screen">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
        poster=""
      >
        <source
          src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4"
          type="video/mp4"
        />
      </video>
      {/* Dark overlay for readability */}
      <div className="fixed inset-0 bg-black/60 z-[1]" />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <FadeIn><ExperienceSection /></FadeIn>
        <FadeIn><LeadershipSection /></FadeIn>
        <FadeIn><ProjectsSection /></FadeIn>
        <FadeIn><EducationSection /></FadeIn>
        <FadeIn><ContactSection /></FadeIn>
      </div>
    </div>
  );
};

export default Index;
