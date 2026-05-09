import Link from 'next/link'

function CoffeeCupLogo() {
  return (
    <svg
      viewBox="0 0 200 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72"
      aria-hidden="true"
    >
      {/* Steam wisps */}
      <path
        d="M72 52 C72 40 82 40 82 28 C82 16 72 16 72 4"
        stroke="#c8a96e"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />
      <path
        d="M100 60 C100 46 112 46 112 32 C112 18 100 18 100 4"
        stroke="#c8a96e"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M128 52 C128 40 118 40 118 28 C118 16 128 16 128 4"
        stroke="#c8a96e"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />

      {/* Cup body */}
      <path
        d="M48 76 L60 168 Q60 176 70 176 L130 176 Q140 176 140 168 L152 76 Z"
        stroke="#c8a96e"
        strokeWidth="2"
        fill="none"
        strokeLinejoin="round"
      />

      {/* Cup rim */}
      <rect x="44" y="68" width="112" height="12" rx="6" stroke="#c8a96e" strokeWidth="2" fill="none" />

      {/* Handle */}
      <path
        d="M152 100 Q178 100 178 128 Q178 156 152 156"
        stroke="#c8a96e"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Saucer */}
      <ellipse cx="100" cy="188" rx="64" ry="10" stroke="#c8a96e" strokeWidth="2" fill="none" />
      <line x1="36" y1="188" x2="164" y2="188" stroke="#c8a96e" strokeWidth="2" opacity="0.3" />

      {/* Subtle fill on cup */}
      <path
        d="M50 80 L61 164 Q61 172 70 172 L130 172 Q139 172 139 164 L150 80 Z"
        fill="#c8a96e"
        opacity="0.04"
      />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="min-h-screen bg-espresso flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-gold text-sm tracking-[0.25em] uppercase mb-4">
              25 Years in the Coffee Industry
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Coffee Consulting,<br />From Bean to Bottle
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Sourcing, roasting, private label, concentrates, and RTDs — expert guidance at every stage.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gold text-espresso text-sm font-bold tracking-widest uppercase px-8 py-4 hover:bg-gold-light transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>

          {/* Logo mark */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <CoffeeCupLogo />
          </div>

        </div>
      </div>
    </section>
  )
}
