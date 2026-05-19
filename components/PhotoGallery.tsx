'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

interface GalleryImage {
  src: string
  alt: string
}

export default function PhotoGallery({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<GalleryImage | null>(null)

  const close = useCallback(() => setActive(null), [])

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, close])

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {images.map((img) => (
          <button
            key={img.src}
            onClick={() => setActive(img)}
            className="relative aspect-[4/3] overflow-hidden shadow-lg cursor-zoom-in group"
            aria-label={`View: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={close}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={close}
              className="absolute -top-10 right-0 text-white/60 hover:text-white text-sm tracking-widest uppercase transition-colors duration-150"
            >
              Close ✕
            </button>

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
