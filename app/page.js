import site from '../data/site.json'
import projects from '../data/projects.json'
import team from '../data/team.json'
import { Phone, Mail, FolderOpen } from 'lucide-react'
import AdminUnlock from './AdminUnlock'
import LangThemeControls from './LangThemeControls'

function T({ ua, en }) {
  return (
    <>
      <span className="langUa">{ua}</span>
      <span className="langEn">{en || ua}</span>
    </>
  )
}

export default function Home() {
  const firstProject = projects[0]

  return (
    <>
      <header className="header">
        <nav className="nav">
          <a href="/" className="logo">{site.brand}</a>
          <div className="links">
            <a href="#about"><T ua="Про нас" en="About" /></a>
            <a href="#portfolio"><T ua="Портфоліо" en="Portfolio" /></a>
            <a href="#team"><T ua="Команда" en="Team" /></a>
            <a href="#contact"><T ua="Контакти" en="Contacts" /></a>
          </div>
          <div className="actions">
            <LangThemeControls />
            <a className="btn dark" href={`tel:${site.phone}`}>{site.phone}</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div>
            <p className="label">{site.heroLabel}</p>
            <h1><T ua={site.heroTitle} en={site.heroTitleEn} /></h1>
            <p className="lead"><T ua={site.heroText} en={site.heroTextEn} /></p>
            <div className="actions" style={{marginTop:32}}>
              <a className="btn dark" href="#portfolio"><T ua="Дивитись портфоліо" en="View portfolio" /></a>
              <a className="btn" href="#contact"><T ua="Звʼязатися" en="Contact" /></a>
            </div>
          </div>
          <div className="heroImage">
            <img src={firstProject?.cover} alt={firstProject?.title} />
          </div>
        </section>

        <section id="about" className="section white">
          <div className="inner aboutGrid">
            <div>
              <p className="label">About</p>
              <h2 className="sectionTitle"><T ua={site.aboutTitle} en={site.aboutTitleEn} /></h2>
            </div>
            <p className="text"><T ua={site.aboutText} en={site.aboutTextEn} /></p>
          </div>
        </section>

        <section id="portfolio" className="section">
          <p className="label"><FolderOpen size={14}/> Portfolio folders</p>
          <h2 className="sectionTitle"><T ua="Портфоліо по проєктах" en="Portfolio by projects" /></h2>
          <div className="cards">
            {projects.map((project) => (
              <a key={project.slug} className="card" href={`/project/${project.slug}`}>
                <img src={project.cover} alt={project.title} />
                <div className="cardBody">
                  <p className="muted"><T ua={project.category} en={project.categoryEn} /></p>
                  <h3 style={{fontSize:28,margin:'8px 0'}}><T ua={project.title} en={project.titleEn} /></h3>
                  <p className="text" style={{fontSize:16}}><T ua={project.description} en={project.descriptionEn} /></p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="team" className="section white">
          <div className="inner">
            <p className="label">Team</p>
            <h2 className="sectionTitle"><T ua="Команда" en="Team" /></h2>
            <div className="teamGrid">
              {team.map((person) => (
                <div className="teamCard" key={person.name}>
                  <img src={person.photo} alt={person.name}/>
                  <h3 style={{fontSize:25}}>{person.name}</h3>
                  <p className="muted"><T ua={person.role} en={person.roleEn} /></p>
                  <p className="text" style={{fontSize:16}}><T ua={person.bio} en={person.bioEn} /></p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="contactBox">
            <div>
              <p className="label">Contacts</p>
              <h2 className="sectionTitle"><T ua="Звʼязатися з нами" en="Contact us" /></h2>
              <p className="text"><T ua="Напишіть на пошту або зателефонуйте, щоб обговорити проєкт, стиль, бюджет і формат роботи." en="Email or call us to discuss your project, style, budget and workflow." /></p>
            </div>
            <div className="contactLinks">
              <a href={`tel:${site.phone}`}><Phone size={17}/> {site.phone}</a>
              <a href={`mailto:${site.email}`}><Mail size={17}/> {site.email}</a>
            </div>
          </div>
        </section>
      </main>
      <AdminUnlock />
    </>
  )
}
