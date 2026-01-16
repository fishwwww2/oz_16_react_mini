import { useState } from "react";
import movieListData from "@/data/movieListData.json";
import MovieCard from "@/components/MovieCard";
import TopRated from "@/components/TopRated";
import "@/App.css";


function MovieList() {
  const [movies] = useState(movieListData.results);

  return (
    <div className="page">
      <TopRated movies={movies} />
      <div className="grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
