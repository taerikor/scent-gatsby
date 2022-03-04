import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { useMediaQuery } from "react-responsive"

const LOGO_PATH = "../assets/img/logo.png"

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  width: 100%;
  align-items: ${props => (props.isMobile ? "center" : "start")};
  margin: 20px 10px;
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
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 770px)" })
  return (
    <HeaderContainer isMobile={isTabletOrMobile}>
      <Link to="/">
        <StaticImage
          src={LOGO_PATH}
          alt="logo"
          placeholder="blurred"
          width={180}
        />
      </Link>
      {!isTabletOrMobile && (
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
