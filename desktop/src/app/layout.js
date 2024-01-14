import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Code and Surf',
  description: "Un environnement exceptionnel pour surfer et coder lors d'un séjour de haut niveau",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <section>
      {/* Include shared UI here e.g. a header or sidebar */}
<NavBar />


      {children}
    </section>
      
      
      
      </body>
    </html>
  )
}
