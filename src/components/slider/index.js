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
import Popup from "../popup"

const CardWrapper = styled.div`
  text-align: center;
  cursor: pointer;
  transition: transform 0.4s ease;
  overflow: hidden;
  &:hover {
    transform: scale(1.05);
  }
`

const Slider = ({ images }) => {
  const [metaInfo, setMetaInfo] = useState(null)
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 770px)" })

  const onCardClick = info => {
    setMetaInfo(info[0])
  }

  const closePopup = () => {
    setMetaInfo(null)
  }

  const renderCards = () => {
    return images.map(card => {
      let meta = JsonData.content.filter(
        item => item.path === card.node.relativePath
      )
      return (
        <Fragment key={meta[0].title}>
          <SwiperSlide>
            <CardWrapper onClick={() => onCardClick(meta)}>
              <GatsbyImage
                image={card.node.childImageSharp.gatsbyImageData}
                alt={meta[0].title}
              />
              <p>{meta[0].title}</p>
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
        spaceBetween={80}
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
      {metaInfo && <Popup metaInfo={metaInfo} closePopup={closePopup} />}
    </>
  )
}

export default Slider
