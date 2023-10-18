import MovieCard from "./MovieCard";

const MoviesList = ({ movies, onSelectMovie  }) => {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <MovieCard
         
          onSelectMovie={onSelectMovie}
          key={movie.imdbID}
          movie={movie}
        />
      ))}
    </ul>
  );
};

export default MoviesList;
