import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import styled from "styled-components"

import "swiper/css"
import "swiper/css/effect-coverflow"

import "./styles.css"

import { EffectCoverflow } from "swiper"
import { StaticImage } from "gatsby-plugin-image"
import { useMediaQuery } from "react-responsive"

const CardWrapper = styled.div`
  text-align: center;
`
const StyledLink = styled.a`
  color: white;
  &:hover {
    text-decoration: underline 0.1em rgba(255, 255, 255, 0);
    transition: text-decoration-color 300ms;
  }
`
const Slider = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 770px)" })
  return (
    <>
      <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={isTabletOrMobile ? 1 : 3}
        loop={true}
        spaceBetween={100}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CardWrapper>
            <StyledLink
              href="https://linktr.ee/scentofficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StaticImage
                src={"../../assets/img/fwiw.jpg"}
                alt="for what I whine"
                placeholder="blurred"
                width={400}
                height={400}
              />
              <p>fwiw(for what I whine)</p>
            </StyledLink>
          </CardWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <CardWrapper>
            <StyledLink
              href="https://linktr.ee/scentofficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StaticImage
                src={"../../assets/img/twa.jpeg"}
                alt="Thus, We Are"
                placeholder="blurred"
                width={400}
                height={400}
              />

              <p>Thus, We Are</p>
            </StyledLink>
          </CardWrapper>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
export default Slider
