import { useEffect, useState } from "react";
import {
  NavBar,
  Logo,
  SearchBar,
  NumResults,
  Main,
  Box,
  MoviesList,
  WatchedSummary,
  WatchedList,
} from "./components";

import { tempWatchedData, tempMovieData } from "./components/constants";
import Loading from "./components/Loading";
import Error from "./components/ErrorMessage";
import ErrorMessage from "./components/ErrorMessage";
import SelectedMovie from "./components/SelectedMovie";

const API_KEY = "d86a0de9";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [query, setQuery] = useState("troy");
  const [selectedId, setSelectedId] = useState(null);

  const handleSelectMovie = (movieId) => {
    setSelectedId((prev) => (prev === movieId ? null : movieId));
  };

  const handleCloseMovie = () => {
    setSelectedId(null);
  };

  const handleAddWatched = (movie) => {
    setWatched((prev) => [...prev, movie]);
    // handleCloseMovie();
  };

  const handleDelete = (id) => {
    const newWatchedMovies = watched.filter((movie) => movie.imdbID !== id);
    setWatched(newWatchedMovies);
  };

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        setErrorMsg("");

        setIsLoading(true);
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
        );

        if (!response.ok)
          throw new Error("Something Went Wrong with Fetching Movies.");

        const data = await response.json();

        if (data.Response === "False")
          throw new Error("Movie Not Found, Check your Query.");
        console.log(data.Search);
        setMovies(data.Search);
      } catch (err) {
        setErrorMsg(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (query.length < 4) {
      setMovies([]);
      setErrorMsg("");
      return;
    }
    fetchMoviesData();
  }, [query]);

  return (
    <>
      <NavBar>
        <Logo />
        <SearchBar query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>

      <Main movies={movies}>
        <Box>
          {isLoading && <Loading />}
          {!isLoading && errorMsg.length === 0 && (
            <MoviesList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {errorMsg.length !== 0 && <ErrorMessage msg={errorMsg} />}
        </Box>
        <Box>
          {selectedId ? (
            <SelectedMovie
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              API_KEY={API_KEY}
              onAddWatched={handleAddWatched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedList watched={watched} onDelete={handleDelete} />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
