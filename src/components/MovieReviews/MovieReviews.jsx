import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "/src/fetchers/tmdb.js";
import Loader from "../Loader/Loader";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    const getData = async () => {
      try {
        setLoading(true);
        const data = await fetchMovieReviews(movieId);
        setReviews(data.results); // TMDB 'results'
      } catch (error) {
        console.error("Yorumlar yüklenemedi", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [movieId]);

  if (loading) return <Loader />;

  if (!reviews || reviews.length === 0) {
    return <p>Bu film için henüz inceleme yapılmamış.</p>;
  }

  return (
    <ul className={s.list}>
      {reviews.map((review) => (
        <li key={review.id} className={s.item}>
          <h3 className={s.author}>Yazar: {review.author}</h3>
          <p className={s.content}>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieReviews;
