
import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import MovieDetails from "./components/MovieDetails";
import Favorites from "./components/Favorites";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

function App() {
  const [movie, setMovie] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const searchMovie = async (title) => {
    if (!title) return;

    const res = await axios.get("https://www.omdbapi.com/", {
      params: {
        apikey: API_KEY,
        t: title,
        plot: "full",
      },
    });

    if (res.data.Response === "True") {
      setMovie(res.data);
    } else {
      alert("Movie not found");
    }
  };

  const addFavorite = () => {
    if (!favorites.find((f) => f.imdbID === movie.imdbID)) {
      setFavorites([...favorites, movie]);
    }
  };

  return (
    <div className="app">
      <h1>🎬 Tamil Movie Search App </h1>

      <SearchBar onSearch={searchMovie} />

      {movie && (
        <MovieDetails movie={movie} onFavorite={addFavorite} />
      )}

      <Favorites movies={favorites} />
    </div>
  );
}

export default App;
