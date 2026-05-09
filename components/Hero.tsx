import Image from 'next/image'
import Link from 'next/link'

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

          {/* Photo */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex-shrink-0">
            <Image
              src="/tom-sessions.jpg"
              alt="Tom Sessions — Coffee Industry Consultant"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  )
}
