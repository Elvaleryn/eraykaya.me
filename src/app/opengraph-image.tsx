import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#16142a",
          color: "#ece6ff",
        }}
      >
        <div style={{ display: "flex", gap: 12 }}>
          {["#e5484d", "#4a7bd0", "#ffcf6b", "#7ee0a1", "#c6b8ff", "#d97757"].map((c) => (
            <div key={c} style={{ width: 28, height: 72, background: c }} />
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: -2 }}>{site.name}</div>
          <div style={{ fontSize: 36, color: "#a9a1d6" }}>{site.tagline}</div>
        </div>
        <div style={{ fontSize: 28, color: "#ffd98a" }}>eraykaya.me</div>
      </div>
    ),
    size,
  );
}
