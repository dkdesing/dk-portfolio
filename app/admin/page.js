'use client'

import { useEffect, useState } from 'react'

export default function AdminPage() {
  const [items, setItems] = useState([])
  const [url, setUrl] = useState('')
  const [title, setTitle] = useState('')

  useEffect(() => {
    try {
      setItems(JSON.parse(localStorage.getItem('dk_admin_images') || '[]'))
    } catch {}
  }, [])

  function save(next) {
    setItems(next)
    localStorage.setItem('dk_admin_images', JSON.stringify(next))
  }

  function addItem() {
    if (!url.trim()) return
    save([...items, { url: url.trim(), title: title.trim() || 'New image' }])
    setUrl('')
    setTitle('')
  }

  function removeItem(index) {
    save(items.filter((_, i) => i !== index))
  }

  return (
    <main className="adminWrap">
      <a className="btn" href="/">← На сайт</a>
      <h1 style={{fontSize: 54}}>Admin panel</h1>

      <div className="note">
        Ця адмін-панель дозволяє швидко додавати фото за посиланням у твоєму браузері.
        Для повноцінного адміна з завантаженням фото на сервер потрібна CMS, наприклад Sanity або Strapi.
      </div>

      <section className="adminPanel" style={{marginTop: 22}}>
        <h2>Додати фото в SKY centre</h2>

        <div className="field">
          <label>Назва фото</label>
          <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Наприклад: кухня, санвузол..." />
        </div>

        <div className="field">
          <label>URL фото</label>
          <input value={url} onChange={e => setUrl(e.target.value)} placeholder="https://..." />
        </div>

        <button className="btn dark" onClick={addItem}>Додати</button>

        <div className="previewList">
          {items.map((item, index) => (
            <div className="previewItem" key={index}>
              <img src={item.url} alt="" />
              <div style={{flex: 1}}>
                <b>{item.title}</b>
                <div style={{color:'#777', fontSize: 13}}>{item.url}</div>
              </div>
              <button className="btn" onClick={() => removeItem(index)}>Видалити</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}