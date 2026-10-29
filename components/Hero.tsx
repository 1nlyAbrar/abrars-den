"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import ProfileOrb from "./ProfileOrb";
import TypingText from "./TypingText";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center px-4 pt-28">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 md:order-1"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-neon">
            <Sparkles className="h-3.5 w-3.5" /> Future-ready IT Professional
          </div>
          <h1 className="font-display text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            <span className="mb-2 block text-lg font-medium tracking-widest text-silver/70">HI, I&apos;M</span>
            <span className="gradient-text neon-text">Abrar Faiyaz</span>
          </h1>
          <p className="mt-4 min-h-[1.5em] font-mono text-sm text-neon/90">
            <TypingText
              phrases={[
                "Hardware & Network Support",
                "Cloud Computing Enthusiast",
                "AI & Emerging Technologies",
                "IT Infrastructure & Troubleshooting",
                "Open to IT Opportunities",
              ]}
            />
          </p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-silver/75">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/projects" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-electric to-neon px-5 py-2.5 text-sm font-semibold text-ink transition hover:brightness-110">
              Explore My Portfolio <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <a href="/resume.pdf" download className="inline-flex items-center gap-2 rounded-xl glass px-5 py-2.5 text-sm font-semibold text-silver hover:text-neon">
              <Download className="h-4 w-4" /> Resume
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl glass px-5 py-2.5 text-sm font-semibold text-silver hover:text-neon">
              <Mail className="h-4 w-4" /> Contact
            </Link>
            <a href={profile.github} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-xl glass text-silver hover:text-neon">
              <Github className="h-4 w-4" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-xl glass text-silver hover:text-neon">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="order-1 md:order-2"
        >
          <ProfileOrb />
        </motion.div>
      </div>
    </section>
  );
}
