import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Gamepad2,
  Music4,
  PuzzleIcon,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Heart,
} from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/Button";
import { FoundersSection } from "@/components/FoundersSection";
import { WaveDivider } from "@/components/WaveDivider";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden bg-cream-200">
      <Header />
      <Hero />
      <Features />
      <FoundersSection />
      <ParentsSection />
      <FinalCta />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b-4 border-cream-300/80 bg-cream-200/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-8">
        <Link href="/" className="shrink-0">
          <Logo className="h-12 w-auto sm:h-14" />
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button href="/iniciar-sesion" variant="outline" size="md" className="!px-4 sm:!px-6">
            Iniciar sesión
          </Button>
          <Button href="/registro" variant="coral" size="md" className="!px-4 sm:!px-6">
            ¡Regístrate!
          </Button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative px-4 pb-24 pt-10 sm:px-8 sm:pt-16">
      {/* blobs decorativos de fondo */}
      <div className="pointer-events-none absolute left-[-4rem] top-10 h-56 w-56 rounded-full bg-mustard-200/70 blur-2xl sm:h-72 sm:w-72" />
      <div className="pointer-events-none absolute right-[-3rem] top-40 h-64 w-64 rounded-full bg-lavender-200/70 blur-2xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-6">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-mint-100 px-4 py-1.5 font-display text-sm font-semibold text-mint-700">
            <Sparkles className="h-4 w-4" />
            Aprender jugando, ¡así de fácil!
          </span>

          <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-cocoa-800 sm:text-5xl lg:text-6xl">
            Bienvenido a{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-coral-500">Andawanda</span>
              <span className="absolute inset-x-0 bottom-1 z-0 h-3 rounded-full bg-mustard-200 sm:h-4" />
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-md text-lg text-cocoa-500 lg:mx-0">
            Juegos, cuentos y retos pensados para que los más peques aprendan
            explorando, a su propio ritmo y ¡con muchas sonrisas!
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Button href="/registro" variant="coral" size="xl" icon={<Star className="h-6 w-6 fill-white" />}>
              Empezar gratis
            </Button>
            <Button href="/iniciar-sesion" variant="outline" size="xl">
              Ya tengo cuenta
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-cocoa-500 lg:justify-start">
            <TrustPill icon={<ShieldCheck className="h-4 w-4 text-mint-600" />} text="Seguro para niños" />
            <TrustPill icon={<Smile className="h-4 w-4 text-mustard-600" />} text="Sin anuncios" />
            <TrustPill icon={<Heart className="h-4 w-4 text-coral-500" />} text="Hecho con cariño" />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
          <div className="absolute -left-4 top-4 animate-sparkle text-mustard-400">
            <Star className="h-8 w-8 fill-mustard-300" />
          </div>
          <div className="absolute -right-2 bottom-16 animate-sparkle text-lavender-400 [animation-delay:0.6s]">
            <Star className="h-6 w-6 fill-lavender-300" />
          </div>

          <div className="animate-float">
            <Image
              src="/mascot-hero-card.png"
              alt="Mascota de Andawanda caminando feliz con su mochila, junto a dos niños jugando y leyendo"
              width={625}
              height={623}
              className="w-full drop-shadow-xl"
              priority
            />
          </div>
        </div>
      </div>

      <WaveDivider color="#FFFFFF" />
    </section>
  );
}

function TrustPill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/70 px-3 py-1.5 font-medium shadow-sm">
      {icon}
      {text}
    </span>
  );
}

const FEATURES = [
  {
    icon: Gamepad2,
    title: "Juegos didácticos",
    description: "Retos cortos y coloridos para practicar letras, números y lógica jugando.",
    color: "coral" as const,
  },
  {
    icon: BookOpen,
    title: "Cuentos interactivos",
    description: "Historias animadas que se leen solas o en voz alta, ¡perfectas para soñar!",
    color: "mustard" as const,
  },
  {
    icon: Music4,
    title: "Canciones y ritmos",
    description: "Melodías pegajosas para aprender vocabulario, emociones y rutinas.",
    color: "mint" as const,
  },
  {
    icon: PuzzleIcon,
    title: "Retos y rompecabezas",
    description: "Actividades que se adaptan al ritmo de cada niño, sin presión ni prisa.",
    color: "lavender" as const,
  },
];

const featureBg: Record<string, string> = {
  coral: "bg-coral-50 text-coral-500",
  mustard: "bg-mustard-50 text-mustard-500",
  mint: "bg-mint-50 text-mint-600",
  lavender: "bg-lavender-50 text-lavender-500",
};

function Features() {
  return (
    <section className="relative bg-white px-4 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="font-display text-3xl font-bold text-cocoa-800 sm:text-4xl">
          ¿Qué te espera en Andawanda?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-cocoa-500">
          Contenido pensado por educadores, diseñado para que cada peque aprenda
          a su manera.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="animate-pop rounded-3xl border-4 border-cream-200 bg-cream-100 p-6 text-left shadow-chunky-sm transition-transform hover:-translate-y-1"
            >
              <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${featureBg[f.color]}`}>
                <f.icon className="h-7 w-7" strokeWidth={2.2} />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-cocoa-800">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cocoa-500">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ParentsSection() {
  return (
    <section className="relative bg-lavender-100/60 px-4 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 font-display text-sm font-semibold text-lavender-600 shadow-sm">
            <Heart className="h-4 w-4" />
            Para papás, mamás y profes
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold text-cocoa-800 sm:text-4xl">
            Tranquilidad mientras ellos se divierten
          </h2>
          <p className="mt-4 text-cocoa-600">
            Sabemos que la confianza es lo más importante. Por eso Andawanda es
            un espacio simple, seguro y sin sorpresas.
          </p>

          <ul className="mt-6 space-y-4">
            <ParentPoint text="Sin anuncios ni compras dentro de la app." />
            <ParentPoint text="Contenido revisado, apto para todas las edades." />
            <ParentPoint text="Interfaz sencilla: los niños navegan solos, sin frustrarse." />
            <ParentPoint text="Tú creas la cuenta y controlas el acceso." />
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <StatCard emoji="🧸" title="+3 años" subtitle="Edad recomendada" />
          <StatCard emoji="🎨" title="100%" subtitle="En español" />
          <StatCard emoji="🚫" title="0" subtitle="Anuncios" />
          <StatCard emoji="😊" title="Diario" subtitle="Nuevas sorpresas" />
        </div>
      </div>

      <WaveDivider color="#FFF7E9" />
    </section>
  );
}

function ParentPoint({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint-400 text-white">
        ✓
      </span>
      <span className="text-cocoa-700">{text}</span>
    </li>
  );
}

function StatCard({ emoji, title, subtitle }: { emoji: string; title: string; subtitle: string }) {
  return (
    <div className="rounded-3xl bg-white p-6 text-center shadow-soft">
      <div className="text-3xl">{emoji}</div>
      <div className="mt-2 font-display text-2xl font-bold text-cocoa-800">{title}</div>
      <div className="text-sm text-cocoa-500">{subtitle}</div>
    </div>
  );
}

function FinalCta() {
  return (
    <section className="relative bg-cream-200 px-4 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-mint-400 px-6 py-12 text-center shadow-chunky sm:px-12">
        <Sparkles className="mx-auto h-10 w-10 text-white/90" />
        <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
          ¿List@ para la aventura de aprender jugando?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-mint-50">
          Crea tu cuenta gratis en menos de un minuto y empieza hoy mismo.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/registro" variant="mustard" size="xl">
            Crear mi cuenta gratis
          </Button>
          <Button href="/iniciar-sesion" size="xl" className="!bg-white/15 !text-white !shadow-[0_6px_0_0_rgba(255,255,255,0.25)] hover:!bg-white/25">
            Iniciar sesión
          </Button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t-4 border-cream-300 bg-cream-100 px-4 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <Logo className="h-10 w-auto" showWordmark={false} />
        <p className="text-center text-sm text-cocoa-500">
          © {new Date().getFullYear()} Andawanda. Aprender jugando, todos los días. 💛
        </p>
      </div>
    </footer>
  );
}

