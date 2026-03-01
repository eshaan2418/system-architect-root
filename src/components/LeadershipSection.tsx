import { ExternalLink } from "lucide-react";

const LeadershipSection = () => {
  return (
    <section id="leadership" className="py-28 px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-16 tracking-tight">Leadership</h2>
        <a
          href="https://awsyorkucloud.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group block border border-white/15 bg-black/30 backdrop-blur-sm p-8 hover:border-white/30 transition-all duration-300 hover:-translate-y-0.5"
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Founder & Captain</h3>
              <p className="text-white/90 font-medium mt-2 text-lg">AWS Cloud Club at YorkU</p>
            </div>
            <ExternalLink
              size={18}
              className="text-white/40 group-hover:text-white transition-colors shrink-0 mt-1"
            />
          </div>
          <div className="mt-5 space-y-1.5">
            <p className="text-white/60">Founded and scaled a 200+ member cloud engineering community.</p>
            <p className="text-white/60">Led hands-on AWS workshops and built a strong builder culture on campus.</p>
          </div>
          <p className="mt-5 font-mono text-xs text-white/40 group-hover:text-white transition-colors">
            awsyorkucloud.com →
          </p>
        </a>
      </div>
    </section>
  );
};

export default LeadershipSection;
