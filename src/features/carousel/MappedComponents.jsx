import CarouselImage from "./CarouselImage";
import usePopularTvShows from "../../hooks/usePopularTvShows";
import useTopRatedTvShows from "../../hooks/useTopRatedTvShows";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTopRatedMovies from "../../hooks/useTopRatedMovies";
import useWorthTheWaitMovies from "../../hooks/useWorthTheWaitMovies";

const imgUrl = "https://image.tmdb.org/t/p/w342";

function MappedComponents({ type }) {
  const { tvShowsByPopularity } = usePopularTvShows();
  const { tvShowsByRating } = useTopRatedTvShows();
  const { moviesByPopularity } = usePopularMovies();
  const { moviesByRating } = useTopRatedMovies();
  const { upcomingMovies } = useWorthTheWaitMovies();
  return (
    <>
      <div>
        {type === "popular" && (
          <div>
            {tvShowsByPopularity.map((img) => (
              <CarouselImage
                type="popular"
                key={img.id}
                alt={`Poster for ${img.title}`}
                src={imgUrl + `${img.backdrop_path}`}
              />
            ))}
          </div>
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
      </div>
    </>
  );
}

export default MappedComponents;
