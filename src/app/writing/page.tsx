import type { Metadata } from "next";
import { PostList } from "@/components/post-list";
import { getPosts } from "@/lib/devto";

export const metadata: Metadata = {
  title: "Writing",
  description: "Articles by Eray Kaya on frontend development and leading teams.",
  alternates: { canonical: "/writing" },
};

export default async function WritingPage() {
  const posts = await getPosts();
  return (
    <div className="mx-auto grid max-w-3xl gap-8 px-4 pt-12 sm:px-6">
      <div className="grid gap-3">
        <h1 className="font-pixel text-4xl font-bold">Writing</h1>
        <p className="text-muted">Articles on frontend and leading teams, published on dev.to.</p>
      </div>
      <PostList posts={posts} />
    </div>
  );
}
