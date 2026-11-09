"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { drawRoom, ROOM_H, ROOM_W } from "./draw";

type Hotspot = {
  label: string;
  say: string;
  href?: string;
  /** Position in percent of the scene. */
  box: { left: number; top: number; width: number; height: number };
  kind?: "mascot" | "lamp";
};

const HOTSPOTS: Hotspot[] = [
  { label: "About", say: "About: background, and how I like to work", href: "#about", box: { left: 8.3, top: 13, width: 20.8, height: 29.6 } },
  { label: "Work", say: "Work: selected roles and what they changed", href: "#work", box: { left: 54.2, top: 33.3, width: 18.8, height: 24 } },
  { label: "Writing", say: "Writing: articles on frontend and leading teams", href: "/writing", box: { left: 72.9, top: 11, width: 20.8, height: 31.5 } },
  { label: "Contact", say: "Contact: open to a conversation", href: "#contact", box: { left: 75, top: 49, width: 6.3, height: 13 } },
  { label: "Pair programmer", say: "Thinking it through with Claude", kind: "mascot", box: { left: 47.4, top: 4.6, width: 17.2, height: 25 } },
  { label: "Lights", say: "", kind: "lamp", box: { left: 81.3, top: 37, width: 7.3, height: 25 } },
];

const subscribeNoop = () => () => {};
const useMounted = () => useSyncExternalStore(subscribeNoop, () => true, () => false);

export function RoomHero({ lines }: { lines: string[] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const night = !mounted || resolvedTheme !== "light";

  const [lineIndex, setLineIndex] = useState(0);
  const [hoverSay, setHoverSay] = useState<string | null>(null);
  const [fading, setFading] = useState(false);
  const wave = useRef(false);
  const nightRef = useRef(night);
  useEffect(() => {
    nightRef.current = night;
  }, [night]);

  // Animation loop: ~9 frames per second for a hand-animated feel.
  useEffect(() => {
    const canvas = canvasRef.current;
    const g = canvas?.getContext("2d");
    if (!canvas || !g) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let t = 0;
    let last = 0;
    let raf = 0;
    const render = () => drawRoom(g, { t, night: nightRef.current, wave: wave.current });
    const loop = (ts: number) => {
      if (ts - last > 110) {
        last = ts;
        t++;
        render();
      }
      raf = requestAnimationFrame(loop);
    };
    render();
    if (reduce) {
      const id = window.setInterval(render, 250); // still reflect theme and hover changes
      return () => window.clearInterval(id);
    }
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Rotate the "Now" line with a soft fade.
  useEffect(() => {
    if (lines.length < 2) return;
    let timeout = 0;
    const id = window.setInterval(() => {
      setFading(true);
      timeout = window.setTimeout(() => {
        setLineIndex((i) => (i + 1) % lines.length);
        setFading(false);
      }, 400);
    }, 7000);
    return () => {
      window.clearInterval(id);
      window.clearTimeout(timeout);
    };
  }, [lines.length]);

  const status = hoverSay ?? lines[lineIndex];

  return (
    <div className="overflow-hidden rounded-xl border-[3px] border-black bg-[#16142a] shadow-[6px_6px_0_rgba(0,0,0,0.35)]">
      <div className="relative leading-none">
        <canvas
          ref={canvasRef}
          width={ROOM_W}
          height={ROOM_H}
          className="block h-auto w-full [image-rendering:pixelated]"
          role="img"
          aria-label="Pixel-art scene: Eray, bald and bearded, types code at his desk while thinking about a small Claude mascot. There is a window, a bookshelf, a desk lamp, a mug of coffee and a sleeping cat."
        />
        {HOTSPOTS.map((h) => {
          const style = { left: `${h.box.left}%`, top: `${h.box.top}%`, width: `${h.box.width}%`, height: `${h.box.height}%` };
          const enter = () => {
            if (h.kind === "mascot") wave.current = true;
            if (h.say) setHoverSay(h.say);
          };
          const leave = () => {
            wave.current = false;
            setHoverSay(null);
          };
          const common = { className: "hotspot", style, onMouseEnter: enter, onMouseLeave: leave, onFocus: enter, onBlur: leave };
          if (h.kind === "lamp") {
            return (
              <button
                key={h.label}
                type="button"
                aria-label={night ? "Turn the lamp off (switch to light theme)" : "Turn the lamp on (switch to dark theme)"}
                onClick={() => {
                  setTheme(night ? "light" : "dark");
                  setHoverSay(night ? "Daylight: light theme" : "Evening: dark theme");
                }}
                {...common}
              >
                <span>{h.label}</span>
              </button>
            );
          }
          if (h.kind === "mascot") {
            return (
              <button key={h.label} type="button" aria-label="Claude, my pair programmer" {...common}>
                <span>{h.label}</span>
              </button>
            );
          }
          return (
            <Link key={h.label} href={h.href!} aria-label={h.label} {...common}>
              <span>{h.label}</span>
            </Link>
          );
        })}
      </div>
      <div className="flex min-h-14 items-center gap-3 border-t-[3px] border-black bg-[#1d1a36] px-4 py-3 text-sm text-[#cfc8ef] sm:px-6">
        <span className="rounded-[3px] border border-[#ffd98a55] px-1.5 py-1 font-mono text-[10px] leading-none tracking-[0.12em] text-[#ffd98a] uppercase">
          Now
        </span>
        <p aria-live="polite" className={`transition-opacity duration-400 ${fading && !hoverSay ? "opacity-0" : "opacity-100"}`}>
          {status}
        </p>
      </div>
    </div>
  );
}
