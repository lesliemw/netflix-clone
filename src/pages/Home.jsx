import HomeScreen from "../features/home/HomeScreen";
import styled from "styled-components";
import Footer from "../ui/Footer";
import NetflixCarousel from "../features/carousel/NetflixCarousel";

const StyledHomeScreen = styled.main`
  overflow: hidden;
`;

function Home() {
  return (
    <StyledHomeScreen>
      <HomeScreen />
      <NetflixCarousel type="popular" title="Popular TV Programmes" />
      <NetflixCarousel type="rating" title="Top Rated TV Programmes" />
      <NetflixCarousel type="popularMovies" title="Popular Movies" />
      <NetflixCarousel type="topRatedMovies" title="Top Rated Movies" />
      <NetflixCarousel type="upcomingMovies" title="Worth the Wait" />
      <NetflixCarousel type="trendingMovies" title="Movies Trending Now" />
      <Footer />
    </StyledHomeScreen>
  );
}

export default Home;
