import MovieCard from "./MovieCard";

const MoviesList = ({ movies }) => {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
};

export default MoviesList;
