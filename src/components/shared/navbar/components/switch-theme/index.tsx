"use client";

import { useTheme } from "@/hooks/use-theme";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import React from "react";
import cx from "classnames";
const SwitchTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="switch-theme">
      <button
        onClick={toggleTheme}
        className={cx(
          "w-12 h-12",
          "p-2",
          "rounded-lg border-primary-invert border",
          "flex items-center justify-center",
          "bg-primary-invert"
        )}
      >
        {theme === "light" ? (
          <MoonIcon className="scale-150 text-primary-theme" />
        ) : (
          <SunIcon className="scale-150 text-primary-theme" />
        )}
      </button>
    </div>
  );
};

export default SwitchTheme;
