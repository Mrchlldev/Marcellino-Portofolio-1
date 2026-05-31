"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-40 px-4 py-4 md:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between border-2 border-ink bg-paper/90 px-4 py-3 shadow-neoSm backdrop-blur">
          <a href="#home" className="font-display text-2xl font-black tracking-tight">{site.brand}</a>
          <Button size="icon" variant="default" onClick={() => setOpen(true)} aria-label="Open sidebar">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-ink/35 backdrop-blur-md" onClick={() => setOpen(false)} />
            <motion.aside initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", stiffness: 260, damping: 28 }} className="fixed right-0 top-0 z-50 h-dvh w-[86%] max-w-sm border-l-4 border-ink bg-background p-6 shadow-neoLg">
              <div className="flex items-center justify-between border-b-2 border-ink pb-4">
                <div>
                  <p className="font-display text-3xl font-black">{site.brand}</p>
                  <p className="text-sm font-bold">Navigation Panel</p>
                </div>
                <Button size="icon" variant="coral" onClick={() => setOpen(false)} aria-label="Close sidebar"><X className="h-5 w-5" /></Button>
              </div>
              <div className="mt-8 grid gap-4">
                {site.nav.map((item, index) => (
                  <motion.a key={item.href} href={item.href} onClick={() => setOpen(false)} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.06 }} className="border-2 border-ink bg-paper px-5 py-4 font-display text-xl font-black uppercase shadow-neoSm transition hover:-translate-y-1 hover:bg-lemon hover:shadow-neo">
                    {item.label}
                  </motion.a>
                ))}
              </div>
              <div className="absolute bottom-6 left-6 right-6 border-2 border-ink bg-mint p-4 shadow-neoSm">
                <p className="font-display text-xl font-black">Author Info</p>
                <p className="mt-1 text-sm font-bold">{site.author.name}</p>
                <p className="text-sm">{site.author.username}</p>
                <p className="break-all text-xs">{site.author.email}</p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
