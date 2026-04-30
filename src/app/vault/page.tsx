import type { Metadata } from 'next'
import VaultForm from '@/components/vault/VaultForm'

export const metadata: Metadata = {
  title: 'The V-Vault — Ask Anonymously',
  description:
    'Ask Dr. Didi any reproductive or sexual health question — completely anonymously. No name, no email, no judgment.',
}

export default function VaultPage() {
  return (
    <>
      <section className="pt-32 pb-16 text-white text-center" style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="max-w-container mx-auto px-6">
          <div
            className="inline-block text-sm font-body px-4 py-1.5 rounded-full mb-6"
            style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }}
          >
            100% Anonymous
          </div>
          <h1
            className="font-heading font-bold text-white mb-4"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)' }}
          >
            The V-Vault
          </h1>
          <p className="font-body text-lg max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Your safe space to ask anything — no judgment, no trace, just honest answers.
          </p>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-2xl mx-auto px-6">
          <VaultForm />
        </div>
      </section>
    </>
  )
}
