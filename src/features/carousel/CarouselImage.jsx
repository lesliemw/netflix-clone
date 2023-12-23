import styled from "styled-components";
// import { IoPlayCircleSharp } from "react-icons/io5";
// import { CiCirclePlus } from "react-icons/ci";
// import { BsHandThumbsUp } from "react-icons/bs";
// import { TfiArrowCircleDown } from "react-icons/tfi";

const StyledCarouselImage = styled.img`
  max-height: 130px;
  width: 100%x;
  background-color: var(--color-pure-white);
  margin-right: 5px;
  border-radius: 0.2rem;
  overflow: hidden;
  object-fit: contain;

  &:hover {
    transition: all 500ms ease 0s;
    opacity: 1;
    transform: scale(1.08);
  }
`;

function CarouselImage({ src, alt }) {
  return <StyledCarouselImage src={src} alt={alt} />;
}

export default CarouselImage;
