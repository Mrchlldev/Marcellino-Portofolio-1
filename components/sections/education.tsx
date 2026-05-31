import { GraduationCap } from "lucide-react";

export function Education() {
  const items = [
    { year: "2023 - Now", title: "Self Learning Web Development", desc: "Belajar frontend, backend, UI design, deployment, dan pembuatan REST API." },
    { year: "2024 - Now", title: "Project Based Learning", desc: "Mengembangkan berbagai website tools, bot utilities, dan generator berbasis web." },
  ];
  return (
    <section id="education" className="px-4 py-20 md:px-8" data-aos="fade-up">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 inline-block border-2 border-ink bg-mint px-4 py-2 font-display text-2xl font-black uppercase shadow-neoSm">Education</div>
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <div key={item.title} className="border-2 border-ink bg-paper p-6 shadow-neo" data-aos="flip-left">
              <GraduationCap className="mb-4 h-10 w-10" />
              <p className="inline-block border-2 border-ink bg-lemon px-3 py-1 text-sm font-black shadow-neoSm">{item.year}</p>
              <h3 className="mt-5 font-display text-2xl font-black uppercase">{item.title}</h3>
              <p className="mt-3 leading-7">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
