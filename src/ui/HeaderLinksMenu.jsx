import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledHeaderLinks = styled.ul`
  display: flex;
  color: var(--color-white);
  font-family: "Montserrat";
  font-size: 1.3rem;
  float: left;
  margin-left: 10px;

  &,
  li {
    padding: 0 10px;
  }
  :focus {
    color: var(--color-focus-white);
  }
  :hover {
    transition: color 500ms ease 0s;
    color: var(--color-dark-white);
    cursor: pointer;
  }
`;

function HeaderLinksMenu() {
  return (
    <StyledHeaderLinks>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/series">Series</NavLink>
      </li>
      <li>
        <NavLink to="/films">Films</NavLink>
      </li>
      <li>
        <NavLink to="/latest">New & Popular</NavLink>
      </li>
      <li>
        <NavLink to="/my-list">My List</NavLink>
      </li>
      <li>
        <NavLink to="/original-audio">Browse by Languages</NavLink>
      </li>
    </StyledHeaderLinks>
  );
}

export default HeaderLinksMenu;
