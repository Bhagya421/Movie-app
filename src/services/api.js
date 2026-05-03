const BASE_URL = "https://www.omdbapi.com/";
const API_KEY = "b8df4475"; 

export const searchMovies = async (query) => {

    try {
        const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error in fetching movies:", error);
    }
};


export const getMovieById = async (id) => {
  try {
    const res = await fetch(
      `${BASE_URL}?i=${id}&apikey=${API_KEY}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }
};
// chatgpt fetch url using id - ${BASE_URL}?apikey=${API_KEY}&i=${id}
