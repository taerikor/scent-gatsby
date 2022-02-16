import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import Layout from "../../components/layout"

const PROFILE_PATH = "../../assets/img/profile.jpg"

const Description = styled.div`
  margin-top: 30px;
  & p {
    margin-bottom: 20px;
    font-size: 1.2rem;
  }
`
const LinkContent = styled.div``
const StyledLink = styled.a`
  color: white;
`
export const Header = styled.h1`
  margin: 2rem 0;
`
const biography = () => {
  return (
    <Layout vertical={true}>
      <Header>Discography</Header>
      <StaticImage
        src={PROFILE_PATH}
        alt="profile"
        placeholder="blurred"
        width={300}
      />
      <Description>
        <p>
          SCENT는 일렉트로닉 장르를 기반으로 Oceanhertz(프로듀서)와
          Apereel(보컬)로 이루어진 팀이다. 그들은 그들의 음악을 포함한 모든
          음악에는 그 순간만의 향, 즉 향수가 있다고 한다. 그들은 그 다양한 향을
          청자들에게 창의적으로 전달하는 것을 음악적 목표로 하며, 이것이 그들의
          이름이 SCENT인 이유이기도 하다. 활동지를 서울로 옮긴 그들은 한국에서는
          희귀한 실험적이고 몽환적인 음악을 선보이며 한국 음악시장에 새로운
          바람을 불러일으킨다.
        </p>
        <p>
          {" "}
          SCENT is a team based on electronic genres, and it’s a team of two;
          Oceanhertz(producer) and Apereel(vocalist). They say that every music,
          as well as theirs, has a scent of a certain memory; the reminiscence.
          As artists, their main goal is to deliver the fragrance of memories in
          their own creative ways, and this is why they named the team SCENT.
          Having moved to Seoul, they keep on representing experimental and
          dreamy music, which is few and far between in Korea, and it’s expected
          to bring new approach to the Korean music market.
        </p>
        <p>
          2021년 EP 앨범 [Thus, We Are]로 데뷔하고 다양한 데모곡으로 추가 활동을
          하던 SCENT는 2022년 Single 앨범 [fwiw(for what I whine)]을 발매했다.
          그들은 전작에서 인간의 감정에 대해서 자세하게 다루었고, 이어지는 이번
          싱글앨범에서 인간들의 감정과 더불어 쓸데없는 갈등에 대해서 불만을
          토로한다. 이번 싱글앨범은 친구, 연인 나아가 사회관계에서 본능적으로
          순위를 정하려 하는 싸움이 과연 필요한가에 대한 의문에서 시작되었다.
          2021년 그들의 데뷔 앨범 [Thus, We Are]은 인간의 가장 본능적인 감정인
          희로애락을 그들만의 독창적인 시점에서 노래했다. 이후 여러 데모곡
          작업을 거치고 2022년 1월, 싱글 앨범 [fwiw (for what i whine)]을
          발매한다. 이 앨범은 친구, 연인, 나아가 사회관계에서 본능적으로 순위를
          정하려 하는 싸움이 과연 필요한가에 대한 의문에서 시작되었다.{" "}
        </p>
        <p>
          Their debut album [Thus, We Are] sing about the happiness, anger,
          sorrow and joy, which are the most instinctive emotions of humans,
          from SCENT’s original point of view. Afterwards, they had worked on
          several demo songs and released the new single album [fwiw (for what
          for)] in January 2022. The album began from the questions: Why do
          people, friends, or lovers fight to gain the upper hand in their
          relationships? Is it necessary?
        </p>
      </Description>
      <LinkContent>
        <p>
          INSTAGRAM:{" "}
          <StyledLink href="https://www.instagram.com/scentofficial/">
            SCENT
          </StyledLink>{" "}
          /{" "}
          <StyledLink href="https://www.instagram.com/ocean_hertz/">
            OCEANHERTZ
          </StyledLink>{" "}
          /{" "}
          <StyledLink href="https://www.instagram.com/_ape_reel_/">
            APEREEL
          </StyledLink>
        </p>
        <p>
          {" "}
          CONTACT:{" "}
          <StyledLink href="mailto:scentofficial@gmail.com">
            scentofficial@gmail.com
          </StyledLink>
        </p>
      </LinkContent>
    </Layout>
  )
}

export default biography
