import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  bottom: 0;
  z-index: 10;
  width: 100%;
  background: ${props =>
    props.isMenuClick
      ? "black"
      : "linear-gradient(to top, black 40%, transparent)"};

  font-size: 1.5rem;
  & a {
    all: unset;
  }
  & p {
    cursor: pointer;
  }
`

const Menu = () => {
  const [isMenuClick, setIsMenuClick] = useState(false)
  const onMenuClick = () => {
    setIsMenuClick(prev => !prev)
  }
  return (
    <HeaderWrapper isMenuClick={isMenuClick}>
      {isMenuClick && (
        <>
          <p>
            <Link to="/discography">DISCOGRAPHY</Link>
          </p>
          <p>
            <Link to="/biography">BIOGRAPHY</Link>
          </p>
          <p>
            <Link to="/video">VIDEO</Link>
          </p>
        </>
      )}
      <p onClick={onMenuClick}>MENU</p>
    </HeaderWrapper>
  )
}

export default Menu
