import { useBgTheme } from "@/hooks/useBgTheme";
import contactGradient from "@/assets/contact-gradient.jpg";

const ContactSection = () => {
  const { theme } = useBgTheme();
  const light = theme === "light";

  return (
    <section id="contact" className="py-28 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col">
          <h2 className={`text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] ${light ? "text-black" : "text-white"}`}>
            let's work together<span className={light ? "text-black/40" : "text-white/40"}>.</span>
          </h2>

          <div className={`mt-10 space-y-1 text-lg ${light ? "text-black/80" : "text-white/80"}`}>
            <p>want to collaborate? chat?</p>
            <p>i'm always down to meet curious and kind people.</p>
          </div>

          <a
            href="mailto:eshaank@my.yorku.ca"
            className={`mt-16 inline-flex items-center gap-3 font-mono text-xs tracking-widest uppercase transition-colors ${light ? "text-black/60 hover:text-black" : "text-white/60 hover:text-white"}`}
          >
            <span aria-hidden>→</span> Send me a note
          </a>

          <a
            href="mailto:eshaank@my.yorku.ca"
            className={`mt-3 text-lg font-medium transition-colors ${light ? "text-black hover:text-black/70" : "text-white hover:text-white/70"}`}
          >
            eshaank@my.yorku.ca
          </a>
        </div>

        <div className="w-full aspect-square overflow-hidden">
          <img
            src={contactGradient}
            alt=""
            width={1024}
            height={1024}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <footer className={`mt-24 border-t pt-8 max-w-7xl mx-auto ${light ? "border-black/10" : "border-white/10"}`}>
        <p className={`text-xs ${light ? "text-black/40" : "text-white/40"}`}>© 2026 Eshaan Kapooswalla</p>
      </footer>
    </section>
  );
};

export default ContactSection;
