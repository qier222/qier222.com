import * as React from "react"
import styled from "styled-components"
import { Twitter, GitHub, Mail } from "react-feather"

import SocialMediaButton from "components/social-media-button"

const List = styled.div`
  display: flex;
  margin-top: 0.625rem;
  margin-left: -8px;

  @media (min-width: 768px) {
    margin-top: 0.8rem;
  }
`

export default function Component() {
  return (
    <List>
      <SocialMediaButton
        link="https://github.com/qier222"
        ariaLabel="GitHub"
        target="blank"
      >
        <GitHub size={28} />
      </SocialMediaButton>
      <SocialMediaButton
        link="https://twitter.com/qier222"
        ariaLabel="Twitter"
        target="blank"
      >
        <Twitter size={28} />
      </SocialMediaButton>
      <SocialMediaButton
        ariaLabel="Email"
        link="mailto:qier222@outlook.com"
        toolTip="qier222@outlook.com"
      >
        <Mail size={28} />
      </SocialMediaButton>
    </List>
  )
}
