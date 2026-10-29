"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import { useState } from "react";
import { profile } from "@/lib/data";
import { Mail, Github, Linkedin, Send } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !email || !message) { setStatus("error"); return; }
    window.location.href = `mailto:${profile.email}?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + "\n\nFrom: " + email)}`;
    setStatus("sent");
  };

  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-4 pt-32">
        <SectionReveal>
          <h1 className="font-display text-4xl font-black">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-silver/70">
            Open to IT opportunities, collaborations, and conversations. Reach out through the form or any channel below.
          </p>
        </SectionReveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <SectionReveal>
            <div className="space-y-3">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 glass rounded-xl p-4 hover:neon-border">
                <Mail className="h-4 w-4 text-neon" />
                <span className="text-sm text-silver/85">{profile.email}</span>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 glass rounded-xl p-4 hover:neon-border">
                <Linkedin className="h-4 w-4 text-neon" />
                <span className="text-sm text-silver/85">LinkedIn</span>
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 glass rounded-xl p-4 hover:neon-border">
                <Github className="h-4 w-4 text-neon" />
                <span className="text-sm text-silver/85">GitHub</span>
              </a>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <form onSubmit={onSubmit} className="glass space-y-3 rounded-2xl p-5">
              <input name="name" placeholder="Your name" className="w-full rounded-lg bg-ink/60 px-3 py-2 text-sm outline-none ring-1 ring-neon/20 focus:ring-neon/60" />
              <input name="email" type="email" placeholder="Your email" className="w-full rounded-lg bg-ink/60 px-3 py-2 text-sm outline-none ring-1 ring-neon/20 focus:ring-neon/60" />
              <textarea name="message" rows={5} placeholder="Your message" className="w-full rounded-lg bg-ink/60 px-3 py-2 text-sm outline-none ring-1 ring-neon/20 focus:ring-neon/60" />
              <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-electric to-neon px-4 py-2 text-sm font-semibold text-ink">
                <Send className="h-4 w-4" /> Send Message
              </button>
              {status === "sent" && <p className="text-xs text-neon">Opening your email client...</p>}
              {status === "error" && <p className="text-xs text-red-400">Please fill all fields.</p>}
            </form>
          </SectionReveal>
        </div>
      </main>
      <Footer />
    </>
  );
}

