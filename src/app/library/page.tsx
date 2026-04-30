import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Search, Clock, ArrowRight } from 'lucide-react'
import { articles } from '@/data/articles'
import { formatDate } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Health Library',
  description: "Browse evidence-based articles on women's reproductive and sexual health — written in plain language by Dr. Didi.",
}

const categories = [
  { slug: 'all', label: 'All Topics' },
  { slug: 'menstrual', label: 'Menstrual Hygiene' },
  { slug: 'sexual-wellness', label: 'Sexual Wellness' },
  { slug: 'preventative', label: 'Preventative Care' },
  { slug: 'anatomy', label: 'General Anatomy' },
]

const categoryColors: Record<string, { bg: string; text: string }> = {
  menstrual: { bg: '#fce7f3', text: '#be185d' },
  'sexual-wellness': { bg: '#ede9fe', text: '#7c3aed' },
  preventative: { bg: '#dcfce7', text: '#166534' },
  anatomy: { bg: '#dbeafe', text: '#1e40af' },
}

const categoryLabels: Record<string, string> = {
  menstrual: 'Menstrual Health',
  'sexual-wellness': 'Sexual Wellness',
  preventative: 'Preventative Care',
  anatomy: 'Anatomy',
}

export default function LibraryPage() {
  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16" style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="max-w-container mx-auto px-6">
          <div className="text-center mb-10">
            <div
              className="inline-block text-sm font-body px-4 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }}
            >
              Knowledge is Power
            </div>
            <h1 className="font-heading font-bold text-white mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)' }}>
              Health Library
            </h1>
            <p className="font-body text-lg" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Honest, evidence-based information about your body — no jargon, no judgment.
            </p>
          </div>
          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              placeholder="Search topics, conditions, questions…"
              className="w-full pl-11 pr-4 py-4 rounded-full bg-white font-body text-sm focus:outline-none shadow-lg"
              style={{ color: '#374151' }}
            />
          </div>
        </div>
      </section>

      {/* Category filter bar */}
      <div className="bg-white border-b sticky top-16 z-30" style={{ borderColor: 'var(--color-border)' }}>
        <div className="max-w-container mx-auto px-6 py-4">
          <div className="flex gap-3 overflow-x-auto pb-1">
            {categories.map((cat, i) => (
              <button
                key={cat.slug}
                className="flex-shrink-0 px-5 py-2 rounded-full text-sm font-body font-semibold transition-colors border"
                style={
                  i === 0
                    ? { backgroundColor: 'var(--color-accent)', color: 'var(--color-primary)', borderColor: 'var(--color-accent)' }
                    : { backgroundColor: 'var(--color-surface)', color: '#4b5563', borderColor: 'var(--color-border)' }
                }
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Article grid */}
      <section className="py-16" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedArticles.map((article) => {
              const col = categoryColors[article.category] || { bg: '#f3f4f6', text: '#374151' }
              return (
                <Link key={article.slug} href={`/library/${article.slug}`} className="group">
                  <article
                    className="bg-white rounded-2xl overflow-hidden border h-full flex flex-col transition-all duration-300 hover:-translate-y-1"
                    style={{ borderColor: 'var(--color-border)', boxShadow: 'var(--shadow-sm)' }}
                  >
                    <div className="relative overflow-hidden" style={{ height: '210px' }}>
                      <Image
                        src={article.coverImage}
                        alt={article.title}
                        width={400}
                        height={210}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className="text-xs font-body font-semibold px-2.5 py-1 rounded-full"
                          style={{ backgroundColor: col.bg, color: col.text }}
                        >
                          {categoryLabels[article.category]}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-gray-400 font-body">
                          <Clock size={12} /> {article.readTime} min
                        </span>
                      </div>
                      <h2
                        className="font-heading font-semibold text-xl mb-2 transition-colors"
                        style={{ color: 'var(--color-primary)' }}
                      >
                        {article.title}
                      </h2>
                      <p className="font-body text-gray-600 text-sm leading-relaxed flex-1 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div
                        className="flex items-center justify-between mt-4 pt-4 border-t"
                        style={{ borderColor: 'var(--color-border)' }}
                      >
                        <span className="font-body text-xs text-gray-400">
                          Dr. Didi &middot; {formatDate(article.publishedAt)}
                        </span>
                        <ArrowRight
                          size={15}
                          style={{ color: 'var(--color-primary)' }}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Medical disclaimer */}
      <div className="py-4 px-6 border-t" style={{ backgroundColor: '#fffbeb', borderColor: '#fcd34d' }}>
        <div className="max-w-container mx-auto">
          <p className="font-body text-sm text-center" style={{ color: '#92400e' }}>
            ⚕️{' '}
            <strong>
              This content is for educational purposes only and does not constitute medical advice.
            </strong>{' '}
            Always consult a qualified healthcare professional for diagnosis and treatment. If you are experiencing a medical emergency, contact your nearest hospital.
          </p>
        </div>
      </div>
    </>
  )
}
