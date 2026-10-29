import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-4 text-center">
      <div>
        <p className="font-mono text-sm text-neon">{"// SIGNAL LOST"}</p>
        <h1 className="mt-2 font-display text-6xl font-black gradient-text neon-text">404</h1>
        <p className="mt-4 text-sm text-silver/70">The page you requested is outside the grid.</p>
        <Link href="/" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-electric to-neon px-5 py-2.5 text-sm font-semibold text-ink">
          <Home className="h-4 w-4" /> Return Home
        </Link>
      </div>
    </main>
  );
}
