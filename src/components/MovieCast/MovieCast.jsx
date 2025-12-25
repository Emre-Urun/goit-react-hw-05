import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "/src/fetchers/tmdb.js";
import Loader from "../Loader/Loader";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const getData = async () => {
      try {
        setLoading(true);
        const data = await fetchMovieCast(movieId);
        setCast(data.cast);
      } catch (error) {
        console.error("Oyuncular yüklenemedi", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [movieId]);

  if (loading) return <Loader />;

  if (!cast || cast.length === 0) {
    return <p>Bu film için oyuncu bilgisi bulunamadı.</p>;
  }

  return (
    <ul className={s.list}>
      {cast.map((actor) => (
        <li key={actor.id} className={s.item}>
          <img
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
                : "https://dummyimage.com/200x300/cdcdcd/000.jpg&text=No+Image"
            }
            alt={actor.name}
            className={s.image}
          />
          <div className={s.info}>
            <p className={s.name}>{actor.name}</p>
            <p className={s.character}>Karakter: {actor.character}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
