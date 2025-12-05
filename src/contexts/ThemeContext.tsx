import type { Theme } from "@mui/material";
import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import { darkTheme, lightTheme } from "../styles/theme";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";

interface ThemeContextType {
  isDark: boolean;
  theme: Theme;
  switchTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(lightTheme);
  const [isDark, setIsDark] = useState<boolean>(false);

  // On mount: read user preference from localStorage (if any)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem("isDark");
    if (stored !== null) {
      const dark = stored === "true";
      setIsDark(dark);
      setCurrentTheme(dark ? darkTheme : lightTheme);
    }
  }, []);

  const switchThemeFunc = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;
      setCurrentTheme(next ? darkTheme : lightTheme);

      if (typeof window !== "undefined") {
        window.localStorage.setItem("isDark", String(next));
      }

      return next;
    });
  }, []);

  const value = useMemo<ThemeContextType>(
    () => ({
      isDark: isDark,
      theme: currentTheme,
      switchTheme: switchThemeFunc,
    }),
    [isDark, currentTheme, switchThemeFunc]
  );

  return (
    <ThemeContext.Provider value={value}>
      <EmotionThemeProvider theme={currentTheme}>
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};
