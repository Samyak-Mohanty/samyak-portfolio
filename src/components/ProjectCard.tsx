import Image from "next/image";
import { GitHubIcon } from "@/components/SocialIcons";

export type ProjectItem = {
  slug: string;
  title: string;
  subtitle: string;
  status: string;
  description: string;
  type?: string;
  techGroups: readonly { label: string; items: readonly string[] }[];
  features: readonly string[];
  href: string;
  imageUrl: string;
  gallery?: readonly { src: string; label: string }[];
};

export default function ProjectCard({
  project,
  label,
  showFeatures = true,
  showGallery = false,
}: {
  project: ProjectItem;
  label?: string;
  showFeatures?: boolean;
  showGallery?: boolean;
}) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:border-indigo-400/60 dark:hover:border-indigo-400/40 hover:shadow-[0_0_40px_-12px_rgba(99,102,241,0.5)]">
      {/* Main image: top of the card. The screenshot's empty lower area is cropped. */}
      <div className="relative aspect-[16/8] w-full bg-[#101a1e] border-b border-neutral-200 dark:border-white/10">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover object-top"
            priority={false}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center border-dashed border-neutral-300 dark:border-white/15 bg-gradient-to-br from-indigo-500/15 via-violet-500/10 to-transparent">
            <p className="text-sm text-neutral-500 dark:text-neutral-400">Project screenshot coming soon</p>
          </div>
        )}
      </div>

      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-2">
        <div className="flex flex-col">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {label && (
              <span className="text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-300">
                {label}
              </span>
            )}
            {project.type && (
              <span className="rounded-full border border-violet-400/40 bg-violet-500/10 px-2.5 py-0.5 text-xs font-medium text-violet-700 dark:text-violet-200">
                {project.type}
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 px-2.5 py-0.5 text-xs font-medium text-amber-700 dark:text-amber-300">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" aria-hidden="true"></span>
              {project.status}
            </span>
          </div>

          <h3 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">{project.title}</h3>
          <p className="mt-1 text-sm font-medium text-indigo-600 dark:text-indigo-300">{project.subtitle}</p>
          <p className="mt-4 text-sm leading-6 sm:text-base sm:leading-7 text-neutral-600 dark:text-neutral-400">
            {project.description}
          </p>

          <div className="mt-6 pt-1">
            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 dark:border-white/15 px-4 py-2 text-sm font-medium text-neutral-800 dark:text-white hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors"
              >
                <GitHubIcon className="w-4 h-4" /> View on GitHub
              </a>
            ) : (
              <span className="text-xs text-neutral-500">Repository link coming soon</span>
            )}
          </div>
        </div>

        <div>
          {showFeatures && (
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              {project.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" aria-hidden="true"></span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          )}
          <div className={`space-y-3 ${showFeatures ? "mt-5" : ""}`}>
            {project.techGroups.map((g) => (
              <div key={g.label}>
                <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  {g.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-indigo-400/30 bg-indigo-500/10 px-2.5 py-1 text-xs text-indigo-700 dark:text-indigo-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showGallery && project.gallery && project.gallery.length > 0 && (
        <div className="border-t border-neutral-200 dark:border-white/10 p-6 sm:p-8">
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-300">
            Screenshots
          </h4>
          <div className="grid gap-4 sm:grid-cols-3">
            {project.gallery.map((g) => (
              <figure key={g.src} className="overflow-hidden rounded-lg border border-neutral-200 dark:border-white/10 bg-[#101a1e]">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={g.src}
                    alt={`${project.title} — ${g.label} screen`}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
                <figcaption className="px-3 py-2 text-xs text-neutral-400 border-t border-white/10">{g.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
