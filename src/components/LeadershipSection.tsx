import { ExternalLink } from "lucide-react";

const LeadershipSection = () => {
  return (
    <section id="leadership" className="py-28 px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-16 tracking-tight">Leadership</h2>
        <a
          href="https://awsyorkucloud.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group block border border-border p-8 hover:border-muted-foreground transition-all duration-300 hover:-translate-y-0.5"
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-bold text-foreground tracking-tight">Founder & Captain</h3>
              <p className="text-foreground font-medium mt-2 text-lg">AWS Cloud Club at YorkU</p>
            </div>
            <ExternalLink
              size={18}
              className="text-muted-foreground group-hover:text-foreground transition-colors shrink-0 mt-1"
            />
          </div>
          <div className="mt-5 space-y-1.5">
            <p className="text-muted-foreground">Founded and scaled a 200+ member cloud engineering community.</p>
            <p className="text-muted-foreground">Led hands-on AWS workshops and built a strong builder culture on campus.</p>
          </div>
          <p className="mt-5 font-mono text-xs text-muted-foreground group-hover:text-foreground transition-colors">
            awsyorkucloud.com →
          </p>
        </a>
      </div>
    </section>
  );
};

export default LeadershipSection;
