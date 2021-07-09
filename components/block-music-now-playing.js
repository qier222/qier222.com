import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Color from "color"
import Cookies from "js-cookie"

import SpotifyLogoSvg from "public/assets/svg/spotify-logo.svg"
import { supabase } from "utils/supabase"

const BlockMusicNowPlaying = styled.a`
  height: calc(50vw - 2.5rem);
  width: calc(50vw - 2.5rem);
  overflow: hidden;
  border-radius: 1.25rem;
  background: ${props => props.background};
  position: relative;
  color: #fff;
  user-select: none;
  cursor: pointer;
  @supports (aspect-ratio: auto) {
    height: auto;
    width: auto;
    aspect-ratio: 1;
  }
  @media (min-width: 768px) {
    height: 9.25rem;
    width: 9.25rem;
  }
`
const Cover = styled.img`
  height: ${props =>
    props.isLargeCover
      ? "calc(50vw - 2.5rem - 1.625rem - 0.9375rem - 1.4rem)"
      : "calc(50vw - 2.5rem - 1.625rem - 1.875rem - 1.4rem)"};
  border-radius: 0.5rem;
  margin-top: 13px;
  margin-left: 13px;
  box-shadow: 0px 6px 12px -6px rgba(24, 39, 75, 0.24),
    0px 8px 24px -4px rgba(24, 39, 75, 0.16);
  transition: 300ms;

  @media (min-width: 768px) {
    height: ${props => (props.isLargeCover ? "61%" : "51%")};
  }
`

const Title = styled.div`
  font-weight: 500;
  font-size: 15px;
  margin-left: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  padding-right: 12px;

  @media (min-width: 768px) {
    font-size: 13px;
  }
`
const Status = styled.div`
  font-size: 12px;
  opacity: 0.68;
  margin-left: 14px;
`
const SpotifyLogo = styled(SpotifyLogoSvg)`
  position: absolute;
  right: 12px;
  top: 13px;
`

export default function Component(props) {
  const [nowPlaying, setNowPlaying] = useState(
    props.nowPlaying.color
      ? props.nowPlaying
      : {
          artist: "",
          album: "",
          name: "",
          artwork_url: "",
          spotify_id: "",
          updatedTime: "",
          color: "#fafafa",
        }
  )
  const [isLargeCover, setIsLargeCover] = useState(false)
  const [background, setBackground] = useState(
    `linear-gradient(to top, ${Color(nowPlaying.color).hex()}, ${Color(
      nowPlaying.color
    )
      .lighten(0.36)
      .hex()})`
  )
  const [isPlaying, setIsPlaying] = useState(
    new Date().getTime() - nowPlaying.timestamp < 30000
  )
  const title = `${nowPlaying.name} by ${nowPlaying.artist}`

  useEffect(() => {
    const setNowPlayingState = track => {
      const color = Color(track.color)
      setNowPlaying(track)
      setBackground(
        `linear-gradient(to top, ${color.hsl()}, ${color.lighten(0.36).hsl()})`
      )
      setIsLargeCover(
        `${track.artist}${track.name}`.length <=
          (window.matchMedia("(min-width: 768px)").matches ? 15 : 11)
      )
      Cookies.set("nowPlaying", JSON.stringify(track), { expires: 3650 })
    }
    const fetchData = async () => {
      let { data: spotify_now_playing } = await supabase
        .from("spotify_now_playing")
        .select("*")
      if (spotify_now_playing) setNowPlayingState(spotify_now_playing[0])
    }
    fetchData()
    const spotifyNowPlaying = supabase
      .from("spotify_now_playing")
      .on("UPDATE", payload => {
        setNowPlayingState(payload.new)
      })
      .subscribe()
    return () => {
      supabase.removeSubscription(spotifyNowPlaying)
    }
  }, [setNowPlaying])

  useEffect(() => {
    const checkingInterval = setInterval(() => {
      const newValue = new Date().getTime() - nowPlaying.timestamp < 30000
      if (newValue !== isPlaying) setIsPlaying(newValue)
    }, 1000)
    return () => {
      clearInterval(checkingInterval)
    }
  }, [nowPlaying, setIsPlaying])

  return (
    <BlockMusicNowPlaying
      background={background}
      href={`https://open.spotify.com/track/${nowPlaying.spotify_id}`}
      target="blank"
    >
      <SpotifyLogo />
      <Cover
        src={nowPlaying.artwork_url}
        isLargeCover={isLargeCover}
        alt={nowPlaying.album}
      />
      <Title title={title}>{title}</Title>
      <Status>{isPlaying ? "Now playing" : "Recently played"}</Status>
    </BlockMusicNowPlaying>
  )
}
