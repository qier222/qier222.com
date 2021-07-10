import React, { useContext } from "react"
import styled, { keyframes } from "styled-components"

import Avatar from "components/avatar"
import SocialMediaList from "components/social-media-list"
import Divider from "components/divider"
import SvgUnderline from "public/svg/underline.svg"
import { AppContext } from "store"

const HeroSection = styled.div`
  margin-top: 3.5rem;
  @media (min-width: 768px) {
    margin-top: 6rem;
  }
`

const Title = styled.div`
  color: hsla(240, 68%, 5%, 1);
  font-weight: 700;
  font-size: 2rem;
  margin-top: 22px;
  margin-left: 2px;
  position: relative;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`

// const TitleDot = styled.div`
//   height: 0.375rem;
//   width: 0.375rem;
//   background: linear-gradient(
//     to top left,
//     hsl(${props => props.hue - 16}, 100%, 60%) 0%,
//     hsl(${props => props.hue}, 100%, 70%) 100%
//   );
//   border-radius: 50%;
//   display: inline-block;
//   margin-left: 2px;
//   @media (min-width: 768px) {
//     height: 0.4375rem;
//     width: 0.4375rem;
//   }
// `

const Subtitle = styled.div`
  color: hsla(240, 68%, 5%, 1);
  font-size: 1.5rem;
  margin-top: 1.125rem;
  line-height: 2rem;
  margin-left: 2px;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`

const tick = keyframes`
  0%, 50% {
    stroke-dashoffset: 234px;
  }
  50%, 100% {
    stroke-dashoffset: 0px;
  }
`

const Underline = styled(SvgUnderline)`
  position: absolute;
  color: hsl(${props => props.hue - 8}, 100%, 70%);
  z-index: -1;
  height: 26px;
  left: 100px;
  bottom: -6px;
  stroke-dasharray: 234px;
  stroke-dashoffset: 234px;
  animation: 3s ${tick} ease-in-out forwards;

  @media (min-width: 768px) {
    position: relative;
    bottom: 0;
    top: 20px;
    left: -201px;
    height: 42px;
  }
`

export default function Component() {
  const { hue } = useContext(AppContext)

  return (
    <HeroSection>
      <Avatar />
      <Title>
        Hi, I'm qier222.
        {/* <TitleDot hue={hue}></TitleDot> */}
        <Underline hue={hue} />
      </Title>
      <Subtitle>A front-end developer, welcome to my space.</Subtitle>
      <SocialMediaList />
      <Divider />
    </HeroSection>
  )
}
