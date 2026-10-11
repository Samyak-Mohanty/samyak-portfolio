import { promises as fs } from 'fs';
import path from 'path';
import PageShell from "@/components/PageShell";
import { postsConfig } from "@/config/posts";
import { notFound } from 'next/navigation';

// Generate static paths. Static export needs at least one entry, so while there are
// no posts a placeholder slug is generated; it renders the 404 page (see below).
export async function generateStaticParams() {
  if (postsConfig.posts.length === 0) {
    return [{ slug: '_no-posts-yet' }];
  }
  return postsConfig.posts.map((post) => ({
    slug: post.slug.replace('posts/', ''),
  }));
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = postsConfig.posts.find(p => p.slug === `posts/${slug}`);

  if (!post) {
    notFound();
  }

  const postSlug = post.slug.replace('posts/', '');
  const postHtmlPath = path.join(
    process.cwd(),
    'generated',
    'posts',
    `${postSlug}.html`
  );
  let postHtml: string = post.html ?? "";

  try {
    postHtml = await fs.readFile(postHtmlPath, 'utf8');
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`Falling back to config HTML for ${postSlug}:`, error);
    }
  }

  return (
    <PageShell>
      <article className="w-full max-w-3xl mx-auto px-4 sm:px-6 pt-32 pb-16">
        <div className="prose dark:prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: postHtml }} />
        </div>
      </article>
    </PageShell>
  );
}
