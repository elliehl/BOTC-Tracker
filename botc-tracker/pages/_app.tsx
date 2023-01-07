import '../styles/globals.css'
import Head from 'next/head'
import GameData from './GameData'
import NavBar from '../components/NavBar'
import { Abel } from '@next/font/google'

const abel = Abel({ weight: '400', subsets: ['latin'] })

export default function App() {
  return (
  <div className={abel.className}>
    <Head>
        <title>BOTC Tracker</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
     <NavBar />
     <GameData />
  </div>
  )
}
