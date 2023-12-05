import styled from "styled-components";
import CarouselImage from "./CarouselImage";

const StyledNetflixCarousel = styled.div`
  .container {
    display: flex;
    width: 100%;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 10px;
    margin-left: 20px;
  }

  .container::-webkit-scrollbar {
    display: none;
  }

  h1 {
    color: var(--color-pure-white);
    font-weight: 500;
    font-size: 2.3rem;
    margin-left: 35px;
  }

  button {
    background-color: transparent;
    border: none;
    color: transparent;
    z-index: 3;
    width: 15rem;
    height: 12rem;
  }

  button:hover {
    background-color: transparent;
    color: var(--color-pure-white);
    font-size: 10rem;
    align-items: center;
  }
`;

function NetflixCarousel() {
  return (
    <StyledNetflixCarousel>
      <h1>Trending Now</h1>
      <div className="container">
        <button className="handle left-handle">
          <div className="text">&#8249;</div>
        </button>
        <CarouselImage />
        <CarouselImage />
        <CarouselImage />
        <CarouselImage />
        <CarouselImage />
        <CarouselImage />
        <CarouselImage />
        <CarouselImage />
        <CarouselImage />
        <CarouselImage />
        <button className="handle right-handle">
          <div className="text">&#8250;</div>
        </button>
      </div>
    </StyledNetflixCarousel>
  );
}

export default NetflixCarousel;
