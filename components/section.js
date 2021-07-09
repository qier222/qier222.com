import * as React from "react"
import styled from "styled-components"

const Section = styled.section`
  margin-top: 24px;
  margin-bottom: 44px;
`

export default function Component({ className, children }) {
  return <Section className={className}>{children}</Section>
}
