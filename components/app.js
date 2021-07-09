import React, { useState } from "react"
import styled from "styled-components"
import Cookies from "js-cookie"

import Footer from "components/footer"
import { AppContext } from "store"

const App = styled.main`
  margin: 0 2rem;
  max-width: 42rem;
`

if (typeof window !== "undefined") {
  if (Cookies.get("visitTimes") === undefined) {
    Cookies.set("visitTimes", 1, { expires: 3650 })
  } else {
    Cookies.set("visitTimes", ~~Cookies.get("visitTimes") + 1, {
      expires: 3650,
    })
  }
}

export default function Component({ children, hue: hueCookie }) {
  const [hue, setHue] = useState(hueCookie || 42)
  const [albums, setAlbums] = useState(() => {
    let albums = []
    if (typeof window !== "undefined") {
      const albumsInStorage = localStorage.getItem("albums")
      if (albumsInStorage) albums = JSON.parse(albumsInStorage)
    }
    return albums
  })

  return (
    <AppContext.Provider value={{ hue, setHue, albums, setAlbums }}>
      <App>
        {children}
        <Footer />
      </App>
    </AppContext.Provider>
  )
}
