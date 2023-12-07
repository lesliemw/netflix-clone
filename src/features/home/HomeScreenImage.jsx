import styled from "styled-components";

const StyledHomeScreenImage = styled.img`
  height: 100dvh;
  width: 100dvw;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5));
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0, 1)),
    to(rgba(0, 0, 0, 0))
  );
`;

function HomeScreenImage() {
  return (
    <StyledHomeScreenImage
      alt="Nathan Drake and Sully on a boat surrounded by water"
      src="../../public/uncharted-poster.jpeg"
    />
  );
}

export default HomeScreenImage;
