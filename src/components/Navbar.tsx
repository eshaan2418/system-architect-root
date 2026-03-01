import { useState } from "react";
import { Github, Linkedin, Mail, Menu, X, Waves, Moon, Mountain, Building2, Landmark, Globe } from "lucide-react";
import { useBgTheme } from "@/hooks/useBgTheme";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Leadership", href: "#leadership" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const themeOptions: { key: "mountains" | "ocean" | "newyork" | "sanfrancisco" | "mumbai" | "black"; icon: typeof Mountain; label: string }[] = [
  { key: "mountains", icon: Mountain, label: "Mountains" },
  { key: "ocean", icon: Waves, label: "Ocean" },
  { key: "newyork", icon: Building2, label: "New York" },
  { key: "sanfrancisco", icon: Landmark, label: "San Francisco" },
  { key: "mumbai", icon: Globe, label: "Mumbai" },
  { key: "black", icon: Moon, label: "Night" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useBgTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="w-full px-8 lg:px-16 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="#home" className="text-white font-bold text-sm tracking-tight hover:text-white/70 transition-colors">
            Eshaan Kapooswalla
          </a>
          <div className="flex items-center gap-1 ml-1">
            {themeOptions.map(({ key, icon: Icon, label }) => (
              <button
                key={key}
                onClick={() => setTheme(key)}
                className={`p-1.5 border rounded-sm transition-colors ${
                  theme === key
                    ? "text-white border-white/40 bg-white/10"
                    : "text-muted-foreground border-white/10 hover:text-foreground hover:border-white/30"
                }`}
                aria-label={label}
                title={label}
              >
                <Icon size={14} />
              </button>
            ))}
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/60 text-xs uppercase tracking-widest hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-3 ml-4 border-l border-white/10 pl-4">
            <a href="https://github.com/eshaan2418" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
              <Github size={16} />
            </a>
            <a href="https://www.linkedin.com/in/eshaankap" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
              <Linkedin size={16} />
            </a>
            <a href="mailto:eshaank@my.yorku.ca" className="text-white/50 hover:text-white transition-colors">
              <Mail size={16} />
            </a>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur-md px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-white/60 text-sm hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-4 pt-3 border-t border-white/10">
            <a href="https://github.com/eshaan2418" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
              <Github size={16} />
            </a>
            <a href="https://www.linkedin.com/in/eshaankap" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
              <Linkedin size={16} />
            </a>
            <a href="mailto:eshaank@my.yorku.ca" className="text-white/50 hover:text-white transition-colors">
              <Mail size={16} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
