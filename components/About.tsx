import Image from 'next/image'
import PhotoGallery from './PhotoGallery'

const galleryImages = [
  { src: '/IMG_8774.PNG', alt: 'Tom Sessions evaluating coffee at a cupping session' },
  { src: '/IMG_8760.jpeg', alt: 'Coffee cupping session at origin' },
  { src: '/IMG_8762.jpeg', alt: 'Green and roasted coffee samples at a cupping table' },
]

export default function About() {
  return (
    <section className="bg-espresso py-24 px-4 sm:px-6 lg:px-8 border-t-2 border-gold">
      <div className="max-w-5xl mx-auto">

        {/* Bio row */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-16">

          {/* Headshot */}
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 flex-shrink-0 overflow-hidden shadow-xl">
            <Image
              src="/IMG_8845.PNG"
              alt="Tom Sessions at coffee origin"
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
              Whether you&apos;re launching a new line or optimizing an existing one, Tom provides the
              industry knowledge to get it right.
            </p>
          </div>

        </div>

        {/* Gallery row */}
        <PhotoGallery images={galleryImages} />

      </div>
    </section>
  )
}
