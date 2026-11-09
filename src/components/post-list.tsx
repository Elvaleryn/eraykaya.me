import type { Post } from "@/lib/devto";

export function PostList({ posts }: { posts: Post[] }) {
  if (posts.length === 0) {
    return (
      <p className="text-muted">
        Articles couldn&apos;t be loaded right now. Read them on{" "}
        <a className="underline decoration-line underline-offset-4 hover:decoration-accent" href="https://dev.to/eraywebdev">
          dev.to
        </a>
        .
      </p>
    );
  }
  return (
    <ul className="divide-y divide-line border-y border-line">
      {posts.map((post) => (
        <li key={post.id}>
          <a href={post.url} className="group grid gap-1 py-5 sm:grid-cols-[8rem_1fr] sm:gap-6">
            <span className="font-mono text-xs text-muted tabular-nums sm:pt-1">
              <time dateTime={post.published_at}>{post.readable_publish_date}</time>
            </span>
            <span className="grid min-w-0 gap-1">
              <span className="font-medium text-fg group-hover:underline group-hover:decoration-accent group-hover:underline-offset-4">
                {post.title}
              </span>
              <span className="text-sm text-muted">{post.description}</span>
              <span className="font-mono text-xs text-muted">
                {post.reading_time_minutes} min read
                {post.tag_list.length > 0 && <> · {post.tag_list.map((t) => `#${t}`).join(" ")}</>}
              </span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
