import React, { useEffect, useContext } from "react"
import styled from "styled-components"
import { Music } from "react-feather"
import Link from "next/link"

import { supabase } from "utils/supabase"
import { AppContext } from "store"

const CoverWrapper = styled.div`
  display: grid;
  gap: 0.5rem;
  width: 160%;
  margin-left: -30%;
  margin-top: -3.8rem;
  grid-template-columns: repeat(6, 1fr [col-start]);
  grid-template-rows: repeat(4, 1fr [row-start]);
  grid-template-areas:
    ".       album4  album5  album6  album2  album2"
    ".       album7  album1  album1  album2  album2"
    "album3  album3  album1  album1  album8  .     "
    "album3  album3  album9  album10 album11 .     ";
  transition: 0.3s;
  font-size: 0;
  @media (min-width: 768px) {
    margin-top: -2.9rem;
  }
`

const BlockMusicLibrary = styled.div`
  background: hsla(0, 0%, 96%, 1);
  border-radius: 1.25rem;
  height: 16rem;
  position: relative;
  user-select: none;
  cursor: pointer;
  overflow: hidden;
  -webkit-mask-image: -webkit-radial-gradient(white, black);

  @media (min-width: 768px) {
    height: 19.5rem;
    width: 24rem;
  }
  &:hover {
    & ${CoverWrapper} {
      transform: scale(1.12);
    }
  }
`

const Cover = styled.img`
  width: 100%;
  border-radius: 0.25rem;
`

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 72px;
  background: linear-gradient(
    to bottom,
    rgba(34, 34, 34, 0) 4.64%,
    #222222 100%
  );
`

const Text = styled.div`
  position: absolute;
  bottom: 12px;
  left: 14px;
  color: white;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
`

const MusicStyled = styled(Music)`
  margin-right: 8px;
`

export default function Component(props) {
  const { albums, setAlbums } = useContext(AppContext)

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
    <Link href="/music" passHref={true}>
      <BlockMusicLibrary style={props.style}>
        <CoverWrapper>
          {albums.slice(0, 11).map((album, index) => (
            <picture
              key={album.id}
              style={{ gridArea: `album${index + 1}`, fontSize: 0 }}
            >
              <source
                srcSet={album.artwork_url.replace(
                  "{w}x{h}bb.jpeg",
                  "256x256bb.webp"
                )}
                type="image/webp"
              ></source>
              <Cover
                src={album.artwork_url.replace(
                  "{w}x{h}bb.jpeg",
                  "256x256bb.jpeg"
                )}
                big={index < 3}
                alt={album.name}
              />
            </picture>
          ))}
        </CoverWrapper>
        <Overlay>
          <Text>
            <MusicStyled size={18} color="white" strokeWidth={2.8} /> Music
            Library
          </Text>
        </Overlay>
      </BlockMusicLibrary>
    </Link>
  )
}
