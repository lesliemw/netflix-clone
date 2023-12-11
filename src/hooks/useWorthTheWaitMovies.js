import { useQuery } from "@tanstack/react-query";

import { useEffect, useState } from "react";
import { getWorthTheWaitMovies } from "../services/apiMovies";

function useWorthTheWaitMovies() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const {
    isLoading,
    error,
    data: worthTheWaitMovies,
  } = useQuery({
    queryKey: ["worthTheWaitMovies"],
    queryFn: getWorthTheWaitMovies,
    retry: false,
  });

  useEffect(() => {
    if (worthTheWaitMovies && worthTheWaitMovies.results) {
      setUpcomingMovies(worthTheWaitMovies.results);
    }
  }, [worthTheWaitMovies]);

  return { isLoading, error, upcomingMovies };
}

export default useWorthTheWaitMovies;
