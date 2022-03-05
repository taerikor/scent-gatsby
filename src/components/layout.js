import React from "react"
import styled from "styled-components"
import Header from "./header"
import { useMediaQuery } from "react-responsive"
import Menu from "./menu"
const VerticalWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const VerticalContent = styled.div`
  max-width: 35rem;
  padding: 0 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
`

const Layout = ({ children, vertical }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 770px)" })

  return (
    <div>
      {!(vertical && isTabletOrMobile) && <Header />}
      {vertical ? (
        <>
          <VerticalWrapper>
            <VerticalContent>{children}</VerticalContent>
          </VerticalWrapper>
        </>
      ) : (
        <div>{children}</div>
      )}
      {isTabletOrMobile && <Menu />}
    </div>
  )
}

export default Layout
