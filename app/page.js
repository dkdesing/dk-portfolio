import site from '../data/site.json'
import projects from '../data/projects.json'
import team from '../data/team.json'
import { Phone, Mail, FolderOpen } from 'lucide-react'
import AdminUnlock from './AdminUnlock'
import ThemeToggle from './ThemeToggle'

export default function Home() {
  const firstProject = projects[0]
  return (
    <>
      <header className="header"><nav className="nav"><a href="/" className="logo">{site.brand}</a><div className="links"><a href="#about">Про нас</a><a href="#portfolio">Портфоліо</a><a href="#team">Команда</a><a href="#contact">Контакти</a></div><div className="actions"><ThemeToggle />\n            <a className="btn dark" href={`tel:${site.phone}`}>{site.phone}</a></div></nav></header>
      <main>
        <section className="hero"><div><p className="label">{site.heroLabel}</p><h1>{site.heroTitle}</h1><p className="lead">{site.heroText}</p><div className="actions" style={{marginTop:32}}><a className="btn dark" href="#portfolio">Дивитись портфоліо</a><a className="btn" href="#contact">Звʼязатися</a></div></div><div className="heroImage"><img src={firstProject?.cover} alt={firstProject?.title} /></div></section>
        <section id="about" className="section white"><div className="inner aboutGrid"><div><p className="label">About</p><h2 className="sectionTitle">{site.aboutTitle}</h2></div><p className="text">{site.aboutText}</p></div></section>
        <section id="portfolio" className="section"><p className="label"><FolderOpen size={14}/> Portfolio folders</p><h2 className="sectionTitle">Портфоліо по проєктах</h2><div className="cards">{projects.map((project)=><a key={project.slug} className="card" href={`/project/${project.slug}`}><img src={project.cover} alt={project.title}/><div className="cardBody"><p className="muted">{project.category}</p><h3 style={{fontSize:28,margin:'8px 0'}}>{project.title}</h3><p className="text" style={{fontSize:16}}>{project.description}</p></div></a>)}</div></section>
        <section id="team" className="section white"><div className="inner"><p className="label">Team</p><h2 className="sectionTitle">Команда</h2><div className="teamGrid">{team.map((person)=><div className="teamCard" key={person.name}><img src={person.photo} alt={person.name}/><h3 style={{fontSize:25}}>{person.name}</h3><p className="muted">{person.role}</p><p className="text" style={{fontSize:16}}>{person.bio}</p></div>)}</div></div></section>
        <section id="contact" className="section"><div className="contactBox"><div><p className="label">Contacts</p><h2 className="sectionTitle">Звʼязатися з нами</h2><p className="text">Напишіть на пошту або зателефонуйте, щоб обговорити проєкт, стиль, бюджет і формат роботи.</p></div><div className="contactLinks"><a href={`tel:${site.phone}`}><Phone size={17}/> {site.phone}</a><a href={`mailto:${site.email}`}><Mail size={17}/> {site.email}</a></div></div></section>
      </main>
      <AdminUnlock />
    </>
  )
}