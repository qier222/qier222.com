import React, { useContext } from "react"
import styled from "styled-components"
import Image from "next/image"

import { AppContext } from "store"

const InnerCircle = styled.div`
  width: 4rem;
  height: 4rem;
  background: linear-gradient(
    to top left,
    hsl(${props => props.hue - 16}, 100%, 60%) 0%,
    hsl(${props => props.hue}, 100%, 74%) 100%
  );
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    height: 5rem;
    width: 5rem;
  }

  img {
    height: 2.75rem;
    width: 2.75rem;
  }

  @media (min-width: 768px) {
    img {
      height: 3.375rem;
      width: 3.375rem;
    }
  }
`

const OuterCircle = styled.div`
  width: 4.625rem;
  height: 4.625rem;
  border: 3px solid #f5f5f5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    height: 5.5rem;
    width: 5.5rem;
  }
`

export default function Component() {
  const { hue } = useContext(AppContext)

  return (
    <OuterCircle>
      <InnerCircle hue={hue}>
        <Image
          src="/images/avatar.png"
          alt="avatar"
          height={54}
          width={54}
          layout="intrinsic"
          quality={100}
        />
      </InnerCircle>
    </OuterCircle>
  )
}
