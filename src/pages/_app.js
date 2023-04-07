import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'

const monterrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' })

export default function App ({ Component, pageProps }) {
  return (
    <main className={`${monterrat.variable} font-mont`}>
      <Component {...pageProps} />
    </main>
  )
}
