import * as React from "react"
import styled from "styled-components"
import Color from "color"
import Image from "next/image"

const BlockWork = styled.a`
  border-radius: 1.25rem;
  padding: 1.25rem;
  background: ${props => props.background || "hsla(0, 0%, 98%, 1)"};
  user-select: none;
  display: block;
  text-decoration: none;

  transition: 0.3s;
  &:hover {
    background: ${props =>
      Color(props.background || "hsla(0, 0%, 98%, 1)").lightness(96)};
  }
`

const BottomPart = styled.div`
  display: flex;
  img {
    height: 56px;
    width: 56px;
  }
`
const Info = styled.div`
  margin-left: 1.125rem;
`

const Name = styled.div`
  color: hsla(240, 68%, 5%, 1);
  width: 100%;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.5rem;
  margin-top: 3px;
`
const Description = styled.div`
  color: hsla(240, 5%, 43%, 1);
  font-size: 0.875rem;
  margin-top: 6px;
`

export default function Component({
  logo,
  background,
  name,
  description,
  preview,
  link,
}) {
  return (
    <BlockWork background={background} href={link} target="blank">
      <BottomPart>
        <Image src={logo} alt={name} height={56} width={56} quality={100} />
        <Info>
          <Name>{name}</Name>
          <Description>{description}</Description>
        </Info>
      </BottomPart>
    </BlockWork>
  )
}
