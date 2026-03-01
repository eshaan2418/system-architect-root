import { createContext, useContext, useState, useRef, useEffect, useCallback, ReactNode } from "react";

type BgTheme = "ocean" | "black";

interface BgThemeContextType {
  theme: BgTheme;
  toggle: () => void;
  audioPlaying: boolean;
  toggleAudio: () => void;
}

const BgThemeContext = createContext<BgThemeContextType>({
  theme: "ocean",
  toggle: () => {},
  audioPlaying: false,
  toggleAudio: () => {},
});

export const useBgTheme = () => useContext(BgThemeContext);

const OCEAN_AUDIO_URL = "https://cdn.freesound.org/previews/531/531015_4921277-lq.mp3";

export const BgThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<BgTheme>("ocean");
  const [audioPlaying, setAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(OCEAN_AUDIO_URL);
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (theme === "ocean" && audioPlaying) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [theme, audioPlaying]);

  const toggle = () => setTheme((t) => (t === "ocean" ? "black" : "ocean"));

  const toggleAudio = useCallback(() => {
    setAudioPlaying((p) => !p);
  }, []);

  return (
    <BgThemeContext.Provider value={{ theme, toggle, audioPlaying, toggleAudio }}>
      {children}
    </BgThemeContext.Provider>
  );
};
