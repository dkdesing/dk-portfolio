import './style.css'
import { Analytics } from "@vercel/analytics/react"

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
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
