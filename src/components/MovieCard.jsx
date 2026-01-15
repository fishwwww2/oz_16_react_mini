function MovieCard({ movie }) {
  const hasPoster = Boolean(movie.poster_path);
  const posterUrl = hasPoster
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "";

  return (
    <article className="card">
      <div className="poster">
        {hasPoster ? (
          <img className="posterImg" src={posterUrl} alt={movie.title} />
        ) : (
          <div className="posterFallback">포스터</div>
        )}
      </div>

      <div className="meta">
        <p className="title">{movie.title}</p>
        <p className="rating">⭐ {movie.vote_average}</p>
      </div>
    </article>
  );
}

export default MovieCard;
