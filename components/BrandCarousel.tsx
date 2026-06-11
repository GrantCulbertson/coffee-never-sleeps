import Image from 'next/image'

const brands = [
  'ALDI',
  'Aramark',
  'Compass',
  'Costco',
  'H-E-B',
  'Kroger',
  "Seattle's Best",
  'Sodexo',
  'Starbucks',
  'Sysco',
  'Tazo',
  "Trader Joe's",
  'US Foods',
  'Westrock',
]

function BrandRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="flex flex-none items-center gap-6 pr-6" aria-hidden={ariaHidden}>
      {brands.map((brand) => (
        <div
          key={brand}
          className="relative flex-none w-36 h-20 bg-white rounded-sm overflow-hidden"
        >
          <Image
            src={`/${brand}.jpg`}
            alt={ariaHidden ? '' : `${brand} logo`}
            fill
            className="object-contain p-3"
            sizes="144px"
          />
        </div>
      ))}
    </div>
  )
}

export default function BrandCarousel() {
  return (
    <section className="bg-espresso-dark pt-4 pb-20 overflow-hidden">
      <div className="text-center mb-12 px-4">
        <p className="text-gold text-sm tracking-[0.25em] uppercase mb-3">Trusted Experience</p>
        <h2 className="font-serif text-3xl sm:text-4xl text-white">
          Brands and Companies Previously Served
        </h2>
      </div>

      {/* Marquee — edges fade out left, fade in right */}
      <div
        className="relative"
        style={{
          maskImage:
            'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
        }}
      >
        <div className="flex w-max animate-marquee">
          <BrandRow />
          <BrandRow ariaHidden />
        </div>
      </div>
    </section>
  )
}
