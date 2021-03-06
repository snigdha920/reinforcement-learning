import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import { defaultPlayUrl } from '../components/PlayButtons/config'
import { PlayButtons } from '../components/PlayButtons/PlayButtons'

const Home: NextPage = () => {
  const [playUrl, setPlayUrl] = useState(defaultPlayUrl)
  return (
    <div className="mx-5">
      <Head>
        <title>Reinforcement Learning</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-mario lg:bg-contain grid grid-cols-3 items-center gap-10 px-16 pb-16">
        <div className="col-span-2">
          <ReactPlayer url={playUrl} width="100%" height="700px" />
        </div>
        <PlayButtons setPlayUrl={setPlayUrl} />
      </main>
    </div>
  )
}

export default Home
