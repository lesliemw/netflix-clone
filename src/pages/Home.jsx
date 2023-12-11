import HomeScreenText from "../features/home/HomeScreenText";
import styled from "styled-components";
import Footer from "../ui/Footer";
import NetflixCard from "../features/carousel/NetflixCard";
import NetflixCarousel from "../features/carousel/NetflixCarousel";

const StyledHomeScreen = styled.main`
  overflow: hidden;
`;

function Home() {
  return (
    <StyledHomeScreen>
      <HomeScreenText />
      <NetflixCarousel title="Popular TV Programmes" />
      <NetflixCard />
      <Footer />
    </StyledHomeScreen>
  );
}

export default Home;
