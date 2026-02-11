function MovieDetails({ movie, onFavorite }) {
  return (
    <div>
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} width="200" />
      <p><b>Year:</b> {movie.Year}</p>
      <p><b>Genre:</b> {movie.Genre}</p>
      <p><b>Language:</b> {movie.Language}</p>
      <p><b>IMDB:</b> {movie.imdbRating}</p>
      <p><b>Plot:</b> {movie.Plot}</p>

      <button onClick={onFavorite}>❤️ Add to Favorites</button>
    </div>
  );
}

export default MovieDetails;
