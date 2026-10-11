import Link from 'next/link';
import { globalConfig } from '@/config/global';
import { GitHubIcon, LinkedInIcon, MailIcon } from '@/components/SocialIcons';

export default function Footer() {
  const { social } = globalConfig.footer;
  const linkClass = "text-neutral-500 dark:text-neutral-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors";
  return (
    <footer className="relative z-10 border-t border-neutral-200 dark:border-white/10 bg-white/70 dark:bg-neutral-950/60 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-3 px-6 py-5 mx-auto max-w-7xl sm:flex-row sm:justify-between">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
          <Link href="/" className="group flex items-center gap-1.5 font-semibold text-black dark:text-white">
            <span className="text-xl group-hover:-rotate-12 group-hover:scale-110 duration-300">✦</span>
            <span>{globalConfig.site.author}</span>
          </Link>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">{globalConfig.footer.copyright}</p>
        </div>
        <div className="flex items-center gap-5">
          <a href={social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={linkClass}><GitHubIcon /></a>
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={linkClass}><LinkedInIcon /></a>
          <a href={`mailto:${social.email}`} aria-label="Email" className={linkClass}><MailIcon /></a>
        </div>
      </div>
    </footer>
  );
}
