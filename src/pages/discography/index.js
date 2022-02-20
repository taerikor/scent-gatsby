import React from "react"
import styled from "styled-components"
import Layout from "../../components/layout"
import Slider from "../../components/slider"

const SliderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const discography = () => {
  return (
    <Layout>
      <SliderWrapper>
        <Slider />
      </SliderWrapper>
    </Layout>
  )
}

export default discography
