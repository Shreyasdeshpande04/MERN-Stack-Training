const Card = ({ movie }) => {
  return (
    <div className="movie-card">
      <img
        src={movie.img}
        alt={movie.name}
        style={{ height: "65%", width: "100%" }}
      />
      <h3>{movie.name}</h3>
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Rating:</strong> ⭐ {movie.rating}</p>
      <p><strong>Cast:</strong> {movie.cast}</p>
      <a href={movie.watch}>🎥 Watch Now</a>
    </div>
  );
};

export default Card;
