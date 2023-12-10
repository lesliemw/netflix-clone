import styled from "styled-components";

const StyledLogo = styled.h1`
  font-size: 4rem;
  color: var(--color-light-red);
  text-transform: uppercase;
  font-family: "Bebas Neue";
  font-size: 3.5rem;
  letter-spacing: 2px;

  &:after {
    content: "";
    width: 15rem;
    height: 2rem;
    background: black;
    border-radius: 50%;
    display: block;
    position: absolute;
    left: -200%;
    top: 98%;
  }
`;

function Logo() {
  return <StyledLogo>Netflix</StyledLogo>;
}

export default Logo;
