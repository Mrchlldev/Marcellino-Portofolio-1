import { skills, stacks } from "@/lib/skill";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Skills() {
  return (
    <section id="skill" className="px-4 py-20 md:px-8" data-aos="fade-up">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 inline-block border-2 border-ink bg-lemon px-4 py-2 font-display text-2xl font-black uppercase shadow-neoSm">Skill</div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <Card key={skill.title} data-aos="zoom-in" data-aos-delay={i * 80} className="bg-paper">
                <CardHeader><Icon className="mb-4 h-10 w-10" /><CardTitle className="text-xl">{skill.title}</CardTitle></CardHeader>
                <CardContent>{skill.description}</CardContent>
              </Card>
            );
          })}
        </div>
        <div className="mt-12 border-2 border-ink bg-sky p-5 shadow-neo" data-aos="fade-up">
          <h3 className="font-display text-2xl font-black uppercase">Language / Framework</h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {stacks.map((stack) => (
              <div key={stack} title={stack} className="grid h-16 w-16 place-items-center border-2 border-ink bg-paper text-center text-[10px] font-black shadow-neoSm transition hover:-translate-y-1 hover:bg-lemon">
                {stack.split(" ").map((p) => p[0]).join("").replace("N.", "N")}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
