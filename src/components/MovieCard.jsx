import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg overflow-hidden">

      <Link to={`/movie/${movie.imdbID}`}>
        <div className="w-full h-64 flex items-center justify-center mt-3">
          <img
            src={ movie.Poster}
            alt={movie.Title}
            className="max-h-full max-w-full object-contain"
          />
        </div>

      </Link>

      <div className="p-2">
        <p className="text-sm font-medium text-gray-800 m-2 ">{movie.Title}</p>
      </div>

    </div>
  );
}

export default MovieCard;