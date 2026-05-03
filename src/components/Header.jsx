import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-black text-white shadow-md px-8 py-4">
      <div className="container mx-auto flex justify-between items-center">

        <h1 className="text-2xl font-bold text-red-500">
          Movix
        </h1>

        <nav className="flex gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-red-400">
            Home
          </Link>
          <Link to="/search" className="hover:text-red-400">
            Search
          </Link>
          <Link to="/favorites" className="hover:text-red-400">
            Favorites
          </Link>

          <Link to="/watchlist" className="hover:text-red-400">
            Watchlist
          </Link>
        </nav>

      </div>
    </header>
  );
}

export default Header;