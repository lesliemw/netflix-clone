import styled from "styled-components";

const StyleCarouselImage = styled.img`
  height: 120px;
  width: 225px;
  background-color: var(--color-pure-white);
  margin-right: 5px;
  border-radius: 0.2rem;
  overflow: hidden;

  :hover {
    transform: scale(1.08);
  }
`;

function CarouselImage() {
  return <StyleCarouselImage src="../../public/uncharted-poster.jpeg" />;
}

export default CarouselImage;
