"use client";
import Image from "next/image";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function ProfileOrb() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 15 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 15 });

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
      className="relative mx-auto aspect-square w-[280px] sm:w-[340px] md:w-[400px]"
      style={{ perspective: 1200 }}
    >
      <motion.div style={{ rotateX: rx, rotateY: ry }} className="relative h-full w-full">
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(0,229,255,0.35),transparent_65%)] blur-2xl" />

        <div className="absolute inset-0 animate-spin-slow rounded-full border border-neon/40 [border-style:dashed]" />
        <div className="absolute inset-3 animate-spin-reverse rounded-full border-2 border-electric/30" />
        <div className="absolute inset-6 rounded-full border border-neon/25" />
        <div className="absolute inset-0 animate-[spin_40s_linear_infinite] rounded-full border border-electric/20" />

        {[0, 90, 180, 270].map((deg) => (
          <div
            key={deg}
            className="absolute inset-0 animate-spin-slow"
            style={{ transform: `rotate(${deg}deg)` }}
          >
            <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-neon shadow-[0_0_14px_#00E5FF]" />
          </div>
        ))}

        <div className="neon-border absolute inset-8 overflow-hidden rounded-full ring-2 ring-neon/60">
          <Image
            src="/profile.png"
            alt="Abrar Faiyaz"
            fill
            priority
            className="object-cover"
            sizes="(max-width:768px) 280px, 400px"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
        </div>

        <div className="absolute inset-0">
          {["top-2 left-2", "top-2 right-2", "bottom-2 left-2", "bottom-2 right-2"].map((pos) => (
            <span key={pos} className={`absolute ${pos} h-4 w-4 border-neon/70`}
              style={{
                borderTopWidth: pos.includes("top") ? 2 : 0,
                borderBottomWidth: pos.includes("bottom") ? 2 : 0,
                borderLeftWidth: pos.includes("left") ? 2 : 0,
                borderRightWidth: pos.includes("right") ? 2 : 0,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
