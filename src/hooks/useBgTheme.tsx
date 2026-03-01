import { createContext, useContext, useState, ReactNode } from "react";

type BgTheme = "ocean" | "black";

interface BgThemeContextType {
  theme: BgTheme;
  toggle: () => void;
}

const BgThemeContext = createContext<BgThemeContextType>({ theme: "ocean", toggle: () => {} });

export const useBgTheme = () => useContext(BgThemeContext);

export const BgThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<BgTheme>("ocean");
  const toggle = () => setTheme((t) => (t === "ocean" ? "black" : "ocean"));
  return (
    <BgThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </BgThemeContext.Provider>
  );
};
