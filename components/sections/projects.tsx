import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/project";
import { Button } from "@/components/ui/button";

export function Projects() {
  return (
    <section id="project" className="px-4 py-20 md:px-8" data-aos="fade-up">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 inline-block border-2 border-ink bg-coral px-4 py-2 font-display text-2xl font-black uppercase shadow-neoSm">Project</div>
        <div className="grid gap-7 md:grid-cols-3">
          {projects.map((project, i) => (
            <article key={project.title} className="flex min-h-[330px] flex-col border-2 border-ink bg-paper p-6 shadow-neo transition hover:-translate-y-2 hover:bg-lemon" data-aos="fade-up" data-aos-delay={i * 90}>
              <p className="mb-4 w-fit border-2 border-ink bg-sky px-3 py-1 text-xs font-black uppercase shadow-neoSm">{project.category}</p>
              <h3 className="font-display text-3xl font-black uppercase leading-tight">{project.title}</h3>
              <p className="mt-4 flex-1 leading-7">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => <span key={tag} className="border-2 border-ink bg-paper px-2 py-1 text-xs font-black">{tag}</span>)}
              </div>
              <Button asChild className="mt-6 w-full" variant="plain"><a href={project.link}>Detail <ArrowUpRight className="ml-2 h-4 w-4" /></a></Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
