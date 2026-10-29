"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X, Command } from "lucide-react";
import LiveClock from "./LiveClock";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/skills", label: "SKILLS" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/experience", label: "EXP" },
  { href: "/certifications", label: "CERTS" },
  { href: "/services", label: "SERVICES" },
  { href: "/contact", label: "CONTACT" },
];

export default function Header({ onOpenCommand }: { onOpenCommand?: () => void }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    /* INCREASED CONTAINER WIDTH TO PREVENT OVERFLOW */
    <header className="fixed left-1/2 top-6 z-50 w-[98%] max-w-[1400px] -translate-x-1/2">
      
      <div className="relative flex items-center justify-between rounded-xl border border-white/10 bg-[#02040A]/80 px-4 py-3.5 shadow-[0_0_60px_-15px_rgba(0,229,255,0.2)] backdrop-blur-xl transition-all duration-500 hover:shadow-[0_0_80px_-10px_rgba(0,229,255,0.3)]">
        
        {/* Top Sci-Fi Accent Line */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-neon/80 to-transparent" />
        <div className="absolute left-0 top-0 h-2 w-2 border-l-2 border-t-2 border-neon" />
        <div className="absolute right-0 top-0 h-2 w-2 border-r-2 border-t-2 border-neon" />

        {/* Left: Brand */}
        <Link href="/" className="group relative flex shrink-0 items-center gap-1.5 pr-2">
          <span className="font-display text-[13px] font-black tracking-[0.25em] text-white transition-all duration-300 group-hover:text-neon group-hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.8)] xl:text-base xl:tracking-[0.35em]">
            ABRAR&apos;S DEN
          </span>
          <span className="mb-3 h-1.5 w-1.5 rounded-full bg-neon shadow-[0_0_12px_#00E5FF] animate-pulse xl:mb-4 xl:h-2 xl:w-2" />
        </Link>

        {/* Center-Left: Nav Links */}
        <nav className="hidden items-center gap-1 xl:gap-2 lg:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "group relative px-2.5 py-2 font-display text-[9px] font-bold tracking-[0.2em] transition-all duration-300 xl:text-[10px]",
                  active ? "text-neon drop-shadow-[0_0_5px_rgba(0,229,255,0.5)]" : "text-silver/60 hover:text-white"
                )}
              >
                {l.label}
                {/* Active Brackets */}
                <span
                  className={cn(
                    "absolute left-0 top-0 h-1.5 w-1.5 border-l-2 border-t-2 border-neon transition-all duration-300",
                    active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  )}
                />
                <span
                  className={cn(
                    "absolute bottom-0 right-0 h-1.5 w-1.5 border-b-2 border-r-2 border-neon transition-all duration-300",
                    active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  )}
                />
                {/* Hover Background */}
                <span className="absolute inset-0 -z-10 rounded bg-neon/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            );
          })}
        </nav>

        {/* Right Side: Actions & Clock */}
        <div className="flex shrink-0 items-center gap-2.5 pl-2">
          <div className="hidden md:block">
            <LiveClock />
          </div>

          <button
            onClick={() => onOpenCommand?.()}
            className="group hidden h-9 w-9 place-items-center rounded border border-white/10 bg-white/5 text-silver/60 transition hover:border-neon/50 hover:bg-neon/10 hover:text-neon md:grid"
            title="Command palette (Cmd+K)"
          >
            <Command className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90" />
          </button>

          {/* RESUME BUTTON FIXED INSIDE */}
          <a
            href="/resume.pdf"
            download
            className="group relative hidden h-9 shrink-0 items-center overflow-hidden rounded bg-white/5 px-4 font-display text-[9px] font-bold tracking-[0.15em] text-neon transition-all hover:bg-neon/10 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] sm:flex border border-neon/30 hover:border-neon/80 xl:px-5 xl:text-[10px] xl:tracking-[0.2em]"
          >
            <Download className="mr-1.5 h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 xl:mr-2" /> 
            RESUME
          </a>

          <button 
            onClick={() => setOpen((v) => !v)} 
            className="grid h-9 w-9 shrink-0 place-items-center rounded border border-white/10 bg-white/5 text-silver transition hover:text-neon lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
            className="absolute left-0 right-0 top-full mt-2 grid grid-cols-2 gap-2 rounded-xl border border-white/10 bg-[#02040A]/95 p-4 shadow-2xl backdrop-blur-3xl lg:hidden"
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded px-4 py-3 font-display text-[10px] font-bold tracking-widest transition-colors",
                  pathname === l.href ? "bg-neon/10 text-neon border border-neon/30" : "text-silver/70 hover:bg-white/5 hover:text-white"
                )}
              >
                {l.label}
              </Link>
            ))}
            <a 
              href="/resume.pdf" 
              download 
              className="col-span-2 mt-2 flex items-center justify-center gap-2 rounded bg-neon px-3 py-3 font-display text-[10px] font-bold tracking-widest text-ink shadow-[0_0_15px_rgba(0,229,255,0.4)]"
            >
              <Download className="h-4 w-4" /> RESUME
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
