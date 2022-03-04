import { graphql } from "gatsby"
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

const discography = ({ data }) => {
  return (
    <Layout>
      <SliderWrapper>
        <Slider images={data.allFile.edges} />
      </SliderWrapper>
    </Layout>
  )
}
export const query = graphql`
  query DiscographyQuery {
    allFile(filter: { sourceInstanceName: { eq: "cover" } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, width: 400, height: 400)
          }
          relativePath
        }
      }
    }
  }
`

export default discography
