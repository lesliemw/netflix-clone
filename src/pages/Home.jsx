import HomeScreenText from "../features/home/HomeScreenText";
import NetflixCarousel from "../features/carousel/NetflixCarousel";
import styled from "styled-components";
import Footer from "../ui/Footer";
import HoverCard from "../ui/HoverCard";

const StyledHomeScreen = styled.main`
  overflow: hidden;
`;

function Home() {
  return (
    <StyledHomeScreen>
      <HomeScreenText />
      <NetflixCarousel />
      <NetflixCarousel />
      <NetflixCarousel />
      <NetflixCarousel />
      <NetflixCarousel />
      <HoverCard />
      <Footer />
    </StyledHomeScreen>
  );
}

export default Home;
