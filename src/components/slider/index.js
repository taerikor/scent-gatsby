import React, { Fragment, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import styled from "styled-components"

import "swiper/css"
import "swiper/css/effect-coverflow"

import "./styles.css"

import { EffectCoverflow } from "swiper"
import { GatsbyImage } from "gatsby-plugin-image"
import { useMediaQuery } from "react-responsive"
import JsonData from "./content.json"

const CardWrapper = styled.div`
  text-align: center;
`
const StyledLink = styled.a`
  color: white;
  font-size: 2rem;
  &:hover {
    text-decoration: underline 0.1em rgba(255, 255, 255, 0);
    transition: text-decoration-color 300ms;
  }
`

const PopupButton = styled.div`
  cursor: pointer;
`
export const Popup = styled.div`
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${props => (props.isTabletOrMobile ? "100%" : "50%")};
  height: 80vh;
  background-color: black;
  border-radius: 10px;
`
const Content = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`
const ExitButton = styled.p`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  margin: 10px;
`

const Slider = ({ images }) => {
  const [metaInfo, setMetaInfo] = useState(null)
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 770px)" })

  const onCardClick = info => {
    setMetaInfo(info[0])
  }
  const onExitClick = () => {
    setMetaInfo(null)
  }

  const renderCards = () => {
    return images.map(card => {
      console.log(card)
      let meta = JsonData.content.filter(
        item => item.path === card.node.relativePath
      )
      return (
        <Fragment key={meta[0].title}>
          <SwiperSlide>
            <CardWrapper>
              <PopupButton onClick={() => onCardClick(meta)}>
                <GatsbyImage
                  image={card.node.childImageSharp.gatsbyImageData}
                  alt={meta[0].title}
                />
                <p>{meta[0].title}</p>
              </PopupButton>
            </CardWrapper>
          </SwiperSlide>
        </Fragment>
      )
    })
  }

  return (
    <>
      <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={isTabletOrMobile ? 1 : 3}
        loop={true}
        spaceBetween={50}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        {renderCards()}
      </Swiper>
      {metaInfo && (
        <Popup isTabletOrMobile={isTabletOrMobile}>
          <ExitButton onClick={onExitClick}>EXIT</ExitButton>
          <Content>
            {metaInfo.streaming?.map(link => (
              <Fragment key={link.name}>
                <StyledLink
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </StyledLink>
              </Fragment>
            ))}
          </Content>
        </Popup>
      )}
    </>
  )
}

export default Slider
