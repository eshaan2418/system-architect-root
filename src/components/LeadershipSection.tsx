import { ExternalLink } from "lucide-react";
import { useBgTheme } from "@/hooks/useBgTheme";

const LeadershipSection = () => {
  const { theme } = useBgTheme();
  const light = theme === "light";

  return (
    <section id="leadership" className="py-28 px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className={`text-3xl font-bold mb-16 tracking-tight ${light ? "text-black" : "text-white"}`}>Leadership</h2>
        <a
          href="https://awsyorkucloud.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={`group block border backdrop-blur-sm p-8 transition-all duration-300 hover:-translate-y-0.5 ${light ? "border-black/10 bg-gray-100/80 hover:border-black/25 shadow-sm" : "border-white/15 bg-black/30 hover:border-white/30"}`}
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className={`text-2xl font-bold tracking-tight ${light ? "text-black" : "text-white"}`}>Founder & Captain</h3>
              <p className={`font-medium mt-2 text-lg ${light ? "text-black/90" : "text-white/90"}`}>AWS Cloud Club at YorkU</p>
            </div>
            <ExternalLink
              size={18}
              className={`shrink-0 mt-1 transition-colors ${light ? "text-black/40 group-hover:text-black" : "text-white/40 group-hover:text-white"}`}
            />
          </div>
          <div className="mt-5 space-y-1.5">
            <p className={light ? "text-black/60" : "text-white/60"}>Founded and scaled a 200+ member cloud engineering community.</p>
            <p className={light ? "text-black/60" : "text-white/60"}>Led hands-on AWS workshops and built a strong builder culture on campus.</p>
          </div>
          <p className={`mt-5 font-mono text-xs transition-colors ${light ? "text-black/40 group-hover:text-black" : "text-white/40 group-hover:text-white"}`}>
            awsyorkucloud.com →
          </p>
        </a>
      </div>
    </section>
  );
};

export default LeadershipSection;
