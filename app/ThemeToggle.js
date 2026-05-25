'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const saved = localStorage.getItem('dk_theme') || 'light'
    setTheme(saved)
    document.documentElement.setAttribute('data-theme', saved)
  }, [])

  function toggleTheme() {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    localStorage.setItem('dk_theme', next)
    document.documentElement.setAttribute('data-theme', next)
  }

  return (
    <button className="btn themeBtn" onClick={toggleTheme}>
      {theme === 'light' ? 'Темна тема' : 'Світла тема'}
    </button>
  )
}
