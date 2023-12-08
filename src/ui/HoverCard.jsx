import styled from "styled-components";
import { IoChevronDownCircleOutline, IoPlayCircleSharp } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import { GoThumbsup } from "react-icons/go";

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
    color: var(--color-dark-white);
    border: none;
    padding-right: 1rem;
  }

  button:hover {
    color: #fff;
  }
  .buttons {
    display: flex;
    margin: 1rem;
  }

  .play {
    color: #fff;
  }
  .play:hover {
    color: var(--color-dark-white);
  }
  .chevron {
    margin-left: 85px;
  }

  .information {
    margin: 2rem;
  }
`;

function HoverCard() {
  return (
    <StyledHoverCard>
      <div>
        <img alt="" src="../../public/uncharted-poster.jpeg" />
      </div>
      <div className="buttons">
        <button>
          <span>
            <IoPlayCircleSharp className="play" size={40} />
          </span>
        </button>
        <button>
          <span>
            <CiCirclePlus className="add" size={40} />
          </span>
        </button>
        <button>
          <span>
            <GoThumbsup className="thumb" size={37} />
          </span>
        </button>
        <button>
          <span>
            <IoChevronDownCircleOutline className="chevron" size={40} />
          </span>
        </button>
      </div>
      <div className="information">
        <div>Details</div>
        <div>Genre</div>
      </div>
    </StyledHoverCard>
  );
}

export default HoverCard;
