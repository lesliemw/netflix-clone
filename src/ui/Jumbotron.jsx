import styled from "styled-components";
import StyledButton from "./Button";
import { FaPlay } from "react-icons/fa6";
import { FiInfo } from "react-icons/fi";

const StyledJumbotron = styled.img`
  height: 100dvh;
  width: 100dvw;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5));
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 1)),
    to(rgba(0, 0, 0, 0))
  );
`;

const StyleJumbotronText = styled.div`
  z-index: 2;
  background-color: transparent;
  align-items: center;
  color: var(--color-white);
  width: 40%;
  margin: 50px;
  position: absolute;
  top: 35%;
  left: 3%;

  h1 {
    text-transform: uppercase;
    font-size: 7rem;
  }

  .buttonDiv {
    display: flex;
  }

  .icon {
    height: 2.8rem;
    width: 2.8rem;
    margin-right: 1rem;
  }

  img {
    position: relative;
  }
`;

function Jumbotron({ alt, src, children }) {
  return (
    <>
      <StyledJumbotron alt={alt} src={src} />
      <StyleJumbotronText>
        {children}
        <div className="buttonDiv">
          <StyledButton size="medium">
            <FaPlay className="icon" /> <span> Play</span>
          </StyledButton>
          <StyledButton size="large" variation="secondary">
            <FiInfo className="icon" /> <span> More Info</span>
          </StyledButton>
        </div>
      </StyleJumbotronText>
    </>
  );
}

export default Jumbotron;
