import Link from "next/link";
import { PostList } from "@/components/post-list";
import { RoomHero } from "@/components/room/room-hero";
import { about, experience, links, nowLines, site } from "@/content/site";
import { getPosts } from "@/lib/devto";

function SectionTitle({ id, eyebrow, children }: { id: string; eyebrow: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-2">
      <p className="font-mono text-xs tracking-[0.12em] text-muted uppercase">{eyebrow}</p>
      <h2 id={id} className="font-pixel text-3xl font-semibold">
        {children}
      </h2>
    </div>
  );
}

export default async function Home() {
  const posts = (await getPosts()).slice(0, 3);

  return (
    <div className="mx-auto grid max-w-5xl gap-24 px-4 pt-8 sm:px-6">
      <section aria-labelledby="intro" className="grid gap-8">
        <RoomHero lines={nowLines} />
        <div className="grid gap-3">
          <h1 id="intro" className="font-pixel text-4xl font-bold sm:text-5xl">
            {site.name}
          </h1>
          <p className="max-w-[46ch] text-lg text-muted">{site.tagline}</p>
          <p className="text-sm text-muted">Explore the room, or use the menu.</p>
        </div>
      </section>

      <section aria-labelledby="about" className="grid max-w-[65ch] gap-6">
        <SectionTitle id="about" eyebrow="Background">
          About
        </SectionTitle>
        {about.map((p) => (
          <p key={p.slice(0, 24)} className="leading-relaxed">
            {p}
          </p>
        ))}
      </section>

      <section aria-labelledby="work" className="grid gap-6">
        <SectionTitle id="work" eyebrow="Most recent first">
          Work
        </SectionTitle>
        <ol className="border-t border-line">
          {experience.map((role, i) => (
            <li key={role.company} className="border-b border-line">
              <details className="group">
                <summary className="grid cursor-pointer grid-cols-[3rem_1fr_auto] items-baseline gap-4 py-5">
                  <span className="font-mono text-sm text-accent">v{experience.length - i}</span>
                  <span className="grid min-w-0 gap-1">
                    <span className="font-semibold">
                      {role.company} <span className="font-normal text-muted">· {role.title}</span>
                    </span>
                    <span className="text-sm text-muted">{role.summary}</span>
                  </span>
                  <span className="font-mono text-xs text-muted">
                    <span className="hidden sm:inline">{role.note} </span>
                    <span aria-hidden className="inline-block transition-transform group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <div className="grid gap-4 pb-6 pl-16">
                  <ul className="grid list-disc gap-1 pl-5 text-sm leading-relaxed">
                    {role.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                  {role.stack && (
                    <p className="font-mono text-xs text-muted">{role.stack.join(" · ")}</p>
                  )}
                </div>
              </details>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="writing" className="grid gap-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle id="writing" eyebrow="From dev.to">
            Writing
          </SectionTitle>
          <Link href="/writing" className="text-sm text-muted underline decoration-line underline-offset-4 hover:text-fg hover:decoration-accent">
            All articles
          </Link>
        </div>
        <PostList posts={posts} />
      </section>

      <section aria-labelledby="contact" className="grid gap-6">
        <SectionTitle id="contact" eyebrow="Say hello">
          Contact
        </SectionTitle>
        <p className="max-w-[55ch] leading-relaxed">
          Open to a conversation about frontend architecture, leading teams, or a product you&apos;re building. The fastest way to reach me is LinkedIn.
        </p>
        <ul className="flex flex-wrap gap-3">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="inline-block rounded-md border border-line bg-surface px-4 py-2 text-sm transition-colors hover:border-accent">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
