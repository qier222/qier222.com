import * as React from "react"
import styled from "styled-components"
import Link from "next/link"
import { ArrowLeft } from "react-feather"

const AppBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 72px;
  @media (min-width: 768px) {
    height: 96px;
  }
`

const StyledArrowLeft = styled(ArrowLeft)`
  cursor: pointer;
  color: #222;
  border-radius: 50%;
  padding: 12px;
  margin-left: -16px;
  &:hover {
    background: hsla(0, 0%, 96%, 1);
    color: hsla(240, 68%, 5%, 1);
  }
`

export default function Component() {
  const isDesktop = window.matchMedia("(min-width: 768px)").matches
  return (
    <AppBar>
      <Link href="/">
        <StyledArrowLeft size={isDesktop ? 28 : 24} />
      </Link>
      <div></div>
    </AppBar>
  )
}
