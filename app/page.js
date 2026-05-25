'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, FolderOpen } from 'lucide-react'

const defaultImages = ["/images/sky-centre/sky-centre-1.jpg", "/images/sky-centre/sky-centre-2.jpg", "/images/sky-centre/sky-centre-3.jpg", "/images/sky-centre/sky-centre-4.jpg", "/images/sky-centre/sky-centre-5.jpg", "/images/sky-centre/sky-centre-6.jpg", "/images/sky-centre/sky-centre-7.jpg"]

export default function Home() {
  const [lang, setLang] = useState('ua')
  const [extra, setExtra] = useState([])

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('dk_admin_images') || '[]')
      setExtra(saved)
    } catch {}
  }, [])

  const t = {
    ua: {
      navAbout: 'Про мене',
      navPortfolio: 'Портфоліо',
      navContact: 'Контакти',
      heroTitle: 'DK Desing — світлий мінімалізм для сучасного простору.',
      heroText: 'Портфоліо інтерʼєрів, екстерʼєрів та 3D-візуалізацій. Чисті лінії, теплі фактури, продумане світло та комфорт у кожній деталі.',
      aboutTitle: 'Дизайн, який виглядає легко, але продуманий до деталей',
      aboutText: 'DK Desing створює сучасні інтерʼєри у світлому мінімалістичному стилі. Основний акцент — функціональність, гармонійна палітра, якісні матеріали та атмосфера спокою.',
      projectLabel: 'Окрема папка проєкту',
      projectTitle: 'SKY centre',
      projectText: 'Комплексний дизайн квартири: кухня-вітальня, ТВ-зона, спальня та санвузол. Проєкт виконаний у спокійній світлій палітрі з акцентом на скло, камінь, дерево та мʼяке підсвічування.',
      contactTitle: 'Звʼязатися для проєкту',
      contactText: 'Напишіть або зателефонуйте, щоб обговорити ідею, стиль, бюджет та формат роботи.',
      admin: 'Адмін'
    },
    en: {
      navAbout: 'About',
      navPortfolio: 'Portfolio',
      navContact: 'Contacts',
      heroTitle: 'DK Desing — light minimalism for modern spaces.',
      heroText: 'A portfolio of interiors, exteriors and 3D visualizations. Clean lines, warm textures, thoughtful lighting and comfort in every detail.',
      aboutTitle: 'Design that looks effortless, but is thought through in detail',
      aboutText: 'DK Desing creates modern interiors in a light minimalist style. The main focus is functionality, a harmonious palette, quality materials and a calm atmosphere.',
      projectLabel: 'Separate project folder',
      projectTitle: 'SKY centre',
      projectText: 'Apartment design project: kitchen-living room, TV area, bedroom and bathroom. Made in a calm light palette with glass, stone, wood and soft lighting accents.',
      contactTitle: 'Contact for a project',
      contactText: 'Message or call to discuss the idea, style, budget and workflow.',
      admin: 'Admin'
    }
  }[lang]

  const gallery = [...defaultImages, ...extra.map(i => i.url).filter(Boolean)]

  return (
    <>
      <header className="header">
        <nav className="nav">
          <a className="logo" href="#">DK DESING</a>
          <div className="links">
            <a href="#about">{t.navAbout}</a>
            <a href="#portfolio">{t.navPortfolio}</a>
            <a href="#contact">{t.navContact}</a>
          </div>
          <div className="actions">
            <button className="btn" onClick={() => setLang(lang === 'ua' ? 'en' : 'ua')}>{lang === 'ua' ? 'EN' : 'UA'}</button>
            <a className="btn" href="/admin">{t.admin}</a>
            <a className="btn dark" href="tel:+380995081424">0995081424</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:.6}}>
            <p className="label">Interior / 3D visualization</p>
            <h1>{t.heroTitle}</h1>
            <p className="lead">{t.heroText}</p>
            <div className="actions" style={{marginTop: 34}}>
              <a className="btn dark" href="#portfolio">{t.navPortfolio}</a>
              <a className="btn" href="#contact">{t.navContact}</a>
            </div>
          </motion.div>
          <motion.div className="heroCard" initial={{opacity:0, scale:.97}} animate={{opacity:1, scale:1}} transition={{duration:.7}}>
            <img src="/images/sky-centre/1_LightMix Interactive(3).jpg" alt="SKY centre kitchen" />
          </motion.div>
        </section>

        <section id="about" className="section white">
          <div className="inner aboutGrid">
            <div>
              <p className="label">About</p>
              <h2 className="sectionTitle">{t.aboutTitle}</h2>
            </div>
            <p className="text">{t.aboutText}</p>
          </div>
        </section>

        <section id="portfolio" className="section">
          <div className="projectHero">
            <div className="projectMeta">
              <p className="label"><FolderOpen size={14} /> {t.projectLabel}</p>
              <h2 className="sectionTitle">{t.projectTitle}</h2>
              <p className="text">{t.projectText}</p>
            </div>
            <div className="text">
              <b>7 renders</b><br/>
              Kitchen · TV zone · Bedroom · Bathroom
            </div>
          </div>

          <div className="gallery">
            {gallery.map((src, index) => (
              <figure key={src} className={index === 0 ? 'wide' : index === 1 ? 'small' : index < 5 ? 'half' : 'small'}>
                <img src={src} alt={`SKY centre render ${index + 1}`} />
              </figure>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <div className="contactBox">
            <div>
              <p className="label">Contacts</p>
              <h2 className="sectionTitle">{t.contactTitle}</h2>
              <p className="text">{t.contactText}</p>
            </div>
            <div className="contactLinks">
              <a href="tel:+380995081424"><Phone size={17} /> 0995081424</a>
              <a href="mailto:konskiyden@gmail.com"><Mail size={17} /> konskiyden@gmail.com</a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}