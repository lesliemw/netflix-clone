import styled from "styled-components";
import { SlMagnifier } from "react-icons/sl";
import { FaRegBell } from "react-icons/fa6";
import { LuUserSquare } from "react-icons/lu";

const StyledIconMenu = styled.ul`
  display: flex;
  color: var(--color-white);
  place-content: end;
  &,
  li {
    padding: 0 20px;
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
        <SlMagnifier />
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
