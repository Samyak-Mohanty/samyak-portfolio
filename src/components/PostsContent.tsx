"use client";
import { useState } from "react";
import { postsConfig } from "@/config/posts";
import PostCard from "@/components/PostCard";

const POSTS_PER_PAGE = 5;

export default function PostsContent() {
  const posts = postsConfig.posts;
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <div className="animate-fade-up">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
          {postsConfig.title}
        </h1>
        <p className="mt-3 text-base leading-7 text-neutral-600 dark:text-neutral-400">
          {postsConfig.description}
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="mt-10 flex flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-300 dark:border-white/15 bg-white/60 dark:bg-white/[0.03] px-6 py-16 text-center animate-fade-up">
          <span className="rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700 dark:text-indigo-200">
            {postsConfig.noPosts}
          </span>
          <p className="mt-4 max-w-md text-neutral-600 dark:text-neutral-400">
            I haven&apos;t published any articles yet. Check back soon.
          </p>
        </div>
      ) : (
        <>
          <div className="mt-8 flex flex-col items-stretch w-full gap-5">
            {currentPosts.map((post) => (
              <PostCard
                key={post.slug}
                title={post.title}
                description={post.description}
                date={post.date}
                href={`/${post.slug}`}
                pattern="dots"
                imageUrl={post.image}
                readingTime={parseInt(post.readTime ?? "5")}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className="px-3 py-1 text-sm font-medium text-neutral-600 dark:text-neutral-400 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {postsConfig.pagination.previous}
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  aria-current={index + 1 === currentPage ? "page" : undefined}
                  className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium ${
                    index + 1 === currentPage
                      ? "bg-indigo-500 text-white"
                      : "text-neutral-600 dark:text-neutral-400"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                className="px-3 py-1 text-sm font-medium text-neutral-600 dark:text-neutral-400 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {postsConfig.pagination.next}
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
