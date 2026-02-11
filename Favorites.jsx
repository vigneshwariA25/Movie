function Favorites({ movies }) {
  return (
    <div>
      <h2>❤️ Favorites</h2>
      {movies.map((m) => (
        <p key={m.imdbID}>{m.Title}</p>
      ))}
    </div>
  );
}

export default Favorites;
