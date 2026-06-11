'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'

interface GalleryImage {
  src: string
  alt: string
}

export default function PhotoGallery({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<GalleryImage | null>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  const close = useCallback(() => setActive(null), [])

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, close])

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    const card = track.firstElementChild as HTMLElement | null
    if (!card) return
    track.scrollBy({ left: dir * (card.offsetWidth + 12), behavior: 'smooth' })
  }

  return (
    <>
      <div className="relative">
        {/* Carousel track */}
        <div
          ref={trackRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-3 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {images.map((img) => (
            <button
              key={img.src}
              onClick={() => setActive(img)}
              className="relative snap-center flex-none w-[82vw] sm:w-[45%] lg:w-[32%] aspect-[4/3] overflow-hidden shadow-lg cursor-zoom-in group rounded-sm"
              aria-label={`View: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 82vw, (max-width: 1024px) 45vw, 32vw"
              />
            </button>
          ))}
        </div>

        {/* Arrows — desktop only */}
        <button
          onClick={() => scrollByCard(-1)}
          className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 w-9 h-9 items-center justify-center rounded-full bg-espresso-dark/90 border border-gold/30 text-gold hover:bg-gold hover:text-espresso transition-colors duration-200"
          aria-label="Previous photo"
        >
          ‹
        </button>
        <button
          onClick={() => scrollByCard(1)}
          className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 w-9 h-9 items-center justify-center rounded-full bg-espresso-dark/90 border border-gold/30 text-gold hover:bg-gold hover:text-espresso transition-colors duration-200"
          aria-label="Next photo"
        >
          ›
        </button>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={close}
        >
          {/* Close button — anchored to the overlay, always visible inside the viewport */}
          <button
            onClick={close}
            className="absolute top-4 right-5 text-white/60 hover:text-white text-sm tracking-widest uppercase transition-colors duration-150 z-10"
          >
            Close ✕
          </button>

          <div
            className="relative w-full max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="relative w-full max-h-[85vh]">
              <Image
                src={active.src}
                alt={active.alt}
                width={1400}
                height={1050}
                className="object-contain w-full h-auto max-h-[85vh] shadow-2xl"
              />
            </div>

            {/* Caption */}
            <p className="text-center text-gray-400 text-xs tracking-widest uppercase mt-4">
              {active.alt}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
