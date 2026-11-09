"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const subscribeNoop = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribeNoop, () => true, () => false);
  const dark = !mounted || resolvedTheme !== "light";

  return (
    <button
      type="button"
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="rounded-md border border-line px-2 py-1 font-mono text-xs text-muted transition-colors hover:text-fg"
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {mounted ? (dark ? "Day" : "Night") : "Theme"}
    </button>
  );
}
