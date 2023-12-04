import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";

const StyledHeader = styled.header`
  padding: 1.2rem 4.8rem;
  width: 100%;
  gap: 2.4rem;
  z-index: 100;
  background-color: transparent;
  position: fixed;
  top: 0;
`;

function Header() {
  return (
    <StyledHeader>
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
