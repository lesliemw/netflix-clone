import styled from "styled-components";
import CarouselImage from "./CarouselImage";
import { useRef, useState } from "react";

const StyledNetflixCarousel = styled.div`
  width: 100%;
  margin-top: 10px;

  h1 {
    color: var(--color-pure-white);
    font-weight: 500;
    font-size: 20px;
    margin-left: 50px;
  }
  .wrapper {
    position: relative;

    .container {
      margin-left: 50px;
      margin-top: 10px;
      display: flex;
      width: max-content;
      transform: translateX(0px);
      transition: all 450ms ease;
    }

    .container::-webkit-scrollbar {
      display: none;
    }

    button {
      width: 50px;
      height: 100%;
      background-color: transparent;
      border: none;
      color: transparent;
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      cursor: pointer;
      z-index: 99;

      &.left-handle {
        left: 0;
      }

      &.right-handle {
        right: 0;
      }
    }

    button:hover {
      background-color: rgb(22, 22, 22, 0.5);
      color: var(--color-pure-white);
      font-size: 10rem;
      align-items: center;
    }

    /* .text {
      position: relative;
      top: -17%;
    } */
  }
`;

function NetflixCarousel() {
  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef();

  function handleClick(direction) {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  }

  return (
    <StyledNetflixCarousel>
      <h1>Trending Now</h1>
      <div className="wrapper" ref={listRef}>
        <button
          className="handle left-handle"
          onClick={() => handleClick("left")}
        >
          <div className="text">&#8249;</div>
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
          <CarouselImage />
          <CarouselImage />
        </div>
        {slideNumber <= 5 && (
          <button
            className="handle right-handle"
            onClick={() => handleClick("right")}
          >
            <div className="text">&#8250;</div>
          </button>
        )}
      </div>
    </StyledNetflixCarousel>
  );
}

export default NetflixCarousel;
