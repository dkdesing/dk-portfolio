import './style.css'
export const metadata = { title: 'DK Design', description: 'Portfolio website' }
export default function RootLayout({ children }) {
  return <html lang="uk"><body>{children}</body></html>
}