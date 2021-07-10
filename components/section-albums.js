import React, { useState, useEffect } from "react"
import styled from "styled-components"

import Title from "components/title-section"
import Section from "components/section"
import Album from "components/block-music-album"
import { supabase } from "utils/supabase"

let albumsInStorage = []
if (typeof window !== "undefined") {
  const albumsInStorageString = localStorage.getItem("albums")
  if (albumsInStorageString) albumsInStorage = JSON.parse(albumsInStorageString)
}

export default function Component() {
  const [albums, setAlbums] = useState(albumsInStorage)

  useEffect(() => {
    const fetchData = async () => {
      let { data: albums } = await supabase
        .from("albums")
        .select("*")
        .order("release_date", { ascending: false })
        .order("name", { ascending: false })
      if (albums) setAlbums(albums)
      localStorage.setItem("albums", JSON.stringify(albums))
    }
    fetchData()
  }, [setAlbums])

  return (
    <StyledSection>
      <StyledTitle>Albums</StyledTitle>
      <ContentContainer>
        {albums.map(album => (
          <Album
            key={album.id}
            artwork={album.artwork_url}
            name={album.name}
            artist={album.artist}
            year={album.release_date.slice(0, 4)}
            genre={album.genre}
            link={`https://open.spotify.com/album/${album.spotify_album_id}`}
          />
        ))}
      </ContentContainer>
    </StyledSection>
  )
}

const ContentContainer = styled.div`
  display: grid;
  gap: 1.25rem 1rem;
  grid-template-columns: 1fr 1fr;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem 1.2rem;
  }
`

const StyledSection = styled(Section)`
  margin-top: 0;
`

const StyledTitle = styled(Title)`
  margin-top: 8px;
`
