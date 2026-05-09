import Link from 'next/link'

export default function CtaBanner() {
  return (
    <section className="bg-[#111] py-20 px-4 sm:px-6 lg:px-8 border-t border-gold/10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl sm:text-4xl text-gold mb-6">
          Ready to talk coffee?
        </h2>
        <p className="text-gray-400 mb-8">
          Reach out and Tom will be in touch to discuss your project.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-gold text-espresso text-sm font-bold tracking-widest uppercase px-8 py-4 hover:bg-gold-light transition-colors duration-200"
        >
          Contact Tom
        </Link>
      </div>
    </section>
  )
}
