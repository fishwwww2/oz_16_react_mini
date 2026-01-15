import { useState } from "react";

// page components
import movieListData from "./data/movieListData.json";
import MovieCard from "./components/MovieCard";
// import movieDetailData from "./movieDetailData.json";
import MovieDetail from "./components/MovieDetail";

// css components
import "./App.css";


function App() {
  const [movies] = useState(movieListData.results);
  // const [movieDetail] = useState(movieDetailData);

  return (
    <div className="page">
      <div className="grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
