"use client";
import React from "react";

const ThemeContext = React.createContext({
  theme: "dark",
  toggleTheme: () => {},
});

interface IThemeProviderProps {
  children: React.ReactNode;
}

export const useTheme = () => React.useContext(ThemeContext);

export const ThemeProvider: React.FC<IThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = React.useState("dark");

  const toggleTheme = () => {
    localStorage["theme"] = theme === "dark" ? "light" : "dark";
    setTheme(theme === "dark" ? "light" : "dark");
  };

  React.useEffect(() => {
    if (!document) return;
    // localStorage["theme"] = theme;
    document.documentElement.setAttribute("data-theme", theme);
    return () => {
      document.documentElement.removeAttribute("data-theme");
    };
  }, [theme]);

  React.useEffect(() => {
    if (!document) return;
    const localTheme = localStorage["theme"];
    if (localTheme) {
      setTheme(localTheme);
    } else {
      localStorage["theme"] = theme;
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
