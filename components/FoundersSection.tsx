import Image from "next/image";
import {
  Baby,
  Brain,
  Code2,
  GraduationCap,
  HeartHandshake,
  Sparkles,
} from "lucide-react";
import { WaveDivider } from "@/components/WaveDivider";

const CONTINUUM = [
  {
    icon: Baby,
    stage: "Gestación",
    detail: "Vínculo y preparación emocional",
    color: "bg-lavender-100 text-lavender-600",
  },
  {
    icon: HeartHandshake,
    stage: "Primera infancia · 0-5 años",
    detail: "Neurodesarrollo y crianza consciente",
    color: "bg-mustard-100 text-mustard-600",
  },
  {
    icon: GraduationCap,
    stage: "Primaria · 6-11 años",
    detail: "Aprendizaje gamificado con Andawanda",
    color: "bg-mint-100 text-mint-700",
  },
] as const;

export function FoundersSection() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-coral-50 px-4 py-1.5 font-display text-sm font-semibold text-coral-500">
            <Sparkles className="h-4 w-4" />
            La unión detrás de Andawanda
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold text-cocoa-800 sm:text-4xl">
            Dos expertas, un mismo propósito
          </h2>
          <p className="mt-4 text-cocoa-500">
            Andawanda nace de la fusión entre la tecnología educativa y la ciencia del
            neurodesarrollo: una cubre el <strong className="text-cocoa-700">qué</strong> aprende
            tu hijo, la otra el <strong className="text-cocoa-700">cómo</strong> aprende su cerebro.
          </p>
        </div>

        {/* Tarjetas de las dos fundadoras */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <FounderCard
            photoSrc="/team/erika-contreras.png"
            name="Erika Julieth Contreras"
            role="Ingeniera de Software · Mamá · Fundadora de Andawanda"
            bio="Con experiencia sólida en desarrollo full-stack, construyó Andawanda para
            convertir el aprendizaje en un juego: gamificación, contenido interactivo y
            seguimiento del progreso académico para niños de 6 a 11 años."
            tags={["Tecnología educativa", "Gamificación", "Progreso medible"]}
            icon={Code2}
          />

          <FounderCard
            photoSrc="/team/angie-vargas.png"
            name="Angie Vargas"
            role="Especialista en Neurodesarrollo · Mamá · Cofundadora de Andawanda"
            bio="Mamá de una niña de 6 años, acompaña a las familias desde la gestación
            hasta la primera infancia, con trabajo clínico en atención, memoria,
            regulación emocional y crianza consciente para fortalecer el desarrollo
            integral del niño."
            tags={["Neurodesarrollo", "Primera infancia 0-5", "Acompañamiento familiar"]}
            icon={Brain}
          />
        </div>

        {/* Línea de continuidad: gestación -> primera infancia -> primaria */}
        <div className="mt-14 rounded-[2rem] border-4 border-cream-200 bg-cream-100 p-6 sm:p-10">
          <h3 className="text-center font-display text-xl font-semibold text-cocoa-800 sm:text-2xl">
            Un solo camino, acompañado de principio a fin
          </h3>
          <div className="relative mt-8 grid gap-6 sm:grid-cols-3">
            <div
              aria-hidden
              className="absolute left-0 right-0 top-8 hidden h-0.5 border-t-4 border-dashed border-cream-300 sm:block"
            />
            {CONTINUUM.map((step) => (
              <div key={step.stage} className="relative flex flex-col items-center text-center">
                <div className={`flex h-16 w-16 items-center justify-center rounded-full ${step.color} shadow-soft`}>
                  <step.icon className="h-8 w-8" strokeWidth={2.2} />
                </div>
                <p className="mt-3 font-display font-semibold text-cocoa-800">{step.stage}</p>
                <p className="mt-1 text-sm text-cocoa-500">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center font-display text-lg text-cocoa-600">
          Juntas cerramos un ciclo que, hoy, ninguna otra plataforma acompaña de forma{" "}
          <span className="text-coral-500">integrada</span>.
        </p>
      </div>

      <WaveDivider color="#EBE4FE" flip />
    </section>
  );
}

function FounderCard({
  name,
  role,
  bio,
  tags,
  icon: Icon,
  photoSrc,
  initials,
  gradient,
}: {
  name: string;
  role: string;
  bio: string;
  tags: string[];
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  photoSrc?: string;
  initials?: string;
  gradient?: string;
}) {
  return (
    <div className="flex flex-col items-center rounded-[2rem] border-4 border-cream-200 bg-cream-100 p-8 text-center shadow-chunky-sm">
      {photoSrc ? (
        <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-white shadow-soft">
          <Image src={photoSrc} alt={`Foto de ${name}`} fill sizes="112px" className="object-cover" />
        </div>
      ) : (
        <div
          className={`flex h-28 w-28 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br ${gradient} font-display text-3xl font-bold text-white shadow-soft`}
        >
          {initials}
        </div>
      )}

      <div className="mt-4 flex items-center gap-2">
        <Icon className="h-5 w-5 text-cocoa-400" />
        <h3 className="font-display text-xl font-semibold text-cocoa-800">{name}</h3>
      </div>
      <p className="mt-1 text-sm font-medium text-cocoa-500">{role}</p>
      <p className="mt-4 text-sm leading-relaxed text-cocoa-600">{bio}</p>

      <div className="mt-5 flex flex-wrap justify-center gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-cocoa-600 shadow-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
