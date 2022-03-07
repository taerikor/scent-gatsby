import styled from "styled-components"

export const StyledLink = styled.a`
  color: white;
  font-size: 2rem;
  &:hover {
    text-decoration: underline 0.1em rgba(255, 255, 255, 0);
    transition: text-decoration-color 300ms;
  }
`
export const HoverLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 2rem;
  transition: 0.3s;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`
