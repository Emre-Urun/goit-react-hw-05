import { useEffect, useState, useRef, Suspense } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { fetchMovieDetails } from "/src/fetchers/tmdb.js";
import Loader from "../../components/Loader/Loader";
import toast from "react-hot-toast";
// eslint-disable-next-line no-unused-vars
import clsx from "clsx"; // CSS sınıflarını birleştirmek için
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams(); // URL'deki :movieId kısmını aldık (Örn: 123)
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  // --- GERİ DÖN MANTIĞI ---
  const location = useLocation();
  // Kullanıcı buraya nereden geldi? Bilgi yoksa '/movies' sayfasına dönsün.
  // useRef kullanıyoruz çünkü sayfa içinde Cast/Reviews sekmelerine tıkladığında
  // location değişebilir ama biz ana kaynağı kaybetmek istemiyoruz.
  const backLinkHref = useRef(location.state?.from ?? "/movies");

  useEffect(() => {
    if (!movieId) return;

    const getData = async () => {
      try {
        setLoading(true);
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        // Konsola hata basmak yerine kullanıcıya şık bir uyarı veriyoruz
        toast.error("Film detayları alınamadı! Tekrar deneyin.");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [movieId]);

  // Eğer yükleniyorsa Loader göster
  if (loading) return <Loader />;

  // Eğer film bulunamadıysa (ve yükleme bittiyse)
  if (!movie) return null;

  // Film yılı, çıkış tarihinden alınır
  const releaseYear = movie.release_date
    ? movie.release_date.split("-")[0]
    : "Bilinmiyor";

  // Skor yüzdesi
  const userScore = Math.round(movie.vote_average * 10);

  return (
    <main className={s.container}>
      {/* Geri Dön Butonu */}
      <Link to={backLinkHref.current} className={s.btnBack}>
        ⬅ Geri Dön
      </Link>

      {/* Film Bilgileri Kartı */}
      <div className={s.movieInfo}>
        <img
          className={s.poster}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+Poster"
          }
          alt={movie.title}
        />
        <div className={s.details}>
          <h1>
            {movie.title} ({releaseYear})
          </h1>
          <p>Kullanıcı Skoru: {userScore}%</p>

          <h3>Özet</h3>
          <p>{movie.overview}</p>

          <h3>Türler</h3>
          <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
        </div>
      </div>

      {/* Ekstra Bilgiler (Alt Menü) */}
      <div className={s.additionalInfo}>
        <h3>Ek Bilgiler</h3>
        <ul className={s.infoList}>
          <li>
            <Link to="cast" className={s.infoLink}>
              Oyuncular (Cast)
            </Link>
          </li>
          <li>
            <Link to="reviews" className={s.infoLink}>
              İncelemeler (Reviews)
            </Link>
          </li>
        </ul>
      </div>

      {/* İç İçe Sayfaların (Cast/Reviews) Gözükeceği Yer */}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetailsPage;
