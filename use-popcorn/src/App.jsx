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

const API_KEY = "d86a0de9";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const query = "ffrrt";

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
        );

        if (!response.ok)
          throw new Error("Something Went Wrong with Fetching Movies.");

        const data = await response.json();

        if (data.Response === "False")
          throw new Error("Movie Not Found, Check your Query.");

        setMovies(data.Search);
      } catch (err) {
        setErrorMsg(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMoviesData();
  }, []);

  return (
    <>
      <NavBar>
        <Logo />
        <SearchBar />
        <NumResults movies={movies} />
      </NavBar>

      <Main movies={movies}>
        <Box>
          {isLoading && <Loading />}
          {!isLoading && errorMsg.length === 0 && (
            <MoviesList movies={movies} />
          )}
          {errorMsg.length !== 0 && <ErrorMessage msg={errorMsg} />}
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
