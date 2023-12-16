import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledHeaderLinks = styled.ul`
  display: flex;
  color: var(--color-dark-white);
  font-family: "Montserrat";
  font-size: 1.3rem;
  float: left;
  margin-left: 10px;

  &,
  li {
    padding: 0 10px;
  }
  .active {
    font-weight: 700;
    color: #fff;
  }
  :hover {
    transition: color 500ms ease 0s;
    color: var(--color-white);
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
    </StyledHeaderLinks>
  );
}

export default HeaderLinksMenu;
