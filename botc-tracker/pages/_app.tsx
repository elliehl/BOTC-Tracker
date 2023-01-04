import '../styles/globals.css'
import Head from 'next/head'
import GameData from './GameData'

export default function App() {
  return (
  <div>
    <Head>
        <title>BOTC Tracker</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
  <GameData />
  </div>
  )
}
