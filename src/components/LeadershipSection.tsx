const LeadershipSection = () => {
  return (
    <section id="leadership" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-16 tracking-tight">Leadership</h2>
        <div>
          <h3 className="text-xl font-semibold text-foreground">Founder & Captain</h3>
          <p className="text-foreground font-medium mt-1">AWS Cloud Club at YorkU</p>
          <div className="mt-3 space-y-1">
            <p className="text-muted-foreground text-sm">Founded and scaled a 200+ member cloud engineering community.</p>
            <p className="text-muted-foreground text-sm">Led hands-on AWS workshops and built a strong builder culture on campus.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
