import styled from "styled-components";
import StyledButton from "../../ui/Button";
import { FaPlay } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import HomeScreenImage from "./HomeScreenImage";

const StyleHomeScreenText = styled.div`
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

function HomeScreenText() {
  return (
    <>
      <HomeScreenImage />
      <StyleHomeScreenText>
        <h1>Uncharted</h1>
        <p>
          Street-smart Nathan Drake is recruited by seasoned treasure hunter
          Victor &quot;Sully&quot; Sullivan to recover a fortune amassed by
          Ferdinand Magellan, and lost 500 years ago by the House of Moncada.
        </p>
        <div className="buttonDiv">
          <StyledButton size="medium">
            <FaPlay className="icon" /> <span> Play</span>
          </StyledButton>
          <StyledButton size="large" variation="secondary">
            <FiInfo className="icon" /> <span> More Info</span>
          </StyledButton>
        </div>
      </StyleHomeScreenText>
    </>
  );
}

export default HomeScreenText;
