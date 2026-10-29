"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import SectionReveal from "@/components/SectionReveal";
import { services, skillGroups } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  const [cmd, setCmd] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCmd((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <Header onOpenCommand={() => setCmd(true)} />
      <main className="relative">
        <Hero />

        <SectionReveal>
          <Banner />
        </SectionReveal>

        <SectionReveal>
          <section className="mx-auto mt-24 max-w-6xl px-4">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              What I <span className="gradient-text">Do</span>
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-silver/70">
              A focused set of capabilities spanning hardware, networks, cloud, and emerging AI tools.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <div key={s.title} className="group glass rounded-2xl p-5 transition hover:neon-border">
                  <h3 className="text-sm font-semibold text-silver group-hover:text-neon">{s.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-silver/65">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/services" className="inline-flex items-center gap-2 text-sm text-neon hover:underline">
                View all services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </SectionReveal>

        <SectionReveal>
          <section className="mx-auto mt-24 max-w-6xl px-4">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Skill <span className="gradient-text">Snapshot</span>
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((g) => (
                <div key={g.title} className="glass rounded-2xl p-5">
                  <h3 className="text-sm font-semibold text-neon">{g.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {g.items.map((i) => (
                      <span key={i} className="rounded-full bg-electric/10 px-2.5 py-1 text-[11px] text-silver/80 ring-1 ring-neon/20">
                        {i}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/skills" className="inline-flex items-center gap-2 text-sm text-neon hover:underline">
                Explore skills <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </SectionReveal>
      </main>
      <Footer />
      <CommandPalette open={cmd} onClose={() => setCmd(false)} />
    </>
  );
}
