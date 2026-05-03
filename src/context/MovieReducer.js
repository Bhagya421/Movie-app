const MovieReducer = (state, action) => {
  switch (action.type) {
    case "set_movies":
      return {
        ...state,
        movies: action.payload
      };

    case "add_to_favs":
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };

    case "remove_from_favs":
      return {
        ...state,
        favorites: state.favorites.filter(
          (movie) => movie.imdbID !== action.payload.imdbID
        )
      };

    case "add_to_watchlist":
      return {
        ...state,
        watchlist: [...state.watchlist, action.payload]
      };

    case "remove_from_watchlist":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.imdbID !== action.payload.imdbID
        )
      };

    default:
      return state;
  }
};

export default MovieReducer;