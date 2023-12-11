const baseUrl = "https://api.themoviedb.org/3";

//fetch most popular tv shows
export async function getPopularTvShows() {
  const response = await fetch(
    `${baseUrl}/tv/popular?language=en-US&page=1&api_key=e2800f114a80d18625ac77296847137e`
  );
  const popularTvShows = await response.json();
  return popularTvShows;
}
getPopularTvShows();

//fetch highest rated tv shows
export async function getTopRatedTvShows() {
  const response = await fetch(
    `${baseUrl}/tv/top_rated?language=en-US&page=1&api_key=e2800f114a80d18625ac77296847137e`
  );
  const topTvShows = await response.json();
  return topTvShows;
}
getTopRatedTvShows();
