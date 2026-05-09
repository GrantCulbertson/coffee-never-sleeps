import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Coffee Never Sleeps LLC',
}

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-espresso pt-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <p className="text-gold text-sm tracking-[0.25em] uppercase mb-3">Reach Out</p>
            <h1 className="font-serif text-4xl text-white mb-4">Get in Touch</h1>
            <p className="text-gray-400">Tell Tom about your project and he'll be in touch.</p>
          </div>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  )
}
