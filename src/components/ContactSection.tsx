import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-28 px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-8 tracking-tight">Contact</h2>
        <p className="text-muted-foreground text-lg mb-10">
          If you're building something ambitious, I'm interested.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href="mailto:eshaank@my.yorku.ca"
            className="inline-flex items-center gap-2 text-foreground hover:text-[hsl(var(--accent))] transition-colors text-sm"
          >
            <Mail size={16} />
            eshaank@my.yorku.ca
          </a>
          <a
            href="https://github.com/eshaan2418"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground hover:text-[hsl(var(--accent))] transition-colors text-sm"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/eshaankap"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground hover:text-[hsl(var(--accent))] transition-colors text-sm"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>
      </div>

      <footer className="mt-24 border-t border-white/10 pt-8 max-w-5xl mx-auto">
        <p className="text-muted-foreground text-xs">© 2026 Eshaan Kapooswalla</p>
      </footer>
    </section>
  );
};

export default ContactSection;
