'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from 'lucide-react'

type DesignCategory = 'Web Banners' | 'Mobile & Social' | 'Destination Flyers' | 'Event Promos'
type DesignItem = { src: string; title: string; category: DesignCategory; caption: string; alt: string }

const galleryItems: DesignItem[] = [
  { src: '/design/homepage_banner.jpeg', title: 'Commonwealth Games 2026', category: 'Web Banners', caption: 'Commonwealth Games travel package homepage banner.', alt: 'Commonwealth Games 2026 travel package banner with athletes and event branding' },
  { src: '/design/desktop.jpg', title: 'BIG 7 Summer Edition — desktop', category: 'Web Banners', caption: 'Desktop campaign banner introducing seven summer destinations.', alt: 'Wide BIG 7 Summer Edition travel campaign banner showing seven destinations and booking details' },
  { src: '/design/mobile.png', title: 'BIG 7 Summer Edition — mobile', category: 'Mobile & Social', caption: 'Mobile campaign layout for the BIG 7 destination package.', alt: 'Vertical BIG 7 travel campaign creative listing seven destinations' },
  { src: '/design/Zanzibar.jpg', title: 'Zanzibar', category: 'Destination Flyers', caption: 'BIG 7 destination flyer — Zanzibar.', alt: 'Zanzibar beach and sailing dhow destination flyer' },
  { src: '/design/zanzibar.jpeg', title: 'Zanzibar — campaign variant', category: 'Destination Flyers', caption: 'Alternate Zanzibar campaign creative.', alt: 'Zanzibar tropical beach campaign artwork' },
  { src: '/design/Nairobi.jpg', title: 'Nairobi', category: 'Destination Flyers', caption: 'BIG 7 destination flyer — Nairobi.', alt: 'Nairobi destination flyer featuring a giraffe at sunset' },
  { src: '/design/doha.jpg', title: 'Doha', category: 'Destination Flyers', caption: 'BIG 7 destination flyer — Doha.', alt: 'Doha skyline and waterfront destination flyer' },
  { src: '/design/instanbul.jpg', title: 'Istanbul', category: 'Destination Flyers', caption: 'BIG 7 destination flyer — Istanbul.', alt: 'Istanbul Hagia Sophia and waterfront destination flyer' },
  { src: '/design/marrakech.jpg', title: 'Marrakech', category: 'Destination Flyers', caption: 'BIG 7 destination flyer — Marrakech.', alt: 'Marrakech landmark framed by palms in a destination flyer' },
  { src: '/design/rome.jpg', title: 'Rome', category: 'Destination Flyers', caption: 'BIG 7 destination flyer — Rome.', alt: 'Rome Colosseum destination flyer' },
  { src: '/design/london.jpg', title: 'London', category: 'Destination Flyers', caption: 'BIG 7 destination flyer — London.', alt: 'London Westminster and Big Ben destination flyer' },
  { src: '/design/flier1.jpg', title: 'Notting Hill Carnival 2026 — vertical', category: 'Event Promos', caption: 'Vertical event promotion for Notting Hill Carnival 2026.', alt: 'Vertical Notting Hill Carnival 2026 promotional flyer' },
  { src: '/design/flier2.jpg', title: 'Notting Hill Carnival 2026 — square', category: 'Event Promos', caption: 'Square event promotion for Notting Hill Carnival 2026.', alt: 'Square Notting Hill Carnival 2026 promotional creative' },
  { src: '/design/flier3.jpg', title: 'Notting Hill Carnival 2026 — wide', category: 'Event Promos', caption: 'Wide event promotion for Notting Hill Carnival 2026.', alt: 'Wide Notting Hill Carnival 2026 promotional banner' },
  { src: '/design/1794855002442_image.png', title: 'Commonwealth Games 2026 promo', category: 'Event Promos', caption: 'Commonwealth Games travel package promotional creative.', alt: 'Commonwealth Games 2026 promotional artwork for a Glasgow travel package' },
  { src: '/design/Nottin hill carousel.jpg', title: 'Notting Hill Carnival carousel', category: 'Event Promos', caption: 'Wide carousel creative for the Notting Hill Carnival campaign.', alt: 'Wide Notting Hill Carnival promotional carousel artwork' },
  { src: '/design/Nottin hill desktop.jpg', title: 'Notting Hill Carnival desktop', category: 'Web Banners', caption: 'Desktop banner for the Notting Hill Carnival campaign.', alt: 'Desktop Notting Hill Carnival banner with event artwork and booking button' },
  { src: '/design/sidebar.png', title: 'BIG 7 destination sidebar', category: 'Mobile & Social', caption: 'Tall destination overview graphic for the BIG 7 summer package.', alt: 'Vertical graphic listing the BIG 7 summer travel destinations' },
  { src: '/design/Swift DIGITAL SERVICES.png', title: 'Swift Digital Services — web design', category: 'Web Banners', caption: 'Website and brand presentation for Swift Digital Services.', alt: 'Swift Digital Services web development agency page design' },
]

const categories = ['All', 'Web Banners', 'Mobile & Social', 'Destination Flyers', 'Event Promos'] as const
const designSkills = ['Layout & Composition', 'Typography', 'Branding', 'Campaign Design', 'Social Media Creatives', 'Print & Digital Export', 'Adobe Creative Suite', 'Figma (UI/UX)', 'Canva']

function Lightbox({ item, onClose, onPrevious, onNext }: { item: DesignItem; onClose: () => void; onPrevious: () => void; onNext: () => void }) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') onPrevious()
      if (event.key === 'ArrowRight') onNext()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKeyDown); document.body.style.overflow = '' }
  }, [onClose, onPrevious, onNext])

  return <motion.div className="design-lightbox" role="dialog" aria-modal="true" aria-label={`${item.title} image preview`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
    <button className="lightbox-close" aria-label="Close image preview" onClick={onClose}><X /></button>
    <button className="lightbox-arrow lightbox-prev" aria-label="Previous image" onClick={onPrevious}><ArrowLeft /></button>
    <figure className="lightbox-figure"><div className="lightbox-image"><Image src={item.src} alt={item.alt} fill sizes="(max-width: 700px) 92vw, 82vw" priority className="lightbox-img" /></div><figcaption><strong>{item.title}</strong><span>{item.caption}</span></figcaption></figure>
    <button className="lightbox-arrow lightbox-next" aria-label="Next image" onClick={onNext}><ArrowRight /></button>
  </motion.div>
}

export function DesignGallery({ fullPage = false }: { fullPage?: boolean }) {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('All')
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const items = useMemo(() => activeCategory === 'All' ? galleryItems : galleryItems.filter((item) => item.category === activeCategory), [activeCategory])
  const close = useCallback(() => setActiveIndex(null), [])
  const previous = useCallback(() => setActiveIndex((value) => value === null ? null : (value - 1 + items.length) % items.length), [items.length])
  const next = useCallback(() => setActiveIndex((value) => value === null ? null : (value + 1) % items.length), [items.length])

  return <main className={`design-page ${fullPage ? 'design-page-full' : 'design-home-section'}`}>
    {fullPage && <header className="design-page-header"><Link href="/#top" className="design-back"><ArrowLeft size={15} /> Back to engineering portfolio</Link><Link href="/#contact" className="design-contact-link">Contact <ArrowUpRight size={14} /></Link></header>}
    <section id={fullPage ? 'design-top' : 'design'} className="design-section section-shell">
      <div className="design-heading"><span className="kicker">06 / visual work</span><div><p className="design-overline">Campaigns & visual systems</p><h2>Graphic Design</h2><p className="design-intro">Campaign visuals, social creatives and promotional flyers I&apos;ve designed for travel and event brands.</p></div></div>
      <div className="design-skills" aria-label="Graphic design skills">{designSkills.map((skill) => <span className="chip" key={skill}>{skill}</span>)}</div>
      <div className="design-cases">
        <motion.article className="design-case design-case-featured" initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .45 }}>
          <div className="design-case-copy"><span className="design-overline">Campaign system / 2026</span><h3>1860 Travels – BIG 7 Summer Edition 2026</h3><p>A 7-destination summer campaign system (Zanzibar, Nairobi, Doha, Istanbul, Marrakech, Rome, London) delivered as web banners, mobile cards and destination flyers with a consistent navy-and-gold identity.</p><p className="design-role"><strong>Role</strong><span>Layout, typography, campaign system, multi-format export</span></p><p className="design-role"><strong>Tools</strong><span>Adobe Creative Suite, Figma for UI/UX, Canva</span></p></div>
          <button className="design-case-image" onClick={() => { const index = galleryItems.findIndex((item) => item.src === '/design/desktop.jpg'); setActiveIndex(index) }} aria-label="Open BIG 7 campaign banner"><Image src="/design/desktop.jpg" alt="BIG 7 Summer Edition campaign banner showing seven destinations" fill sizes="(max-width: 700px) 100vw, 50vw" priority /></button>
        </motion.article>
        <motion.article className="design-case" initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .45, delay: .08 }}><span className="design-overline">Event promo / 3 formats</span><h3>Notting Hill Carnival 2026 promo</h3><p>Wide, square and vertical promotional formats for the 2026 event.</p><div className="design-case-thumbs">{['/design/flier3.jpg', '/design/flier2.jpg', '/design/flier1.jpg'].map((src, i) => <button key={src} onClick={() => setActiveIndex(galleryItems.findIndex((item) => item.src === src))} aria-label={`Open Notting Hill Carnival ${['wide', 'square', 'vertical'][i]} design`}><Image src={src} alt={`Notting Hill Carnival 2026 ${['wide', 'square', 'vertical'][i]} design`} fill sizes="(max-width: 700px) 28vw, 180px" /></button>)}</div></motion.article>
        <motion.article className="design-case" initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .45, delay: .16 }}><span className="design-overline">Travel event / 2026</span><h3>Commonwealth Games 2026 promo</h3><p>Travel package campaign creative for the Commonwealth Games in Glasgow.</p><button className="design-commonwealth-thumb" onClick={() => setActiveIndex(galleryItems.findIndex((item) => item.src === '/design/1794855002442_image.png'))} aria-label="Open Commonwealth Games 2026 design"><Image src="/design/1794855002442_image.png" alt="Commonwealth Games 2026 travel package promotional banner" fill sizes="(max-width: 700px) 100vw, 55vw" /></button></motion.article>
      </div>
      <div className="design-gallery-heading"><div><span className="design-overline">Selected assets</span><h3>Campaign gallery</h3></div><span>{items.length} pieces</span></div>
      <div className="design-filters" role="group" aria-label="Filter design gallery">{categories.map((category) => <button key={category} className={activeCategory === category ? 'active' : ''} onClick={() => setActiveCategory(category)} aria-pressed={activeCategory === category}>{category}</button>)}</div>
      <div className="design-gallery-grid">{items.map((item, index) => <motion.button key={item.src} className={`design-gallery-item design-gallery-item-${index % 5}`} onClick={() => setActiveIndex(galleryItems.indexOf(item))} aria-label={`View ${item.title}`} initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .08 }} transition={{ duration: .4, delay: Math.min(index % 4, 3) * .04 }}><span className="design-gallery-image"><Image src={item.src} alt={item.alt} fill sizes="(max-width: 700px) 50vw, (max-width: 1100px) 33vw, 25vw" loading="lazy" /></span><span className="design-gallery-caption"><strong>{item.title}</strong><span>{item.category}</span></span></motion.button>)}</div>
      <div className="design-cta"><div><span className="design-overline">Let&apos;s make it clear</span><h3>Need a design for your brand?</h3></div><div><a className="button button-primary" href="https://wa.me/2348165212254" target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={14} /></a><a className="button" href="mailto:michaelolajidedavid@gmail.com">Email <ArrowUpRight size={14} /></a></div></div>
    </section>
    <AnimatePresence>{activeIndex !== null && <Lightbox item={galleryItems[activeIndex]} onClose={close} onPrevious={previous} onNext={next} />}</AnimatePresence>
  </main>
}
