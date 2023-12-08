const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjgwMGYxMTRhODBkMTg2MjVhYzc3Mjk2ODQ3MTM3ZSIsInN1YiI6IjY1NmQwZTc2MDg1OWI0MDEzOTUxZmE2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._4qczGIXYo6wAShJiJlOzqVTEtvbWEfqSpIfA6IXDeM",
  },
};

fetch("https://api.themoviedb.org/3/authentication", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
