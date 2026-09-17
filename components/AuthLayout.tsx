import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cream-200 px-4 py-12">
      {/* blobs decorativos */}
      <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-mustard-200 opacity-70 blur-2xl" />
      <div className="pointer-events-none absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-lavender-200 opacity-60 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-mint-200 opacity-60 blur-2xl" />

      <Link
        href="/"
        className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 font-display text-sm font-semibold text-cocoa-600 shadow-soft backdrop-blur transition hover:bg-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Inicio
      </Link>

      <div className="relative z-10">{children}</div>
    </main>
  );
}
