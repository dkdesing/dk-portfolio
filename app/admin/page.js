export default function AdminGuide() {
  return (
    <main className="adminWrap">
      <a className="btn" href="/">← На сайт</a>
      <h1 style={{fontSize:58}}>Як редагувати сайт</h1>
      <div className="notice">Щоб показати кнопку адмінки на головній сторінці, набери на клавіатурі код: dkadmin. Щоб сховати кнопку — натисни Esc. Це безкоштовна GitHub-система редагування. Ти змінюєш файли в папці сайту, робиш Commit + Push у GitHub Desktop, і Vercel автоматично оновлює сайт.</div>
      <section className="adminBox"><h2>1. Змінити тексти, телефон, email</h2><p className="text">Відкрий файл:</p><pre className="code">data/site.json</pre></section>
      <section className="adminBox"><h2>2. Додати нову папку проєкту</h2><p className="text">Створи папку з фото:</p><pre className="code">public/projects/manhattan</pre><p className="text">Потім відкрий:</p><pre className="code">data/projects.json</pre><p className="text">І додай новий обʼєкт за прикладом SKY centre.</p></section>
      <section className="adminBox"><h2>3. Додати працівника</h2><pre className="code">public/team/name.jpg
data/team.json</pre></section>
      <section className="adminBox"><h2>4. Опублікувати зміни</h2><pre className="code">GitHub Desktop
→ Summary: update website
→ Commit to main
→ Push origin</pre></section>
    </main>
  )
}