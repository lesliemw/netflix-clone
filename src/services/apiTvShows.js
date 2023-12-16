const baseUrl = "https://api.themoviedb.org/3";

const API = import.meta.env.VITE_API;

//fetch most popular tv shows
export async function getPopularTvShows() {
  const response = await fetch(
    `${baseUrl}/tv/popular?language=en-US&page=1&api_key=${API}`
  );
  const popularTvShows = await response.json();
  return popularTvShows;
}
getPopularTvShows();

//fetch highest rated tv shows
export async function getTopRatedTvShows() {
  const response = await fetch(
    `${baseUrl}/tv/top_rated?language=en-US&page=1&api_key=${API}`
  );
  const topTvShows = await response.json();
  return topTvShows;
}
getTopRatedTvShows();

//fetch trending tv
export async function getTrendingTv() {
  const response = await fetch(
    `${baseUrl}/trending/tv/week?language=en-US&page=1&api_key=${API}`
  );
  const tvTrendingToday = await response.json();
  return tvTrendingToday;
}
getTrendingTv();

//because you watched the crown
export async function getRecommendationsTv() {
  const response = await fetch(
    `${baseUrl}/tv/65494/recommendations?language=en-US&page=1&api_key=${API}`
  );
  const tvRecommendationsToday = await response.json();
  return tvRecommendationsToday;
}
getRecommendationsTv();
