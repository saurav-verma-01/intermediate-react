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

const API_KEY = "d86a0de9";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const query = "far from home";

  useEffect(() => {
    const fetchMoviesData = async () => {
      setIsLoading(true);
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
      );
      const data = await response.json();
      setMovies(data.Search);
      setIsLoading(false);
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
        <Box>{isLoading ? <Loading /> : <MoviesList movies={movies} />}</Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
