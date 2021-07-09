import * as React from "react"
import styled from "styled-components"

import Title from "components/title-section"
import Section from "components/section"
import Library from "components/block-music-library"
import NowPlaying from "components/block-music-now-playing"
import StayVibrant from "components/block-music-stay-vibrant"

const ContentContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    "library      library     "
    "now-playing  stay-vibrant";

  @media (min-width: 768px) {
    grid-template-areas:
      "library  now-playing "
      "library  stay-vibrant";
  }
`

export default function Component(props) {
  return (
    <Section>
      <Title>Music</Title>
      <ContentContainer>
        <Library style={{ gridArea: "library" }} />
        <NowPlaying style={{ gridArea: "now-playing" }} {...props} />
        <StayVibrant style={{ gridArea: "stay-vibrant" }} {...props} />
      </ContentContainer>
    </Section>
  )
}
