export interface GalleryItem {
  id: number
  title: string
  date: string
  location: string
  image: string
  description: string
}

export interface ImpactMetric {
  label: string
  value: string
  icon: string
}

export const impactMetrics: ImpactMetric[] = [
  { label: 'Women Reached', value: '5,000+', icon: '👩' },
  { label: 'Communities Served', value: '12', icon: '🏘️' },
  { label: 'Health Talks Hosted', value: '48', icon: '🎤' },
  { label: 'Free Screenings', value: '800+', icon: '🩺' },
]

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Women's Health Workshop — Calabar South",
    date: 'March 2024',
    location: 'Calabar South, Cross River',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600',
    description: 'Interactive workshop on menstrual health for 200+ women',
  },
  {
    id: 2,
    title: 'Free Cervical Screening Drive',
    date: 'January 2024',
    location: 'CRSMOH Centre, Calabar',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600',
    description: 'Partnered with CRSMOH for free pap smear screenings',
  },
  {
    id: 3,
    title: 'School Outreach — Unical Secondary',
    date: 'November 2023',
    location: 'University of Calabar Secondary',
    image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=600',
    description: 'Puberty & hygiene education for 350 female students',
  },
  {
    id: 4,
    title: 'Radio Health Talk — Sunrise FM',
    date: 'October 2023',
    location: 'Calabar, Cross River',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600',
    description: 'Live call-in health show reaching 50,000+ listeners',
  },
  {
    id: 5,
    title: 'Community Market Outreach',
    date: 'August 2023',
    location: 'Watt Market, Calabar',
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600',
    description: 'Free hygiene kits distribution and health talks at markets',
  },
  {
    id: 6,
    title: 'Midwives Continuing Education',
    date: 'June 2023',
    location: 'General Hospital, Calabar',
    image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=600',
    description: 'SRH update training for 60 community midwives',
  },
]
