import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-espresso/95 backdrop-blur-sm border-b border-gold/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-gold text-base tracking-widest uppercase"
        >
          Coffee Never Sleeps
        </Link>
        <Link
          href="/contact"
          className="text-sm tracking-widest uppercase text-gray-300 hover:text-gold transition-colors duration-200"
        >
          Contact
        </Link>
      </div>
    </nav>
  )
}
