'use client'

import { useEffect, useState } from 'react'

const SECRET_CODE = 'dkadmin'

export default function AdminUnlock() {
  const [typed, setTyped] = useState('')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('dk_admin_visible') === 'yes') {
      setVisible(true)
    }

    function handleKeyDown(event) {
      const key = event.key.toLowerCase()

      if (key === 'escape') {
        localStorage.removeItem('dk_admin_visible')
        setVisible(false)
        setTyped('')
        return
      }

      if (key.length !== 1) return

      const next = (typed + key).slice(-SECRET_CODE.length)
      setTyped(next)

      if (next === SECRET_CODE) {
        localStorage.setItem('dk_admin_visible', 'yes')
        setVisible(true)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [typed])

  if (!visible) return null

  return (
    <a
      href="/admin"
      style={{
        position: 'fixed',
        right: 18,
        bottom: 18,
        zIndex: 9999,
        background: '#151515',
        color: '#fff',
        padding: '14px 18px',
        borderRadius: 999,
        boxShadow: '0 14px 34px rgba(0,0,0,.22)',
        fontSize: 14
      }}
    >
      Адмін
    </a>
  )
}
