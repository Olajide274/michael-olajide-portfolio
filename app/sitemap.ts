import type { MetadataRoute } from 'next'
import { featuredProjects } from '@/data/content'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://michaelolajidedavid.vercel.app'
  return [{ url: base, lastModified: new Date() }, ...featuredProjects.filter(p => p.caseStudy).map(p => ({ url: `${base}/projects/${p.slug}`, lastModified: new Date() }))]
}
