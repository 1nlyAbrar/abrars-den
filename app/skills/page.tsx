import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import { skillGroups } from "@/lib/data";

export const metadata = { title: "Skills - Abrar Faiyaz" };

export default function SkillsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 pt-32">
        <SectionReveal>
          <h1 className="font-display text-4xl font-black">
            Technical <span className="gradient-text">Skills</span>
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-silver/70">
            Structured across hardware, networking, cloud, AI, and professional disciplines.
          </p>
        </SectionReveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <SectionReveal key={g.title} delay={i * 0.05}>
              <div className="glass h-full rounded-2xl p-6 transition hover:neon-border">
                <h2 className="font-display text-lg font-semibold text-neon">{g.title}</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span key={s} className="rounded-full bg-electric/10 px-3 py-1 text-xs text-silver/85 ring-1 ring-neon/20">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

