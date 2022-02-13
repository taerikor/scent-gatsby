import { Link } from "gatsby"
import React from "react"

import styled from "styled-components"

const HeaderContainer = styled.div`
  /* width: 100%;
  height: 50px; */
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;

  & a {
    all: unset;
    cursor: pointer;
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">LOGO</Link>
      <Link to="/discography">discography</Link>
      <Link to="/biography">biography</Link>
      <Link to="/video">video</Link>
      <Link to="/contact">contact</Link>
    </HeaderContainer>
  )
}

export default Header
