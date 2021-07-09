import * as React from "react"
import styled from "styled-components"

import Title from "components/title-section"
import Section from "components/section"
import Video from "components/block-music-video"

const MarginContainer = styled.div`
  margin: 0 -2rem;
  @media (min-width: 768px) {
    margin: auto;
  }
`

const ScrollContainer = styled.div`
  @media (max-width: 768px) {
    overflow: hidden;
    overflow-x: scroll;
    width: 100%;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`

const ContentContainer = styled.div`
  @media (max-width: 768px) {
    display: flex;
    gap: 1rem;
    width: 158%;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }
`

export default function Component() {
  return (
    <Section>
      <Title>Videos</Title>
      <MarginContainer>
        <ScrollContainer>
          <ContentContainer>
            <Video
              cover={Cover911}
              name="Lady Gaga - 911 (Short Film)"
              views="47M"
              uploadDate="8 months ago"
            />
            <Video
              cover={CoverSanHolo}
              name="San Holo @ Digital Mirage [mixed feelings 2]"
              views="8K"
              uploadDate="11 months ago"
            />
          </ContentContainer>
        </ScrollContainer>
      </MarginContainer>
    </Section>
  )
}
