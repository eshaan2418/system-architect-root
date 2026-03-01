import { createContext, useContext, useState, useCallback, ReactNode } from "react";

type BgTheme = "ocean" | "black";

interface BgThemeContextType {
  theme: BgTheme;
  toggle: () => void;
  audioPlaying: boolean;
  toggleAudio: () => void;
  setVideoRef: (el: HTMLVideoElement) => void;
}

const BgThemeContext = createContext<BgThemeContextType>({
  theme: "ocean",
  toggle: () => {},
  audioPlaying: false,
  toggleAudio: () => {},
  setVideoRef: () => {},
});

export const useBgTheme = () => useContext(BgThemeContext);

export const BgThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<BgTheme>("ocean");
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [videoEl, setVideoEl] = useState<HTMLVideoElement | null>(null);

  const toggle = () => {
    setTheme((t) => {
      const next = t === "ocean" ? "black" : "ocean";
      if (next === "black" && videoEl) {
        videoEl.muted = true;
        setAudioPlaying(false);
      }
      return next;
    });
  };

  const toggleAudio = useCallback(() => {
    if (!videoEl) return;
    if (videoEl.muted) {
      videoEl.muted = false;
      videoEl.volume = 0.4;
      videoEl.play().catch(() => {});
      setAudioPlaying(true);
    } else {
      videoEl.muted = true;
      setAudioPlaying(false);
    }
  }, [videoEl]);

  const setVideoRef = useCallback((el: HTMLVideoElement) => {
    setVideoEl(el);
  }, []);

  return (
    <BgThemeContext.Provider value={{ theme, toggle, audioPlaying, toggleAudio, setVideoRef }}>
      {children}
    </BgThemeContext.Provider>
  );
};
