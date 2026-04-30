export interface Article {
  slug: string
  title: string
  excerpt: string
  category: string
  coverImage: string
  author: string
  publishedAt: string
  readTime: number
  tags: string[]
}

export const articles: Article[] = [
  {
    slug: 'understanding-your-cycle',
    title: 'Understanding Your Menstrual Cycle',
    excerpt:
      'A plain-language guide to the four phases of your cycle — and what your body is doing at each stage.',
    category: 'menstrual',
    coverImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800',
    author: 'Dr. Didi',
    publishedAt: '2024-03-15',
    readTime: 6,
    tags: ['menstrual health', 'cycle', 'hormones'],
  },
  {
    slug: 'menstrual-hygiene-guide',
    title: 'The Complete Menstrual Hygiene Guide',
    excerpt:
      'Everything you need to know about pads, tampons, menstrual cups, and keeping yourself healthy during your period.',
    category: 'menstrual',
    coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
    author: 'Dr. Didi',
    publishedAt: '2024-02-20',
    readTime: 8,
    tags: ['menstrual hygiene', 'period products'],
  },
  {
    slug: 'sti-prevention-basics',
    title: 'STI Prevention: What Every Woman Should Know',
    excerpt:
      'Understanding sexually transmitted infections, how they spread, and the most effective prevention strategies.',
    category: 'sexual-wellness',
    coverImage: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800',
    author: 'Dr. Didi',
    publishedAt: '2024-01-10',
    readTime: 7,
    tags: ['STI', 'sexual health', 'prevention'],
  },
  {
    slug: 'pap-smear-what-to-expect',
    title: 'Pap Smear: What to Expect and Why It Matters',
    excerpt:
      'A step-by-step explanation of the pap smear procedure — what happens, what it detects, and why every woman needs one.',
    category: 'preventative',
    coverImage: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800',
    author: 'Dr. Didi',
    publishedAt: '2024-01-05',
    readTime: 5,
    tags: ['pap smear', 'cervical cancer', 'screening'],
  },
  {
    slug: 'female-anatomy-overview',
    title: 'Your Body, Explained: Female Reproductive Anatomy',
    excerpt:
      'A comprehensive overview of the female reproductive system — in plain language, no jargon.',
    category: 'anatomy',
    coverImage: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800',
    author: 'Dr. Didi',
    publishedAt: '2023-12-01',
    readTime: 10,
    tags: ['anatomy', 'reproductive health', 'education'],
  },
  {
    slug: 'contraception-options',
    title: 'Contraception Options: A Complete Guide',
    excerpt:
      'Comparing all available contraception methods — effectiveness, side effects, and which might be right for you.',
    category: 'sexual-wellness',
    coverImage: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800',
    author: 'Dr. Didi',
    publishedAt: '2023-11-15',
    readTime: 9,
    tags: ['contraception', 'family planning', 'sexual health'],
  },
]
