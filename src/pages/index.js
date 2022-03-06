import React from "react"
import Layout from "../components/layout"
import mainVideo from "../assets/main.mp4"

import styled, { ThemeProvider } from "styled-components"
import media from "../styles/media"

const ConceptContent = `till you can smell the scent of our music`

const VideoWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  z-index: -2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const ConceptWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0%);
  /* color: white; */
  width: 100%;
  display: flex;
  justify-content: center;
  & > p {
    position: relative;
    margin: 0;
    border-right: 2px solid white;
    font-size: 1.6em;

    white-space: nowrap;
    overflow: hidden;
    letter-spacing: 1px;

    ${({ theme }) => theme.tablet` 
  font-size: 4vw;
  `};
  }

  & > p {
    animation: typewriter 4s steps(44) 1s 1 normal both,
      blinkTextCursor 500ms steps(44) infinite normal;
  }
  @keyframes typewriter {
    from {
      width: 0;
    }
    to {
      width: 21em;
    }
  }
  ${({ theme }) => theme.tablet` 
    @keyframes typewriter {
    from {
      width: 0;
    }
    to {
      width: 22em;
    }
  `};
  @keyframes blinkTextCursor {
    from {
      border-right-color: white;
    }
    to {
      border-right-color: transparent;
    }
  }
`

export default function Home() {
  return (
    <Layout>
      <VideoWrapper>
        <video playsInline autoPlay muted loop width={"100%"}>
          <source src={mainVideo} type="video/mp4" />
        </video>
        <ThemeProvider theme={{ ...media }}>
          <ConceptWrapper>
            <p>{ConceptContent}</p>
          </ConceptWrapper>
        </ThemeProvider>
      </VideoWrapper>
    </Layout>
  )
}
