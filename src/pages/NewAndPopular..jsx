import styled from "styled-components";
import NetflixCarousel from "../features/carousel/NetflixCarousel";

const StyledNewAndPopular = styled.div`
  overflow: hidden;
  margin-top: 5%;
`;

function NewAndPopular() {
  return (
    <StyledNewAndPopular>
      <NetflixCarousel type="popular" title="Popular TV Programmes" />
      <NetflixCarousel type="popularMovies" title="Popular Movies" />
    </StyledNewAndPopular>
  );
}

export default NewAndPopular;
