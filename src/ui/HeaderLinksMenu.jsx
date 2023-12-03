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
      <li>Home</li>
      <li>Series</li>
      <li>Films</li>
      <li>New & Popular</li>
      <li>My List</li>
      <li>Browse by Languages</li>
    </StyledHeaderLinks>
  );
}

export default HeaderLinksMenu;
