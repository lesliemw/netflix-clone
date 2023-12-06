import styled from "styled-components";
import CarouselImage from "./CarouselImage";
import { Carousel } from "@trendyol-js/react-carousel";

const StyledNetflixCarousel = styled.div`
  width: 100%;
  margin-top: 10px;
  margin-left: 50px;
  position: relative;
  padding: 10px 0;

  h1 {
    color: var(--color-white);
    font-weight: 500;
    font-size: 2.2rem;
  }

  button {
    font-size: 5rem;
    position: absolute;
    height: 100%;
    width: 20px;
    border: none;
    background-color: rgb(22, 22, 22, 0.5);
  }

  [data-direction="left"] {
    left: 0;
  }

  [data-direction="right"] {
    left: 95.5%;
  }
`;

function NetflixCarousel() {
  return (
    <StyledNetflixCarousel>
      <h1>Trending Now</h1>
      <Carousel show={6.3} responsive={true} slide={1} transition={0.25}>
        <CarouselImage />
        <CarouselImage />
        <CarouselImage />
        <CarouselImage />
        <CarouselImage />
        <CarouselImage />
        <CarouselImage />
      </Carousel>
    </StyledNetflixCarousel>
  );
}

export default NetflixCarousel;
