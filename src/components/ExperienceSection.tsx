const experiences = [
  {
    title: "Software Engineer",
    company: "Shopify · Internship",
    location: "Toronto · Hybrid",
    year: "2026",
    lines: [
      "Incoming Summer 2026.",
      "Working on large-scale production engineering systems.",
    ],
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
  return (
    <section id="experience" className="py-28 px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-16 tracking-tight">Experience</h2>
        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <div key={i} className="group border border-white/15 bg-black/30 backdrop-blur-sm p-6 hover:border-white/30 transition-all duration-200 hover:-translate-y-0.5">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                <span className="text-white/50 font-mono text-sm shrink-0">{exp.year}</span>
              </div>
              <p className="text-white/90 font-medium mt-1">{exp.company}</p>
              <p className="text-white/50 font-mono text-sm mt-1">{exp.location}</p>
              <div className="mt-3 space-y-1">
                {exp.lines.map((line, j) => (
                  <p key={j} className="text-white/60 text-sm">{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
