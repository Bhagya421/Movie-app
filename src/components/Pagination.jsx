import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="mt-10 mb-4 flex items-center justify-center gap-6">

      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-md font-medium ${
          currentPage === 1 ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-gray-500 text-white hover:bg-gray-600"}`}
      > 
        Previous 
      </button>

      <span className="text-gray-700 font-medium">
        Page <span className="font-semibold">{currentPage}</span> of  <span className="font-semibold">{totalPages}</span>
      </span>

      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-md font-medium transition ${
          currentPage === totalPages ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-gray-500 text-white hover:bg-gray-600" }`}
      >
        Next
      </button>

    </div>
  );
}

export default Pagination;