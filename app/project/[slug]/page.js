import projects from '../../../data/projects.json'
import site from '../../../data/site.json'
import { notFound } from 'next/navigation'
import { ArrowLeft, Phone, Mail } from 'lucide-react'
import ThemeToggle from '../../ThemeToggle'

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })) }

export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return notFound()
  return (
    <>
      <header className="header"><nav className="nav"><a href="/" className="logo">{site.brand}</a><div className="actions"><a className="btn" href="/"><ArrowLeft size={16}/> Назад</a><ThemeToggle />\n            <a className="btn dark" href={`tel:${site.phone}`}>{site.phone}</a></div></nav></header>
      <main>
        <section className="section"><p className="label">{project.category}</p><h1>{project.title}</h1><p className="lead">{project.description}</p><div className="gallery" style={{marginTop:44}}>{project.images.map((src,index)=><figure key={src}><img src={src} alt={`${project.title} ${index+1}`}/></figure>)}</div></section>
        <section className="section"><div className="contactBox"><div><p className="label">Contacts</p><h2 className="sectionTitle">Сподобався цей проєкт?</h2><p className="text">Звʼяжіться з нами для обговорення вашого майбутнього простору.</p></div><div className="contactLinks"><a href={`tel:${site.phone}`}><Phone size={17}/> {site.phone}</a><a href={`mailto:${site.email}`}><Mail size={17}/> {site.email}</a></div></div></section>
      </main>
    </>
  )
}