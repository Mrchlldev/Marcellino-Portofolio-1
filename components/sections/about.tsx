import { Card, CardContent, CardTitle } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="px-4 py-20 md:px-8" data-aos="fade-up">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 inline-block border-2 border-ink bg-coral px-4 py-2 font-display text-2xl font-black uppercase shadow-neoSm">About</div>
        <Card className="bg-paper">
          <CardTitle>Tentang Saya</CardTitle>
          <CardContent className="mt-4 text-base md:text-lg">
            Saya adalah developer yang fokus membuat website modern dengan tampilan berani, interaktif, dan mudah dikembangkan. Portfolio ini dibuat dengan konsep NeoBrutalism: boxy, kontras, tegas, dan penuh animasi.
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
