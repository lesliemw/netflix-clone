import { useQuery } from "@tanstack/react-query";

import { useEffect, useState } from "react";
import { getTopRatedMovies } from "../services/apiMovies";

function useTopRatedMovies() {
  const [moviesByRating, setMoviesByRating] = useState([]);
  const {
    isLoading,
    error,
    data: topRatedMovies,
  } = useQuery({
    queryKey: ["topRatedMovies"],
    queryFn: getTopRatedMovies,
    retry: false,
  });

  useEffect(() => {
    if (topRatedMovies && topRatedMovies.results) {
      setMoviesByRating(topRatedMovies.results);
    }
  }, [topRatedMovies]);

  return { isLoading, error, moviesByRating };
}

export default useTopRatedMovies;
