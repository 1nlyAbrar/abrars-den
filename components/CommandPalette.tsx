"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";

const routes = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/certifications", label: "Certifications" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
];

export default function CommandPalette({
  open, onClose,
}: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");
  const router = useRouter();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const results = routes.filter((r) =>
    r.label.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] grid place-items-start justify-center bg-ink/70 p-4 pt-24 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.96, y: -10 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96, y: -10 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-strong neon-border w-full max-w-lg rounded-2xl p-3"
          >
            <div className="flex items-center gap-2 rounded-xl bg-ink/60 px-3 py-2">
              <Search className="h-4 w-4 text-neon" />
              <input
                autoFocus
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Jump to..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-silver/40"
              />
            </div>
            <ul className="mt-2 max-h-72 overflow-auto">
              {results.map((r) => (
                <li key={r.href}>
                  <button
                    onClick={() => { router.push(r.href); onClose(); }}
                    className="w-full rounded-lg px-3 py-2 text-left text-sm text-silver/80 hover:bg-electric/15 hover:text-neon"
                  >
                    {r.label}
                  </button>
                </li>
              ))}
              {results.length === 0 && (
                <li className="px-3 py-4 text-center text-sm text-silver/50">No results</li>
              )}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
