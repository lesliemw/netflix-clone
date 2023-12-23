import styled from "styled-components";
import NetflixCarousel from "../features/carousel/NetflixCarousel";

const StyledMyList = styled.div`
  overflow: hidden;
  margin-top: 5%;
`;

function MyList() {
  return (
    <StyledMyList>
      <NetflixCarousel type="popular" title="My List" />
    </StyledMyList>
  );
}

export default MyList;
