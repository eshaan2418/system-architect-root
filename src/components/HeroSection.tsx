import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useBgTheme } from "@/hooks/useBgTheme";

const heroExperiences = [
  { year: "2027", company: "Cohere" },
  { year: "2026", company: "Wealthsimple" },
  { year: "2026", company: "Shopify" },
  { year: "2026", company: "Vector Institute" },
  { year: "2025", company: "Amazon Web Services (SBG)" },
  { year: "2025", company: "Mali" },
  { year: "2025", company: "YU Blueprint" },
  { year: "2024", company: "ITREB Canada" },
  { year: "2023", company: "Prince Aly Khan Hospital" },
  { year: "2023", company: "AIESEC" },
];

const HeroSection = () => {
  const { theme } = useBgTheme();
  const light = theme === "light";

  return (
    <section id="home" className="min-h-screen flex items-center px-8 lg:px-16 pt-14">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
        <div className="min-w-0">
          <p className={`font-mono text-xs tracking-widest uppercase mb-6 flex items-center gap-1.5 ${light ? "text-black/70" : "text-white/70"}`}>
            <MapPin size={12} /> Toronto, ON, CA
          </p>
          <h1 className={`text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.95] mb-8 font-sans break-words ${light ? "text-black" : "text-white"}`}>
            eshaan kapooswalla
          </h1>
          <p className={`text-lg mb-10 ${light ? "text-black/80" : "text-white/80"}`}>
            engineering + community builder
          </p>
          <div className="flex gap-4">
            <a
              href="mailto:eshaank@my.yorku.ca"
              className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-colors ${light ? "bg-black text-white hover:bg-black/90" : "bg-white text-black hover:bg-white/90"}`}
            >
              <Mail size={16} />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/eshaankapooswalla/"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 border px-6 py-3 text-sm font-semibold transition-colors ${light ? "border-black/30 text-black hover:border-black" : "border-white/30 text-white hover:border-white"}`}
            >
              <Linkedin size={16} />
              LinkedIn
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

        <div className="space-y-3">
          {heroExperiences.map((exp, i) => (
            <div key={i} className="grid grid-cols-[auto_1fr] gap-6 items-baseline">
              <span className={`font-mono text-sm ${light ? "text-black/40" : "text-white/40"}`}>{exp.year}</span>
              <span className={`font-semibold text-lg ${light ? "text-black" : "text-white"}`}>{exp.company}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
