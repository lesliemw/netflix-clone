import styled from "styled-components";

const StyledCarouselImage = styled.img`
  height: 150px;
  width: 250px;
  background-color: var(--color-pure-white);
  margin-right: 5px;
  border-radius: 0.2rem;
  overflow: hidden;

  :hover {
    transform: scale(1.08);
  }
`;

function CarouselImage({ src, key }) {
  return <StyledCarouselImage src={src} key={key} />;
}

export default CarouselImage;
