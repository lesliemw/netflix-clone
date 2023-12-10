import HomeScreenText from "../features/home/HomeScreenText";
import NetflixCarousel from "../features/carousel/NetflixCarousel";
import styled from "styled-components";
import Footer from "../ui/Footer";
import NetflixCard from "../features/carousel/NetflixCard";

const StyledHomeScreen = styled.main`
  overflow: hidden;
`;

function Home() {
  return (
    <StyledHomeScreen>
      <HomeScreenText />
      <NetflixCarousel />
      <NetflixCarousel />
      <NetflixCard />
      <Footer />
    </StyledHomeScreen>
  );
}

export default Home;
