import { useBgTheme } from "@/hooks/useBgTheme";

const EducationSection = () => {
  const { theme } = useBgTheme();
  const light = theme === "light";

  return (
    <section id="education" className="py-28 px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className={`text-3xl font-bold mb-16 tracking-tight ${light ? "text-black" : "text-white"}`}>Education</h2>
        <div className={`border backdrop-blur-sm p-6 ${light ? "border-black/10 bg-gray-100/80 shadow-sm" : "border-white/15 bg-black/30"}`}>
          <h3 className={`text-xl font-semibold ${light ? "text-black" : "text-white"}`}>York University — Lassonde School of Engineering</h3>
          <p className={`font-medium mt-1 ${light ? "text-black/90" : "text-white/90"}`}>Bachelor of Engineering in Software Engineering</p>
          <p className={`text-sm mt-1 ${light ? "text-black/60" : "text-white/60"}`}>Toronto, ON, Canada</p>
          <p className={`text-sm mt-3 italic ${light ? "text-black/60" : "text-white/60"}`}>Tentanda Via Scholar — $120,000</p>
          <p className={`text-sm mt-1 ${light ? "text-black/60" : "text-white/60"}`}>Dean's Honor Roll</p>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
