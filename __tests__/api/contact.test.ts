import { describe, it, expect, vi, beforeEach } from 'vitest'

vi.mock('@/lib/resend', () => ({
  resend: {
    emails: {
      send: vi.fn(),
    },
  },
}))

import { POST } from '@/app/api/contact/route'
import { resend } from '@/lib/resend'

function makeRequest(body: object) {
  return new Request('http://localhost/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
}

describe('POST /api/contact', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns 400 when name is missing', async () => {
    const req = makeRequest({ name: '', email: 'a@b.com', message: 'Hello' })
    const res = await POST(req)
    expect(res.status).toBe(400)
    const json = await res.json()
    expect(json.error).toBe('All fields are required.')
  })

  it('returns 400 when email is missing', async () => {
    const req = makeRequest({ name: 'Alice', email: '', message: 'Hello' })
    const res = await POST(req)
    expect(res.status).toBe(400)
  })

  it('returns 400 when message is missing', async () => {
    const req = makeRequest({ name: 'Alice', email: 'a@b.com', message: '' })
    const res = await POST(req)
    expect(res.status).toBe(400)
  })

  it('sends email and returns 200 when all fields are present', async () => {
    vi.mocked(resend.emails.send).mockResolvedValueOnce({
      data: { id: 'abc123' },
      error: null,
    })
    const req = makeRequest({ name: 'Alice', email: 'alice@example.com', message: 'I need help sourcing beans.' })
    const res = await POST(req)
    expect(res.status).toBe(200)
    const json = await res.json()
    expect(json.success).toBe(true)
    expect(resend.emails.send).toHaveBeenCalledWith(
      expect.objectContaining({
        to: ['tom@coffeeneversleepsllc.com'],
        replyTo: 'alice@example.com',
        subject: 'New inquiry from Alice',
      })
    )
  })

  it('returns 500 when Resend returns an error', async () => {
    vi.mocked(resend.emails.send).mockResolvedValueOnce({
      data: null,
      error: { name: 'validation_error', message: 'Invalid API key', statusCode: 401 },
    })
    const req = makeRequest({ name: 'Alice', email: 'alice@example.com', message: 'Hello' })
    const res = await POST(req)
    expect(res.status).toBe(500)
    const json = await res.json()
    expect(json.error).toBe('Failed to send email.')
  })
})
