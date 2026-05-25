'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const [lang, setLang] = useState('ua')

  const t = {
    ua: {
      title: 'DK Desing — мінімалістичні простори з характером',
      text: 'Дизайн інтер’єру, екстер’єру та 3D-візуалізації у світлому мінімалістичному стилі.',
      btn: 'Звʼязатися',
      projects: 'Проєкти'
    },
    en: {
      title: 'DK Desing — minimal spaces with character',
      text: 'Interior, exterior and 3D visualization portfolio in a light minimalist style.',
      btn: 'Contact',
      projects: 'Projects'
    }
  }

  return (
    <main style={{padding:'40px',maxWidth:'1200px',margin:'0 auto'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <h2>DK DESING</h2>
        <button
          onClick={() => setLang(lang === 'ua' ? 'en' : 'ua')}
          style={{
            padding:'10px 18px',
            borderRadius:'14px',
            border:'1px solid #ccc',
            background:'white',
            cursor:'pointer'
          }}
        >
          {lang === 'ua' ? 'EN' : 'UA'}
        </button>
      </div>

      <motion.div
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.6}}
        style={{marginTop:'120px'}}
      >
        <p style={{letterSpacing:'4px',color:'#777'}}>INTERIOR / EXTERIOR DESIGN</p>

        <h1 style={{
          fontSize:'72px',
          lineHeight:'1',
          maxWidth:'900px'
        }}>
          {t[lang].title}
        </h1>

        <p style={{
          marginTop:'24px',
          fontSize:'20px',
          maxWidth:'700px',
          color:'#555',
          lineHeight:'1.8'
        }}>
          {t[lang].text}
        </p>

        <div style={{display:'flex',gap:'16px',marginTop:'32px'}}>
          <button style={{
            padding:'16px 28px',
            borderRadius:'18px',
            border:'none',
            background:'#111',
            color:'white',
            cursor:'pointer'
          }}>
            {t[lang].projects}
          </button>

          <button style={{
            padding:'16px 28px',
            borderRadius:'18px',
            border:'1px solid #ccc',
            background:'white',
            cursor:'pointer'
          }}>
            {t[lang].btn}
          </button>
        </div>
      </motion.div>
    </main>
  )
}