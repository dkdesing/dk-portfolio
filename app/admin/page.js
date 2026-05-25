'use client'

import { useState } from 'react'

export default function AdminGuide() {
  const [code, setCode] = useState('')
  const [open, setOpen] = useState(false)

  if (!open) {
    return (
      <main className="adminWrap">
        <a className="btn" href="/">← На сайт</a>
        <h1 style={{fontSize:58}}>Admin</h1>
        <div className="adminBox">
          <h2>Введіть код доступу</h2>
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Код"
            style={{width:'100%',padding:16,borderRadius:16,border:'1px solid var(--border)',margin:'12px 0',background:'var(--card)',color:'var(--text)'}}
          />
          <button className="btn dark" onClick={() => setOpen(code === 'dkadmin')}>Увійти</button>
        </div>
      </main>
    )
  }

  return (
    <main className="adminWrap">
      <a className="btn" href="/">← На сайт</a>
      <h1 style={{fontSize:58}}>Як редагувати сайт</h1>
      <div className="notice">Ця сторінка тільки для тебе. Реально змінити сайт може лише людина з доступом до твого GitHub.</div>
      <section className="adminBox"><h2>1. Змінити тексти, телефон, email</h2><pre className="code">data/site.json</pre></section>
      <section className="adminBox"><h2>2. Додати нову папку проєкту</h2><pre className="code">public/projects/project-name
data/projects.json</pre></section>
      <section className="adminBox"><h2>3. Додати працівника</h2><pre className="code">public/team/name.jpg
data/team.json</pre></section>
      <section className="adminBox"><h2>4. Опублікувати зміни</h2><pre className="code">GitHub Desktop
→ Summary: update website
→ Commit to main
→ Push origin</pre></section>
    </main>
  )
}
