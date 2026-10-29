"use client";
import { useEffect, useState } from "react";

export default function TypingText({
  phrases,
  className = "",
}: { phrases: string[]; className?: string }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = phrases[i % phrases.length];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del) {
        if (text.length < current.length) setText(current.slice(0, text.length + 1));
        else setTimeout(() => setDel(true), 1400);
      } else {
        if (text.length > 0) setText(current.slice(0, text.length - 1));
        else { setDel(false); setI((v) => v + 1); }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i, phrases]);

  return (
    <span className={className}>
      {text}
      <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-neon align-middle" style={{ height: "1em" }} />
    </span>
  );
}
