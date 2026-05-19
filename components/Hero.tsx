import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-espresso flex items-center overflow-hidden">

      {/* Farm photo — anchored to right edge, full height, shows Tom's complete figure */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/IMG_8845.PNG"
        alt="Tom Sessions at coffee origin — inspecting coffee plants at farm"
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          height: '100%',
          width: 'auto',
          objectFit: 'contain',
          objectPosition: 'right top',
        }}
        fetchPriority="high"
      />

      {/* Gradient overlay — solid espresso behind text, fades into photo on the right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, #1a1a1a 0%, #1a1a1a 32%, rgba(26,26,26,0.88) 48%, rgba(26,26,26,0.30) 65%, rgba(26,26,26,0.04) 80%, transparent 90%)',
        }}
      />

      {/* Text */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-24 pt-32 pb-16">
        <div className="max-w-lg">
          <p className="text-gold text-sm tracking-[0.25em] uppercase mb-4">
            25 Years in the Coffee Industry
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl text-white leading-tight mb-6">
            Coffee Consulting,<br />From Bean to Bottle
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
            Sourcing, roasting, private label, concentrates, and RTDs — expert guidance at every stage.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold text-espresso text-sm font-bold tracking-widest uppercase px-8 py-4 hover:bg-gold-light transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </div>

    </section>
  )
}
