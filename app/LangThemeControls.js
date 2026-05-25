'use client'

import { useEffect, useState } from 'react'

export default function LangThemeControls() {
  const [theme, setTheme] = useState('light')
  const [lang, setLang] = useState('ua')

  useEffect(() => {
    const savedTheme = localStorage.getItem('dk_theme') || 'light'
    const savedLang = localStorage.getItem('dk_lang') || 'ua'
    setTheme(savedTheme)
    setLang(savedLang)
    document.documentElement.setAttribute('data-theme', savedTheme)
    document.documentElement.setAttribute('data-lang', savedLang)
  }, [])

  function toggleTheme() {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    localStorage.setItem('dk_theme', next)
    document.documentElement.setAttribute('data-theme', next)
  }

  function toggleLang() {
    const next = lang === 'ua' ? 'en' : 'ua'
    setLang(next)
    localStorage.setItem('dk_lang', next)
    document.documentElement.setAttribute('data-lang', next)
  }

  return (
    <>
      <button className="btn themeBtn" onClick={toggleLang}>
        {lang === 'ua' ? 'EN' : 'UA'}
      </button>
      <button className="btn themeBtn" onClick={toggleTheme}>
        {theme === 'light' ? 'Темна' : 'Світла'}
      </button>
    </>
  )
}
