import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "/src/fetchers/tmdb.js";
import MovieList from "../../components/MovieList/MovieList.jsx";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setİsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getMovies = async () => {
      try {
        setİsLoading(true);
        setError(null);
        const data = await fetchTrendingMovies();
        setMovies(data.results);
      } catch (err) {
        setError("Filmler yüklenirken hata oluştu...");
        console.log(err);
      } finally {
        setİsLoading(false);
      }
    };
    getMovies();
  }, []);
  return (
    <div>
      <h1>Günün Trend Filmler</h1>
      {isLoading && <p>Yükleniyor...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default HomePage;
