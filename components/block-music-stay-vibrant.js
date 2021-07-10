import React, { useState, useEffect } from "react"
import styled from "styled-components"
import sample from "lodash.sample"

const videos = [
  "videos/elderbrook-live-in-aquarium.mp4",
  "videos/porter-robinson-nurture-live.mp4",
  "videos/san-holo-mixed-feelings-2.mp4",
  "videos/louis-the-child-candy-ii.mp4",
  "videos/party-pupils-dim-mak.mp4",
  "videos/tchami-dr-fresch-digital-mirage.mp4",
]

const BlockMusicStayVibrant = styled.a`
  display: block;
  height: calc(50vw - 2.5rem);
  width: calc(50vw - 2.5rem);
  overflow: hidden;
  border-radius: 1.25rem;
  position: relative;
  user-select: none;
  cursor: pointer;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  background: #333;
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

const Video = styled.video`
  height: 100%;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.28);
`

const Title = styled.div`
  position: absolute;
  bottom: 9px;
  left: 13px;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 29px;
  color: white;
`

const Subtitle = styled.div`
  position: absolute;
  top: 10px;
  left: 12px;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: rgba(255, 255, 255, 0.78);
`

export default function Component(props) {
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowVideo(true)
    }, 500)
  }, [setShowVideo])

  return (
    <BlockMusicStayVibrant
      href="https://stay-vibrant.qier222.com"
      target="blank"
    >
      {showVideo && (
        <Video
          src={props.visitTimes === 1 ? videos[0] : sample(videos)}
          type="video/mp4"
          autoPlay
          muted
          playsInline
          loop
        ></Video>
      )}
      <Overlay>
        <Title>
          STAY
          <br />
          VIBRANT
        </Title>
        <Subtitle>Electronic & Dance</Subtitle>
      </Overlay>
    </BlockMusicStayVibrant>
  )
}
