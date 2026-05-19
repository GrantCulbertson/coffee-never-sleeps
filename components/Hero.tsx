import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row">

      {/* Left panel — text */}
      <div className="flex-1 bg-espresso flex flex-col justify-center px-8 sm:px-12 lg:px-16 xl:px-24 pt-32 pb-16 lg:pt-24 lg:pb-24">
        <p className="text-gold text-sm tracking-[0.25em] uppercase mb-4">
          25 Years in the Coffee Industry
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl text-white leading-tight mb-6">
          Coffee Consulting,<br />From Bean to Bottle
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
          Sourcing, roasting, private label, concentrates, and RTDs — expert guidance at every stage.
        </p>
        <div>
          <Link
            href="/contact"
            className="inline-block bg-gold text-espresso text-sm font-bold tracking-widest uppercase px-8 py-4 hover:bg-gold-light transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Right panel — farm photo */}
      <div className="relative h-72 sm:h-96 lg:h-auto lg:w-[45%] border-t-2 lg:border-t-0 lg:border-l-2 border-gold">
        <Image
          src="/IMG_8845.PNG"
          alt="Tom Sessions at coffee origin — inspecting coffee plants at farm"
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 45vw"
          priority
        />
      </div>

    </section>
  )
}
