import { useQuery } from "@tanstack/react-query";

import { useEffect, useState } from "react";
import { getTrendingTv } from "../services/apiTvShows";

function useTrendingTv() {
  const [tvTrending, setTrendingTv] = useState([]);
  const {
    isLoading,
    error,
    data: tvTrendingToday,
  } = useQuery({
    queryKey: ["trendingTv"],
    queryFn: getTrendingTv,
    retry: false,
  });

  useEffect(() => {
    if (tvTrendingToday && tvTrendingToday.results) {
      setTrendingTv(tvTrendingToday.results);
    }
  }, [tvTrendingToday]);

  return { isLoading, error, tvTrending };
}

export default useTrendingTv;
