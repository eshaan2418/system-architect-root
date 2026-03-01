import { ReactNode } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";

const FadeIn = ({ children }: { children: ReactNode }) => {
  const { ref, isVisible } = useFadeIn(0.08);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {children}
    </div>
  );
};

export default FadeIn;
