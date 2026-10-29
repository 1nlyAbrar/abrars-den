import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import { timeline } from "@/lib/data";

export const metadata = { title: "Experience - Abrar Faiyaz" };

export default function ExperiencePage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-4 pt-32">
        <SectionReveal>
          <h1 className="font-display text-4xl font-black">
            Experience & <span className="gradient-text">Education</span>
          </h1>
        </SectionReveal>

        <div className="relative mt-12 border-l border-neon/30 pl-6">
          {timeline.map((t, i) => (
            <SectionReveal key={i} delay={i * 0.05}>
              <div className="relative mb-10">
                <span className="absolute -left-[31px] top-1.5 grid h-3 w-3 place-items-center rounded-full bg-neon shadow-[0_0_14px_#00E5FF]" />
                <div className="glass rounded-2xl p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-sm font-semibold text-silver">{t.role}</h3>
                    <span className="rounded-full bg-electric/15 px-2 py-0.5 text-[10px] uppercase tracking-wider text-neon">
                      {t.type}
                    </span>
                  </div>
                  <p className="text-xs text-silver/60">{t.org}</p>
                  <p className="mt-1 font-mono text-[11px] text-neon/80">{t.period}</p>
                  {t.detail && <p className="mt-2 text-xs text-silver/70">{t.detail}</p>}
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

