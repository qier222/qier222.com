import React, { useState } from "react"
import styled, { keyframes } from "styled-components"

const Button = styled.a`
  display: block;
  color: hsla(240, 3%, 81%, 1);
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    background: hsla(0, 0%, 96%, 1);
    color: hsla(240, 68%, 5%, 1);
  }
  &:visited {
    background: none;
  }

  @media (min-width: 768px) {
    padding: 0.85rem;
  }
`

const Wrapper = styled.div`
  position: relative;
`

const StretchAnimation = keyframes`
  0% {
    transform: scale(1,1)
  }
  10% {
    transform: scale(1.1,.9)
  }
  30% {
    transform: scale(.9,1.1)
  }
  50% {
    transform: scale(1.05,.95)
  }
  100% {
    transform: scale(1,1)
  }
`

const ToolTip = styled.div`
  position: absolute;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.08), 0px 4px 4px rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: white;
  border-radius: 0.625rem;
  padding: 10px;
  font-size: 14px;
  color: #222;
  font-weight: 500;
  top: -38px;
  left: -56px;
  visibility: ${p => (p.show ? "visible" : "hidden")};

  &::after {
    content: "";
    width: 16px;
    height: 16px;
    background: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    margin-left: -9px;
    bottom: -6px;
    transform: rotate(45deg);
    z-index: 0;
  }
`

export default function Component({
  children,
  link,
  ariaLabel,
  toolTip,
  target,
}) {
  const [showToolTip, setShowToolTip] = useState(false)

  return (
    <Wrapper
      onMouseOver={() => setShowToolTip(true)}
      onMouseOut={() => setShowToolTip(false)}
    >
      <Button href={link} target={target} aria-label={ariaLabel}>
        {children}
      </Button>
      {toolTip && <ToolTip show={showToolTip}>{toolTip}</ToolTip>}
    </Wrapper>
  )
}
