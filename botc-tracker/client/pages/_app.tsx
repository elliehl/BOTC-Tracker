import '../styles/globals.css'
import Head from 'next/head'
import NavBar from '../components/NavBar'
import { Abel } from '@next/font/google'
import type { AppProps } from 'next/app'
import GameContextProvider from '../contexts/GameContext'

const abel = Abel({ weight: '400', subsets: ['latin'] })

export default function App({Component, pageProps}: AppProps) {
  return (
  <div className={abel.className}>
    <Head>
        <title>BOTC Tracker</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
     <NavBar />
     <GameContextProvider>
      <Component {...pageProps} />
     </GameContextProvider>
  </div>
  )
}
