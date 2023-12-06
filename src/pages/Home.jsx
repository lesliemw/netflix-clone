import HomeScreenText from "../features/home/HomeScreenText";
import NetflixCarousel from "../features/carousel/NetflixCarousel";
import styled from "styled-components";

const StyledHomeScreen = styled.main`
  overflow: hidden;
`;

function Home() {
  return (
    <StyledHomeScreen>
      <HomeScreenText />
      <NetflixCarousel />
    </StyledHomeScreen>
  );
}

export default Home;
