import './style.css'

export const metadata = {
  title: 'DK Design',
  description: 'Interior / Exterior Design',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  )
}