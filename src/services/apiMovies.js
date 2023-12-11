const baseUrl = "https://api.themoviedb.org/3";

//fetch most popular tv shows
export async function getPopularMovies() {
  const response = await fetch(
    `${baseUrl}/movie/popular?language=en-US&page=1&api_key=e2800f114a80d18625ac77296847137e`
  );
  const popularMovies = await response.json();
  return popularMovies;
}
getPopularMovies();

//fetch highest rated tv shows
export async function getTopRatedMovies() {
  const response = await fetch(
    `${baseUrl}/movie/top_rated?language=en-US&page=1&api_key=e2800f114a80d18625ac77296847137e`
  );
  const topMovies = await response.json();
  return topMovies;
}
getTopRatedMovies();

export async function getWorthTheWaitMovies() {
  const response = await fetch(
    `${baseUrl}/movie/upcoming?language=en-US&page=1&api_key=e2800f114a80d18625ac77296847137e`
  );
  const topMovies = await response.json();
  return topMovies;
}
getWorthTheWaitMovies();

export async function getTrendingMovies() {
  const response = await fetch(
    `${baseUrl}/trending/movie/day?language=en-US&page=1&api_key=e2800f114a80d18625ac77296847137e`
  );
  const moviesTrendingToday = await response.json();
  return moviesTrendingToday;
}
getTrendingMovies();
