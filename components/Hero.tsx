import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-espresso flex items-center overflow-hidden">

      {/* Farm photo — desktop only */}
      <div className="hidden lg:block absolute right-0 top-0 h-full w-[62%]">
        <Image
          src="/IMG_8845_4x.webp"
          alt="Tom Sessions at coffee origin — inspecting coffee plants at farm"
          fill
          className="object-cover object-top"
          sizes="62vw"
          priority
        />
      </div>

      {/* Gradient — desktop only, fades into photo */}
      <div
        className="hidden lg:block absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, #1a1a1a 0%, #1a1a1a 38%, rgba(26,26,26,0.88) 48%, rgba(26,26,26,0.55) 58%, rgba(26,26,26,0.18) 68%, rgba(26,26,26,0.03) 76%, transparent 83%)',
        }}
      />

      {/* Text */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-24 pt-32 pb-16">
        <div className="max-w-lg">
          <p className="text-gold text-2xl font-serif mb-1">
            Tom Sessions
          </p>
          <p className="text-gold text-sm tracking-[0.25em] uppercase mb-4">
            25 Years in the Coffee Industry
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl text-white leading-tight mb-6">
            From Mountaintop<br />to Countertop
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
