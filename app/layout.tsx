import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Michael Olajide David — Backend-focused full-stack engineer',
  description: 'Portfolio of Michael Olajide David, a backend-focused full-stack engineer building production systems with Go, gRPC, C#/.NET and payments.',
  openGraph: { title: 'Michael Olajide David — Engineering portfolio', description: 'Backend-focused full-stack engineer based in Kaduna, Nigeria.', type: 'website' },
  icons: { icon: '/icon.svg', apple: '/apple-icon.png' },
}
export const viewport: Viewport = { colorScheme: 'dark', themeColor: '#080b0d' }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html> }
