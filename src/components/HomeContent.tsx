import Link from "next/link";
import { homeConfig } from "@/config/home";
import { projectsConfig } from "@/config/projects";
import { contactConfig } from "@/config/contact";
import ProjectCard from "@/components/ProjectCard";
import { GitHubIcon, LinkedInIcon, MailIcon, DownloadIcon } from "@/components/SocialIcons";

const arrow = (
  <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

export default function HomeContent() {
  const featured = projectsConfig.items[0];
  const social = [
    { label: "GitHub", href: contactConfig.github, icon: <GitHubIcon />, external: true },
    { label: "LinkedIn", href: contactConfig.linkedin, icon: <LinkedInIcon />, external: true },
    { label: "Email", href: `mailto:${contactConfig.email}`, icon: <MailIcon />, external: false },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <section className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:min-h-[60vh]">
        <div className="animate-fade-up">
          <div className="flex flex-wrap items-center gap-2">
            <p className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-xs sm:text-sm font-medium text-indigo-700 dark:text-indigo-200">
              {homeConfig.role}
            </p>
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs sm:text-sm font-medium text-emerald-700 dark:text-emerald-300">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              {homeConfig.openTo}
            </p>
          </div>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
            {homeConfig.greeting.replace("Samyak Mohanty", "")}
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 dark:from-indigo-400 dark:via-violet-400 dark:to-fuchsia-400 bg-clip-text text-transparent">
              Samyak Mohanty
            </span>
          </h1>
          <p className="mt-4 text-lg font-medium leading-7 text-neutral-700 dark:text-neutral-300">
            {homeConfig.tagline}
          </p>
          <p className="mt-3 text-base leading-7 text-neutral-600 dark:text-neutral-400">
            {homeConfig.description}
          </p>

          <div className="flex flex-wrap gap-3 mt-7">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-violet-500 rounded-lg shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              {homeConfig.buttons.viewProjects}
              {arrow}
            </Link>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-neutral-900 dark:text-white border border-neutral-300 dark:border-white/15 rounded-lg hover:bg-neutral-100 dark:hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
            >
              {homeConfig.buttons.aboutMe}
              {arrow}
            </Link>
            <a
              href={contactConfig.resume}
              download
              className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-neutral-900 dark:text-white border border-neutral-300 dark:border-white/15 rounded-lg hover:bg-neutral-100 dark:hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
            >
              <DownloadIcon />
              {contactConfig.resumeLabel}
            </a>
          </div>

          <div className="flex items-center gap-3 mt-6">
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                title={s.label}
                {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-300 dark:border-white/15 text-neutral-600 dark:text-neutral-300 hover:text-indigo-500 dark:hover:text-indigo-300 hover:border-indigo-400/60 transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <div className="w-full max-w-[400px] animate-float-slow rounded-2xl border border-neutral-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.04] shadow-2xl shadow-indigo-500/10 backdrop-blur-sm" aria-hidden="true">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-neutral-200 dark:border-white/10">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80"></span>
              <span className="ml-3 text-xs text-neutral-500">main.cpp</span>
            </div>
            <pre className="p-5 text-[13px] leading-6 font-mono overflow-hidden text-neutral-700 dark:text-neutral-300"><code>{`int main() {
  while (learning) {
    code();
    solveProblems();
    buildProjects();
  }
  return backendDev();
}`}</code></pre>
          </div>
        </div>
      </section>

      <section className="mt-16 animate-fade-up" style={{ animationDelay: "0.3s" }} aria-labelledby="featured-heading">
        <div className="flex items-end justify-between mb-5">
          <h2 id="featured-heading" className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
            {homeConfig.featured.title}
          </h2>
          <Link href="/projects" className="text-sm font-medium text-indigo-600 dark:text-indigo-300 hover:underline">
            {homeConfig.featured.cta} →
          </Link>
        </div>
        <ProjectCard project={featured} showFeatures={false} />
      </section>
    </div>
  );
}
