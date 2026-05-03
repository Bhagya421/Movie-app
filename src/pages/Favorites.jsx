import React from "react";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { state } = useMovieContext();

  if (state.favorites.length === 0) {
    return (
      <div className="flex justify-center items-center mt-20">
        <p className="text-lg text-gray-600">
          No movies in your Favorites..
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-gray-200 min-h-screen">
      <h1 className="text-xl font-bold mb-4">
        Your Favorite Movies
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-9">
        {state.favorites.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;