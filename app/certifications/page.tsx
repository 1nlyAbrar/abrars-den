import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";

export const metadata = { title: "Certifications - Abrar Faiyaz" };

export default function CertificationsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-4 pt-32">
        <SectionReveal>
          <h1 className="font-display text-4xl font-black">
            Certifications & <span className="gradient-text">Achievements</span>
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-silver/70">
            Verified certificates will be listed here as they are completed. No certifications have been
            added yet - this section is reserved for future credentials.
          </p>
        </SectionReveal>

        <SectionReveal>
          <div className="mt-10 glass rounded-2xl border-dashed p-10 text-center">
            <p className="text-sm text-silver/60">No certifications uploaded yet.</p>
          </div>
        </SectionReveal>
      </main>
      <Footer />
    </>
  );
}

