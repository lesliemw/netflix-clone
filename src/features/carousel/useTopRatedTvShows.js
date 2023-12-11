import { useQuery } from "@tanstack/react-query";

import { useEffect, useState } from "react";
import { getTopRatedTvShows } from "../../services/apiTvShows";

function useTopRatedTvShows() {
  const [tvShowsByRating, setTvShowsByRating] = useState([]);
  const {
    isLoading,
    error,
    data: topRatedTvShows,
  } = useQuery({
    queryKey: ["topRatedTvShows"],
    queryFn: getTopRatedTvShows,
    retry: false,
  });

  useEffect(() => {
    if (topRatedTvShows && topRatedTvShows.results) {
      setTvShowsByRating(topRatedTvShows.results);
    }
  }, [topRatedTvShows]);

  return { isLoading, error, tvShowsByRating };
}

export default useTopRatedTvShows;
