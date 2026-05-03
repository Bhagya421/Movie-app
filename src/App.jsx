import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { MovieProvider } from "./context/MovieContext";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import MovieDetails from "./pages/MovieDetails";
import Favorites from "./pages/Favorites";
import WatchList from "./pages/WatchList";

function App() {
  return (
    <MovieProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/search" element={<SearchPage/>}/>
          <Route path="/movie/:id" element={<MovieDetails/>} />
          <Route path="/favorites" element={<Favorites/>} />
          <Route path="/watchlist" element = {<WatchList/>} />
        </Routes>

      </Router>
    </MovieProvider>
  );
}

export default App;