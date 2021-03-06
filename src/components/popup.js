import React, { Fragment } from "react"
import styled, { ThemeProvider } from "styled-components"
import media from "../styles/media"
import { HoverLink, StyledLink } from "../styles/partials"

const Modal = styled.div`
  position: fixed;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 80vh;
  background-color: black;
  border-radius: 10px;
  ${({ theme }) => theme.tablet` 
  width: 100%;
  `};
`
const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`
const ExitButton = styled.p`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 20px;
`
const Popup = ({ metaInfo, closePopup }) => {
  const onExitClick = () => {
    closePopup()
  }

  return (
    <ThemeProvider theme={{ ...media }}>
      <Modal>
        <ExitButton onClick={onExitClick}>Close</ExitButton>
        <Content>
          <h2
            style={{
              display: "inline",
              margin: 0,
              color: "var(--primary-color)",
            }}
          >
            Listen Now
          </h2>
          {metaInfo.streaming?.map(link => (
            <Fragment key={link.name}>
              <HoverLink
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </HoverLink>
            </Fragment>
          ))}
        </Content>
      </Modal>
    </ThemeProvider>
  )
}

export default Popup
