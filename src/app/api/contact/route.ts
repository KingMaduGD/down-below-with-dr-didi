import { NextRequest, NextResponse } from 'next/server'
import { contactSchema } from '@/lib/validations'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Validation failed', issues: parsed.error.issues },
        { status: 400 }
      )
    }

    const { firstName, lastName, email, preferredDate, preferredTime } = parsed.data

    // Prototype: log and return success.
    // Production: send dual emails via Resend — confirmation to patient, notification to DIDI_EMAIL.
    console.log('[Contact] Booking request:', {
      firstName,
      lastName,
      email,
      preferredDate,
      preferredTime,
    })

    return NextResponse.json({ success: true, message: 'Booking request received' })
  } catch {
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 })
  }
}
