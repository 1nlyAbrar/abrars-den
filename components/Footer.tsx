import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-neon/15 px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-xs text-silver/60">
          © {new Date().getFullYear()} Abrar Faiyaz. Crafted with a future-first mindset.
        </p>
        <div className="flex items-center gap-3 text-silver/70">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-lg glass p-2 hover:text-neon"><Linkedin className="h-4 w-4" /></a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-lg glass p-2 hover:text-neon"><Github className="h-4 w-4" /></a>
          <a href={`mailto:${profile.email}`} className="rounded-lg glass p-2 hover:text-neon"><Mail className="h-4 w-4" /></a>
        </div>
        <nav className="flex gap-4 text-xs text-silver/60">
          <Link href="/about" className="hover:text-neon">About</Link>
          <Link href="/projects" className="hover:text-neon">Projects</Link>
          <Link href="/contact" className="hover:text-neon">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
