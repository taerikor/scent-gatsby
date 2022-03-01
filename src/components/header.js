import { Link } from "gatsby"
import React from "react"
import { isMobile } from "react-device-detect"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const LOGO_PATH = "../assets/img/logo.png"

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: ${props => (props.isMobile ? "50%" : "0")};
  transform: ${props => (props.isMobile ? "translate(-50%, 0%)" : "none")};
  padding: 20px;
  color: var(--primary-color);
  font-size: 1rem;

  & a {
    all: unset;
    cursor: pointer;
    margin-bottom: 8px;
  }
  & a:hover {
    color: var(--hover-color);
  }
`

const Header = () => {
  return (
    <HeaderContainer isMobile={isMobile}>
      <Link to="/">
        <StaticImage
          src={LOGO_PATH}
          alt="logo"
          placeholder="blurred"
          width={180}
        />
      </Link>
      {!isMobile && (
        <>
          <Link to="/discography">discography</Link>
          <Link to="/biography">biography</Link>
          <Link to="/video">video</Link>
        </>
      )}
    </HeaderContainer>
  )
}

export default Header
