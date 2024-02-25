"use client";

/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { Post } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useFindManyPost, useMutatePost } from "../lib/hooks";

const Posts = () => {
  // check login
  const { data: session } = useSession();
  const user = session?.user;

  // Post crud hooks
  const { createPost, updatePost, deletePost } = useMutatePost();

  // list all posts that're visible to the current user
  const { data: posts } = useFindManyPost(
    {
      include: { author: true },
      orderBy: { createdAt: "desc" },
    },
    // fetch only when user's logged in
    { disabled: !user }
  );

  if (!user) {
    return null;
  }

  async function onCreatePost() {
    const title = prompt("Enter post title");
    if (title) {
      await createPost({ data: { title, authorId: user!.id } });
    }
  }

  async function onTogglePublished(post: Post) {
    await updatePost({
      where: { id: post.id },
      data: { published: !post.published },
    });
  }

  async function onDelete(post: Post) {
    await deletePost({ where: { id: post.id } });
  }

  return (
    <div className="container flex flex-col text-white">
      <button
        className="rounded border border-white p-2 text-lg"
        onClick={onCreatePost}
      >
        + Create Post
      </button>

      <ul className="container mt-8 flex flex-col gap-2">
        {posts?.map((post) => (
          <li key={post.id} className="flex items-end justify-between gap-4">
            <p className={`text-2xl ${!post.published ? "text-gray-400" : ""}`}>
              {post.title}
              <span className="text-lg"> by {post.author.email}</span>
            </p>
            <div className="flex w-32 justify-end gap-1 text-left">
              <button
                className="underline"
                onClick={() => onTogglePublished(post)}
              >
                {post.published ? "Unpublish" : "Publish"}
              </button>
              <button className="underline" onClick={() => onDelete(post)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
