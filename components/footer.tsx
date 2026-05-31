import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t-4 border-ink bg-ink text-background">
      <div className="overflow-hidden border-b-4 border-background/20 py-4">
        <div className="flex w-max animate-marquee gap-8 font-display text-2xl font-black uppercase">
          {Array.from({ length: 2 }).map((_, set) => site.nav.map((item) => <span key={`${set}-${item.label}`}>✦ {item.label}</span>))}
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-[1.2fr_.8fr_.8fr] md:px-8">
        <div>
          <h2 className="font-display text-5xl font-black">{site.brand}</h2>
          <p className="mt-4 max-w-md leading-7">Modern portfolio dengan gaya NeoBrutalism, full animasi, dan struktur setting yang mudah diedit.</p>
        </div>
        <div>
          <h3 className="font-display text-xl font-black uppercase">Sections</h3>
          <div className="mt-4 grid gap-2">{site.nav.map((item) => <a key={item.href} className="hover:text-lemon" href={item.href}>{item.label}</a>)}</div>
        </div>
        <div>
          <h3 className="font-display text-xl font-black uppercase">Author</h3>
          <p className="mt-4">{site.author.name}</p>
          <p>{site.author.username}</p>
          <p className="break-all">{site.author.email}</p>
        </div>
      </div>
      <div className="border-t-2 border-background/20 px-4 py-5 text-center text-sm font-bold">© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
    </footer>
  );
}
