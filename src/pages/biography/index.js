import { StaticImage } from "gatsby-plugin-image"
import React, { Fragment, useRef, useState } from "react"
import styled, { ThemeProvider } from "styled-components"
import Layout from "../../components/layout"
import media from "../../styles/media"
import bio from "./content.json"

const PROFILE_PATH = "../../assets/img/profile.jpg"

const Description = styled.div`
  margin-top: 30px;
  & p {
    margin-bottom: 20px;
    font-size: 1.2rem;
  }
`
const LinksWrapper = styled.div`
  margin: 2rem 0;
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
  background: linear-gradient(var(--dark-color), transparent);
  margin-bottom: 20px;
`

const ImageWrapper = styled.div`
  width: 50%;
  ${({ theme }) => theme.tablet` 
  width: 100%;
  `};
`

const HeaderButton = styled.button`
  all: unset;
  color: ${props => (props.isContact ? "white" : "#666")};
  cursor: pointer;
  font-size: 1.5rem;
  margin: 0 8px;
  &:hover {
    color: ${props => (props.isContact ? "#666" : "white")};
  }
`
const Biography = () => {
  const [isContactClick, setIsContactClick] = useState(false)
  const contactRef = useRef(null)
  const bioRef = useRef(null)
  const onContactClick = () => {
    setIsContactClick(true)
    contactRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  const onBioClick = () => {
    setIsContactClick(false)
    bioRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Layout vertical={true}>
      <HeaderWrapper>
        <HeaderButton isContact={!isContactClick} onClick={onBioClick}>
          Biography
        </HeaderButton>
        /
        <HeaderButton isContact={isContactClick} onClick={onContactClick}>
          Contact
        </HeaderButton>
      </HeaderWrapper>
      <ThemeProvider theme={{ ...media }}>
        <ImageWrapper>
          <StaticImage src={PROFILE_PATH} alt="profile" placeholder="blurred" />
        </ImageWrapper>
      </ThemeProvider>

      <Description ref={bioRef}>
        {bio.content.map((item, index) => (
          <Fragment key={index}>
            <p>{item.ko}</p>
            <p>{item.en}</p>
          </Fragment>
        ))}
      </Description>
      <LinksWrapper ref={contactRef}>
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
