import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../services/api";
import { useMovieContext } from "../context/MovieContext";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const { state, dispatch } = useMovieContext();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieById(id);
        setMovie(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return (
      <div className="flex justify-center items-center mt-20">
        <p className="text-lg text-gray-600">Loading Movie...</p>
      </div>
    );
  }

  //checks if already added
  const isFav = state.favorites.some(
    (fav) => fav.imdbID === movie.imdbID
  );
  const isWatchlist = state.watchlist.some(
    (item) => item.imdbID === movie.imdbID
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6">

        <img
          src={ movie.Poster }
          alt={movie.Title}
          className="w-full max-h-[300px] object-contain"
        />

        <h1 className="text-3xl font-bold mt-4">{movie.Title}</h1>

        <p className="text-gray-800 mt-2">
          <strong>Year:</strong> {movie.Year}
        </p>

        <p className="text-gray-800">
          <strong>Genre:</strong> {movie.Genre}
        </p>

        <p className="text-gray-800">
          <strong>IMDB Rating:</strong> {movie.imdbRating}
        </p>

        <p className="mt-4 text-gray-700">
          {movie.Plot !== "N/A" ? movie.Plot : "No description available"}
        </p>

        <div className="mt-5 flex justify-center items-center gap-9">

          <button
            onClick={() =>
              dispatch({
                type: isFav ? "remove_from_favs" : "add_to_favs",
                payload: movie
              })
            }
            className={`px-4 py-2 rounded text-white ${ isFav ? "bg-red-600 hover:bg-red-700" : "bg-red-600 hover:bg-red-700"}`}
          >
            {isFav ? "Remove from Favorites" : "Add to Favorites"}
          </button>

          <button
            onClick={() =>
              dispatch({
                type: isWatchlist ? "remove_from_watchlist" : "add_to_watchlist",
                payload: movie
              })
            }
            className={`px-4 py-2 rounded text-white ${isWatchlist ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-600 hover:bg-blue-700"}`}
          >
            {isWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
          </button>

        </div>

      </div>
    </div>
  );
}

export default MovieDetails;