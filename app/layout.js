import './style.css'

export const metadata = {
  title: 'DK Desing',
  description: 'Portfolio website by DK Desing'
}

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  )
}