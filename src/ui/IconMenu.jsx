import styled from "styled-components";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa6";

const StyledIconMenu = styled.ul`
  display: flex;
  color: var(--color-white);
  place-content: end;
  &,
  li {
    padding: 0 15px;
    font-size: 2rem;
  }

  img {
    height: 3rem;
    border-radius: 4px;
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
        <img src="../../avatar.png" alt="User Avatar" />
      </li>
    </StyledIconMenu>
  );
}

export default IconMenu;
