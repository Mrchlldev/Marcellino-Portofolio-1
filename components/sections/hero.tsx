"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="relative min-h-dvh overflow-hidden px-4 pt-32 md:px-8">
      <div className="absolute inset-0 -z-10 neo-grid" />
      <motion.div className="absolute left-8 top-32 hidden h-24 w-24 border-4 border-ink bg-coral shadow-neo md:block" animate={{ rotate: [0, 8, -8, 0], y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity }} />
      <motion.div className="absolute bottom-20 right-10 hidden h-32 w-32 border-4 border-ink bg-sky shadow-neo md:block" animate={{ rotate: [0, -10, 10, 0], y: [0, 12, 0] }} transition={{ duration: 6, repeat: Infinity }} />

      <div className="mx-auto grid max-w-6xl items-center gap-10 py-20 md:grid-cols-[1.15fr_.85fr]">
        <div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="mb-6 inline-flex items-center gap-2 border-2 border-ink bg-mint px-4 py-2 font-black shadow-neoSm">
            <Sparkles className="h-4 w-4" /> {site.role}
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }} className="font-display text-5xl font-black uppercase leading-[.95] tracking-tight md:text-7xl lg:text-8xl">
            {site.heroTitle}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }} className="mt-6 max-w-2xl text-lg font-semibold leading-8 md:text-xl">
            {site.heroSubtitle}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3 }} className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg"><a href="#project">Lihat Project <ArrowUpRight className="ml-2 h-5 w-5" /></a></Button>
            <Button asChild size="lg" variant="plain"><a href="#contact">Hubungi Saya</a></Button>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, rotate: -4, scale: .9 }} animate={{ opacity: 1, rotate: 2, scale: 1 }} transition={{ delay: .25, type: "spring" }} className="relative border-4 border-ink bg-lemon p-5 shadow-neoLg">
          <div className="border-4 border-ink bg-paper p-8">
            <div className="mb-6 h-16 w-16 border-4 border-ink bg-coral shadow-neoSm animate-float" />
            <p className="font-display text-5xl font-black uppercase leading-none">Bold UI.<br />Clean Code.<br />Fast Web.</p>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {['NEXT', 'TS', 'UI'].map((x) => <div key={x} className="border-2 border-ink bg-mint p-3 text-center font-black shadow-neoSm">{x}</div>)}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
