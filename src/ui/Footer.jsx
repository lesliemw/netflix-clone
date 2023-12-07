import styled from "styled-components";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const StyledFooter = styled.footer`
  bottom: 0;
  height: fit-content;
  width: 100%;
  margin: 2rem;
  background-color: var(--color-light-black);
  display: flex;
  flex-direction: column;

  .icons {
    display: flex;
    color: #fff;
    align-items: center;
    margin: auto;

    a {
      margin: 1.5rem;
      font-size: 2.5rem;
      cursor: pointer;
    }
  }
  p {
    color: var(--color-dark-white);
    align-items: center;
    margin: auto;
    font-size: 1rem;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <div className="icons">
        <a href="facebook.com">
          <FaFacebookF />
        </a>
        <a href="facebook.com">
          <FaInstagram />
        </a>
        <a href="facebook.com">
          <FaTwitter />
        </a>
        <a href="facebook.com">
          <FaYoutube />
        </a>
      </div>
      <p>&#169;1997-2023 Netflix, Inc.</p>
    </StyledFooter>
  );
}

export default Footer;
