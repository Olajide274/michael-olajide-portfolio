export type Project = {
  slug: string
  title: string
  summary: string
  bullets: string[]
  stack?: string[]
  liveUrl?: string
  repoUrl?: string
  caseStudy?: boolean
}

export const profile = {
  name: 'Michael Olajide David',
  location: 'Kaduna, Nigeria',
  headline: 'Backend-focused full-stack engineer: Go, gRPC, C#/.NET, payments.',
  summary: 'I build production web systems end to end, from database schema and API design to security and UI. First-Class Physics with Electronics graduate (AFIT).',
  email: 'michaelolajidedavid@gmail.com',
  github: 'https://github.com/Olajide274',
  linkedin: 'https://www.linkedin.com/in/michael-olajide-david-b27859383',
  cv: '/Michael_Olajide_David_CV.pdf',
}

export const featuredProjects: Project[] = [
  {
    slug: 'trade-escrow-protocol', title: 'Trade Escrow Protocol', summary: 'Go/gRPC payment escrow backend.',
    bullets: ['Gin, pgx, PostgreSQL, Redis, JWT on Docker Compose', 'Paystack deposits with signature-verified webhooks', 'Dispute/refund workflow', 'Hash-chained, tamper-evident audit log', 'Concurrency tests for race conditions', 'Origin-allowlisted CORS, security headers and request-size limits'],
    stack: ['Go', 'gRPC', 'PostgreSQL', 'Redis', 'Docker', 'Next.js'], repoUrl: 'https://github.com/Olajide274/trade-escrow-protocol', caseStudy: true,
  },
  {
    slug: 'waytrust', title: 'WayTrust', summary: 'Waybill escrow system for motor-park clerks in Nigeria.',
    bullets: ['Go backend', 'Next.js agent app for park clerks', 'Escrow flow for waybill payments'], stack: ['Go', 'Next.js'], caseStudy: true,
  },
  {
    slug: 'checkam', title: 'CheckAm', summary: 'Lost/stolen phone checker for Nigeria.',
    bullets: ['IMEI/TAC lookup with device model matching', 'Seller proof uploads with metadata stripped and a 30-day purge', 'Paystack test-mode paid report with signature-verified webhooks', 'User accounts with buyer/seller roles'], stack: ['Next.js', 'PostgreSQL (Neon)', 'Vercel'], liveUrl: 'https://check-am-kappa.vercel.app', caseStudy: true,
  },
  {
    slug: 'nexus-recon-engine', title: 'Nexus Recon Engine', summary: 'Matching engine for financial reconciliation and disputes.', bullets: [], repoUrl: 'https://github.com/Olajide274/nexus-recon-engine',
  },
  {
    slug: '1860-travels-erp-case-study', title: '1860 Travels ERP Case Study', summary: 'Documented backend optimizations, database configuration and code-safety patches in a travel operations system.', bullets: [], repoUrl: 'https://github.com/Olajide274/1860-travels-erp-case-study',
  },
]

export const liveProjects = [
  { title: 'KadunaHomes', description: 'Property marketplace demo for Kaduna', liveUrl: 'https://kadunahomes.vercel.app' },
  { title: 'Xtreme Hotel', description: 'Hotel website demo', liveUrl: 'https://xtremehoteldemo.vercel.app' },
  { title: 'Chris Mitchell Jazz', description: 'Client link-in-bio site for a jazz artist, with merch storefront link', liveUrl: 'https://chrismitchelljazz.com.ng' },
  { title: 'BTC Essential', description: '', liveUrl: 'https://btc-essential.vercel.app' },
]

export const skillGroups = [
  ['Backend', ['Go', 'gRPC', 'ASP.NET Core', 'Node.js', 'REST', 'OpenAPI/Swagger']],
  ['Data', ['PostgreSQL', 'Redis', 'Supabase']],
  ['Payments', ['Stripe', 'Paystack', 'webhook verification', 'escrow and dispute workflows']],
  ['Security', ['JWT', 'OAuth2', 'CORS', 'audit logging']],
  ['DevOps and testing', ['Docker Compose', 'GitHub Actions', 'Vercel', 'Codespaces', 'unit and concurrency testing', 'Postman']],
  ['Frontend', ['Next.js', 'React', 'TypeScript', 'Tailwind']],
] as const

export const experience = [
  { company: '1860 Travels Limited', role: 'Full-Stack Web Developer', dates: 'Jan–Aug 2026', details: ['Multi-currency Stripe/Paystack checkout', 'C#/.NET backend fixes', '449 legacy URLs migrated with 301 redirects', 'Mobile PageSpeed raised from 32 to 49'] },
  { company: 'Swift Digital Services', role: 'Founder & Full-Stack Developer', dates: '2022–present', details: ['Client websites and own products, from scoping to deployment on Vercel'], url: 'https://swift-digital-services.vercel.app' },
]

export const education = { school: 'AFIT', degree: 'B.Sc. Physics with Electronics', result: 'First Class (CGPA 4.50/5.00)' }
