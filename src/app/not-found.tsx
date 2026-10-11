import Link from "next/link";
import PageShell from "@/components/PageShell";

export default function NotFound() {
  return (
    <PageShell>
      <section className="w-full max-w-3xl mx-auto px-4 sm:px-6 pt-36 pb-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-300">404</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base leading-7 text-neutral-600 dark:text-neutral-400">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-violet-500 rounded-lg shadow-lg shadow-indigo-500/25 hover:-translate-y-0.5 transition-all duration-300"
          >
            Back to Home
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-neutral-900 dark:text-white border border-neutral-300 dark:border-white/15 rounded-lg hover:bg-neutral-100 dark:hover:bg-white/10 transition-all duration-300"
          >
            View Projects
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
