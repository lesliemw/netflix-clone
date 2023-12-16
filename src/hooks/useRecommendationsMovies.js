import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { getRecommendationsMovie } from "../services/apiMovies";

function useRecommendationsMovie() {
  const [movieRecommendations, setRecommendationsMovie] = useState([]);
  const {
    isLoading,
    error,
    data: movieRecommendationsToday,
  } = useQuery({
    queryKey: ["recommendationsMovie"],
    queryFn: getRecommendationsMovie,
    retry: false,
  });

  useEffect(() => {
    if (movieRecommendationsToday && movieRecommendationsToday.results) {
      setRecommendationsMovie(movieRecommendationsToday.results);
    }
  }, [movieRecommendationsToday]);

  return { isLoading, error, movieRecommendations };
}

export default useRecommendationsMovie;
