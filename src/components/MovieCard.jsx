import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {
  const navigate = useNavigate();
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <article className="card" onClick={() => navigate("/details")}>
      <div className="poster">
        <img className="posterImg" src={posterUrl} alt={movie.title} />
      </div>

      <div className="meta">
        <p className="title">{movie.title}</p>
        <p className="rating">⭐ {movie.vote_average}</p>
      </div>
    </article>
  );
}

export default MovieCard;
