import { createContext, useContext, useReducer } from "react";
import MovieReducer from "./MovieReducer";

// create context
const MovieContext = createContext();

// provider
export const MovieProvider = ({ children }) => {
  const initialState = {
    movies: [],
    favorites: [],
    watchlist: []
  };

  const [state, dispatch] = useReducer(MovieReducer, initialState);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};

// custom hook
export const useMovieContext = () => {
  return useContext(MovieContext);
};