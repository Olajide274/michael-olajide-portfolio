import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { featuredProjects } from '@/data/content'

export function generateStaticParams() { return featuredProjects.filter(p => p.caseStudy).map(p => ({ slug: p.slug })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const project = featuredProjects.find(p => p.slug === slug); return { title: project ? `${project.title} — Michael Olajide David` : 'Case study' } }

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = featuredProjects.find(p => p.slug === slug && p.caseStudy)
  if (!project) notFound()
  return <main className="case-study section-shell"><Link className="back-link" href="/#projects"><ArrowLeft size={15} /> Back to selected work</Link><span className="kicker">case study / {project.slug}</span><h1>{project.title}</h1><p className="case-summary">{project.summary}</p><div className="case-layout"><div className="case-main"><section><h2>Problem</h2><p>{project.summary}</p></section><section><h2>Architecture</h2><div className="case-diagram"><span>Client</span><i /> <span>API</span><i /> <span>Data layer</span><small>request → validate → persist → respond</small></div></section><section><h2>What I built</h2><ul>{project.bullets.map(b => <li key={b}>{b}</li>)}</ul></section></div><aside><section><h2>Stack</h2><div className="chip-row">{project.stack?.map(s => <span className="chip" key={s}>{s}</span>)}</div></section><section><h2>Links</h2><div className="case-links">{project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noreferrer">View on GitHub <ArrowUpRight size={14} /></a>}{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live site <ArrowUpRight size={14} /></a>}</div></section></aside></div></main>
}
