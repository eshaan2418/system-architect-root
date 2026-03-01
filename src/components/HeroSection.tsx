import { Github, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-14">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tight leading-none mb-6">
          Eshaan Kapooswalla
        </h1>
        <div className="space-y-1 mb-8">
          <p className="text-muted-foreground text-lg font-mono">Software Engineering @ YorkU</p>
          <p className="text-muted-foreground text-lg font-mono">Incoming Engineering Intern @ Shopify</p>
          <p className="text-muted-foreground text-lg font-mono">ML · Distributed Systems · Cloud</p>
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
