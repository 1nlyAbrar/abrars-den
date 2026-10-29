"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const particles = mounted
    ? Array.from({ length: 40 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        dur: Math.random() * 12 + 8,
        delay: Math.random() * 6,
      }))
    : [];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-ink">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#06142B_0%,#02040A_60%)]" />
      <div className="absolute inset-0 grid-overlay opacity-60" />

      <motion.div
        className="absolute -top-1/3 -left-1/4 h-[80vh] w-[80vw] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle,rgba(0,123,255,0.35),transparent 70%)" }}
        animate={{ x: [0, 80, 0], y: [0, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-1/3 -right-1/4 h-[80vh] w-[80vw] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(circle,rgba(0,229,255,0.28),transparent 70%)" }}
        animate={{ x: [0, -80, 0], y: [0, -40, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-neon/70 shadow-[0_0_12px_rgba(0,229,255,0.8)]"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -60, 0], opacity: [0.2, 1, 0.2] }}
          transition={{ duration: p.dur, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}

      <svg className="absolute inset-0 h-full w-full opacity-20" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00E5FF" stopOpacity="0" />
            <stop offset="50%" stopColor="#007BFF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,200 C300,100 600,300 1200,150"
          stroke="url(#lineGrad)"
          strokeWidth="1.2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M0,500 C400,600 700,300 1200,550"
          stroke="url(#lineGrad)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear", delay: 2 }}
        />
      </svg>
    </div>
  );
}
