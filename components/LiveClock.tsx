"use client";
import { useEffect, useState } from "react";

export default function LiveClock({ timezone = "Asia/Dhaka" }: { timezone?: string }) {
  const [now, setNow] = useState<Date | null>(null);
  const [use24, setUse24] = useState(true);

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const fmt = (opts: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat("en-US", { timeZone: timezone, ...opts }).format(now ?? new Date());

  const time = now
    ? new Intl.DateTimeFormat("en-GB", {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: !use24,
      }).format(now)
    : "--:--:--";

  const date = fmt({ weekday: "short", month: "short", day: "2-digit" }).toUpperCase();

  return (
    <button
      onClick={() => setUse24((v) => !v)}
      title="Toggle 12h / 24h"
      className="group relative flex h-9 items-center gap-3 rounded border border-white/10 bg-white/5 px-4 transition hover:border-neon/40 hover:bg-neon/10"
    >
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-neon shadow-[0_0_8px_#00E5FF]"></span>
        </span>
        <span className="font-mono text-xs font-bold tracking-widest text-neon tabular-nums drop-shadow-[0_0_5px_rgba(0,229,255,0.5)]">
          {time}
        </span>
      </div>
      <div className="h-3 w-[1px] bg-silver/20" />
      <span className="font-display text-[9px] font-bold tracking-[0.2em] text-silver/60 group-hover:text-silver/90">
        {date}
      </span>
    </button>
  );
}
