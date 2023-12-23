import styled from "styled-components";
import { IoPlayCircleSharp } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import { BsHandThumbsUp } from "react-icons/bs";
import { TfiArrowCircleDown } from "react-icons/tfi";
import usePopularTvShows from "../../hooks/usePopularTvShows";
import Spinner from "../../ui/Spinner";
import CarouselImage from "./CarouselImage";
import { useState } from "react";

const StyledWrapper = styled.div`
  height: 120px;
  width: 200px;
  color: #fff;
  background-color: var(--color-light-black);
  box-shadow: -2px 2px 26px 0px rgba(46, 45, 45, 0.64);
  -webkit-box-shadow: -2px 2px 26px 0px rgba(46, 45, 45, 0.64);
  -moz-box-shadow: -2px 2px 26px 0px rgba(46, 45, 45, 0.64);
  position: relative;

  &:hover {
    height: 180px;
    width: 300px;
    background-color: var(--color-light-black);
    z-index: 4;
  }

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
    padding-left: 15px;
    padding-top: 5px;
    /* margin: 1rem; */
  }
  .details {
    height: 150px;
    width: 300px;
    background-color: var(--color-light-black);
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

function NetflixCard({ alt, src, title, releaseDate }) {
  const { isLoading } = usePopularTvShows();
  const [isHovered, setIsHovered] = useState(false);

  // let tvShows = Object.entries(popularTvShows);
  // console.log(tvShows);

  if (isLoading) return <Spinner />;
  return (
    <StyledWrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CarouselImage alt={alt} src={src} />

      {isHovered && (
        <div className="details">
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
            <div>{title}</div>
            <div>{releaseDate}</div>
          </div>
        </div>
      )}
    </StyledWrapper>
  );
}

export default NetflixCard;
