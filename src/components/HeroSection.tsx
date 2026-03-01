import { Github, Mail } from "lucide-react";
import { useBgTheme } from "@/hooks/useBgTheme";

const HeroSection = () => {
  const { theme } = useBgTheme();
  const light = theme === "light";

  return (
    <section id="home" className="min-h-screen flex items-center px-8 lg:px-16 pt-14">
      <div className="max-w-5xl w-full mx-auto">
        <h1 className={`text-5xl md:text-7xl font-extrabold tracking-tight leading-none mb-6 font-sans ${light ? "text-black" : "text-white"}`}>
          Eshaan Kapooswalla
        </h1>
        <div className="hidden lg:flex flex-wrap gap-3 mb-8">
          {["Machine Learning", "LLM & AI Systems", "Distributed Systems", "Backend Development", "Parallel Computing", "Graphics Programming", "Frontend Design", "Blockchain", "Quantum Cryptography", "Anything Cool"].map((interest) => (
            <span key={interest} className={`text-sm font-mono border backdrop-blur-sm px-3 py-1 ${light ? "text-black/70 border-black/20 bg-white/30" : "text-white/70 border-white/20 bg-black/30"}`}>
              {interest}
            </span>
          ))}
        </div>
        <div className="space-y-1 mb-10">
          <p className={`text-lg ${light ? "text-black" : "text-white"}`}>Product Engineer + Community Builder</p>
          <p className={`text-lg ${light ? "text-black/60" : "text-white/60"}`}>Toronto, ON, CA</p>
        </div>
        <div className="flex gap-4">
          <a
            href="mailto:eshaank@my.yorku.ca"
            className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-colors ${light ? "bg-black text-white hover:bg-black/90" : "bg-white text-black hover:bg-white/90"}`}
          >
            <Mail size={16} />
            Email Me
          </a>
          <a
            href="https://github.com/eshaan2418"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 border px-6 py-3 text-sm font-semibold transition-colors ${light ? "border-black/30 text-black hover:border-black" : "border-white/30 text-white hover:border-white"}`}
          >
            <Github size={16} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
