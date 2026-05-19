import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-espresso flex items-center overflow-hidden">

      {/* Farm photo — fills the right 55% of the hero, Tom's face/upper body visible at top */}
      <div className="absolute right-0 top-0 h-full w-[55%]">
        <Image
          src="/IMG_8845.PNG"
          alt="Tom Sessions at coffee origin — inspecting coffee plants at farm"
          fill
          className="object-cover object-top"
          sizes="55vw"
          priority
        />
      </div>

      {/* Gradient — solid espresso for text area, long fade into the photo */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, #1a1a1a 0%, #1a1a1a 26%, rgba(26,26,26,0.92) 38%, rgba(26,26,26,0.55) 52%, rgba(26,26,26,0.12) 63%, transparent 73%)',
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
