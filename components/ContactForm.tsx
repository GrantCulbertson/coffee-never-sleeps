'use client'

import { useState } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setState('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      if (!res.ok) throw new Error('Failed')
      setState('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className="text-center py-12">
        <p className="font-serif text-gold text-2xl mb-2">Message sent.</p>
        <p className="text-gray-400">Thanks! Tom will be in touch soon.</p>
      </div>
    )
  }

  const inputClass =
    'w-full bg-espresso-card border border-white/10 text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors placeholder:text-gray-600'

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm tracking-widest uppercase text-gray-400 mb-2">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm tracking-widest uppercase text-gray-400 mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm tracking-widest uppercase text-gray-400 mb-2">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClass} resize-none`}
          placeholder="Tell Tom about your project..."
        />
      </div>

      {state === 'error' && (
        <p className="text-red-400 text-sm">
          Something went wrong. Please try again or email{' '}
          <a href="mailto:tom@coffeeneversleepsllc.com" className="underline hover:text-gold">
            tom@coffeeneversleepsllc.com
          </a>{' '}
          directly.
        </p>
      )}

      <button
        type="submit"
        disabled={state === 'loading'}
        className="w-full sm:w-auto bg-gold text-espresso text-sm font-bold tracking-widest uppercase px-8 py-4 hover:bg-gold-light disabled:opacity-50 transition-colors duration-200"
      >
        {state === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
