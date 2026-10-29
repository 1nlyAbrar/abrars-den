"use client";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-40 hidden h-56 w-56 rounded-full md:block"
      style={{
        left: pos.x - 112, top: pos.y - 112,
        background: "radial-gradient(circle,rgba(0,229,255,0.13),transparent 65%)",
      }}
    />
  );
}
