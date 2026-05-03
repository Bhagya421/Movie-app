
import React, { useState,useEffect } from "react";
import { useMovieContext } from "../context/MovieContext";
import { searchMovies } from "../services/api";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";

function SearchPage() {
  const { state, dispatch } = useMovieContext();
  const [query, setQuery] = useState("");

  const moviesPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(state.movies.length / moviesPerPage);
  const startIndex = (currentPage - 1) * moviesPerPage;


  const currentMovies = state.movies.slice( startIndex, startIndex + moviesPerPage);

  const handleSearch = async () => {
    if (!query.trim()) return;

    try {
      const data = await searchMovies(query);

      dispatch({
        type: "set_movies",
        payload: data.Search || []
      });

      setCurrentPage(1); 
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  return (
    <div className="p-4 bg-gray-200">

      <div className="flex justify-center mb-6 ">
        <div className="flex gap-5 w-full max-w-md">

          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search movies..."
            className=" flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none "
          />

          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 "
          >
            Search
          </button>

        </div>
      </div>

      <div className="grid grid-cols-4 gap-9">
        {currentMovies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage}/>

    </div>
  );
}

export default SearchPage;