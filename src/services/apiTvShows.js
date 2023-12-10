const baseUrl = "https://api.themoviedb.org/3";
// const imgUrl = `https://image.tmdb.org/t/p/w225/h120/${tvShowsByPopularity.poster_path}`;

export async function getPopularTvShows() {
  const response = await fetch(
    `${baseUrl}/tv/popular?language=en-US&page=1&api_key=e2800f114a80d18625ac77296847137e`
  );
  const popularTvShows = await response.json();
  return popularTvShows;
}
getPopularTvShows();
