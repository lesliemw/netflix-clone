import { useQuery } from "@tanstack/react-query";

import { useEffect, useState } from "react";
import { getLatestMovies } from "../services/apiMovies";

function useLatestMovies() {
  const [moviesLatest, setLatestMovies] = useState([]);
  const {
    isLoading,
    error,
    data: moviesLatestToday,
  } = useQuery({
    queryKey: ["latestMovies"],
    queryFn: getLatestMovies,
    retry: false,
  });

  useEffect(() => {
    if (moviesLatestToday && moviesLatestToday.results) {
      setLatestMovies(moviesLatestToday.results);
    }
  }, [moviesLatestToday]);

  return { isLoading, error, moviesLatest };
}

export default useLatestMovies;
