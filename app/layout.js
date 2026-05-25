export const metadata = {
  title: 'DK Desing',
  description: 'Portfolio website'
}

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body style={{margin:0,fontFamily:'Arial, sans-serif',background:'#f8f6f1'}}>
        {children}
      </body>
    </html>
  )
}