import { useBgTheme } from "@/hooks/useBgTheme";

const experiences = [
  {
    title: "Member of Technical Staff / Forward Deployed Engineer",
    company: "Cohere · Internship",
    location: "Toronto, ON",
    year: "2027",
    lines: [
      "Incoming Winter 2027.",
    ],
  },
  {
    title: "Engineering",
    company: "Wealthsimple · Internship",
    location: "Toronto, ON",
    year: "2026",
    lines: [
      "Incoming Fall 2026.",
    ],
  },
  {
    title: "Machine Learning Engineering Intern",
    company: "Shopify",
    location: "Toronto, ON",
    year: "2026",
    lines: [
      "User Recommendations team, improving search relevance and recommendation accuracy for large-scale product discovery systems.",
      "Search Relevance team — building production systems in C++ and Python to optimize ranking and retrieval pipelines.",
    ],
  },
  {
    title: "Machine Learning Researcher",
    company: "Vector Institute · Volunteer",
    location: "Toronto, ON",
    year: "2026",
    lines: [
      "Developed SAGE-KV, an entropy-calibrated sparse attention mechanism that reduced Transformer decode latency by dynamically routing queries to local, global, and semantic KV-cache pages while minimizing unnecessary GPU memory reads.",
      "Designed a Python/C++/CUDA prototype and benchmarking framework, evaluating sparse attention against dense, sliding-window, static sparse, and FlashAttention-style baselines using p50/p90/p99 latency, fallback rate, bandwidth, and retrieval-quality metrics.",
    ],
    link: "https://drive.google.com/file/d/1vsVoP_sBgLqXQblE80stIUYyOGJpyLm8/view",
  },
  {
    title: "Founding Machine Learning Software Engineer",
    company: "Mali",
    location: "Remote",
    year: "2025",
    lines: [
      "Built and deployed PyTorch-based ML pipelines.",
      "Worked on distributed training and model optimization workflows.",
    ],
  },
  {
    title: "Machine Learning Software Developer",
    company: "YU Blueprint",
    location: "Toronto",
    year: "2025",
    lines: [
      "Developing ML-driven applications for nonprofit organizations.",
      "Contributing to scalable full-stack systems using React and Django.",
    ],
  },
  {
    title: "Software Engineer",
    company: "ITREB Canada · Internship",
    location: "Toronto · Hybrid",
    year: "2024",
    lines: [
      "Built Spring Boot microservices and secure REST APIs.",
      "Improved system architecture and frontend/backend integration.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Prince Aly Khan Hospital · Internship",
    location: "Remote",
    year: "2023",
    lines: [
      "Developed secure healthcare workflow solutions.",
      "Built responsive React interfaces with strong data compliance.",
    ],
  },
  {
    title: "Vice President of Technology",
    company: "AIESEC",
    location: "Remote",
    year: "2023",
    lines: [
      "Led technical initiatives supporting global exchange programs.",
      "Contributed to web systems and event infrastructure.",
    ],
  },
];

const ExperienceSection = () => {
  const { theme } = useBgTheme();
  const light = theme === "light";

  return (
    <section id="experience" className="py-28 px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className={`text-3xl font-bold mb-16 tracking-tight ${light ? "text-black" : "text-white"}`}>Experience</h2>
        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <div key={i} className={`group border backdrop-blur-sm p-6 transition-all duration-200 hover:-translate-y-0.5 ${light ? "border-black/10 bg-gray-100/80 hover:border-black/25 shadow-sm" : "border-white/15 bg-black/30 hover:border-white/30"}`}>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className={`text-xl font-semibold ${light ? "text-black" : "text-white"}`}>{exp.title}</h3>
                <span className={`font-mono text-sm shrink-0 ${light ? "text-black/50" : "text-white/50"}`}>{exp.year}</span>
              </div>
              <p className={`font-medium mt-1 ${light ? "text-black/90" : "text-white/90"}`}>{exp.company}</p>
              <p className={`font-mono text-sm mt-1 ${light ? "text-black/50" : "text-white/50"}`}>{exp.location}</p>
              <div className="mt-3 space-y-1">
                {exp.lines.map((line, j) => (
                  <p key={j} className={`text-sm ${light ? "text-black/60" : "text-white/60"}`}>{line}</p>
                ))}
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block text-sm underline underline-offset-2 mt-1 ${light ? "text-black/70 hover:text-black" : "text-white/70 hover:text-white"}`}
                  >
                    View research paper →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
