import styled from "styled-components";
import SeriesScreen from "../features/series/SeriesScreen";
import NetflixCarousel from "../features/carousel/NetflixCarousel";
import Footer from "../ui/Footer";

const StyledSeriesScreen = styled.div`
  overflow: hidden;
`;

function Series() {
  return (
    <StyledSeriesScreen>
      <SeriesScreen />
      <NetflixCarousel type="popular" title="Popular TV Programmes" />
      <NetflixCarousel
        type="recommendations"
        title="Because you watched The Crown"
      />
      <NetflixCarousel type="rating" title="Top Rated TV Programmes" />
      <NetflixCarousel type="trendingTv" title="Trending Now" />
      <Footer />
    </StyledSeriesScreen>
  );
}

export default Series;
