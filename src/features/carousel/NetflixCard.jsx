import styled from "styled-components";
import { IoPlayCircleSharp } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import { BsHandThumbsUp } from "react-icons/bs";
import { TfiArrowCircleDown } from "react-icons/tfi";
import usePopularTvShows from "../../hooks/usePopularTvShows";
import Spinner from "../../ui/Spinner";

const StyledWrapper = styled.section`
  height: 40%;
  width: 20%;
  color: #fff;
  background-color: var(--color-light-black);
  box-shadow: -2px 2px 26px 0px rgba(46, 45, 45, 0.64);
  -webkit-box-shadow: -2px 2px 26px 0px rgba(46, 45, 45, 0.64);
  -moz-box-shadow: -2px 2px 26px 0px rgba(46, 45, 45, 0.64);

  img {
    height: 100%;
    width: 100%;
  }
  button {
    background-color: transparent;
    color: var(--color-dark-white);
    padding-right: 1rem;
    border: none;
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
    margin-left: 75px;
  }

  .information {
    margin: 2rem;
  }
`;

function NetflixCard() {
  const { isLoading } = usePopularTvShows();

  // let tvShows = Object.entries(popularTvShows);
  // console.log(tvShows);

  if (isLoading) return <Spinner />;
  return (
    <StyledWrapper>
      <div>
        <img alt="" src="../../uncharted-poster.jpeg" />
      </div>
      <div className="buttons">
        <button>
          <IoPlayCircleSharp className="play" size={41} />
        </button>
        <button>
          <CiCirclePlus className="add" size={41} />
        </button>
        <button>
          <BsHandThumbsUp className="thumb" size={37} />
        </button>
        <button>
          <TfiArrowCircleDown className="chevron" size={37} />
        </button>
      </div>
      <div className="information">
        <div>Name</div>
        <div>Genres</div>
      </div>
    </StyledWrapper>
  );
}

export default NetflixCard;
