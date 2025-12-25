import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTU4MzZiOTQ1OTQxZTQ3ZGU3ZjdiODE5YWVkMmJhZSIsIm5iZiI6MTc2MDczMTI0My45MDUsInN1YiI6IjY4ZjJhMDZiNjM0MmNjNjgzNDc3ZGM5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rX7EGJtCHlH2YwonhJFTxEaGtp6fTzo7h3xOZfKb88Y";

const tmdpApi = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${API_TOKEN}`, Accept: "application/json" },
});
//1.Trend Filmler
export const fetchTrendingMovies = async () => {
  const response = await tmdpApi.get("/trending/movie/day");
  return response.data;
};
// 2. Film Arama
export const searchMovies = async (query) => {
  const response = await tmdpApi.get("/search/movie", {
    params: { query: query },
  });
  return response.data;
};
// 3. Film Detayı
export const fetchMovieDetails = async (movieId) => {
  const response = await tmdpApi.get(`/movie/${movieId}`);
  return response.data;
};
// 4. Oyuncular
export const fetchMovieCast = async (movieId) => {
  const response = await tmdpApi.get(`/movie/${movieId}/credits`);
  return response.data;
};
// 5. Yorumlar
export const fetchMovieReviews = async (movieId) => {
  const response = await tmdpApi.get(`/movie/${movieId}/reviews`);
  return response.data;
};
