import styled from "styled-components";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa6";
import { LuUserSquare } from "react-icons/lu";

const StyledIconMenu = styled.ul`
  display: flex;
  color: var(--color-white);
  place-content: end;
  &,
  li {
    padding: 0 15px;
    font-size: 2rem;
  }

  :hover {
    transition: color 500ms ease-in-out;
    color: var(--color-dark-white);
    cursor: pointer;
  }
`;

function IconMenu() {
  return (
    <StyledIconMenu>
      <li>
        <FaMagnifyingGlass />
      </li>
      <li>
        <FaRegBell />
      </li>
      <li>
        <LuUserSquare />
      </li>
    </StyledIconMenu>
  );
}

export default IconMenu;
