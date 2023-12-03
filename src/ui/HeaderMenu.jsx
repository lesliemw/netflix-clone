import styled from "styled-components";
import IconMenu from "./IconMenu";
import HeaderLinksMenu from "./HeaderLinksMenu";
import Logo from "./Logo";

const StyledHeaderMenu = styled.header`
  display: grid;
  grid-template-columns: auto auto 1fr;
  gap: 0.4rem;
  align-items: center;
`;

function HeaderMenu() {
  return (
    <StyledHeaderMenu>
      <Logo />
      <HeaderLinksMenu />
      <IconMenu />
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
