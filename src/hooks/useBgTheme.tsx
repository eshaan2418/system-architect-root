import { createContext, useContext, useState, useCallback, ReactNode } from "react";

type BgTheme = "ocean" | "black" | "mountains";

interface BgThemeContextType {
  theme: BgTheme;
  setTheme: (t: BgTheme) => void;
  toggle: () => void;
  audioPlaying: boolean;
  toggleAudio: () => void;
  setVideoRef: (el: HTMLVideoElement) => void;
}

const BgThemeContext = createContext<BgThemeContextType>({
  theme: "mountains",
  setTheme: () => {},
  toggle: () => {},
  audioPlaying: false,
  toggleAudio: () => {},
  setVideoRef: () => {},
});

export const useBgTheme = () => useContext(BgThemeContext);

export const BgThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<BgTheme>("mountains");
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [videoEl, setVideoEl] = useState<HTMLVideoElement | null>(null);

  const setTheme = useCallback((t: BgTheme) => {
    if (t === "black" && videoEl) {
      videoEl.muted = true;
      setAudioPlaying(false);
    }
    setThemeState(t);
  }, [videoEl]);

  const toggle = () => {
    const order: BgTheme[] = ["mountains", "ocean", "black"];
    const next = order[(order.indexOf(theme) + 1) % order.length];
    setTheme(next);
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
    <BgThemeContext.Provider value={{ theme, setTheme, toggle, audioPlaying, toggleAudio, setVideoRef }}>
      {children}
    </BgThemeContext.Provider>
  );
};
