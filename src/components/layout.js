import React from "react"
import styled from "styled-components"
import Header from "./header"

const VerticalWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const VerticalContent = styled.div`
  max-width: 35rem;
  padding: 4rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const HorizontalWrapper = styled.div`
  width: 100%;
`

const Layout = ({ children, vertical }) => {
  if (vertical) {
    return (
      <>
        <Header />
        <VerticalWrapper>
          <VerticalContent>{children}</VerticalContent>
        </VerticalWrapper>
      </>
    )
  } else {
    return (
      <>
        <Header />
        <HorizontalWrapper>{children}</HorizontalWrapper>
      </>
    )
  }
}

export default Layout
