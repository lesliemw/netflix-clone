import styled from "styled-components";
import CarouselImage from "./CarouselImage";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const StyledNetflixCarousel = styled.div`
  width: 100%;
  padding: 10px 0 10px 50px;
  transition: all ease 1s;

  .wrapper {
    position: relative;
    display: flex;
  }
  .container {
    width: max-content;
    text-wrap: nowrap;
  }

  h1 {
    font-weight: 500;
    color: #fff;
    font-size: 2.2rem;
    margin-bottom: 10px;
  }

  button {
    height: 100%;
    border: none;
    background-color: rgb(22, 22, 22, 0.5);
    color: transparent;
    font-size: 5rem;
    position: absolute;
    z-index: 99;
  }

  button:hover {
    color: #fff;
  }

  .left {
    left: 0;
  }

  .right {
    right: 0;
  }
`;

function NetflixCarousel() {
  return (
    <StyledNetflixCarousel>
      <h1>Trending Now</h1>
      <div className="wrapper">
        <button className="left">
          <FaChevronLeft />
        </button>
        <div className="container">
          <CarouselImage />
          <CarouselImage />
          <CarouselImage />
          <CarouselImage />
          <CarouselImage />
          <CarouselImage />
          <CarouselImage />
          <CarouselImage />
        </div>
        <button className="right">
          <FaChevronRight />
        </button>
      </div>
    </StyledNetflixCarousel>
  );
}

export default NetflixCarousel;
