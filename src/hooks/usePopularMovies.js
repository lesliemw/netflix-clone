import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "../services/apiMovies";

function usePopularMovies() {
  const [moviesByPopularity, setMoviesByPopularity] = useState([]);
  const {
    isLoading,
    error,
    data: popularMovies,
  } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: getPopularMovies,
    retry: false,
  });

  useEffect(() => {
    if (popularMovies && popularMovies.results) {
      setMoviesByPopularity(popularMovies.results);
    }
  }, [popularMovies]);

  return { isLoading, error, moviesByPopularity };
}

export default usePopularMovies;
