const EducationSection = () => {
  return (
    <section id="education" className="py-28 px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-16 tracking-tight">Education</h2>
        <div className="border border-white/15 bg-black/30 backdrop-blur-sm p-6">
          <h3 className="text-xl font-semibold text-white">York University</h3>
          <p className="text-white/90 font-medium mt-1">Bachelor of Engineering in Software Engineering</p>
          <p className="text-white/60 text-sm mt-3 italic">Tentanda Via Scholar — $120,000</p>
          <p className="text-white/60 text-sm mt-1">Dean's Honor Roll</p>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
