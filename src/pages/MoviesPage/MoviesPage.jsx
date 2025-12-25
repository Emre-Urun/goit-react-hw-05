import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "/src/fetchers/tmdb.js";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import toast from "react-hot-toast";
import s from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        setLoading(true);
        setError(null);

        setMovies([]);

        const data = await searchMovies(query);

        if (data.results.length === 0) {
          toast.error("Aradığınız kriterlere uygun film bulunamadı.");
        }

        setMovies(data.results);
      } catch (err) {
        setError("Arama sırasında bir hata oluştu.");
        toast.error("Hata oluştu!");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [query]);

  // Form gönderilince çalışacak fonksiyon
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const topic = form.elements.topic.value.trim();

    if (topic === "") {
      toast.error("Lütfen aranacak bir kelime girin!");
      return;
    }

    setSearchParams({ query: topic });
    form.reset();
  };

  return (
    <div className={s.container}>
      {/* Arama Formu */}
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          type="text"
          name="topic"
          placeholder="Film ara..."
          className={s.input}
        />
        <button type="submit" className={s.btn}>
          Ara
        </button>
      </form>

      {/* Durumlar */}
      {loading && <Loader />}
      {error && <p className={s.error}>{error}</p>}

      {/* Sonuçlar */}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
