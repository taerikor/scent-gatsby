import React from "react"
import styled from "styled-components"
import Header from "./header"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Content = styled.div`
  max-width: 35rem;
  padding: 4rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`
const Layout = ({ children, vertical }) => {
  console.log(vertical)

  if (vertical) {
    return (
      <>
        <Header />
        <Wrapper>
          <Content>{children}</Content>
        </Wrapper>
      </>
    )
  } else {
    return (
      <>
        <Header />
        {children}
      </>
    )
  }
}

export default Layout
