import { useEffect, useState } from "react";
import useTvShows from "./useTvShows";
import { getPopularImages } from "../../services/apiTvShowImages";
import { useQuery } from "@tanstack/react-query";

function useImages() {
  const { tvShowsByPopularity } = useTvShows();
  const [usePopularImages, setUsePopularImages] = useState();
  const {
    isLoading,
    error,
    data: popularImages,
  } = useQuery({
    queryKey: ["popularImages"], // Include TV show ID in the query key
    queryFn: getPopularImages,
    retry: false,
  });

  useEffect(() => {
    if (tvShowsByPopularity) {
      // Fetch popular images when the TV show changes
      setUsePopularImages(tvShowsByPopularity.id);
    }
  }, [tvShowsByPopularity]);

  return { popularImages, isLoading, error, usePopularImages };
}

export default useImages;
