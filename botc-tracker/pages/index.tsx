import Head from 'next/head'
import App from './_app'

export default function Home() {
  return (
    <div>
      <Head>
        <title>BOTC Tracker</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <App />
    </div>
  )
}

