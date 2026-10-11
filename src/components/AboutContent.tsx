import Image from "next/image";
import { aboutConfig } from "@/config/about";
import { contactConfig } from "@/config/contact";
import { GitHubIcon, LinkedInIcon, MailIcon, DownloadIcon } from "@/components/SocialIcons";

const card =
  "rounded-2xl border border-neutral-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] backdrop-blur-sm";

export default function AboutContent() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] items-start animate-fade-up">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            {aboutConfig.title}
          </h1>
          <p className="mt-5 text-base leading-7 sm:text-lg sm:leading-8 text-neutral-600 dark:text-neutral-400">
            {aboutConfig.description}
          </p>
          <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-700 dark:text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true"></span>
            Open to internships
          </p>
          <br />
          <a
            href={contactConfig.resume}
            download
            className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-violet-500 rounded-lg shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            <DownloadIcon />
            {contactConfig.resumeLabel}
          </a>
        </div>
        <div className="relative mx-auto w-full max-w-[320px] aspect-square">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-indigo-500/50 to-violet-500/50 blur-md opacity-60" aria-hidden="true"></div>
          <Image
            src={aboutConfig.image}
            alt={aboutConfig.imageAlt}
            fill
            sizes="(max-width: 768px) 80vw, 320px"
            className="relative object-cover rounded-2xl"
            priority
          />
        </div>
      </div>

      <div className="mt-14 animate-fade-up" style={{ animationDelay: "0.15s" }}>
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
          {aboutConfig.skills.title}
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {aboutConfig.skills.groups.map((group) => (
            <div key={group.name} className={`${card} p-5 ${group.items.length > 8 ? "sm:col-span-2" : ""}`}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-300">
                {group.name}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-neutral-100 dark:bg-white/[0.07] border border-neutral-200 dark:border-white/10 px-3 py-1 text-sm text-neutral-700 dark:text-neutral-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-2 animate-fade-up" style={{ animationDelay: "0.25s" }}>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
            {aboutConfig.education.title}
          </h2>
          <div className="mt-5">
            {aboutConfig.education.items.map((item) => (
              <div key={item.degree} className="relative pl-8 border-l border-indigo-400/40">
                <span className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20" aria-hidden="true"></span>
                <p className="text-xs uppercase tracking-widest text-neutral-500">{item.period}</p>
                <h3 className="mt-1 text-lg font-bold text-neutral-900 dark:text-neutral-100">{item.degree}</h3>
                <p className="mt-1 text-sm font-medium text-neutral-700 dark:text-neutral-300">{item.institution}</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{item.location}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
            {contactConfig.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-600 dark:text-neutral-400">
            {contactConfig.description}
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="inline-flex items-center gap-3 text-neutral-800 dark:text-neutral-200">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {contactConfig.location}
            </li>
            <li>
              <a href={`mailto:${contactConfig.email}`} className="inline-flex items-center gap-3 text-neutral-800 dark:text-neutral-200 hover:text-indigo-500 dark:hover:text-indigo-300 break-all">
                <MailIcon /> {contactConfig.email}
              </a>
            </li>
            <li>
              <a href={contactConfig.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-neutral-800 dark:text-neutral-200 hover:text-indigo-500 dark:hover:text-indigo-300">
                <GitHubIcon /> github.com/Samyak-Mohanty
              </a>
            </li>
            <li>
              <a href={contactConfig.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-neutral-800 dark:text-neutral-200 hover:text-indigo-500 dark:hover:text-indigo-300">
                <LinkedInIcon /> linkedin.com/in/samyak-mohanty
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
