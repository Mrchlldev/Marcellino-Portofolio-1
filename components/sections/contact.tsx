import { Mail, Send } from "lucide-react";
import { site } from "@/lib/site";

export function Contact() {
  const contacts = [
    { title: "Telegram", href: site.author.telegram, icon: Send, text: "Chat langsung lewat Telegram" },
    { title: "Email", href: `mailto:${site.author.email}`, icon: Mail, text: site.author.email },
  ];
  return (
    <section id="contact" className="px-4 py-20 md:px-8" data-aos="fade-up">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 inline-block border-2 border-ink bg-sky px-4 py-2 font-display text-2xl font-black uppercase shadow-neoSm">Contact</div>
        <div className="grid gap-6 md:grid-cols-2">
          {contacts.map((contact) => {
            const Icon = contact.icon;
            return (
              <a key={contact.title} href={contact.href} className="group border-2 border-ink bg-paper p-8 shadow-neo transition hover:-translate-y-2 hover:bg-mint hover:shadow-neoLg" data-aos="zoom-in">
                <Icon className="h-12 w-12 transition group-hover:rotate-12" />
                <h3 className="mt-5 font-display text-3xl font-black uppercase">{contact.title}</h3>
                <p className="mt-2 break-all font-semibold">{contact.text}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
