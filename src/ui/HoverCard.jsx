import styled from "styled-components";
import { IoChevronDownCircleOutline, IoPlayCircleSharp } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import { BsHandThumbsUp } from "react-icons/bs";

const StyledHoverCard = styled.div`
  height: 40%;
  width: 20%;
  color: #fff;

  img {
    height: 100%;
    width: 100%;
  }
  button {
    background-color: transparent;
    color: #fff;
    border: none;
  }
`;

function HoverCard() {
  return (
    <StyledHoverCard>
      <div>
        <img alt="" src="../../public/uncharted-poster.jpeg" />
      </div>
      <div>
        <button>
          <span>
            <IoPlayCircleSharp size={40} />
          </span>
        </button>
        <button>
          <span>
            <CiCirclePlus size={40} />
          </span>
        </button>
        <button>
          <span>
            <BsHandThumbsUp size={37} />
          </span>
        </button>
        <button>
          <span>
            <IoChevronDownCircleOutline size={40} />
          </span>
        </button>
      </div>
      <div>Details</div>
      <div>Genre</div>
    </StyledHoverCard>
  );
}

export default HoverCard;
