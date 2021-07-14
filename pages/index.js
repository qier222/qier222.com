import * as React from "react"
import Head from "next/head"

import App from "components/app"
import SectionHero from "components/section-hero"
import SectionWork from "components/section-work"
import SectionMusic from "components/section-music"

export default function Home(props) {
  return (
    <App {...props}>
      <Head>
        <title>qier222 - Front-end Developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="qier222's personal website" />
      </Head>
      <SectionHero />
      <SectionWork />
      <SectionMusic {...props} />
    </App>
  )
}

export async function getServerSideProps(context) {
  const cookies = context.req.headers.cookie?.split("; ")

  let nowPlaying = {}
  const nowPlayingCookie = cookies?.find(c => c.slice(0, 10) === "nowPlaying")
  if (nowPlayingCookie) {
    nowPlaying = JSON.parse(decodeURIComponent(nowPlayingCookie.split("=")[1]))
  }

  const visitTimesCookie = cookies?.find(c => c.slice(0, 10) === "visitTimes")
  const visitTimes = visitTimesCookie?.split("=")[1] ?? 0

  const hueCookie = cookies?.find(c => c.slice(0, 3) === "hue")
  const hue = hueCookie?.split("=")[1] ?? 42
  return {
    props: {
      nowPlaying,
      visitTimes: ~~visitTimes + 1,
      hue,
    },
  }
}
