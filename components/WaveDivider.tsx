/** Divisor ondulado simple entre secciones, para transiciones suaves y juguetonas. */
export function WaveDivider({ color, flip = false }: { color: string; flip?: boolean }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 bottom-0 translate-y-[1px] ${flip ? "rotate-180" : ""}`}
    >
      <svg viewBox="0 0 1440 80" className="h-12 w-full sm:h-16" preserveAspectRatio="none">
        <path
          d="M0,32 C240,80 480,0 720,24 C960,48 1200,88 1440,40 L1440,80 L0,80 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
