import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import MappedComponents from "./MappedComponents";
import { useState } from "react";

const StyledNetflixCarousel = styled.div`
  width: 100%;
  transition: all ease 1s;

  .wrapper {
    padding: 10px 0 10px 50px;
    position: relative;
    display: flex;
  }
  .container {
    width: max-content;
    text-wrap: nowrap;
    display: grid;

    transition: transform 0.7s ease;
  }

  h1 {
    padding: 10px 0 10px 50px;
    font-weight: 500;
    color: #fff;
    font-size: 2.2rem;
    margin-bottom: 10px;
  }

  button {
    height: 150px;
    border: none;
    background-color: rgb(22, 22, 22, 0.7);
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

function NetflixCarousel({ title, type }) {
  const [activeIndex, setActiveIndex] = useState(0);

  function updateIndex(newIndex) {
    if (newIndex < 0) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);

    if (activeIndex === 3) {
      setActiveIndex(0);
    }
  }

  return (
    <StyledNetflixCarousel>
      <h1>{title}</h1>
      <div className="wrapper">
        {activeIndex !== 0 && (
          <button className="left" onClick={() => updateIndex(activeIndex - 1)}>
            <FaChevronLeft />
          </button>
        )}
        <div
          className="container"
          style={{ transform: `translate(-${activeIndex * 100}%)` }}
        >
          <MappedComponents type={type} />
        </div>
        <button className="right" onClick={() => updateIndex(activeIndex + 1)}>
          <FaChevronRight />
        </button>
      </div>
    </StyledNetflixCarousel>
  );
}

export default NetflixCarousel;
