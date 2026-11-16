import type { Metadata } from 'next'
import { DesignGallery } from '@/components/design-gallery'

export const metadata: Metadata = {
  title: 'Graphic Design — Michael Olajide David',
  description: 'Campaign visuals, social creatives and promotional flyers for travel and event brands.',
  openGraph: { title: 'Graphic Design — Michael Olajide David', description: 'Campaign visuals, social creatives and promotional flyers for travel and event brands.', type: 'website' },
}

export default function DesignPage() {
  return <DesignGallery fullPage />
}
