import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import { profile } from "@/lib/data";

export const metadata = { title: "About - Abrar Faiyaz" };

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-4 pt-32">
        <SectionReveal>
          <h1 className="font-display text-4xl font-black">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="mt-6 text-sm leading-relaxed text-silver/80">{profile.summary}</p>
          <p className="mt-4 text-sm leading-relaxed text-silver/70">
            My technical interests include computer hardware, network infrastructure, cloud
            computing, IT support, and software development. I am committed to strengthening
            my technical knowledge through continuous learning, hands-on practice, and practical
            projects.
          </p>
        </SectionReveal>

        <SectionReveal>
          <h2 className="mt-14 font-display text-xl font-bold text-neon">Areas of Interest</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {profile.interests.map((i) => (
              <li key={i} className="glass rounded-xl px-4 py-3 text-sm text-silver/80">
                {i}
              </li>
            ))}
          </ul>
        </SectionReveal>

        <SectionReveal>
          <h2 className="mt-14 font-display text-xl font-bold text-neon">Education</h2>
          <div className="mt-4 space-y-3">
            <div className="glass rounded-2xl p-5">
              <p className="text-sm font-semibold text-silver">Manarat Dhaka International College</p>
              <p className="text-xs text-silver/60">Physical Sciences - 2023 - CGPA 3.50</p>
            </div>
            <div className="glass rounded-2xl p-5">
              <p className="text-sm font-semibold text-silver">Manarat Dhaka International School and College</p>
              <p className="text-xs text-silver/60">2008 - 2022</p>
            </div>
          </div>
        </SectionReveal>
      </main>
      <Footer />
    </>
  );
}

