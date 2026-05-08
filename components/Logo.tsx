"use client";

interface LogoProps {
  size?: number;
  withWordmark?: boolean;
  className?: string;
}

export default function Logo({
  size = 36,
  withWordmark = true,
  className = "",
}: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Tharwa"
      >
        <defs>
          <linearGradient id="lavGrad" x1="0" y1="0" x2="48" y2="48">
            <stop offset="0%" stopColor="#A48BDD" />
            <stop offset="50%" stopColor="#7F67B2" />
            <stop offset="100%" stopColor="#553F84" />
          </linearGradient>
        </defs>
        {/* Layered carpet bars symbolizing the family layers */}
        <rect x="6" y="10" width="36" height="6" rx="2" fill="url(#lavGrad)" />
        <rect x="10" y="20" width="28" height="6" rx="2" fill="#A48BDD" />
        <rect x="14" y="30" width="20" height="6" rx="2" fill="#C2AEEA" />
        <rect x="20" y="38" width="8" height="4" rx="1.5" fill="#D4AF37" />
      </svg>
      {withWordmark && (
        <span className="text-xl font-bold tracking-tight text-navy">
          Tharwa
        </span>
      )}
    </div>
  );
}
