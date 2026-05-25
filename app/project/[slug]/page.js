import projects from '../../../data/projects.json'
import site from '../../../data/site.json'
import { notFound } from 'next/navigation'
import { ArrowLeft, Phone, Mail } from 'lucide-react'
import LangThemeControls from '../../LangThemeControls'

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })) }

function T({ ua, en }) {
  return (
    <>
      <span className="langUa">{ua}</span>
      <span className="langEn">{en || ua}</span>
    </>
  )
}

export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return notFound()

  return (
    <>
      <header className="header">
        <nav className="nav">
          <a href="/" className="logo">{site.brand}</a>
          <div className="actions">
            <LangThemeControls />
            <a className="btn" href="/"><ArrowLeft size={16}/> <T ua="Назад" en="Back" /></a>
            <a className="btn dark" href={`tel:${site.phone}`}>{site.phone}</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="section">
          <p className="label"><T ua={project.category} en={project.categoryEn} /></p>
          <h1><T ua={project.title} en={project.titleEn} /></h1>
          <p className="lead"><T ua={project.description} en={project.descriptionEn} /></p>

          <div className="gallery" style={{marginTop:44}}>
            {project.images.map((src,index)=><figure key={src}><img src={src} alt={`${project.title} ${index+1}`}/></figure>)}
          </div>
        </section>

        <section className="section">
          <div className="contactBox">
            <div>
              <p className="label">Contacts</p>
              <h2 className="sectionTitle"><T ua="Сподобався цей проєкт?" en="Like this project?" /></h2>
              <p className="text"><T ua="Звʼяжіться з нами для обговорення вашого майбутнього простору." en="Contact us to discuss your future space." /></p>
            </div>
            <div className="contactLinks">
              <a href={`tel:${site.phone}`}><Phone size={17}/> {site.phone}</a>
              <a href={`mailto:${site.email}`}><Mail size={17}/> {site.email}</a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
