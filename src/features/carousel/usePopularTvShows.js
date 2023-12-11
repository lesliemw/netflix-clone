import { useQuery } from "@tanstack/react-query";
import { getPopularTvShows } from "../../services/apiTvShows";
import { useEffect, useState } from "react";

function usePopularTvShows() {
  const [tvShowsByPopularity, setTvShowsByPopularity] = useState([]);
  const {
    isLoading,
    error,
    data: popularTvShows,
  } = useQuery({
    queryKey: ["popularTvShows"],
    queryFn: getPopularTvShows,
    retry: false,
  });

  useEffect(() => {
    if (popularTvShows && popularTvShows.results) {
      setTvShowsByPopularity(popularTvShows.results);
    }
  }, [popularTvShows]);

  return { isLoading, error, tvShowsByPopularity };
}

export default usePopularTvShows;
