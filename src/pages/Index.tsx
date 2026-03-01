import { useRef, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import LeadershipSection from "@/components/LeadershipSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import FadeIn from "@/components/FadeIn";
import { BgThemeProvider, useBgTheme } from "@/hooks/useBgTheme";

const MountainVideo = () => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const onTimeUpdate = () => {
      if (!video.duration || Number.isNaN(video.duration)) return;

      // Skip the final dark frames and jump back seamlessly
      if (video.duration - video.currentTime <= 0.35) {
        video.currentTime = 0.08;
        video.play().catch(() => {});
      }
    };

    video.addEventListener("timeupdate", onTimeUpdate);

    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, []);

  return (
    <video
      ref={ref}
      autoPlay
      loop
      muted
      playsInline
      className="fixed inset-0 w-full h-full object-cover z-0"
    >
      <source
        src="https://videos.pexels.com/video-files/3682311/3682311-uhd_2560_1440_24fps.mp4"
        type="video/mp4"
      />
    </video>
  );
};

const IndexContent = () => {
  const { theme, audioPlaying, setVideoRef } = useBgTheme();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      setVideoRef(videoRef.current);
    }
  }, [setVideoRef]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = !audioPlaying;
      videoRef.current.volume = 0.4;
    }
  }, [audioPlaying]);

  return (
    <div className="relative min-h-screen">
      {/* Ocean video background */}
      {theme === "ocean" && (
        <>
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="fixed inset-0 w-full h-full object-cover z-0"
          >
            <source
              src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="fixed inset-0 bg-black/60 z-[1]" />
        </>
      )}

      {/* Mountains video background */}
      {theme === "mountains" && (
        <>
          <MountainVideo />
          <div className="fixed inset-0 bg-black/50 z-[1]" />
        </>
      )}

      {/* Black background */}
      {theme === "black" && (
        <div className="fixed inset-0 bg-black z-0" />
      )}

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

const Index = () => (
  <BgThemeProvider>
    <IndexContent />
  </BgThemeProvider>
);

export default Index;
