import { site } from "@/content/site";

export type Post = {
  id: number;
  title: string;
  description: string;
  url: string;
  readable_publish_date: string;
  published_at: string;
  reading_time_minutes: number;
  tag_list: string[];
};

/** Published dev.to articles, refreshed at most once an hour. Returns [] if dev.to is unreachable. */
export async function getPosts(): Promise<Post[]> {
  try {
    const res = await fetch(
      `https://dev.to/api/articles?username=${site.devtoUsername}&per_page=100`,
      {
        headers: { Accept: "application/vnd.forem.api-v1+json", "User-Agent": "eraykaya.me" },
        next: { revalidate: 3600 },
      },
    );
    if (!res.ok) return [];
    const data = (await res.json()) as Post[];
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}
