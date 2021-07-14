import * as React from "react"
import Head from "next/head"
import App from "components/app"
import AppBar from "components/app-bar"
import SectionAlbums from "components/section-albums"
import SectionVideos from "components/section-videos"
import NoSSRWrapper from "utils/no-ssr-wrapper"

export default function Component() {
  return (
    <NoSSRWrapper>
      <App>
        <Head>
          <title>Music Collection - qier222</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="description" content="qier222's personal website" />
        </Head>
        <AppBar />
        <SectionAlbums />
        {/* <SectionVideos /> */}
      </App>
    </NoSSRWrapper>
  )
}
