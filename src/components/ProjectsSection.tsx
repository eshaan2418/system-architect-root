import { Github } from "lucide-react";

const projects = [
  { name: "DistData", desc: "Fault-tolerant distributed database system with consensus and transaction logic.", tech: "C++", url: "https://github.com/eshaan2418/DIstData" },
  { name: "EshaanOS", desc: "Educational operating system simulator exploring scheduling and memory management.", tech: "C++", url: "https://github.com/eshaan2418/EshaanOS" },
  { name: "Jobber", desc: "Microservices job portal built with Spring Boot and React.", tech: "TypeScript · Java", url: "https://github.com/eshaan2418/Jobber" },
  { name: "Edge AI Model Compression & Deployment", desc: "Optimized deep learning models for efficient edge inference.", tech: "Python", url: "https://github.com/eshaan2418/Edge-AI-Model-Compression-Deployment" },
  { name: "FitMind-AI", desc: "AI-powered fitness platform built using microservices architecture.", tech: "JavaScript", url: "https://github.com/eshaan2418/FitMind-AI" },
  { name: "MorphUNet", desc: "PyTorch implementation of U-Net architectures for image segmentation.", tech: "Python", url: "https://github.com/eshaan2418/MorphUNet" },
  { name: "ShopSmart-AI", desc: "Machine learning recommender system for e-commerce applications.", tech: "Jupyter Notebook", url: "https://github.com/eshaan2418/ShopSmart-AI" },
  { name: "StockPredictor", desc: "Experimental ML-based stock price prediction system.", tech: "Python", url: "https://github.com/eshaan2418/StockPredictor" },
  { name: "MandelbrotExplorer", desc: "MATLAB visualization of the Mandelbrot set.", tech: "MATLAB", url: "https://github.com/eshaan2418/MandelbrotExplorer" },
  { name: "TetrisPlay", desc: "Classic Tetris game implemented in C++.", tech: "C++", url: "https://github.com/eshaan2418/TetrisPlay" },
  { name: "PlantWateringSystem", desc: "Automated embedded system for plant irrigation.", tech: "Java", url: "https://github.com/eshaan2418/PlantWateringSystem" },
  { name: "Book-Store", desc: "Full-stack MERN application for managing book inventory.", tech: "JavaScript", url: "https://github.com/eshaan2418/Book-Store" },
  { name: "Cabieeee", desc: "Real-time cab-ordering mobile application.", tech: "JavaScript", url: "https://github.com/eshaan2418/Cabieeee" },
  { name: "Gideon-AI-Desktop-Assistant", desc: "Voice-controlled desktop AI assistant.", tech: "Python", url: "https://github.com/eshaan2418/Gideon-AI-Desktop-Assistant" },
  { name: "WebRTC-Video-Rooms", desc: "Real-time video chat with screen sharing using WebRTC.", tech: "JavaScript", url: "https://github.com/eshaan2418/WebRTC-Video-Rooms" },
  { name: "algorithmic-trading-bot-", desc: "Algorithmic trading experiments (in progress).", tech: "Python", url: "https://github.com/eshaan2418/algorithmic-trading-bot-" },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-16 tracking-tight">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-border p-5 hover:border-muted-foreground transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-foreground font-semibold text-sm leading-tight">{p.name}</h3>
                <Github size={14} className="text-muted-foreground group-hover:text-foreground transition-colors shrink-0 ml-2 mt-0.5" />
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed mb-3">{p.desc}</p>
              <p className="font-mono text-xs text-muted-foreground">{p.tech}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
