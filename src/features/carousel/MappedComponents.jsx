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
            {tvShowsByPopularity.map((img) => (
              <CarouselImage
                key={img.id}
                alt={`Poster for ${img.title}`}
                src={imgUrl + `${img.backdrop_path}`}
              />
            ))}
          </>
        )}
        {type === "rating" && (
          <div>
            {tvShowsByRating.map((img) => (
              <CarouselImage
                key={img.id}
                alt={`Poster for ${img.title}`}
                src={imgUrl + `${img.backdrop_path}`}
              />
            ))}
          </div>
        )}
        {type === "popularMovies" && (
          <div>
            {moviesByPopularity.map((img) => (
              <CarouselImage
                key={img.id}
                alt={`Poster for ${img.title}`}
                src={imgUrl + `${img.backdrop_path}`}
              />
            ))}
          </div>
        )}
        {type === "topRatedMovies" && (
          <div>
            {moviesByRating.map((img) => (
              <CarouselImage
                key={img.id}
                alt={`Poster for ${img.title}`}
                src={imgUrl + `${img.backdrop_path}`}
              />
            ))}
          </div>
        )}
        {type === "upcomingMovies" && (
          <div>
            {upcomingMovies.map((img) => (
              <CarouselImage
                key={img.id}
                alt={`Poster for ${img.title}`}
                src={imgUrl + `${img.backdrop_path}`}
              />
            ))}
          </div>
        )}
        {type === "trendingMovies" && (
          <div>
            {moviesTrending.map((img) => (
              <CarouselImage
                key={img.id}
                alt={`Poster for ${img.title}`}
                src={imgUrl + `${img.backdrop_path}`}
              />
            ))}
          </div>
        )}
        {type === "trendingTv" && (
          <div>
            {tvTrending.map((img) => (
              <CarouselImage
                key={img.id}
                alt={`Poster for ${img.title}`}
                src={imgUrl + `${img.backdrop_path}`}
              />
            ))}
          </div>
        )}
        {type === "recommendations" && (
          <div>
            {tvRecommendations.map((img) => (
              <CarouselImage
                key={img.id}
                alt={`Poster for ${img.title}`}
                src={imgUrl + `${img.backdrop_path}`}
              />
            ))}
          </div>
        )}
        {type === "recommendationsMovie" && (
          <div>
            {movieRecommendations.map((img) => (
              <CarouselImage
                key={img.id}
                alt={`Poster for ${img.title}`}
                src={imgUrl + `${img.backdrop_path}`}
              />
            ))}
          </div>
        )}
        {type === "latestMovie" && (
          <div>
            {moviesLatest.map((img) => (
              <CarouselImage
                key={img.id}
                alt={`Poster for ${img.title}`}
                src={imgUrl + `${img.backdrop_path}`}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default MappedComponents;
