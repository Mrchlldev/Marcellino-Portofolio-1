# Marcellino F.A Portfolio

Website portfolio modern bergaya NeoBrutalism menggunakan Next.js, TypeScript, Tailwind CSS, AOS, Framer Motion, dan komponen lokal bergaya Shadcn/RetroUI.

## Fitur

- Full animasi dengan Framer Motion + AOS
- Background `#F5ECE7`
- Navigasi `Mrcl.` + tombol sidebar
- Sidebar dengan blur overlay dan Author Info
- Section: Hero, About, Skill, Education, Project, Contact
- Contact card Telegram dan Email
- Footer style marquee/NeoBrutalism
- Full setting lewat:
  - `lib/site.ts`
  - `lib/project.ts`
  - `lib/skill.ts`

## Cara menjalankan

```bash
npm install
npm run dev
```

Buka:

```bash
http://localhost:3000
```

## Build production

```bash
npm run build
npm run start
```

## Edit data website

- Profil, navbar, contact, author: `lib/site.ts`
- Skill dan stack icon: `lib/skill.ts`
- Project card: `lib/project.ts`

## Catatan

Komponen UI dibuat lokal di `components/ui` dengan style NeoBrutalism agar project langsung siap jalan tanpa perlu copy komponen tambahan dari CLI.
