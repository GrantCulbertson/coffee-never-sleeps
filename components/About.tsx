import Image from 'next/image'

export default function About() {
  return (
    <section className="bg-espresso py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Headshot */}
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 flex-shrink-0">
            <Image
              src="/tom-sessions.jpg"
              alt="Tom Sessions — Coffee Industry Consultant"
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 224px, 288px"
            />
          </div>

          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-gold text-sm tracking-[0.25em] uppercase mb-3">The Consultant</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-white mb-8">About Tom Sessions</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              With more than 25 years in the coffee industry, Tom Sessions has worked across every corner
              of the supply chain — from green coffee sourcing at origin to formulating ready-to-drink
              products on retail shelves.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Through Coffee Never Sleeps LLC, Tom brings that expertise directly to brands, retailers,
              and entrepreneurs who want to build exceptional coffee products without the guesswork.
              Whether you're launching a new line or optimizing an existing one, Tom provides the
              industry knowledge to get it right.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
