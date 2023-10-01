import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'

const monterrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' })

export default function App ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5108178665823416"
     crossorigin="anonymous"></script>
      </Head>
      <main className={`${monterrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
        <NavBar/>
        <Component {...pageProps} />
        <Footer/>
      </main>
    </>
  )
}
