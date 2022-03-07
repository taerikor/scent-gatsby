import { StaticImage } from "gatsby-plugin-image"
import React, { Fragment } from "react"
import styled, { ThemeProvider } from "styled-components"
import Layout from "../../components/layout"
import media from "../../styles/media"
import bio from "./content.json"
import { Link as ScrollLink } from "react-scroll"
import Helmet from "../../components/seo"

const PROFILE_PATH = "../../assets/img/profile.jpg"

const Description = styled.div`
  padding-top: 2rem;
  font-weight: 200;
  display: flex;
  flex-direction: column;
  align-items: center;
  & p {
    margin-bottom: 2rem;
    font-size: 1.2rem;
  }
`
const LinksWrapper = styled.div`
  padding-top: 10rem;
  margin-bottom: 45rem;
  width: 100%;
  & p {
    font-size: 1.2rem;
  }
`
const StyledLink = styled.a`
  color: white;
  &:hover {
    text-decoration: underline 0.1em rgba(255, 255, 255, 0);
    transition: text-decoration-color 300ms;
  }
`
const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  color: var(--hover-color-gray) !important;
  background: linear-gradient(var(--dark-color), transparent);
  margin-bottom: 20px;
  font-size: 1.5rem;
  & a {
    cursor: pointer;
    margin: 0 8px;
  }
`

const ImageWrapper = styled.div`
  width: 50%;
  ${({ theme }) => theme.tablet` 
  width: 100%;
  `};
`

const Biography = () => {
  return (
    <Layout vertical={true}>
      <Helmet title={`Biography`} />
      <HeaderWrapper>
        <ScrollLink
          activeClass="active"
          to="bio"
          spy={true}
          smooth={true}
          duration={500}
        >
          Biography
        </ScrollLink>
        /
        <ScrollLink
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
        >
          Contact
        </ScrollLink>
      </HeaderWrapper>

      <Description name="bio">
        <ThemeProvider theme={{ ...media }}>
          <ImageWrapper>
            <StaticImage
              src={PROFILE_PATH}
              alt="profile"
              placeholder="blurred"
            />
          </ImageWrapper>
        </ThemeProvider>
        {bio.content.map((item, index) => (
          <Fragment key={index}>
            <p name={index}>{item.ko}</p>
            <p>{item.en}</p>
          </Fragment>
        ))}
      </Description>
      <LinksWrapper name="contact">
        <p>
          INSTAGRAM:{" "}
          <StyledLink
            href="https://www.instagram.com/scentofficial/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SCENT
          </StyledLink>{" "}
          /{" "}
          <StyledLink
            href="https://www.instagram.com/ocean_hertz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            OCEANHERTZ
          </StyledLink>{" "}
          /{" "}
          <StyledLink
            href="https://www.instagram.com/_ape_reel_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            APEREEL
          </StyledLink>
        </p>
        <p>
          {" "}
          CONTACT:{" "}
          <StyledLink
            href="mailto:scentofficial@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            scentofficial@gmail.com
          </StyledLink>
        </p>
      </LinksWrapper>
    </Layout>
  )
}

export default Biography
