import Text from "@/components/shared/text";
import cx from "classnames";
import React from "react";

async function getPosts() {
  const response = await fetch(
    "https://dev.to/api/articles?username=eraywebdev"
  );
  const data = await response.json();
  return data;
}

const Tag = ({ tag }: { tag: string }) => {
  return (
    <li
      className={cx(
        "border border-primary-900 rounded-md",
        "rounded-2xl",
        "p-2",
        "mr-2",
        "text-primary-text",
        "text-sm",
        "font-normal"
      )}
    >
      #{tag}
    </li>
  );
};

const Post: React.FC<any> = ({ post }) => {
  return (
    <li
      className={cx(
        "bg-primary-content",
        "w-full",
        "rounded-2xl border border-primary-900",
        "p-8",
        "mb-8",
        "hover:cursor-pointer hover:brightness-75 hover:shadow-lg",
        "transition duration-300 ease-in-out",
        "hover:scale-105 transition-all duration-300 ease-in-out"
      )}
    >
      <a href={post.url} target="_blank" rel="noopener noreferrer">
        <article>
          <div className="flex justify-between mb-4">
            <Text size="small" as="span" color={"secondary"}>
              {post.readable_publish_date}
            </Text>
          </div>
          <div>
            <Text size="heading" as="h2" weight={"bold"} leading={"tight"}>
              {post.title}
            </Text>
            <Text size="medium" as="p" color={"secondary"} className="mt-4">
              {post.description}
            </Text>
          </div>

          <div className="flex mt-4">
            {post.tag_list.map((tag: string) => (
              <Tag tag={tag} key={tag} />
            ))}
          </div>
        </article>
      </a>
    </li>
  );
};

const BlogPostsPage = async () => {
  const posts = await getPosts();
  return (
    <ul>
      {posts.map((post: any) => (
        <Post post={post} key={post.id} />
      ))}
    </ul>
  );
};

export default BlogPostsPage;
