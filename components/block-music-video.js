import * as React from "react"
import styled from "styled-components"

const BlockVideo = styled.a`
  font-weight: 500;
`

const Cover = styled.img`
  border-radius: 0.375rem;
  width: 100%;
`
const Name = styled.div`
  font-size: 14px;
  line-height: 16px;
  margin-top: 2px;
`
const ViewsAndUploadDate = styled.div`
  font-size: 13px;
  line-height: 15px;
  color: #a7a7a9;
  margin-top: 2px;
`

export default function Component({ cover, name, views, uploadDate }) {
  return (
    <BlockVideo>
      <Cover src={cover} />
      <Name>{name}</Name>
      <ViewsAndUploadDate>
        {views} views · {uploadDate}
      </ViewsAndUploadDate>
    </BlockVideo>
  )
}
