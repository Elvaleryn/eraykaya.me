import Link from "next/link";
import { site } from "@/content/site";
import { ThemeToggle } from "./theme-toggle";

const nav = [
  { label: "Work", href: "/#work" },
  { label: "Writing", href: "/writing" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-line/60 bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-3 sm:px-6">
        <Link href="/" className="font-pixel text-lg font-semibold tracking-wide">
          {site.name.toLowerCase().replace(" ", ".")}
        </Link>
        <nav aria-label="Main" className="flex items-center gap-5 text-sm text-muted">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-fg">
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
