import styled from "styled-components";
// import { IoPlayCircleSharp } from "react-icons/io5";
// import { CiCirclePlus } from "react-icons/ci";
// import { BsHandThumbsUp } from "react-icons/bs";
// import { TfiArrowCircleDown } from "react-icons/tfi";
import { useState } from "react";

const StyledCarouselImage = styled.img`
  height: 150px;
  width: 250px;
  background-color: var(--color-pure-white);
  margin-right: 5px;
  border-radius: 0.2rem;
  overflow: hidden;
  object-fit: fill;

  &:hover {
    transform: scale(1.2);
    transition: all 500ms ease 0s;
  }
`;

function CarouselImage({ src }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <StyledCarouselImage
        src={src}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...(isHovered && null)}
      />
    </>
  );
}

export default CarouselImage;
