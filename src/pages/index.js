import React from "react"
import Layout from "../components/layout"
import mainVideo from "../assets/main.mp4"

import styled from "styled-components"
import { useMediaQuery } from "react-responsive"

const ConceptContent = `till you can smell the scent of our music`

const VideoWrapper = styled.div`
  z-index: -2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const ConceptWrapper = styled.div`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, 0%);
  color: var(--primary-color);

  & > p {
    position: relative;
    top: 50%;

    margin: 0 auto;
    border-right: 2px solid var(--primary-color);
    font-size: ${props => (props.isMobile ? "1.3rem" : "2rem")};
    word-break: break-all;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    transform: translateY(-50%);
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
      width: 19em;
    }
  }
  @keyframes blinkTextCursor {
    from {
      border-right-color: var(--primary-color);
    }
    to {
      border-right-color: transparent;
    }
  }
`

export default function Home() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 770px)" })
  return (
    <Layout>
      <VideoWrapper>
        <video playsInline autoPlay muted loop>
          <source src={mainVideo} type="video/mp4" />
        </video>
      </VideoWrapper>
      <ConceptWrapper isMobile={isTabletOrMobile}>
        <p>{ConceptContent}</p>
      </ConceptWrapper>
    </Layout>
  )
}
