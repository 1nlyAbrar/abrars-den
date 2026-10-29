import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import { services } from "@/lib/data";

export const metadata = { title: "Services - Abrar Faiyaz" };

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 pt-32">
        <SectionReveal>
          <h1 className="font-display text-4xl font-black">
            What I <span className="gradient-text">Offer</span>
          </h1>
        </SectionReveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <SectionReveal key={s.title} delay={i * 0.05}>
              <div className="glass h-full rounded-2xl p-6 transition hover:neon-border">
                <h2 className="text-sm font-semibold text-neon">{s.title}</h2>
                <p className="mt-2 text-xs leading-relaxed text-silver/70">{s.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

