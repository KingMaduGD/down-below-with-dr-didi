import { NextRequest, NextResponse } from 'next/server'
import { vaultSchema } from '@/lib/validations'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const parsed = vaultSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Validation failed', issues: parsed.error.issues },
        { status: 400 }
      )
    }

    const { category, question } = parsed.data

    // Prototype: log and return success.
    // Production: send via Resend to DIDI_EMAIL env var, stripping all sender info.
    console.log('[V-Vault] Anonymous question received:', {
      category,
      questionLength: question.length,
    })

    return NextResponse.json({ success: true, message: 'Question received' })
  } catch {
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 })
  }
}
