import Image from "next/image";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
};

/**
 * Logo de Andawanda: mascota (arte oficial en PNG) + wordmark vectorial.
 * La altura la controla `className` en el contenedor; ambas piezas
 * escalan juntas porque comparten `h-full`.
 */
export function Logo({ className = "h-12 w-auto", showWordmark = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Image
        src="/mascot-logo.png"
        alt="Andawanda"
        width={972}
        height={1152}
        className="h-full w-auto object-contain"
        priority
      />

      {showWordmark && (
        <svg viewBox="0 0 660 230" className="h-[62%] w-auto" role="img" aria-label="Andawanda">
          <g
            fontFamily="var(--font-fredoka), 'Arial Rounded MT Bold', sans-serif"
            fontWeight={700}
            fontSize="108"
            letterSpacing="-5"
          >
            <text x="10" y="128" fill="#FF6B6B">A</text>
            <text x="80" y="128" fill="#F4B942">n</text>
            <text x="145" y="128" fill="#6FCF97">d</text>
            <text x="215" y="128" fill="#A78BFA">a</text>
            <text x="280" y="128" fill="#FF6B6B">w</text>
            <text x="375" y="128" fill="#F4B942">a</text>
            <text x="440" y="128" fill="#6FCF97">n</text>
            <text x="508" y="128" fill="#A78BFA">d</text>
            <text x="578" y="128" fill="#FF6B6B">a</text>
          </g>
          <path
            d="M14 152 Q335 175 650 152"
            fill="none"
            stroke="#E8CFA0"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>
      )}
    </span>
  );
}
