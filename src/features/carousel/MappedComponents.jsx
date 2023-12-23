import CarouselImage from "./CarouselImage";
import usePopularTvShows from "../../hooks/usePopularTvShows";
import useTopRatedTvShows from "../../hooks/useTopRatedTvShows";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTopRatedMovies from "../../hooks/useTopRatedMovies";
import useWorthTheWaitMovies from "../../hooks/useWorthTheWaitMovies";
import useTrendingMovies from "../../hooks/useTrendingMovies";
import useTrendingTv from "../../hooks/useTrendingTv";
import useRecommendationsTv from "../../hooks/useRecommendationsTv";
import useRecommendationsMovie from "../../hooks/useRecommendationsMovies";
import useLatestMovies from "../../hooks/useLatestMovie";

const imgUrl = "https://image.tmdb.org/t/p/w342";

function MappedComponents({ type, src, alt }) {
  const { tvShowsByPopularity } = usePopularTvShows();
  const { tvShowsByRating } = useTopRatedTvShows();
  const { moviesByPopularity } = usePopularMovies();
  const { moviesByRating } = useTopRatedMovies();
  const { upcomingMovies } = useWorthTheWaitMovies();
  const { moviesTrending } = useTrendingMovies();
  const { tvTrending } = useTrendingTv();
  const { tvRecommendations } = useRecommendationsTv();
  const { movieRecommendations } = useRecommendationsMovie();
  const { moviesLatest } = useLatestMovies();

  return (
    <>
      <div>
        {type === "popular" && (
          <>
            {tvShowsByPopularity.map(
              (item) =>
                item.backdrop_path && (
                  <CarouselImage
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    releaseDate={item.release_date}
                    alt={`Poster for ${item.title}`}
                    src={imgUrl + `${item.backdrop_path}`}
                  />
                )
            )}
          </>
        )}
        {type === "rating" && (
          <div>
            {tvShowsByRating.map(
              (item) =>
                item.backdrop_path && (
                  <CarouselImage
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    releaseDate={item.release_date}
                    alt={`Poster for ${item.title}`}
                    src={imgUrl + `${item.backdrop_path}`}
                  />
                )
            )}
          </div>
        )}
        {type === "popularMovies" && (
          <div>
            {moviesByPopularity.map(
              (item) =>
                item.backdrop_path && (
                  <CarouselImage
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    releaseDate={item.release_date}
                    alt={`Poster for ${item.title}`}
                    src={imgUrl + `${item.backdrop_path}`}
                  />
                )
            )}
          </div>
        )}
        {type === "topRatedMovies" && (
          <div>
            {moviesByRating.map(
              (item) =>
                item.backdrop_path && (
                  <CarouselImage
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    releaseDate={item.release_date}
                    alt={`Poster for ${item.title}`}
                    src={imgUrl + `${item.backdrop_path}`}
                  />
                )
            )}
          </div>
        )}
        {type === "upcomingMovies" && (
          <div>
            {upcomingMovies.map(
              (item) =>
                item.backdrop_path && (
                  <CarouselImage
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    releaseDate={item.release_date}
                    alt={`Poster for ${item.title}`}
                    src={imgUrl + `${item.backdrop_path}`}
                  />
                )
            )}
          </div>
        )}
        {type === "trendingMovies" && (
          <div>
            {moviesTrending.map(
              (item) =>
                item.backdrop_path && (
                  <CarouselImage
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    releaseDate={item.release_date}
                    alt={`Poster for ${item.title}`}
                    src={imgUrl + `${item.backdrop_path}`}
                  />
                )
            )}
          </div>
        )}
        {type === "trendingTv" && (
          <div>
            {tvTrending.map(
              (item) =>
                item.backdrop_path && (
                  <CarouselImage
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    releaseDate={item.release_date}
                    alt={`Poster for ${item.title}`}
                    src={imgUrl + `${item.backdrop_path}`}
                  />
                )
            )}
          </div>
        )}
        {type === "recommendations" && (
          <div>
            {tvRecommendations.map(
              (item) =>
                item.backdrop_path && (
                  <CarouselImage
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    releaseDate={item.release_date}
                    alt={`Poster for ${item.title}`}
                    src={imgUrl + `${item.backdrop_path}`}
                  />
                )
            )}
          </div>
        )}
        {type === "recommendationsMovie" && (
          <div>
            {movieRecommendations.map(
              (item) =>
                item.backdrop_path && (
                  <CarouselImage
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    releaseDate={item.release_date}
                    alt={`Poster for ${item.title}`}
                    src={imgUrl + `${item.backdrop_path}`}
                  />
                )
            )}
          </div>
        )}
        {type === "latestMovie" && (
          <div>
            {moviesLatest.map(
              (item) =>
                item.backdrop_path && (
                  <CarouselImage
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    releaseDate={item.release_date}
                    alt={`Poster for ${item.title}`}
                    src={imgUrl + `${item.backdrop_path}`}
                  />
                )
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default MappedComponents;
