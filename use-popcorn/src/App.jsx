import { useState } from "react";
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

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);
  return (
    <>
      <NavBar>
        <Logo />
        <SearchBar />
        <NumResults movies={movies} />
      </NavBar>

      <Main movies={movies}>
        <Box>
          <MoviesList movies={movies} />
        </Box>
        <Box>
          <WatchedSummary watched={watched} />
          <WatchedList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
