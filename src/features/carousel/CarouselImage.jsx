import styled from "styled-components";

const StyleCarouselImage = styled.div`
  width: 100%;
  img {
    height: 150px;
    width: 250px;
    margin: 0.3rem;
    border-radius: 0.2rem;
    transition: transform 450ms;
  }

  img:hover {
    transform: scale(1.08);
  }
`;

function CarouselImage() {
  return (
    <StyleCarouselImage>
      <img alt="" src="https://via.placeholder.com/270/fff?text=11" />
    </StyleCarouselImage>
  );
}

export default CarouselImage;
