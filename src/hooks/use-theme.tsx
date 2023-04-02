"use client";

import React, { createContext } from "react";

const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
});

interface IThemeProviderProps {
  children: React.ReactNode;
}

export const useTheme = () => React.useContext(ThemeContext);

export const ThemeProvider: React.FC<IThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = React.useState(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage["theme"] || "dark";
  });

  const toggleTheme = () => {
    localStorage["theme"] = theme === "dark" ? "light" : "dark";
    setTheme(theme === "dark" ? "light" : "dark");
  };

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    // localStorage["theme"] = theme;
    document.documentElement.setAttribute("data-theme", theme);
    return () => {
      document.documentElement.removeAttribute("data-theme");
    };
  }, [theme]);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const localTheme = localStorage["theme"];
    if (localTheme) {
      setTheme(localTheme);
    } else {
      localStorage["theme"] = theme;
    }
  }, []);
  // if (typeof window === "undefined") return <></>;
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
