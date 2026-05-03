import React, { useEffect, useState } from "react";
import { useMovieContext } from "../context/MovieContext";
import { searchMovies } from "../services/api";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";

function HomePage() {
  const { state, dispatch } = useMovieContext();

  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 8;

  const totalPages = Math.ceil(state.movies.length / moviesPerPage);
  const startIndex = (currentPage - 1) * moviesPerPage;

  const currentMovies = state.movies.slice( startIndex, startIndex + moviesPerPage );


  useEffect(() => {
    const fetchMovies = async () => {
      const data = await searchMovies("avengers");
      console.log(data);
      dispatch({
        type: "set_movies",
        payload: data.Search || []
      });
      setCurrentPage(1);
    };

    fetchMovies();
    
  }, []);
    useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  return (
    <div className="p-4 bg-gray-200">
      <h1 className="text-xl font-bold mb-4">Trending Movies</h1>

      <div className="grid grid-cols-4 gap-9">
        {currentMovies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default HomePage;