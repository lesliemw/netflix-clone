import styled from "styled-components";
import FilmsScreen from "../features/films/FilmsScreen";
import NetflixCarousel from "../features/carousel/NetflixCarousel";

const StyledFilmsScreen = styled.div`
  overflow: hidden;
`;
function Films() {
  return (
    <StyledFilmsScreen>
      <FilmsScreen />
      <NetflixCarousel
        type="recommendationsMovie"
        title="Because you watched Shawshank Redemption"
      />
      <NetflixCarousel type="topRatedMovies" title="Top Rated Movies" />
      <NetflixCarousel type="popularMovies" title="Popular Movies" />
      <NetflixCarousel type="upcomingMovies" title="Worth the Wait" />
      <NetflixCarousel type="trendingMovies" title="Movies Trending Now" />
    </StyledFilmsScreen>
  );
}

export default Films;
