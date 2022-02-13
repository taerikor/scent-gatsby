import React from "react"
import Layout from "../components/layout"
import mainVideo from "../assets/main.mp4"

import styled from "styled-components"

const VideoContainer = styled.div`
  width: 100%;
  height: 100vh;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Home() {
  return (
    <Layout>
      <VideoContainer>
        <video playsInline autoPlay muted loop width={"70%"}>
          <source src={mainVideo} type="video/mp4" />
        </video>
      </VideoContainer>
    </Layout>
  )
}
