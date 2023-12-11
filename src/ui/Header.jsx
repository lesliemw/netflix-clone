import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import { useState } from "react";

const StyledHeader = styled.header`
  padding: 1rem 4.8rem;
  height: 67px;
  width: 100%;
  gap: 2.4rem;
  z-index: 100;
  background-color: transparent;
  position: fixed;
  top: 0;

  &.active {
    background-color: var(--color-light-black);
  }
`;

function Header() {
  const [header, setHeader] = useState(false);

  function changeBackground() {
    if (window.scrollY >= 1) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  }

  window.addEventListener("scroll", changeBackground);

  return (
    <StyledHeader className={header && "active"}>
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
