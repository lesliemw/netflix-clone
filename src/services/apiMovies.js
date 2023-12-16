const baseUrl = "https://api.themoviedb.org/3";
const API = import.meta.env.VITE_API;

//fetch most popular tv shows
export async function getPopularMovies() {
  const response = await fetch(
    `${baseUrl}/movie/popular?language=en-US&page=1&api_key=${API}`
  );
  const popularMovies = await response.json();
  return popularMovies;
}
getPopularMovies();

//fetch highest rated tv shows
export async function getTopRatedMovies() {
  const response = await fetch(
    `${baseUrl}/movie/top_rated?language=en-US&page=1&api_key=${API}`
  );
  const topMovies = await response.json();
  return topMovies;
}
getTopRatedMovies();

export async function getWorthTheWaitMovies() {
  const response = await fetch(
    `${baseUrl}/movie/upcoming?language=en-US&page=1&api_key=${API}`
  );
  const topMovies = await response.json();
  return topMovies;
}
getWorthTheWaitMovies();

export async function getTrendingMovies() {
  const response = await fetch(
    `${baseUrl}/trending/movie/day?language=en-US&page=1&api_key=${API}`
  );
  const moviesTrendingToday = await response.json();
  return moviesTrendingToday;
}
getTrendingMovies();

//because you watched Shawshank Redemption
export async function getRecommendationsMovie() {
  const response = await fetch(
    `${baseUrl}/movie/280/recommendations?language=en-US&page=1&api_key=${API}`
  );
  const movieRecommendationsToday = await response.json();
  return movieRecommendationsToday;
}
getRecommendationsMovie();

export async function getLatestMovies() {
  const response = await fetch(
    `${baseUrl}/movie/latest?language=en-US&page=1&api_key=${API}`
  );
  const movieLatestToday = await response.json();
  return movieLatestToday;
}
getLatestMovies();
