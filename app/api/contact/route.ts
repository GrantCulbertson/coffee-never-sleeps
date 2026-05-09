import { NextResponse } from 'next/server'
import { resend } from '@/lib/resend'

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  if (
    typeof body !== 'object' ||
    body === null ||
    !('name' in body) ||
    !('email' in body) ||
    !('message' in body)
  ) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
  }

  const { name, email, message } = body as Record<string, unknown>

  if (
    typeof name !== 'string' || !name.trim() ||
    typeof email !== 'string' || !email.trim() || !email.includes('@') ||
    typeof message !== 'string' || !message.trim()
  ) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
  }

  if (name.length > 100 || email.length > 254 || message.length > 2000) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
  }

  const { error } = await resend.emails.send({
    from: 'Coffee Never Sleeps <noreply@coffeeneversleepsllc.com>',
    to: ['tom@coffeeneversleepsllc.com'],
    replyTo: email,
    subject: `New inquiry from ${name.trim()}`,
    text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`,
  })

  if (error) {
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
