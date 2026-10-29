import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import { timeline } from "@/lib/data";
import { Download } from "lucide-react";

export const metadata = { title: "Resume - Abrar Faiyaz" };

export default function ResumePage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 pt-32">
        <SectionReveal>
          <div className="flex items-center justify-between">
            <h1 className="font-display text-3xl font-black">
              My <span className="gradient-text">Resume</span>
            </h1>
            <a href="/resume.pdf" download className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-electric to-neon px-4 py-2 text-sm font-semibold text-ink">
              <Download className="h-4 w-4" /> Download PDF
            </a>
          </div>
        </SectionReveal>

        <SectionReveal>
          <div className="mt-8 glass rounded-2xl p-6">
            <h2 className="text-lg font-semibold text-neon">Abrar Faiyaz</h2>
            <p className="text-xs text-silver/60">Aspiring IT Professional - Dhaka, Bangladesh</p>
            <div className="mt-6 space-y-4">
              {timeline.map((t, i) => (
                <div key={i}>
                  <p className="text-sm font-semibold text-silver">{t.role}</p>
                  <p className="text-xs text-silver/60">{t.org} - {t.period}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </main>
      <Footer />
    </>
  );
}

