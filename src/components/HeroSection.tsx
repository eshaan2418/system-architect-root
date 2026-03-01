import { Github, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center px-8 lg:px-16 pt-14">
      <div className="max-w-5xl w-full mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-none mb-6 font-sans">
          Eshaan Kapooswalla
        </h1>
        <div className="flex flex-wrap gap-3 mb-8">
          {["LLM & AI Systems", "Distributed Systems", "Backend Development", "Parallel Computing", "Graphics Programming", "Frontend Design", "Blockchain", "Quantum Cryptography", "Anything Cool"].map((interest) => (
            <span key={interest} className="text-white/70 text-sm font-mono border border-white/20 bg-black/30 backdrop-blur-sm px-3 py-1">
              {interest}
            </span>
          ))}
        </div>
        <div className="space-y-1 mb-10">
          <p className="text-white text-lg">Product Engineer + Community Builder</p>
          <p className="text-white/60 text-lg">Toronto, ON, CA</p>
        </div>
        <div className="flex gap-4">
          <a
            href="mailto:eshaank@my.yorku.ca"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
          >
            <Mail size={16} />
            Email Me
          </a>
          <a
            href="https://github.com/eshaan2418"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 text-sm font-semibold hover:border-white transition-colors"
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
