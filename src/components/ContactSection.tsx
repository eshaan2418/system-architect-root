import { Github, Linkedin, Mail } from "lucide-react";
import { useBgTheme } from "@/hooks/useBgTheme";

const ContactSection = () => {
  const { theme } = useBgTheme();
  const light = theme === "light";

  return (
    <section id="contact" className="py-28 px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <div className={`border backdrop-blur-sm p-6 ${light ? "border-black/10 bg-gray-100/80 shadow-sm" : "border-white/15 bg-black/30"}`}>
          <h2 className={`text-3xl font-bold mb-4 tracking-tight ${light ? "text-black" : "text-white"}`}>Contact</h2>
          <p className={`text-lg mb-8 ${light ? "text-black/60" : "text-white/60"}`}>
            If you're building something ambitious, I'm interested.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="mailto:eshaank@my.yorku.ca" className={`inline-flex items-center gap-2 transition-colors text-sm ${light ? "text-black hover:text-black/70" : "text-white hover:text-white/70"}`}>
              <Mail size={16} />
              eshaank@my.yorku.ca
            </a>
            <a href="https://github.com/eshaan2418" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 transition-colors text-sm ${light ? "text-black hover:text-black/70" : "text-white hover:text-white/70"}`}>
              <Github size={16} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/eshaankap" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 transition-colors text-sm ${light ? "text-black hover:text-black/70" : "text-white hover:text-white/70"}`}>
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <footer className={`mt-24 border-t pt-8 max-w-5xl mx-auto ${light ? "border-black/10" : "border-white/10"}`}>
        <p className={`text-xs ${light ? "text-black/40" : "text-white/40"}`}>© 2026 Eshaan Kapooswalla</p>
      </footer>
    </section>
  );
};

export default ContactSection;
