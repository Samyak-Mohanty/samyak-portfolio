import { projectsConfig } from "@/config/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsContent() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <div className="animate-fade-up">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
          {projectsConfig.title}
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-neutral-600 dark:text-neutral-400">
          {projectsConfig.description}
        </p>
      </div>

      <div className="mt-8 space-y-8">
        {projectsConfig.items.map((project, index) => (
          <div key={project.slug} className="animate-fade-up" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
            <ProjectCard project={project} label={index === 0 ? projectsConfig.featuredLabel : undefined} showGallery />
          </div>
        ))}
      </div>
    </section>
  );
}
