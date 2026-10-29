import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";

export const metadata = { title: "Projects - Abrar Faiyaz" };

const placeholders = [
  { title: "Project Title", stack: ["Hardware", "Networking"], desc: "Add your project description here." },
  { title: "Project Title", stack: ["Cloud", "AI"], desc: "Add your project description here." },
  { title: "Project Title", stack: ["Excel", "Analysis"], desc: "Add your project description here." },
];

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 pt-32">
        <SectionReveal>
          <h1 className="font-display text-4xl font-black">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-silver/70">
            A curated gallery of hands-on work. Real project entries will appear here as they are completed.
          </p>
        </SectionReveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {placeholders.map((p, i) => (
            <SectionReveal key={i} delay={i * 0.06}>
              <div className="glass group h-full overflow-hidden rounded-2xl transition hover:neon-border">
                <div className="relative aspect-video bg-gradient-to-br from-midnight to-ink">
                  <div className="absolute inset-0 grid-overlay opacity-40" />
                  <span className="absolute bottom-2 right-2 rounded-full bg-ink/70 px-2 py-0.5 text-[10px] text-neon">Placeholder</span>
                </div>
                <div className="p-5">
                  <h2 className="text-sm font-semibold text-silver group-hover:text-neon">{p.title}</h2>
                  <p className="mt-2 text-xs text-silver/65">{p.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span key={s} className="rounded-full bg-electric/10 px-2 py-0.5 text-[10px] text-silver/70 ring-1 ring-neon/20">{s}</span>
                    ))}
                  </div>
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

