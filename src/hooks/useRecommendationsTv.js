import { useQuery } from "@tanstack/react-query";

import { useEffect, useState } from "react";
import { getRecommendationsTv } from "../services/apiTvShows";

function useRecommendationsTv() {
  const [tvRecommendations, setRecommendationsTv] = useState([]);
  const {
    isLoading,
    error,
    data: tvRecommendationsToday,
  } = useQuery({
    queryKey: ["recommendationsTv"],
    queryFn: getRecommendationsTv,
    retry: false,
  });

  useEffect(() => {
    if (tvRecommendationsToday && tvRecommendationsToday.results) {
      setRecommendationsTv(tvRecommendationsToday.results);
    }
  }, [tvRecommendationsToday]);

  return { isLoading, error, tvRecommendations };
}

export default useRecommendationsTv;
