import { Github, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center px-8 lg:px-16 pt-14">
      <div className="max-w-5xl w-full mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight leading-none mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Eshaan Kapooswalla
        </h1>
        <div className="flex flex-wrap gap-3 mb-8">
          {["LLM & AI Systems", "Distributed Systems", "Backend Development", "Parallel Computing", "Graphics Programming"].map((interest) => (
            <span key={interest} className="text-muted-foreground text-sm font-mono border border-border px-3 py-1">
              {interest}
            </span>
          ))}
        </div>
        <div className="space-y-1 mb-10">
          <p className="text-foreground text-lg">I build systems that scale.</p>
          <p className="text-foreground text-lg">I turn complex ideas into clean architecture.</p>
          <p className="text-muted-foreground text-lg">Based in Toronto.</p>
        </div>
        <div className="flex gap-4">
          <a
            href="mailto:eshaank@my.yorku.ca"
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-sm font-semibold hover:bg-foreground/90 transition-colors"
          >
            <Mail size={16} />
            Email Me
          </a>
          <a
            href="https://github.com/eshaan2418"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 text-sm font-semibold hover:border-foreground transition-colors"
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
