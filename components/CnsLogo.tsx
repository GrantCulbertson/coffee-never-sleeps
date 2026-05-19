interface CnsLogoProps {
  className?: string
}

export default function CnsLogo({ className = 'w-52 h-60 sm:w-64 sm:h-72 lg:w-80 lg:h-96' }: CnsLogoProps) {
  return (
    <svg
      viewBox="0 0 140 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      overflow="visible"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="cns-glow-outer" cx="50%" cy="37%" r="50%">
          <stop offset="0%"   stopColor="#c8a96e" stopOpacity="0.30"/>
          <stop offset="30%"  stopColor="#c8a96e" stopOpacity="0.14"/>
          <stop offset="60%"  stopColor="#c8a96e" stopOpacity="0.04"/>
          <stop offset="100%" stopColor="#c8a96e" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="cns-moon-face" cx="38%" cy="38%" r="62%">
          <stop offset="0%"   stopColor="#d4b483" stopOpacity="0.22"/>
          <stop offset="60%"  stopColor="#c8a96e" stopOpacity="0.10"/>
          <stop offset="100%" stopColor="#c8a96e" stopOpacity="0.05"/>
        </radialGradient>
        <filter id="cns-rim-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="blur"/>
          <feComposite in="SourceGraphic" in2="blur" operator="over"/>
        </filter>
        <style>{`
          @keyframes cnsZzzRise {
            0%   { transform: translateY(0);    opacity: 0; }
            12%  { opacity: 1; }
            88%  { opacity: 0.6; }
            100% { transform: translateY(-28px); opacity: 0; }
          }
          .cns-z { animation: cnsZzzRise 2.4s ease-in-out infinite; }
          .cns-z1 { animation-delay: 0s; }
          .cns-z2 { animation-delay: 0.8s; }
          .cns-z3 { animation-delay: 1.6s; }
        `}</style>
      </defs>

      {/* Stars */}
      <circle cx="18" cy="20" r="1.3" fill="#c8a96e" opacity="0.7"/>
      <circle cx="30" cy="9"   r="0.9" fill="#c8a96e" opacity="0.55"/>
      <circle cx="110" cy="14" r="1.1" fill="#c8a96e" opacity="0.6"/>
      <circle cx="124" cy="30" r="0.8" fill="#c8a96e" opacity="0.45"/>
      <circle cx="12"  cy="42" r="0.9" fill="#c8a96e" opacity="0.4"/>
      <circle cx="128" cy="52" r="1"   fill="#c8a96e" opacity="0.4"/>

      {/* Outer bloom */}
      <circle cx="70" cy="58" r="80" fill="url(#cns-glow-outer)"/>

      {/* Corona ring (blurred) */}
      <circle cx="70" cy="58" r="50" stroke="#c8a96e" strokeWidth="6" fill="none" opacity="0.06" filter="url(#cns-rim-glow)"/>

      {/* Moon body */}
      <circle cx="70" cy="58" r="46" fill="url(#cns-moon-face)" stroke="#c8a96e" strokeWidth="1.4"/>
      {/* Bright rim highlight arc */}
      <path d="M 34 42 A 46 46 0 0 1 94 26" stroke="#c8a96e" strokeWidth="1.5" fill="none" opacity="0.5" strokeLinecap="round"/>

      {/* Craters */}
      <circle cx="52" cy="42" r="8"    stroke="#c8a96e" strokeWidth="0.9" fill="none" opacity="0.38"/>
      <circle cx="50" cy="43" r="3"    fill="#c8a96e" fillOpacity="0.09"/>
      <circle cx="82" cy="36" r="5"    stroke="#c8a96e" strokeWidth="0.7" fill="none" opacity="0.30"/>
      <circle cx="81" cy="36" r="1.8"  fill="#c8a96e" fillOpacity="0.08"/>
      <circle cx="68" cy="68" r="4"    stroke="#c8a96e" strokeWidth="0.7" fill="none" opacity="0.24"/>
      <circle cx="90" cy="62" r="3"    stroke="#c8a96e" strokeWidth="0.6" fill="none" opacity="0.22"/>
      <circle cx="46" cy="66" r="2.5"  stroke="#c8a96e" strokeWidth="0.6" fill="none" opacity="0.22"/>
      <ellipse cx="74" cy="52" rx="14" ry="10" fill="#c8a96e" fillOpacity="0.05"/>

      {/* Cup mask — hides moon behind cup body */}
      <path d="M 28 90 L 37 132 Q 37 140 45 140 L 95 140 Q 103 140 103 132 L 112 90 Z" fill="#1a1a1a"/>
      <rect x="24" y="81" width="92" height="12" rx="6" fill="#1a1a1a"/>

      {/* Zzz — each starts just above the cup rim and floats upward */}
      <text className="cns-z cns-z1" x="36" y="78" fontFamily="Georgia, serif" fontSize="10" fill="#c8a96e" fontStyle="italic">z</text>
      <text className="cns-z cns-z2" x="51" y="78" fontFamily="Georgia, serif" fontSize="12" fill="#c8a96e" fontStyle="italic">z</text>
      <text className="cns-z cns-z3" x="67" y="78" fontFamily="Georgia, serif" fontSize="14" fill="#c8a96e" fontStyle="italic">z</text>

      {/* Cup strokes */}
      <path d="M 28 90 L 37 132 Q 37 140 45 140 L 95 140 Q 103 140 103 132 L 112 90 Z"
        stroke="#c8a96e" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
      <rect x="24" y="81" width="92" height="12" rx="6" stroke="#c8a96e" strokeWidth="1.8" fill="none"/>
      {/* Handle */}
      <path d="M 112 92 Q 133 92 133 112 Q 133 133 103 132"
        stroke="#c8a96e" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      {/* CNS monogram */}
      <text x="70" y="122" fontFamily="Georgia, serif" fontSize="18"
        fill="#c8a96e" opacity="0.6" textAnchor="middle" letterSpacing="3">CNS</text>
    </svg>
  )
}
