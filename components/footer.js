import React from "react"
import styled from "styled-components"

const Footer = styled.footer`
  margin-bottom: 1.87rem;
  margin-top: 5rem;
  font-weight: 500;
`
const Copyright = styled.div`
  font-size: 14px;
  line-height: 17px;
  color: #222222;
`
const BuiltWith = styled.div`
  font-size: 12px;
  color: #a7a7a7;
  margin-top: 2px;
`

const A = styled.a`
  color: inherit;
  transition: 300ms;
  &:hover {
    color: #1983ff;
  }
`

export default function Component() {
  return (
    <Footer>
      <Copyright>© 2021 qier222</Copyright>
      <BuiltWith>
        Built with{" "}
        <A href="https://nextjs.org/" target="blank">
          Next.js
        </A>
      </BuiltWith>
    </Footer>
  )
}
