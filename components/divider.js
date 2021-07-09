import React, { useState, useContext } from "react"
import styled from "styled-components"
import Cookies from "js-cookie"

import { AppContext } from "store"

const Divider = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`

const Line = styled.div`
  height: 0px;
  width: 100%;
  border: 1px dashed #f5f5f5;
`

const RangeInput = styled.input`
  -webkit-appearance: none;
  width: 100%;
  background: none;
  outline: none;
  border-radius: 0;
  cursor: pointer;

  &::-webkit-slider-runnable-track {
    height: 4px;
    border-radius: 10px;
    background: linear-gradient(
      90deg,
      hsl(0, 100%, 50%) 0%,
      hsl(36, 100%, 50%) 10%,
      hsl(64.1, 74.1%, 50%) 20%,
      hsl(117.9, 67.6%, 57.6%) 30%,
      hsl(179.2, 67.7%, 55.1%) 40%,
      hsl(188.4, 75.5%, 53.5%) 50%,
      hsl(211.7, 86.1%, 52.2%) 60%,
      hsl(260.1, 89.5%, 51.6%) 70%,
      hsl(284.2, 94.4%, 51%) 80%,
      hsl(308.4, 96.8%, 50.6%) 90%,
      hsl(0, 100%, 50%) 100%
    );
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 24px;
    width: 24px;
    border: 12px solid #fff;
    border-radius: 50%;
    margin-top: -10px;
    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.28),
      0px 2px 6px 2px rgba(0, 0, 0, 0.05);
    @media (min-width: 768px) {
      height: 1rem;
      width: 1rem;
      border: 6px solid #fff;
      margin-top: -6px;
    }
  }
`

export default function Component() {
  const [showSlider, setShowSlider] = useState(false)
  const { hue, setHue } = useContext(AppContext)

  const onHueChange = e => {
    const newHue = e.target.value
    setHue(newHue)
    Cookies.set("hue", newHue, { expires: 3650 })
  }

  return (
    <Divider
      onMouseOver={() => setShowSlider(true)}
      onMouseOut={() => setShowSlider(false)}
    >
      <Line style={{ display: showSlider ? "none" : "block" }} />
      <RangeInput
        style={{ display: showSlider ? "block" : "none" }}
        type="range"
        min="0"
        max="360"
        value={hue}
        onChange={onHueChange}
      ></RangeInput>
    </Divider>
  )
}
