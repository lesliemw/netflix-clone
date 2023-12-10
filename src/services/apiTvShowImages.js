const baseUrl = "https://api.themoviedb.org/3";

export async function getPopularImages({ id }) {
  const response = await fetch(
    `${baseUrl}/tv/tv/${id}/images&page=1&api_key=e2800f114a80d18625ac77296847137e`
  );
  const popularImages = await response.json();
  return popularImages;
}
getPopularImages();
