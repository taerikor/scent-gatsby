import { Link } from "gatsby"
import React from "react"

import styled from "styled-components"

const HeaderContainer = styled.div`
  background-color: white;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/album">album</Link>
      <Link to="/">Home</Link>
      <Link to="/about">about</Link>
    </HeaderContainer>
  )
}

export default Header
