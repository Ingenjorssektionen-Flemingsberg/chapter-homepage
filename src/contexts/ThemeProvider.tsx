import { useCallback, useEffect, useMemo, useState } from "react";
import type { ThemeContextType } from "./ThemeContext";
import { ThemeContext } from "./ThemeContext";
import { darkTheme, lightTheme } from "../styles/theme";
import { CssBaseline } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

const STORAGE_KEY = "isDark";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored !== null) {
      setIsDark(stored === "true");
      return;
    }

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    setIsDark(prefersDark);
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev!;
      localStorage.setItem(STORAGE_KEY, String(next));
      return next;
    });
  }, []);

  const theme = useMemo(() => {
    return isDark ? darkTheme : lightTheme;
  }, [isDark]);

  const value = useMemo<ThemeContextType>(
    () => ({
      isDark: Boolean(isDark),
      theme,
      toggleTheme,
    }),
    [isDark, theme, toggleTheme],
  );

  // block rendering until theme resolved
  if (isDark === null) return null;

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
