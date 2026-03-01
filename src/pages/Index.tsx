import { useRef, useEffect, useState, useCallback } from "react";
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
  const reversingRef = useRef(false);
  const rafRef = useRef<number>(0);

  const startReverse = useCallback(() => {
    const video = ref.current;
    if (!video || reversingRef.current) return;

    reversingRef.current = true;
    video.pause();

    const step = () => {
      const el = ref.current;
      if (!el || !reversingRef.current) return;

      if (el.currentTime <= 0.08) {
        reversingRef.current = false;
        el.currentTime = 0;
        el.play().catch(() => {});
        return;
      }

      el.currentTime = Math.max(0, el.currentTime - 0.04);
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
  }, []);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const onTimeUpdate = () => {
      if (!video.duration || reversingRef.current) return;
      if (video.currentTime >= video.duration - 0.08) {
        startReverse();
      }
    };

    video.addEventListener("timeupdate", onTimeUpdate);

    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      cancelAnimationFrame(rafRef.current);
      reversingRef.current = false;
    };
  }, [startReverse]);

  return (
    <video
      ref={ref}
      autoPlay
      muted
      playsInline
      preload="auto"
      className="fixed inset-0 w-full h-full object-cover z-0"
    >
      <source
        src="https://videos.pexels.com/video-files/4169986/4169986-uhd_2560_1440_30fps.mp4"
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
