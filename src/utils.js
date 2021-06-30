let myMovieList;
let myMovie;

export async function getMoviesByName(search) {
  const response = await fetch(`http://www.omdbapi.com/?s=${search}&apikey=${process.env.AWS_KEY}`);
  myMovie = response.json();
};

export async function getMovieDetailsById(omdb) {
  const response = await fetch(`http://www.omdbapi.com/?i=${omdb}&apikey=${process.env.AWS_KEY}`);
  myMovieList = response.json();
};

await getMoviesByName('american psycho');
await getMovieDetailsById('tt6644200');

console.log(await myMovie);
console.log(await myMovieList);