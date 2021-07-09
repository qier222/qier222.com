import * as React from "react"
import styled from "styled-components"

const Title = styled.h4`
  color: hsla(240, 68%, 5%, 1);
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: 1.125rem;
  width: 100%;
`

export default function Component({ className, children }) {
  return <Title className={className}>{children}</Title>
}
