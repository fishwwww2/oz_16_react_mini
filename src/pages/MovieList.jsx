import { useState } from "react";
import movieListData from "@/data/movieListData.json";
import MovieCard from "@/components/MovieCard";
import "@/App.css";


function MovieList() {
  const [movies] = useState(movieListData.results);

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

export default MovieList;
