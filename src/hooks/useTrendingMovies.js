import { useQuery } from "@tanstack/react-query";

import { useEffect, useState } from "react";
import { getTrendingMovies } from "../services/apiMovies";

function useTrendingMovies() {
  const [moviesTrending, setTrendingMovies] = useState([]);
  const {
    isLoading,
    error,
    data: moviesTrendingToday,
  } = useQuery({
    queryKey: ["trendingMovies"],
    queryFn: getTrendingMovies,
    retry: false,
  });

  useEffect(() => {
    if (moviesTrendingToday && moviesTrendingToday.results) {
      setTrendingMovies(moviesTrendingToday.results);
    }
  }, [moviesTrendingToday]);

  return { isLoading, error, moviesTrending };
}

export default useTrendingMovies;
